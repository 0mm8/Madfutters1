import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getRandomInt, sleep, createTask } from "./util.js";
import { getDatabase, ref, onValue, onChildAdded, onChildChanged, onChildRemoved, onChildMoved, set, update, serverTimestamp, onDisconnect, off, get } from "firebase/database";
import { CustomProvider, initializeAppCheck } from "firebase/app-check";
import { getFirestore, collection, getDocs, query, limit, where } from "firebase/firestore";
import fetch from 'node-fetch';
import fs from 'fs';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
async function getToken() {
    let res = await fetch('https://firebaseinstallations.googleapis.com/v1/projects/madfut-23/installations/', {
        method: 'POST',
        headers: {
            'Host': 'firebaseinstallations.googleapis.com',
            'accept': '*/*',
            'content-type': 'application/json',
            'x-ios-bundle-identifier': 'com.madfut.madfut23',
            'user-agent': 'MADFUT/7 CFNetwork/1240.0.4 Darwin/20.6.0',
            'accept-language': 'en-gb',
            'x-goog-api-key': 'AIzaSyBxmfb16mlmD5vNoliSnCuCJqjxFapS_q4'
        },
        body: JSON.stringify({
            'appId': '1:359609929204:ios:2fd5ba3bd87c65f0d2fda1',
            'fid': 'c35Xn4Daa0RXnV0CNKsYIz',
            'authVersion': 'FIS_v2',
            'sdkVersion': 'i:9.6.0'
        })
    });
    return await res.json();
}
// FQN4pFBUckTb3XxtVoBdUPYnWBv1: { b: 'nation_badge_34', t: 1666096749102, u: 'slaterog' }
async function generateTokens(file, num) {
    let total = num;
    let done = false;
    let tokens = [];
    while(!done){
        try {
            for(const i in [
                ...Array(num)
            ]){
                console.log(i, "/", total, " - ", num);
                let res = await getToken();
                const info = res.authToken.token;
                tokens.push(info);
                num--;
            }
            done = true;
        } catch (error) {
            console.log("Failed creating a token, you're most likely rate limited\nTrying again in 5 minutes");
            await sleep(1000 * 60 * 5);
        }
    }
    const helkp = 'let tokens';
    fs.writeFileSync(file, JSON.stringify(tokens, null, 4));
    return tokens;
}
await generateTokens('tokens.json', 1);
const timeChars = " efghijklmnopqrstuvwxyz";
function listenForAll2(db) {
    let dbRef = ref(db, "/O8eZu3EmVubVjgbT0cIlZf3tNvW2");
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        const key = snapshot.key;
    // console.log("1 ", key, " CAdata:", data, "yetttt ");
    });
    onChildAdded(dbRef, (snapshot)=>{
        const data = snapshot.val();
        const key = snapshot.key;
    // console.log("2: ", key, " CAdata:", data);
    });
    onChildChanged(dbRef, (snapshot)=>{
        const data = snapshot.val();
        const key = snapshot.key;
    // console.log("3: ", key, " CCdata:", data);
    });
    onChildMoved(dbRef, (snapshot)=>{
        const data = snapshot.val();
        const key = snapshot.key;
    // console.log("4: ", key, " CMdata:", data);
    });
    onChildRemoved(dbRef, (snapshot)=>{
        const data = snapshot.val();
        const key = snapshot.key;
    // console.log("5: ", key, " CRdata:", data);
    });
}
function getRandom(min, max) {
    let len = getRandInt(min, max);
    let a = String(btoa((Math.random() + 1).toString(36))).replace("=", "").toLowerCase();
    return a.length > len ? a.substring(a.length - len) : a;
}
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var ProfileProperty1;
(function(ProfileProperty) {
    ProfileProperty["uid"] = 'a';
    ProfileProperty["username"] = 'b';
    ProfileProperty["nationId"] = 'c';
    ProfileProperty["wishList"] = 'd';
    ProfileProperty["messages"] = 'e';
    ProfileProperty["collectionPercentage"] = 'g';
})(ProfileProperty1 || (ProfileProperty1 = {
}));
const EmptyTradeRequirement = {
    receiveCoins: false,
    giveCoins: 0,
    givePacks: [],
    receivePacks: false,
    giveCards: [],
    receiveCards: false
};
var ActionType1;
(function(ActionType) {
    ActionType["loaded"] = 'b';
    ActionType["putCard"] = 'e';
    ActionType["putPack"] = 'o';
    ActionType["putCoins"] = 'q';
    ActionType["ready"] = 'h';
    ActionType["unready"] = 'i';
    ActionType["confirm"] = 'k';
    ActionType["handshake"] = 'l';
    ActionType["cancel"] = 'j';
    ActionType["wantCoinsMessage"] = 'r';
    ActionType["sendEmoji"] = 'n';
})(ActionType1 || (ActionType1 = {
}));
function isTradeHandshake(action) {
    return action.x === ActionType1.handshake;
}
class MadfutClient {
    async logout() {
        try {
            if (!this.auth.currentUser) {
                console.log('Trying to sing out of unknown acc');
                this.auth.signOut();
                return;
            }
            let email = this.auth.currentUser.email;
            console.log('Logging out of', email);
            let ind = MadfutClient.inUse.indexOf(email);
            this.auth.signOut();
            MadfutClient.inUse.splice(ind, 1);
        } catch (error) {
        }
    }
    async login(email) {
        if (MadfutClient.inUse.includes(email)) return null;
        else MadfutClient.inUse.push(email);
        //let newAcount = this.createAccount()
        //jamie_l_slater@hotmail.com", "Niche1951"
        console.log(email);
        const { user  } = await signInWithEmailAndPassword(this.auth, email, "wave2023");
        this.username = "yeeeezy";
        // console.log(this.username)
        this.nationId = "market_token_99";
        // console.log(this.nationId);
        this.uid = user.uid;
        // console.log(this.uid)
        this.authdb = getDatabase(this.app, "https://mf23-room-ids.europe-west1.firebasedatabase.app");
        this.invitesDatabase = getDatabase(this.app);
        this.tradingRoomDatabase = getDatabase(this.app, "https://mf23-trading-invites-rooms-1.europe-west1.firebasedatabase.app/");
        // this.queue = getDatabase(this.app, "https://mf23-trading-queue-1.europe-west1.firebasedatabase.app/");
        //let uid = "WCFXd2jAPWTV89lCBvAY9b0np3P2"
        /*     
              for(let j = 0; j <= 40; j++) {
                  for(let i = 1; i <= 10; i++) {
                      onValue(ref(getDatabase(this.app, `https://mf23-trading-queue-${i}.europe-west1.firebasedatabase.app/`),` /${j}/${this.uid}`), async (snapshot) => { 
                  }
                  
              }
      
          }*/ this.loggedIn = true;
        //   let dbRef3 = ref(this.tradingRoomDatabase, "/" + this.uid +"/"+ this.uid  )
        let dbRef = ref(this.invitesDatabase, this.uid);
        let dbRef2 = ref(this.authdb, this.uid);
        try {
            if ((await get(dbRef2)).val() != null) set(dbRef2, null);
        } catch (error) {
        }
        //let uid = "WCFXd2jAPWTV89lCBvAY9b0np3P2"
        // console.log(user.displayName)
        onValue(dbRef, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
        // console.log("onValue ", key, " ONVAL:", data);
        });
        onChildAdded(dbRef, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
            //  let uid = "hDOE4mBFZ8goZsPce7sOg0Dd7023"
            const data2 = snapshot.ref.toJSON();
        // console.log("onChildAdded ", key, " CAdata:", data2);
        });
        onChildChanged(dbRef, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
            const data2 = snapshot.ref.toJSON();
        // console.log("onChildChanged ", key, " CHANGED:", data2);
        });
        onChildMoved(dbRef, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
        // console.log("onChildMoved", key, " MOVED:", data);
        });
        onValue(dbRef2, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
        // console.log("onValue ", key, " room:", data);
        });
        onChildAdded(dbRef2, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
            //  let uid = "hDOE4mBFZ8goZsPce7sOg0Dd7023"
            const data2 = snapshot.ref.toJSON();
        // console.log("onChildAdded ", key, " room:", data2);
        });
        onChildChanged(dbRef2, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
            const data2 = snapshot.ref.toJSON();
        // console.log("onChildChanged ", key, " room:", data2);
        });
        onChildMoved(dbRef2, (snapshot)=>{
            const data = snapshot.val();
            const key = snapshot.key;
        // console.log("onChildMoved", key, " room:", data);
        });
    /*    const db = getFirestore(this.app);
    
          
            const dbX = getFirestore(this.app);
            const myCollection = query(collection(dbX, "users"), limit(1), where("username", "==", "mad47futters"));
            //console.log('Get users....');
            const users = await getDocs(myCollection);
    
    
          
          
            console.log("docid:",users.docs,"data")
    
        
                
          */ }
    addInviteListener(callback, invitee) {
        const invitesRef = ref(this.invitesDatabase, this.uid);
        onChildAdded(invitesRef, (snapshot)=>{
            if (snapshot != null) {
                callback(snapshot.key);
            }
        });
        onChildChanged(invitesRef, (snapshot)=>{
            if (typeof snapshot.val() === 'number') {
                callback(snapshot.key);
            }
        });
    }
    async rt() {
        return new Promise(async (resolve, reject)=>{
            let done = false;
            if (this.uid == undefined) {
                console.log(this.uid);
                return;
            } else {
                console.log("Let's go");
            }
            for(let num1 = 1; num1 <= 10; i34++){
                for(let num2 = 1; num2 <= 40; num2++){
                    const invDb = ref(getDatabase(this.app, "https://mf23-trading-queue-" + num1 + ".europe-west1.firebasedatabase.app"), "b" + num2 + "\/" + this.uid);
                    await set(invDb, true);
                    const roomKey = ref(this.authdb, this.uid);
                    let packs = [
                        {
                            pack: "query,OMG NOT BOT TRADES,,64,99,-1,-1,-1,false,100",
                            amount: 1
                        },
                        {
                            pack: "query,OMG NOT BOT TRADES,,90,99,-1,-1,-1,false,100",
                            amount: 1
                        },
                        {
                            pack: "query,OMG NOT BOT TRADES,,80,99,-1,-1,-1,false,100",
                            amount: 1
                        }, 
                    ];
                    onValue(roomKey, async (snapshot)=>{
                        // console.log(snapshot.key, snapshot.val())s
                        // console.log("snap",snapshot.val())
                        if (typeof snapshot.val() !== 'string') return;
                        const tradeRef = ref(getDatabase(this.app, "https://mf23-trading-rooms-" + num1 + ".europe-west1.firebasedatabase.app"), snapshot.val().split(",")[0]);
                        const check = snapshot.val().toString().split(",")[1];
                        resolve({
                            tradeRef,
                            amHosting: check == 'true'
                        });
                        try {
                            await this.doTrade({
                                tradeRef,
                                amHosting: check == 'true'
                            }, async (profile)=>({
                                    receiveCoins: false,
                                    receiveCards: false,
                                    receivePacks: false,
                                    giveCards: profile[ProfileProperty1.wishList]?.slice(0, 3) ?? [],
                                    giveCoins: 10000000,
                                    givePacks: packs
                                })
                            );
                            done = true;
                            await set(tradeRef, null);
                        // set(roomId, null);
                        } catch (err) {
                            return null;
                        }
                    });
                }
            }
        //await this.logout()
        });
    }
    async returnUserInfo(invitee1) {
        const myFirestore = getFirestore(this.app);
        const myCollection = query(collection(myFirestore, "users"), limit(1), where("username", "==", invitee1));
        const users = await getDocs(myCollection);
        let userId = '';
        users.forEach((user)=>{
            userId = user.id;
        });
        return userId;
    }
    async createAccount({ email: email1 , password , username , clubID  } = {
    }) {
        typeof clubID == 'number' && (clubID = clubID?.toString());
        let info = {
            email: email1 ?? `${getRandom(5, 16)}@gmail.com`,
            password: password ?? `madfutters1`,
            username: username ?? `madf${getRandom(3, 6)},nation_badge_${clubID ?? getRandomInt(30)}`
        };
        let acc = await createUserWithEmailAndPassword(this.auth, info.email, info.password);
        //console.log(acc)
        await updateProfile(acc.user, {
            displayName: info.username
        });
        return info;
    }
    async inviteUserCb(invitee2, callback1, inviter) {
        const invitePath = "/" + (inviter || this.username) + "," + this.nationId + "," + this.uid;
        const inviteRef = ref(this.invitesDatabase, invitePath);
        onDisconnect(inviteRef).remove();
        await set(inviteRef, Date.now() + 31536000000); // or serverTimestamp()
        onValue(inviteRef, (snapshot)=>{
            if (typeof snapshot.val() === 'number') return;
            if (snapshot.val() == null) {
                off(inviteRef);
                callback1(null);
                return;
            }
            // invite accepted
            const tradeRef = ref(this.tradingRoomDatabase, snapshot.val());
            callback1({
                tradeRef,
                amHosting: true
            });
        });
    }
    inviteWithTimeout(invitee3, timeout, inviter1) {
        let fix = {
            b: this.nationId,
            t: serverTimestamp(),
            u: inviter1
        };
        // let uid = ["4LBTVCJgkEN5xsBKN2uwZQweN0N2"]
        // let uid = ["WCFXd2jAPWTV89lCBvAY9b0np3P2"]
        // let uid = "WCFXd2jAPWTV89lCBvAY9b0np3P2"
        let done = false;
        return new Promise(async (resolve, reject)=>{
            const invitePath = invitee3 + "/" + this.uid;
            const inviteRef = ref(this.invitesDatabase, invitePath);
            const dbRef2 = ref(this.authdb, this.uid);
            onDisconnect(inviteRef).remove();
            await set(inviteRef, fix);
            // await set(inviteRef, serverTimestamp()); // or serverTimestamp()
            onValue(dbRef2, (snapshot)=>{
                // console.log(snapshot.key, snapshot.val())s
                // console.log("snap",snapshot.val())
                if (typeof snapshot.val() !== 'string') return;
                const tradeRef = ref(this.tradingRoomDatabase, snapshot.val().toString().split(",")[0]);
                const check = snapshot.val().toString().split(",")[1];
                done = true;
                set(inviteRef, null);
                set(dbRef2, null);
                off(dbRef2);
                resolve({
                    tradeRef,
                    amHosting: check == 'true'
                });
            });
            setTimeout(()=>{
                if (done) return;
                set(inviteRef, null);
                set(dbRef2, null);
                off(dbRef2);
                reject('User didn\'t accept in time');
            }, 1000 * 60);
            try {
                await set(inviteRef, fix);
            } catch (error) {
            }
        });
    }
    leaveTrade({ tradeRef: tradeRef1 , amHosting  }) {
        return set(tradeRef1, null);
    }
    inviteUser(invitee4, inviter2) {
        let fix = {
            b: this.nationId,
            t: serverTimestamp(),
            u: inviter2
        };
        let done = false;
        return new Promise(async (resolve, reject)=>{
            const invitePath = invitee4 + "/" + this.uid;
            const inviteRef = ref(this.invitesDatabase, invitePath);
            console.log(invitee4, ".......", this.uid);
            // onDisconnect(inviteRef).remove();
            let dbRef2 = ref(this.authdb, this.uid);
            onValue(dbRef2, (snapshot)=>{
                // console.log(snapshot.key, snapshot.val())s
                // console.log("snap",snapshot.val())
                if (typeof snapshot.val() !== 'string') return;
                const tradeRef = ref(this.tradingRoomDatabase, snapshot.val().toString().split(",")[0]);
                const check = snapshot.val().toString().split(",")[1];
                done = true;
                set(inviteRef, null);
                set(dbRef2, null);
                off(dbRef2);
                resolve({
                    tradeRef,
                    amHosting: check == 'true'
                });
            });
            setTimeout(()=>{
                if (done) return;
                set(inviteRef, null);
                set(dbRef2, null);
                off(dbRef2);
                reject('User didn\'t accept in time');
            }, 1000 * 30);
            try {
                await set(inviteRef, fix);
            } catch (error) {
            }
        });
    }
    inviteUserSpam(invitee5, nation, inviter3) {
        return new Promise(async (resolve, reject)=>{
            const invitePath = invitee5 + "/" + (inviter3 || this.username) + "," + nation + "," + this.uid;
            const inviteRef = ref(this.invitesDatabase, invitePath);
            onDisconnect(inviteRef).remove();
            await set(inviteRef, serverTimestamp()); // or serverTimestamp()
            onValue(inviteRef, (snapshot)=>{
                if (typeof snapshot.val() === 'number') return;
                if (snapshot.val() == null) {
                    off(inviteRef);
                    return;
                }
                // invite accepted
                const tradeRef = ref(this.tradingRoomDatabase, snapshot.val());
                off(tradeRef);
                resolve({
                    tradeRef,
                    amHosting: false
                });
                set(inviteRef, null);
            });
        });
    }
    acceptInvite(inviter4, invitee6) {
        return new Promise(async (resolve)=>{
            //  const inviteStr = inviteArr.join("");
            let bee = {
                b: this.nationId,
                t: serverTimestamp(),
                u: inviter4
            };
            const inviteRef = ref(this.invitesDatabase, this.uid);
            let dbRef2 = ref(this.authdb, this.uid);
            // let dbRef4 = ref(this.queue, this.uid)
            let dbRef = ref(this.invitesDatabase, this.uid + "/" + inviter4);
            onValue(dbRef, (snapshot)=>{
                const data = snapshot.val();
                const key = snapshot.key;
            // console.log("onValue ", key, " ONVAL:", data);
            });
            onChildAdded(dbRef, (snapshot)=>{
                const data = snapshot.val();
                const key = snapshot.key;
                //  let uid = "hDOE4mBFZ8goZsPce7sOg0Dd7023"
                const data2 = snapshot.ref.toJSON();
            // console.log("onChildAdded ", key, " CAdata:", data2);
            });
            onChildChanged(dbRef, (snapshot)=>{
                const data = snapshot.val();
                const key = snapshot.key;
                const data2 = snapshot.ref.toJSON();
            // console.log("onChildChanged ", key, " CHANGED:", data2);
            });
            onChildMoved(dbRef, (snapshot)=>{
                const data = snapshot.val();
                const key = snapshot.key;
            // console.log("onChildMoved", key, " MOVED:", data);
            });
        // const inviteStr = snapshot2.val().toString().split(",")[0]
        //  set(inviteRef, bee);
        // const tradeRef = ref(this.tradingRoomDatabase, snapshot2.val().toString().split(",")[0])
        // update(tradeRef, {
        //     h: {
        //         a: this.uid,
        //         b: this.username,
        //         c: this.nationId,
        //         d: [],
        //         e: [],
        //         f: '',
        //         g: '10000000',
        //         h: '',
        //         i: '',
        //         j: '',
        //         k: ''
        //     },
        //     H: {
        //         x: ActionType.loaded
        //     }
        // });
        // off(dbRef);
        // resolve({ tradeRef, amHosting: false });
        // set(dbRef2, null);
        });
    }
    doTrade({ tradeRef , amHosting: amHosting1  }, giver) {
        return new Promise(async (resolve, reject)=>{
            const otherProfile = amHosting1 ? "g" : "h";
            const otherAction = amHosting1 ? "G" : "H";
            const ownProfile = amHosting1 ? "h" : "g";
            const ownAction = amHosting1 ? "H" : "G";
            let loaded = false;
            let tradeReqTask = createTask();
            // console.log(trad)
            const self = this;
            onDisconnect(tradeRef).remove();
            let dbRef3 = ref(this.tradingRoomDatabase, "/" + this.uid + "/" + this.uid);
            let dbRef = ref(this.invitesDatabase, this.uid);
            let dbRef2 = ref(this.authdb, this.uid);
            //  let dbRef4 = ref(this.queue, this.uid)
            let lastInteraction = Date.now();
            let ended = false;
            setTimeout(function a() {
                if (ended) return;
                let est = Date.now() - lastInteraction;
                if (est < 1000 * 60) return setTimeout(a, est);
                off(tradeRef);
                reject('Trade timeout');
            }, 1000);
            async function childUpdate(snapshot) {
                let snappy = snapshot.val();
                // console.log(snappy)
                let snapshotVal = snapshot.val();
                let istrue = snapshot.key;
                //  console.log(istrue)
                if (snapshotVal === null) return;
                if (snapshot.key === otherProfile) {
                    try {
                        tradeReqTask.finish(await giver(snapshotVal));
                        await update(tradeRef, {
                            [ownProfile]: {
                                a: self.uid,
                                b: self.username,
                                c: 'market_token_99',
                                d: [],
                                e: [],
                                f: '',
                                g: '',
                                h: '',
                                i: '',
                                j: '',
                                k: '',
                                u1: '',
                                u2: self.uid
                            },
                            [ownAction]: {
                                x: ActionType1.loaded
                            }
                        });
                        await sleep(1000);
                    } catch (err) {
                        return;
                    }
                } else if (snapshot.key === otherAction) {
                    try {
                        lastInteraction = Date.now();
                        const tradeReq = await tradeReqTask.promise;
                        const updates = [];
                        if (snapshotVal.x === ActionType1.loaded) {
                            loaded = true;
                            updates.push({
                                [ownAction]: {
                                    v: "10",
                                    x: ActionType1.sendEmoji
                                }
                            });
                            await sleep(300);
                            for (const updateElem of updates){
                                await update(tradeRef, updateElem);
                            }
                            for(let i = 0; i < tradeReq.giveCards.length; i++){
                                await update(tradeRef, {
                                    [ownAction]: {
                                        v: `${tradeReq.giveCards[i]},${i}`,
                                        x: ActionType1.putCard
                                    }
                                });
                            }
                            for(let i1 = 0; i1 < tradeReq.givePacks.length; i1++){
                                await update(tradeRef, {
                                    [ownAction]: {
                                        a: tradeReq.givePacks[i1].pack,
                                        b: tradeReq.givePacks[i1].amount,
                                        c: i1,
                                        x: ActionType1.putPack
                                    }
                                });
                            }
                            await update(tradeRef, {
                                [ownAction]: {
                                    v: Math.max(tradeReq.giveCoins, 0),
                                    x: ActionType1.putCoins
                                }
                            });
                        } else if (snapshotVal.x === ActionType1.ready) {
                            await update(tradeRef, {
                                [ownAction]: {
                                    x: ActionType1.ready
                                }
                            });
                            await sleep(300);
                            await update(tradeRef, {
                                [ownAction]: {
                                    x: ActionType1.confirm
                                }
                            });
                            await update(tradeRef, {
                                [otherAction]: {
                                    x: ActionType1.confirm
                                }
                            });
                        } else if (snapshotVal.x === ActionType1.confirm) {
                            if (snapshotVal.x === ActionType1.unready) {
                                await update(tradeRef, {
                                    [ownAction]: {
                                        x: ActionType1.confirm
                                    }
                                });
                                await update(tradeRef, {
                                    [otherAction]: {
                                        x: ActionType1.confirm
                                    }
                                });
                            }
                        } else if (isTradeHandshake(snapshotVal)) {
                            const updates = [];
                            // a: cards I'm giving
                            // b: cards I'm getting
                            // c: packs I'm giving
                            // d: packs I'm getting
                            // e: net coins I'm getting
                            const newAction = {
                                x: ActionType1.handshake
                            };
                            const cardsGivenByOther = snapshotVal.a ?? [];
                            if (!tradeReq.receiveCards && cardsGivenByOther.length > 0) {
                                updates.push({
                                    [ownAction]: {
                                        v: "61",
                                        x: ActionType1.sendEmoji
                                    }
                                });
                            }
                            newAction.b = cardsGivenByOther;
                            const packsGivenByOther = snapshotVal.c ?? {
                            };
                            if (!tradeReq.receivePacks && Object.keys(packsGivenByOther).length > 0) {
                                updates.push({
                                    [ownAction]: {
                                        v: "62",
                                        x: ActionType1.sendEmoji
                                    }
                                });
                            }
                            newAction.d = packsGivenByOther;
                            const gottenCards = snapshotVal.b ?? []; // TODO: shortcut with alreadyUpdated
                            for(let i = 0, j = 0; i < tradeReq.giveCards.length; i++, j++){
                                if (tradeReq.giveCards[i] != gottenCards[j]) {
                                    updates.push({
                                        [ownAction]: {
                                            v: `${tradeReq.giveCards[i]},${i}`,
                                            x: ActionType1.putCard
                                        }
                                    });
                                    j--;
                                }
                            }
                            newAction.a = tradeReq.giveCards;
                            const gottenPacks = snapshotVal.d ?? {
                            };
                            for(let i2 = 0, j1 = 0; i2 < tradeReq.givePacks.length; i2++, j1++){
                                if (!(tradeReq.givePacks[i2].pack in gottenPacks)) {
                                    updates.push({
                                        [ownAction]: {
                                            a: tradeReq.givePacks[i2].pack,
                                            b: tradeReq.givePacks[i2].amount,
                                            c: i2,
                                            x: ActionType1.putPack
                                        }
                                    });
                                    gottenPacks[tradeReq.givePacks[i2].pack] = tradeReq.givePacks[i2].amount;
                                    j1--;
                                }
                            }
                            newAction.c = gottenPacks;
                            let gottenCoins = snapshotVal.e ?? 0;
                            if (gottenCoins < tradeReq.giveCoins && !tradeReq.receiveCoins) {
                                updates.push({
                                    [ownAction]: {
                                        v: Math.max(tradeReq.giveCoins, 0),
                                        x: ActionType1.putCoins
                                    }
                                });
                                updates.push({
                                    [ownAction]: {
                                        v: '00',
                                        x: ActionType1.wantCoinsMessage
                                    }
                                });
                            }
                            newAction.e = -gottenCoins;
                            if (updates.length === 0) {
                                await update(tradeRef, {
                                    [ownAction]: newAction
                                });
                                off(tradeRef);
                                ended = true;
                                resolve({
                                    givenCards: newAction.a,
                                    givenPacks: newAction.c,
                                    netCoins: newAction.e,
                                    receivedCards: newAction.b,
                                    receivedPacks: newAction.d
                                });
                            } else {
                                await update(tradeRef, {
                                    [ownAction]: {
                                        x: ActionType1.cancel
                                    }
                                });
                                for (const updateElem of updates){
                                    await update(tradeRef, updateElem);
                                }
                            }
                        }
                    } catch (err) {
                    }
                }
            }
            onChildMoved(tradeRef, function a(...args) {
                try {
                    // @ts-ignore
                    childUpdate(...args);
                } catch (error) {
                    ended = true;
                    return reject('Unknown');
                }
            });
            onChildAdded(tradeRef, function a(...args) {
                try {
                    // @ts-ignore
                    childUpdate(...args);
                } catch (error) {
                    ended = true;
                    return reject('Unknown');
                }
            });
            onChildChanged(tradeRef, function a(...args) {
                try {
                    // @ts-ignore
                    childUpdate(...args);
                } catch (error) {
                    ended = true;
                    return reject('Unknown');
                }
            });
            onValue(tradeRef, async (snapshot)=>{
                try {
                    if (snapshot.val() == null && loaded) {
                        ended = true;
                        //console.log('User left', self.auth.currentUser?.email)
                        off(tradeRef);
                        reject('User left');
                    }
                } catch (error) {
                    ended = true;
                    return reject('Unknown');
                }
            });
        });
    }
    constructor(token){
        this.loggedIn = false;
        this.token = token;
        this.app = initializeApp({
            apiKey: "AIzaSyBxmfb16mlmD5vNoliSnCuCJqjxFapS_q4",
            authDomain: "mf23-room-ids.europe-west1.firebasedatabase.app",
            projectId: "madfut-23",
            storageBucket: "madfut-23.appspot.com",
            messagingSenderId: "359609929204",
            databaseURL: "https://mf23-trading-invites-2.europe-west1.firebasedatabase.app/",
            appId: "1:359609929204:ios:2fd5ba3bd87c65f0d2fda1"
        }, Math.random().toPrecision(1));
        initializeAppCheck(this.app, {
            provider: new CustomProvider({
                getToken: ()=>{
                    return Promise.resolve({
                        token: this.token,
                        expireTimeMillis: 1637066608 * 1000 // TODO: read from token
                    });
                }
            })
        });
        this.auth = getAuth(this.app);
    }
}
MadfutClient.inUse = [];
export default MadfutClient;
export { ProfileProperty1 as ProfileProperty };
