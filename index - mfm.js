import MadfutClient, { ProfileProperty } from './madfutclient.js';
import { bot } from "./discord.js";
import db from "./db.js";
import { formatNum, normalize, sleep, getRandomInt, extractAmount } from "./util.js";
import { Constants } from 'eris';
import { once } from 'events';
import config from './config.js';
import { ObjectSet } from './util.js';
// @ts-ignore
import { players } from './players23.js';
let accounts = {
    emails: [
        "madfutters+ab3448@madfutters.com",
        "madfutters+ab3449@madfutters.com",
        "madfutters+ab3450@madfutters.com",
        "madfutters+ab3451@madfutters.com",
        "madfutters+ab3452@madfutters.com",
        "madfutters+ab3453@madfutters.com",
        "madfutters+ab3454@madfutters.com",
        "madfutters+ab3455@madfutters.com",
        "madfutters+ab3456@madfutters.com",
        "madfutters+ab3457@madfutters.com",
        "madfutters+ab3458@madfutters.com",
        "madfutters+ab3459@madfutters.com",
        "madfutters+ab3460@madfutters.com",
        "madfutters+ab3461@madfutters.com",
        "madfutters+ab3462@madfutters.com",
        "madfutters+ab3463@madfutters.com",
        "madfutters+ab3464@madfutters.com",
        "madfutters+ab3465@madfutters.com",
        "madfutters+ab3466@madfutters.com",
        "madfutters+ab3467@madfutters.com",
        "madfutters+ab3468@madfutters.com",
        "madfutters+ab3469@madfutters.com",
        "madfutters+ab3470@madfutters.com",
        "madfutters+ab3471@madfutters.com",
        "madfutters+ab3472@madfutters.com",
        "madfutters+ab3473@madfutters.com",
        "madfutters+ab3474@madfutters.com",
        "madfutters+ab3475@madfutters.com",
        "madfutters+ab3476@madfutters.com",
        "madfutters+ab3477@madfutters.com",
        "madfutters+ab3478@madfutters.com",
        "madfutters+ab3479@madfutters.com",
        "madfutters+ab3480@madfutters.com",
        "madfutters+ab3481@madfutters.com",
        "madfutters+ab3482@madfutters.com",
        "madfutters+ab3483@madfutters.com",
        "madfutters+ab3484@madfutters.com",
        "madfutters+ab3485@madfutters.com",
        "madfutters+ab3486@madfutters.com",
        "madfutters+ab3487@madfutters.com",
        "madfutters+ab3488@madfutters.com",
        "madfutters+ab3489@madfutters.com",
        "madfutters+ab3490@madfutters.com",
        "madfutters+ab3491@madfutters.com",
        "madfutters+ab3492@madfutters.com",
        "madfutters+ab3493@madfutters.com",
        "madfutters+ab3494@madfutters.com",
        "madfutters+ab3495@madfutters.com",
        "madfutters+ab3496@madfutters.com",
        "madfutters+ab3497@madfutters.com",
        "madfutters+ab3498@madfutters.com",
        "madfutters+ab3499@madfutters.com",
        "madfutters+ab3500@madfutters.com",
        "madfutters+ab3501@madfutters.com",
        "madfutters+ab3502@madfutters.com",
        "madfutters+ab3503@madfutters.com",
        "madfutters+ab3504@madfutters.com",
        "madfutters+ab3505@madfutters.com",
        "madfutters+ab3506@madfutters.com",
        "madfutters+ab3507@madfutters.com",
        "madfutters+ab3508@madfutters.com",
        "madfutters+ab3509@madfutters.com",
        "madfutters+ab3510@madfutters.com",
        "madfutters+ab3511@madfutters.com",
        "madfutters+ab3512@madfutters.com",
        "madfutters+ab3513@madfutters.com",
        "madfutters+ab3514@madfutters.com",
        "madfutters+ab3515@madfutters.com",
        "madfutters+ab3516@madfutters.com",
        "madfutters+ab3517@madfutters.com",
        "madfutters+ab3518@madfutters.com",
        "madfutters+ab3519@madfutters.com",
        "madfutters+ab3520@madfutters.com",
        "madfutters+ab3521@madfutters.com",
        "madfutters+ab3522@madfutters.com",
        "madfutters+ab3523@madfutters.com",
        "madfutters+ab3524@madfutters.com",
        "madfutters+ab3525@madfutters.com",
        "madfutters+ab3526@madfutters.com",
        "madfutters+ab3527@madfutters.com",
        "madfutters+ab3528@madfutters.com",
        "madfutters+ab3529@madfutters.com",
        "madfutters+ab3530@madfutters.com",
        "madfutters+ab3531@madfutters.com",
        "madfutters+ab3532@madfutters.com",
        "madfutters+ab3533@madfutters.com",
        "madfutters+ab2427@madfutters.com",
        "madfutters+ab2528@madfutters.com",
        "madfutters+ab2702@madfutters.com",
        "madfutters+ab3536@madfutters.com",
        "madfutters+ab3537@madfutters.com",
        "madfutters+ab3538@madfutters.com",
        "madfutters+ab3539@madfutters.com",
        "madfutters+ab3540@madfutters.com",
        "madfutters+ab3541@madfutters.com",
        "madfutters+ab3542@madfutters.com",
        "madfutters+ab3543@madfutters.com",
        "madfutters+ab3544@madfutters.com",
        "madfutters+ab3545@madfutters.com",
        "madfutters+ab3546@madfutters.com",
        "madfutters+ab3547@madfutters.com",
        "madfutters+ab3548@madfutters.com",
        "madfutters+ab3549@madfutters.com",
        "madfutters+ab3550@madfutters.com",
        "madfutters+ab3551@madfutters.com",
        "madfutters+ab3552@madfutters.com",
        "madfutters+ab3553@madfutters.com",
        "madfutters+ab3554@madfutters.com",
        "madfutters+ab3555@madfutters.com",
        "madfutters+ab3556@madfutters.com",
        "madfutters+ab3557@madfutters.com",
        "madfutters+ab3558@madfutters.com",
        "madfutters+ab3559@madfutters.com",
        "madfutters+ab3560@madfutters.com",
        "madfutters+ab3561@madfutters.com",
        "madfutters+ab3562@madfutters.com",
        "madfutters+ab3563@madfutters.com",
        "madfutters+ab3564@madfutters.com",
        "madfutters+ab3565@madfutters.com",
        "madfutters+ab3566@madfutters.com",
        "madfutters+ab3567@madfutters.com",
        "madfutters+ab3568@madfutters.com",
        "madfutters+ab3569@madfutters.com",
        "madfutters+ab3570@madfutters.com",
        "madfutters+ab3571@madfutters.com",
        "madfutters+ab3572@madfutters.com",
        "madfutters+ab3573@madfutters.com",
        "madfutters+ab3574@madfutters.com",
        "madfutters+ab3575@madfutters.com",
        "madfutters+ab3576@madfutters.com",
        "madfutters+ab3577@madfutters.com",
        "madfutters+ab3578@madfutters.com",
        "madfutters+ab3579@madfutters.com",
        "madfutters+ab3580@madfutters.com",
        "madfutters+ab3581@madfutters.com",
        "madfutters+ab3582@madfutters.com",
        "madfutters+ab3583@madfutters.com",
        "madfutters+ab3584@madfutters.com",
        "madfutters+ab3585@madfutters.com",
        "madfutters+ab3586@madfutters.com",
        "madfutters+ab3587@madfutters.com",
        "madfutters+ab3588@madfutters.com",
        "madfutters+ab3589@madfutters.com",
        "madfutters+ab3590@madfutters.com",
        "madfutters+ab3591@madfutters.com",
        "madfutters+ab3592@madfutters.com",
        "madfutters+ab3593@madfutters.com",
        "madfutters+ab3594@madfutters.com",
        "madfutters+ab3595@madfutters.com",
        "madfutters+ab3596@madfutters.com",
        "madfutters+ab3597@madfutters.com",
        "madfutters+ab3598@madfutters.com",
        "madfutters+ab3599@madfutters.com",
        "madfutters+ab3600@madfutters.com",
        "madfutters+ab3601@madfutters.com",
        "madfutters+ab3602@madfutters.com",
        "madfutters+ab3603@madfutters.com",
        "madfutters+ab3604@madfutters.com",
        "madfutters+ab3605@madfutters.com",
        "madfutters+ab3606@madfutters.com",
        "madfutters+ab3607@madfutters.com",
        "madfutters+ab3608@madfutters.com",
        "madfutters+ab3609@madfutters.com",
        "madfutters+ab3610@madfutters.com",
        "madfutters+ab3611@madfutters.com",
        "madfutters+ab3612@madfutters.com",
        "madfutters+ab3613@madfutters.com",
        "madfutters+ab3614@madfutters.com",
        "madfutters+ab3615@madfutters.com",
        "madfutters+ab3616@madfutters.com",
        "madfutters+ab3617@madfutters.com",
        "madfutters+ab3618@madfutters.com",
        "madfutters+ab3619@madfutters.com",
        "madfutters+ab3621@madfutters.com",
        "madfutters+ab3622@madfutters.com",
        "madfutters+ab3623@madfutters.com",
        "madfutters+ab3624@madfutters.com",
        "madfutters+ab3625@madfutters.com",
        "madfutters+ab3626@madfutters.com",
        "madfutters+ab3627@madfutters.com",
        "madfutters+ab3628@madfutters.com",
        "madfutters+ab3629@madfutters.com",
        "madfutters+ab3630@madfutters.com",
        "madfutters+ab3631@madfutters.com",
        "madfutters+ab3632@madfutters.com",
        "madfutters+ab3633@madfutters.com",
        "madfutters+ab3634@madfutters.com",
        "madfutters+ab3635@madfutters.com",
        "madfutters+ab3636@madfutters.com",
        "madfutters+ab3637@madfutters.com",
        "madfutters+ab3638@madfutters.com",
        "madfutters+ab3639@madfutters.com",
        "madfutters+ab3640@madfutters.com",
        "madfutters+ab3641@madfutters.com",
        "madfutters+ab3642@madfutters.com",
        "madfutters+ab3643@madfutters.com",
        "madfutters+ab3644@madfutters.com",
        "madfutters+ab3645@madfutters.com",
        "madfutters+ab3646@madfutters.com",
        "madfutters+ab3647@madfutters.com",
        "madfutters+ab3648@madfutters.com",
        "madfutters+ab3649@madfutters.com",
        "madfutters+ab3650@madfutters.com",
        "madfutters+ab3651@madfutters.com",
        "madfutters+ab3652@madfutters.com",
        "madfutters+ab3653@madfutters.com",
        "madfutters+ab3654@madfutters.com",
        "madfutters+ab3655@madfutters.com",
        "madfutters+ab3656@madfutters.com",
        "madfutters+ab3657@madfutters.com",
        "madfutters+ab3658@madfutters.com",
        "madfutters+ab3659@madfutters.com",
        "madfutters+ab3660@madfutters.com",
        "madfutters+ab3661@madfutters.com",
        "madfutters+ab3662@madfutters.com",
        "madfutters+ab3663@madfutters.com",
        "madfutters+ab3664@madfutters.com",
        "madfutters+ab3665@madfutters.com",
        "madfutters+ab3666@madfutters.com",
        "madfutters+ab3667@madfutters.com",
        "madfutters+ab3668@madfutters.com",
        "madfutters+ab3669@madfutters.com",
        "madfutters+ab3670@madfutters.com",
        "madfutters+ab3671@madfutters.com",
        "madfutters+ab3672@madfutters.com",
        "madfutters+ab3673@madfutters.com",
        "madfutters+ab3674@madfutters.com",
        "madfutters+ab3675@madfutters.com",
        "madfutters+ab3676@madfutters.com",
        "madfutters+ab3677@madfutters.com",
        "madfutters+ab3678@madfutters.com",
        "madfutters+ab3679@madfutters.com",
        "madfutters+ab3680@madfutters.com",
        "madfutters+ab3681@madfutters.com",
        "madfutters+ab3682@madfutters.com",
        "madfutters+ab3683@madfutters.com",
        "madfutters+ab3684@madfutters.com",
        "madfutters+ab3685@madfutters.com",
        "madfutters+ab3686@madfutters.com",
        "madfutters+ab3687@madfutters.com",
        "madfutters+ab3688@madfutters.com",
        "madfutters+ab3689@madfutters.com",
        "madfutters+ab3690@madfutters.com",
        "madfutters+ab3691@madfutters.com",
        "madfutters+ab3692@madfutters.com",
        "madfutters+ab3693@madfutters.com",
        "madfutters+ab3694@madfutters.com",
        "madfutters+ab3695@madfutters.com",
        "madfutters+ab3696@madfutters.com",
        "madfutters+ab3697@madfutters.com",
        "madfutters+ab3698@madfutters.com",
        "madfutters+ab3699@madfutters.com",
        "madfutters+ab3700@madfutters.com",
        "madfutters+ab3701@madfutters.com",
        "madfutters+ab3702@madfutters.com",
        "madfutters+ab3703@madfutters.com",
        "madfutters+ab3704@madfutters.com",
        "madfutters+ab3705@madfutters.com",
        "madfutters+ab3706@madfutters.com",
        "madfutters+ab3707@madfutters.com",
        "madfutters+ab3708@madfutters.com",
        "madfutters+ab3709@madfutters.com",
        "madfutters+ab3710@madfutters.com",
        "madfutters+ab3711@madfutters.com",
        "madfutters+ab3712@madfutters.com",
        "madfutters+ab3713@madfutters.com",
        "madfutters+ab3714@madfutters.com",
        "madfutters+ab3715@madfutters.com",
        "madfutters+ab3716@madfutters.com",
        "madfutters+ab3717@madfutters.com",
        "madfutters+ab3718@madfutters.com",
        "madfutters+ab3719@madfutters.com",
        "madfutters+ab3720@madfutters.com",
        "madfutters+ab3721@madfutters.com",
        "madfutters+ab3722@madfutters.com",
        "madfutters+ab3723@madfutters.com",
        "madfutters+ab3724@madfutters.com",
        "madfutters+ab3725@madfutters.com",
        "madfutters+ab3726@madfutters.com",
        "madfutters+ab3727@madfutters.com",
        "madfutters+ab3728@madfutters.com",
        "madfutters+ab3729@madfutters.com",
        "madfutters+ab3730@madfutters.com",
        "madfutters+ab3731@madfutters.com",
        "madfutters+ab3732@madfutters.com",
        "madfutters+ab3733@madfutters.com",
        "madfutters+ab3734@madfutters.com",
        "madfutters+ab3735@madfutters.com",
        "madfutters+ab3736@madfutters.com",
        "madfutters+ab3737@madfutters.com",
        "madfutters+ab3738@madfutters.com",
        "madfutters+ab3739@madfutters.com",
        "madfutters+ab3740@madfutters.com",
        "madfutters+ab3741@madfutters.com",
        "madfutters+ab3742@madfutters.com",
        "madfutters+ab3743@madfutters.com",
        "madfutters+ab3744@madfutters.com",
        "madfutters+ab3745@madfutters.com",
        "madfutters+ab3746@madfutters.com",
        "madfutters+ab3748@madfutters.com",
        "madfutters+ab3749@madfutters.com",
        "madfutters+ab3750@madfutters.com",
        "madfutters+ab3751@madfutters.com",
        "madfutters+ab3752@madfutters.com",
        "madfutters+ab3753@madfutters.com",
        "madfutters+ab3754@madfutters.com",
        "madfutters+ab3755@madfutters.com",
        "madfutters+ab3756@madfutters.com",
        "madfutters+ab3757@madfutters.com",
        "madfutters+ab3758@madfutters.com",
        "madfutters+ab3759@madfutters.com",
        "madfutters+ab3760@madfutters.com",
        "madfutters+ab3761@madfutters.com",
        "madfutters+ab3762@madfutters.com",
        "madfutters+ab3763@madfutters.com",
        "madfutters+ab3764@madfutters.com",
        "madfutters+ab3765@madfutters.com",
        "madfutters+ab3766@madfutters.com",
        "madfutters+ab3767@madfutters.com",
        "madfutters+ab3768@madfutters.com",
        "madfutters+ab3769@madfutters.com",
        "madfutters+ab3770@madfutters.com",
        "madfutters+ab3771@madfutters.com",
        "madfutters+ab3772@madfutters.com",
        "madfutters+ab3773@madfutters.com",
        "madfutters+ab3774@madfutters.com",
        "madfutters+ab3775@madfutters.com",
        "madfutters+ab3776@madfutters.com",
        "madfutters+ab3777@madfutters.com",
        "madfutters+ab3778@madfutters.com",
        "madfutters+ab3779@madfutters.com",
        "madfutters+ab3780@madfutters.com",
        "madfutters+ab3781@madfutters.com",
        "madfutters+ab3782@madfutters.com",
        "madfutters+ab3783@madfutters.com",
        "madfutters+ab3784@madfutters.com",
        "madfutters+ab3785@madfutters.com",
        "madfutters+ab3786@madfutters.com",
        "madfutters+ab3787@madfutters.com",
        "madfutters+ab3788@madfutters.com",
        "madfutters+ab3789@madfutters.com",
        "madfutters+ab3790@madfutters.com",
        "madfutters+ab3792@madfutters.com",
        "madfutters+ab3793@madfutters.com",
        "madfutters+ab3794@madfutters.com",
        "madfutters+ab3795@madfutters.com",
        "madfutters+ab3796@madfutters.com",
        "madfutters+ab3797@madfutters.com",
        "madfutters+ab3798@madfutters.com",
        "madfutters+ab3799@madfutters.com",
        "madfutters+ab3800@madfutters.com",
        "madfutters+ab3801@madfutters.com",
        "madfutters+ab3802@madfutters.com",
        "madfutters+ab3803@madfutters.com",
        "madfutters+ab3804@madfutters.com",
        "madfutters+ab3805@madfutters.com",
        "madfutters+ab3806@madfutters.com",
        "madfutters+ab3807@madfutters.com",
        "madfutters+ab3808@madfutters.com",
        "madfutters+ab3809@madfutters.com",
        "madfutters+ab3810@madfutters.com",
        "madfutters+ab3811@madfutters.com",
        "madfutters+ab3812@madfutters.com",
        "madfutters+ab3813@madfutters.com",
        "madfutters+ab3814@madfutters.com",
        "madfutters+ab3815@madfutters.com",
        "madfutters+ab3816@madfutters.com",
        "madfutters+ab3817@madfutters.com",
        "madfutters+ab3818@madfutters.com",
        "madfutters+ab3819@madfutters.com",
        "madfutters+ab3820@madfutters.com",
        "madfutters+ab3821@madfutters.com",
        "madfutters+ab3822@madfutters.com",
        "madfutters+ab3823@madfutters.com",
        "madfutters+ab3824@madfutters.com",
        "madfutters+ab3825@madfutters.com",
        "madfutters+ab3826@madfutters.com",
        "madfutters+ab3827@madfutters.com",
        "madfutters+ab3828@madfutters.com",
        "madfutters+ab3829@madfutters.com",
        "madfutters+ab3831@madfutters.com",
        "madfutters+ab3832@madfutters.com",
        "madfutters+ab3833@madfutters.com",
        "madfutters+ab3834@madfutters.com",
        "madfutters+ab3835@madfutters.com",
        "madfutters+ab3836@madfutters.com",
        "madfutters+ab3837@madfutters.com",
        "madfutters+ab3838@madfutters.com",
        "madfutters+ab3839@madfutters.com",
        "madfutters+ab3840@madfutters.com",
        "madfutters+ab3841@madfutters.com",
        "madfutters+ab3842@madfutters.com",
        "madfutters+ab3843@madfutters.com",
        "madfutters+ab3844@madfutters.com",
        "madfutters+ab3845@madfutters.com",
        "madfutters+ab3846@madfutters.com",
        "madfutters+ab3847@madfutters.com",
        "madfutters+ab3848@madfutters.com",
        "madfutters+ab3849@madfutters.com",
        "madfutters+ab3850@madfutters.com",
        "madfutters+ab3851@madfutters.com",
        "madfutters+ab3852@madfutters.com",
        "madfutters+ab3853@madfutters.com",
        "madfutters+ab3854@madfutters.com",
        "madfutters+ab3855@madfutters.com",
        "madfutters+ab3856@madfutters.com",
        "madfutters+ab3857@madfutters.com",
        "madfutters+ab3858@madfutters.com",
        "madfutters+ab3859@madfutters.com",
        "madfutters+ab3860@madfutters.com",
        "madfutters+ab3861@madfutters.com",
        "madfutters+ab3862@madfutters.com",
        "madfutters+ab3863@madfutters.com",
        "madfutters+ab3864@madfutters.com",
        "madfutters+ab3865@madfutters.com",
        "madfutters+ab3866@madfutters.com",
        "madfutters+ab3867@madfutters.com",
        "madfutters+ab3868@madfutters.com",
        "madfutters+ab3869@madfutters.com",
        "madfutters+ab3870@madfutters.com",
        "madfutters+ab3871@madfutters.com",
        "madfutters+ab3872@madfutters.com",
        "madfutters+ab3873@madfutters.com",
        "madfutters+ab3874@madfutters.com",
        "madfutters+ab3875@madfutters.com",
        "madfutters+ab3876@madfutters.com",
        "madfutters+ab3877@madfutters.com",
        "madfutters+ab3878@madfutters.com",
        "madfutters+ab3879@madfutters.com",
        "madfutters+ab3880@madfutters.com",
        "madfutters+ab3881@madfutters.com",
        "madfutters+ab3882@madfutters.com",
        "madfutters+ab3883@madfutters.com",
        "madfutters+ab3884@madfutters.com",
        "madfutters+ab3885@madfutters.com",
        "madfutters+ab3886@madfutters.com",
        "madfutters+ab3887@madfutters.com",
        "madfutters+ab3888@madfutters.com",
        "madfutters+ab3889@madfutters.com",
        "madfutters+ab3890@madfutters.com",
        "madfutters+ab3891@madfutters.com",
        "madfutters+ab3893@madfutters.com",
        "madfutters+ab3894@madfutters.com",
        "madfutters+ab3895@madfutters.com",
        "madfutters+ab3896@madfutters.com",
        "madfutters+ab3897@madfutters.com",
        "madfutters+ab3898@madfutters.com",
        "madfutters+ab3899@madfutters.com",
        "madfutters+ab3900@madfutters.com",
        "madfutters+ab3901@madfutters.com",
        "madfutters+ab3902@madfutters.com",
        "madfutters+ab3903@madfutters.com",
        "madfutters+ab3904@madfutters.com",
        "madfutters+ab3905@madfutters.com",
        "madfutters+ab3906@madfutters.com",
        "madfutters+ab3907@madfutters.com",
        "madfutters+ab3908@madfutters.com",
        "madfutters+ab3909@madfutters.com",
        "madfutters+ab3910@madfutters.com",
        "madfutters+ab3911@madfutters.com",
        "madfutters+ab3912@madfutters.com",
        "madfutters+ab3913@madfutters.com",
        "madfutters+ab3914@madfutters.com",
        "madfutters+ab3915@madfutters.com",
        "madfutters+ab3916@madfutters.com",
        "madfutters+ab3917@madfutters.com",
        "madfutters+ab3918@madfutters.com",
        "madfutters+ab3919@madfutters.com",
        "madfutters+ab3920@madfutters.com",
        "madfutters+ab3921@madfutters.com",
        "madfutters+ab3922@madfutters.com",
        "madfutters+ab3923@madfutters.com",
        "madfutters+ab3924@madfutters.com",
        "madfutters+ab3925@madfutters.com",
        "madfutters+ab3926@madfutters.com",
        "madfutters+ab3927@madfutters.com",
        "madfutters+ab3928@madfutters.com",
        "madfutters+ab3929@madfutters.com",
        "madfutters+ab3930@madfutters.com",
        "madfutters+ab3931@madfutters.com",
        "madfutters+ab3932@madfutters.com",
        "madfutters+ab3933@madfutters.com",
        "madfutters+ab3934@madfutters.com",
        "madfutters+ab3935@madfutters.com",
        "madfutters+ab3936@madfutters.com",
        "madfutters+ab3937@madfutters.com",
        "madfutters+ab3938@madfutters.com",
        "madfutters+ab3939@madfutters.com",
        "madfutters+ab3940@madfutters.com",
        "madfutters+ab3941@madfutters.com",
        "madfutters+ab3942@madfutters.com",
        "madfutters+ab3943@madfutters.com",
        "madfutters+ab3944@madfutters.com",
        "madfutters+ab3945@madfutters.com",
        "madfutters+ab3946@madfutters.com",
        "madfutters+ab3947@madfutters.com",
        "madfutters+ab3948@madfutters.com",
        "madfutters+ab3949@madfutters.com",
        "madfutters+ab3950@madfutters.com",
        "madfutters+ab3951@madfutters.com",
        "madfutters+ab3952@madfutters.com",
        "madfutters+ab3953@madfutters.com",
        "madfutters+ab3954@madfutters.com",
        "madfutters+ab3955@madfutters.com",
        "madfutters+ab3956@madfutters.com",
        "madfutters+ab3957@madfutters.com",
        "madfutters+ab3958@madfutters.com",
        "madfutters+ab3959@madfutters.com",
        "madfutters+ab3960@madfutters.com",
        "madfutters+ab3961@madfutters.com",
        "madfutters+ab3962@madfutters.com",
        "madfutters+ab3963@madfutters.com",
        "madfutters+ab3964@madfutters.com",
        "madfutters+ab3965@madfutters.com",
        "madfutters+ab3966@madfutters.com",
        "madfutters+ab3967@madfutters.com",
        "madfutters+ab3968@madfutters.com",
        "madfutters+ab3969@madfutters.com",
        "madfutters+ab3970@madfutters.com",
        "madfutters+ab3971@madfutters.com",
        "madfutters+ab3972@madfutters.com",
        "madfutters+ab3973@madfutters.com",
        "madfutters+ab3974@madfutters.com",
        "madfutters+ab3975@madfutters.com",
        "madfutters+ab3976@madfutters.com",
        "madfutters+ab3977@madfutters.com",
        "madfutters+ab3978@madfutters.com",
        "madfutters+ab3979@madfutters.com",
        "madfutters+ab3980@madfutters.com",
        "madfutters+ab3981@madfutters.com",
        "madfutters+ab3982@madfutters.com",
        "madfutters+ab3983@madfutters.com",
        "madfutters+ab3984@madfutters.com",
        "madfutters+ab3985@madfutters.com",
        "madfutters+ab3986@madfutters.com",
        "madfutters+ab3987@madfutters.com",
        "madfutters+ab3988@madfutters.com",
        "madfutters+ab3989@madfutters.com",
        "madfutters+ab3990@madfutters.com",
        "madfutters+ab3991@madfutters.com",
        "madfutters+ab3992@madfutters.com",
        "madfutters+ab3993@madfutters.com",
        "madfutters+ab3994@madfutters.com",
        "madfutters+ab3995@madfutters.com",
        "madfutters+ab3996@madfutters.com",
        "madfutters+ab3997@madfutters.com",
        "madfutters+ab3998@madfutters.com",
        "madfutters+ab3999@madfutters.com",
        "madfutters+ab4000@madfutters.com",
        "madfutters+ab4001@madfutters.com",
        "madfutters+ab4002@madfutters.com",
        "madfutters+ab4003@madfutters.com",
        "madfutters+ab4004@madfutters.com",
        "madfutters+ab4005@madfutters.com",
        "madfutters+ab4006@madfutters.com",
        "madfutters+ab4007@madfutters.com",
        "madfutters+ab4008@madfutters.com",
        "madfutters+ab4009@madfutters.com",
        "madfutters+ab4010@madfutters.com",
        "madfutters+ab4011@madfutters.com",
        "madfutters+ab4012@madfutters.com",
        "madfutters+ab4013@madfutters.com",
        "madfutters+ab4014@madfutters.com",
        "madfutters+ab4015@madfutters.com",
        "madfutters+ab4016@madfutters.com",
        "madfutters+ab4017@madfutters.com",
        "madfutters+ab4018@madfutters.com",
        "madfutters+ab4019@madfutters.com",
        "madfutters+ab4020@madfutters.com",
        "madfutters+ab4021@madfutters.com",
        "madfutters+ab4022@madfutters.com",
        "madfutters+ab4023@madfutters.com",
        "madfutters+ab4024@madfutters.com",
        "madfutters+ab4025@madfutters.com",
        "madfutters+ab4026@madfutters.com",
        "madfutters+ab4027@madfutters.com",
        "madfutters+ab4028@madfutters.com",
        "madfutters+ab4029@madfutters.com",
        "madfutters+ab4030@madfutters.com",
        "madfutters+ab4031@madfutters.com",
        "madfutters+ab4032@madfutters.com",
        "madfutters+ab4033@madfutters.com",
        "madfutters+ab4034@madfutters.com",
        "madfutters+ab4035@madfutters.com",
        "madfutters+ab4036@madfutters.com",
        "madfutters+ab4037@madfutters.com",
        "madfutters+ab4038@madfutters.com",
        "madfutters+ab4039@madfutters.com",
        "madfutters+ab4040@madfutters.com",
        "madfutters+ab4041@madfutters.com",
        "madfutters+ab4042@madfutters.com",
        "madfutters+ab4043@madfutters.com",
        "madfutters+ab4044@madfutters.com",
        "madfutters+ab4045@madfutters.com",
        "madfutters+ab4046@madfutters.com",
        "madfutters+ab4047@madfutters.com",
        "madfutters+ab4048@madfutters.com",
        "madfutters+ab4049@madfutters.com",
        "madfutters+ab4050@madfutters.com",
        "madfutters+ab4051@madfutters.com",
        "madfutters+ab4052@madfutters.com",
        "madfutters+ab4053@madfutters.com",
        "madfutters+ab4054@madfutters.com",
        "madfutters+ab4055@madfutters.com",
        "madfutters+ab4056@madfutters.com",
        "madfutters+ab4057@madfutters.com",
        "madfutters+ab4058@madfutters.com",
        "madfutters+ab4059@madfutters.com",
        "madfutters+ab4060@madfutters.com",
        "madfutters+ab4061@madfutters.com",
        "madfutters+ab4062@madfutters.com",
        "madfutters+ab4063@madfutters.com",
        "madfutters+ab4064@madfutters.com",
        "madfutters+ab4065@madfutters.com",
        "madfutters+ab4066@madfutters.com",
        "madfutters+ab4067@madfutters.com",
        "madfutters+ab4069@madfutters.com",
        "madfutters+ab4070@madfutters.com",
        "madfutters+ab4071@madfutters.com",
        "madfutters+ab4072@madfutters.com",
        "madfutters+ab4073@madfutters.com",
        "madfutters+ab4074@madfutters.com",
        "madfutters+ab4075@madfutters.com",
        "madfutters+ab4076@madfutters.com",
        "madfutters+ab4077@madfutters.com",
        "madfutters+ab4078@madfutters.com",
        "madfutters+ab4079@madfutters.com",
        "madfutters+ab4080@madfutters.com",
        "madfutters+ab4081@madfutters.com",
        "madfutters+ab4082@madfutters.com",
        "madfutters+ab4083@madfutters.com",
        "madfutters+ab4084@madfutters.com",
        "madfutters+ab4085@madfutters.com",
        "madfutters+ab4086@madfutters.com",
        "madfutters+ab4087@madfutters.com",
        "madfutters+ab4088@madfutters.com",
        "madfutters+ab4089@madfutters.com",
        "madfutters+ab4090@madfutters.com",
        "madfutters+ab4091@madfutters.com",
        "madfutters+ab4092@madfutters.com",
        "madfutters+ab4093@madfutters.com",
        "madfutters+ab4094@madfutters.com",
        "madfutters+ab4095@madfutters.com",
        "madfutters+ab4096@madfutters.com",
        "madfutters+ab4097@madfutters.com",
        "madfutters+ab4098@madfutters.com",
        "madfutters+ab4099@madfutters.com",
        "madfutters+ab4100@madfutters.com",
        "madfutters+ab4101@madfutters.com",
        "madfutters+ab4102@madfutters.com",
        "madfutters+ab4103@madfutters.com",
        "madfutters+ab4104@madfutters.com",
        "madfutters+ab4105@madfutters.com",
        "madfutters+ab4106@madfutters.com",
        "madfutters+ab4107@madfutters.com",
        "madfutters+ab4108@madfutters.com",
        "madfutters+ab4109@madfutters.com",
        "madfutters+ab4110@madfutters.com",
        "madfutters+ab4111@madfutters.com",
        "madfutters+ab4112@madfutters.com",
        "madfutters+ab4113@madfutters.com",
        "madfutters+ab4114@madfutters.com",
        "madfutters+ab4115@madfutters.com",
        "madfutters+ab4116@madfutters.com",
        "madfutters+ab4117@madfutters.com",
        "madfutters+ab4118@madfutters.com",
        "madfutters+ab4119@madfutters.com",
        "madfutters+ab4120@madfutters.com",
        "madfutters+ab4121@madfutters.com",
        "madfutters+ab4122@madfutters.com",
        "madfutters+ab4123@madfutters.com",
        "madfutters+ab4124@madfutters.com",
        "madfutters+ab4125@madfutters.com",
        "madfutters+ab4126@madfutters.com",
        "madfutters+ab4127@madfutters.com",
        "madfutters+ab4128@madfutters.com",
        "madfutters+ab4129@madfutters.com",
        "madfutters+ab4130@madfutters.com",
        "madfutters+ab4131@madfutters.com",
        "madfutters+ab4132@madfutters.com",
        "madfutters+ab4133@madfutters.com",
        "madfutters+ab4134@madfutters.com",
        "madfutters+ab4135@madfutters.com",
        "madfutters+ab4136@madfutters.com",
        "madfutters+ab4137@madfutters.com",
        "madfutters+ab4138@madfutters.com",
        "madfutters+ab4139@madfutters.com",
        "madfutters+ab4140@madfutters.com",
        "madfutters+ab4141@madfutters.com",
        "madfutters+ab4142@madfutters.com",
        "madfutters+ab4143@madfutters.com",
        "madfutters+ab4144@madfutters.com",
        "madfutters+ab4145@madfutters.com",
        "madfutters+ab4146@madfutters.com",
        "madfutters+ab4147@madfutters.com",
        "madfutters+ab4148@madfutters.com",
        "madfutters+ab4149@madfutters.com",
        "madfutters+ab4150@madfutters.com",
        "madfutters+ab4151@madfutters.com",
        "madfutters+ab4152@madfutters.com",
        "madfutters+ab4153@madfutters.com",
        "madfutters+ab4154@madfutters.com",
        "madfutters+ab4155@madfutters.com",
        "madfutters+ab4156@madfutters.com",
        "madfutters+ab4157@madfutters.com",
        "madfutters+ab4158@madfutters.com",
        "madfutters+ab4159@madfutters.com",
        "madfutters+ab4160@madfutters.com",
        "madfutters+ab4161@madfutters.com",
        "madfutters+ab4162@madfutters.com",
        "madfutters+ab4163@madfutters.com",
        "madfutters+ab4164@madfutters.com",
        "madfutters+ab4165@madfutters.com",
        "madfutters+ab4166@madfutters.com",
        "madfutters+ab4167@madfutters.com",
        "madfutters+ab4168@madfutters.com",
        "madfutters+ab4169@madfutters.com",
        "madfutters+ab4170@madfutters.com",
        "madfutters+ab4171@madfutters.com",
        "madfutters+ab4172@madfutters.com",
        "madfutters+ab4173@madfutters.com",
        "madfutters+ab4174@madfutters.com",
        "madfutters+ab4175@madfutters.com",
        "madfutters+ab4176@madfutters.com",
        "madfutters+ab4177@madfutters.com",
        "madfutters+ab4178@madfutters.com",
        "madfutters+ab4179@madfutters.com",
        "madfutters+ab4180@madfutters.com",
        "madfutters+ab4181@madfutters.com",
        "madfutters+ab4182@madfutters.com",
        "madfutters+ab4183@madfutters.com",
        "madfutters+ab4184@madfutters.com",
        "madfutters+ab4185@madfutters.com",
        "madfutters+ab4186@madfutters.com",
        "madfutters+ab4187@madfutters.com",
        "madfutters+ab4188@madfutters.com",
        "madfutters+ab4189@madfutters.com",
        "madfutters+ab4190@madfutters.com",
        "madfutters+ab4191@madfutters.com",
        "madfutters+ab4192@madfutters.com",
        "madfutters+ab4193@madfutters.com",
        "madfutters+ab4194@madfutters.com",
        "madfutters+ab4195@madfutters.com",
        "madfutters+ab4196@madfutters.com",
        "madfutters+ab4197@madfutters.com",
        "madfutters+ab4198@madfutters.com",
        "madfutters+ab4199@madfutters.com",
        "madfutters+ab4200@madfutters.com",
        "madfutters+ab4201@madfutters.com",
        "madfutters+ab4202@madfutters.com",
        "madfutters+ab4203@madfutters.com",
        "madfutters+ab4204@madfutters.com",
        "madfutters+ab4205@madfutters.com",
        "madfutters+ab4206@madfutters.com",
        "madfutters+ab4207@madfutters.com",
        "madfutters+ab4208@madfutters.com",
        "madfutters+ab4209@madfutters.com",
        "madfutters+ab4210@madfutters.com",
        "madfutters+ab4211@madfutters.com",
        "madfutters+ab4212@madfutters.com",
        "madfutters+ab4213@madfutters.com",
        "madfutters+ab4214@madfutters.com",
        "madfutters+ab4215@madfutters.com",
        "madfutters+ab4216@madfutters.com",
        "madfutters+ab4217@madfutters.com",
        "madfutters+ab4218@madfutters.com",
        "madfutters+ab4219@madfutters.com",
        "madfutters+ab4220@madfutters.com",
        "madfutters+ab4221@madfutters.com",
        "madfutters+ab4222@madfutters.com",
        "madfutters+ab4223@madfutters.com",
        "madfutters+ab4224@madfutters.com",
        "madfutters+ab4225@madfutters.com",
        "madfutters+ab4226@madfutters.com",
        "madfutters+ab4227@madfutters.com",
        "madfutters+ab4228@madfutters.com",
        "madfutters+ab4229@madfutters.com",
        "madfutters+ab4230@madfutters.com",
        "madfutters+ab4231@madfutters.com",
        "madfutters+ab4232@madfutters.com",
        "madfutters+ab4233@madfutters.com",
        "madfutters+ab4234@madfutters.com",
        "madfutters+ab4235@madfutters.com",
        "madfutters+ab4236@madfutters.com",
        "madfutters+ab4237@madfutters.com",
        "madfutters+ab4238@madfutters.com",
        "madfutters+ab4239@madfutters.com",
        "madfutters+ab4240@madfutters.com",
        "madfutters+ab4241@madfutters.com",
        "madfutters+ab4242@madfutters.com",
        "madfutters+ab4243@madfutters.com",
        "madfutters+ab4244@madfutters.com",
        "madfutters+ab4245@madfutters.com",
        "madfutters+ab4246@madfutters.com",
        "madfutters+ab4247@madfutters.com",
        "madfutters+ab4248@madfutters.com",
        "madfutters+ab4250@madfutters.com",
        "madfutters+ab4251@madfutters.com",
        "madfutters+ab4252@madfutters.com",
        "madfutters+ab4253@madfutters.com",
        "madfutters+ab4254@madfutters.com",
        "madfutters+ab4255@madfutters.com",
        "madfutters+ab4256@madfutters.com",
        "madfutters+ab4257@madfutters.com",
        "madfutters+ab4258@madfutters.com",
        "madfutters+ab4259@madfutters.com",
        "madfutters+ab4260@madfutters.com",
        "madfutters+ab4261@madfutters.com",
        "madfutters+ab4262@madfutters.com",
        "madfutters+ab4263@madfutters.com",
        "madfutters+ab4264@madfutters.com",
        "madfutters+ab4265@madfutters.com",
        "madfutters+ab4266@madfutters.com",
        "madfutters+ab4267@madfutters.com",
        "madfutters+ab4268@madfutters.com",
        "madfutters+ab4269@madfutters.com",
        "madfutters+ab4270@madfutters.com",
        "madfutters+ab4271@madfutters.com",
        "madfutters+ab4272@madfutters.com",
        "madfutters+ab4273@madfutters.com",
        "madfutters+ab4274@madfutters.com",
        "madfutters+ab4275@madfutters.com",
        "madfutters+ab4276@madfutters.com",
        "madfutters+ab4277@madfutters.com",
        "madfutters+ab4278@madfutters.com",
        "madfutters+ab4279@madfutters.com",
        "madfutters+ab4280@madfutters.com",
        "madfutters+ab4281@madfutters.com",
        "madfutters+ab4282@madfutters.com",
        "madfutters+ab4283@madfutters.com",
        "madfutters+ab4284@madfutters.com",
        "madfutters+ab4285@madfutters.com",
        "madfutters+ab4286@madfutters.com",
        "madfutters+ab4287@madfutters.com",
        "madfutters+ab4288@madfutters.com",
        "madfutters+ab4289@madfutters.com",
        "madfutters+ab4290@madfutters.com",
        "madfutters+ab4291@madfutters.com",
        "madfutters+ab4292@madfutters.com",
        "madfutters+ab4293@madfutters.com",
        "madfutters+ab4294@madfutters.com",
        "madfutters+ab4295@madfutters.com",
        "madfutters+ab4296@madfutters.com",
        "madfutters+ab4297@madfutters.com",
        "madfutters+ab4298@madfutters.com",
        "madfutters+ab4299@madfutters.com",
        "madfutters+ab4300@madfutters.com",
        "madfutters+ab4301@madfutters.com",
        "madfutters+ab4302@madfutters.com",
        "madfutters+ab4303@madfutters.com",
        "madfutters+ab4304@madfutters.com",
        "madfutters+ab4305@madfutters.com",
        "madfutters+ab4306@madfutters.com",
        "madfutters+ab4307@madfutters.com",
        "madfutters+ab4308@madfutters.com",
        "madfutters+ab4309@madfutters.com",
        "madfutters+ab4310@madfutters.com",
        "madfutters+ab4311@madfutters.com",
        "madfutters+ab4312@madfutters.com",
        "madfutters+ab4313@madfutters.com",
        "madfutters+ab4314@madfutters.com",
        "madfutters+ab4315@madfutters.com",
        "madfutters+ab4316@madfutters.com",
        "madfutters+ab4317@madfutters.com",
        "madfutters+ab4318@madfutters.com",
        "madfutters+ab4319@madfutters.com",
        "madfutters+ab4320@madfutters.com",
        "madfutters+ab4321@madfutters.com",
        "madfutters+ab4322@madfutters.com",
        "madfutters+ab4323@madfutters.com",
        "madfutters+ab4324@madfutters.com",
        "madfutters+ab4325@madfutters.com",
        "madfutters+ab4326@madfutters.com",
        "madfutters+ab4327@madfutters.com",
        "madfutters+ab4328@madfutters.com",
        "madfutters+ab4329@madfutters.com",
        "madfutters+ab4330@madfutters.com",
        "madfutters+ab4331@madfutters.com",
        "madfutters+ab4332@madfutters.com",
        "madfutters+ab4333@madfutters.com",
        "madfutters+ab4334@madfutters.com",
        "madfutters+ab4335@madfutters.com",
        "madfutters+ab4336@madfutters.com",
        "madfutters+ab4337@madfutters.com",
        "madfutters+ab4338@madfutters.com",
        "madfutters+ab4339@madfutters.com",
        "madfutters+ab4340@madfutters.com",
        "madfutters+ab4341@madfutters.com",
        "madfutters+ab4342@madfutters.com",
        "madfutters+ab4343@madfutters.com",
        "madfutters+ab4344@madfutters.com",
        "madfutters+ab4345@madfutters.com",
        "madfutters+ab4346@madfutters.com",
        "madfutters+ab4347@madfutters.com",
        "madfutters+ab4348@madfutters.com",
        "madfutters+ab4349@madfutters.com",
        "madfutters+ab4350@madfutters.com",
        "madfutters+ab4351@madfutters.com",
        "madfutters+ab4352@madfutters.com",
        "madfutters+ab4353@madfutters.com",
        "madfutters+ab4354@madfutters.com",
        "madfutters+ab4355@madfutters.com",
        "madfutters+ab4356@madfutters.com",
        "madfutters+ab4357@madfutters.com",
        "madfutters+ab4358@madfutters.com",
        "madfutters+ab4359@madfutters.com",
        "madfutters+ab4360@madfutters.com",
        "madfutters+ab4361@madfutters.com",
        "madfutters+ab4362@madfutters.com",
        "madfutters+ab4363@madfutters.com",
        "madfutters+ab4364@madfutters.com",
        "madfutters+ab4365@madfutters.com",
        "madfutters+ab4366@madfutters.com",
        "madfutters+ab4367@madfutters.com",
        "madfutters+ab4368@madfutters.com",
        "madfutters+ab4369@madfutters.com",
        "madfutters+ab4370@madfutters.com",
        "madfutters+ab4371@madfutters.com",
        "madfutters+ab4372@madfutters.com",
        "madfutters+ab4373@madfutters.com",
        "madfutters+ab4374@madfutters.com",
        "madfutters+ab4375@madfutters.com",
        "madfutters+ab4376@madfutters.com",
        "madfutters+ab4377@madfutters.com",
        "madfutters+ab4378@madfutters.com",
        "madfutters+ab4379@madfutters.com",
        "madfutters+ab4380@madfutters.com",
        "madfutters+ab4381@madfutters.com",
        "madfutters+ab4382@madfutters.com",
        "madfutters+ab4383@madfutters.com",
        "madfutters+ab4384@madfutters.com",
        "madfutters+ab4385@madfutters.com",
        "madfutters+ab4386@madfutters.com",
        "madfutters+ab4387@madfutters.com",
        "madfutters+ab4388@madfutters.com",
        "madfutters+ab4389@madfutters.com",
        "madfutters+ab4390@madfutters.com",
        "madfutters+ab4391@madfutters.com",
        "madfutters+ab4392@madfutters.com",
        "madfutters+ab4393@madfutters.com",
        "madfutters+ab4394@madfutters.com",
        "madfutters+ab4395@madfutters.com",
        "madfutters+ab4396@madfutters.com",
        "madfutters+ab4397@madfutters.com",
        "madfutters+ab4398@madfutters.com",
        "madfutters+ab4399@madfutters.com",
        "madfutters+ab4400@madfutters.com",
        "madfutters+ab4401@madfutters.com",
        "madfutters+ab4402@madfutters.com",
        "madfutters+ab4403@madfutters.com",
        "madfutters+ab4404@madfutters.com",
        "madfutters+ab4405@madfutters.com",
        "madfutters+ab4406@madfutters.com",
        "madfutters+ab4407@madfutters.com",
        "madfutters+ab4408@madfutters.com",
        "madfutters+ab4409@madfutters.com",
        "madfutters+ab4410@madfutters.com",
        "madfutters+ab4411@madfutters.com",
        "madfutters+ab4412@madfutters.com",
        "madfutters+ab4413@madfutters.com",
        "madfutters+ab4414@madfutters.com",
        "madfutters+ab4415@madfutters.com",
        "madfutters+ab4416@madfutters.com",
        "madfutters+ab4417@madfutters.com",
        "madfutters+ab4418@madfutters.com",
        "madfutters+ab4419@madfutters.com",
        "madfutters+ab4420@madfutters.com",
        "madfutters+ab4421@madfutters.com",
        "madfutters+ab4422@madfutters.com",
        "madfutters+ab4423@madfutters.com",
        "madfutters+ab4424@madfutters.com",
        "madfutters+ab4425@madfutters.com",
        "madfutters+ab4426@madfutters.com",
        "madfutters+ab4427@madfutters.com",
        "madfutters+ab4428@madfutters.com",
        "madfutters+ab4429@madfutters.com",
        "madfutters+ab4430@madfutters.com",
        "madfutters+ab4431@madfutters.com",
        "madfutters+ab4432@madfutters.com",
        "madfutters+ab4433@madfutters.com",
        "madfutters+ab4434@madfutters.com",
        "madfutters+ab4435@madfutters.com",
        "madfutters+ab4436@madfutters.com",
        "madfutters+ab4437@madfutters.com",
        "madfutters+ab4438@madfutters.com",
        "madfutters+ab4439@madfutters.com",
        "madfutters+ab4440@madfutters.com",
        "madfutters+ab4441@madfutters.com",
        "madfutters+ab4443@madfutters.com",
        "madfutters+ab4444@madfutters.com",
        "madfutters+ab4445@madfutters.com",
        "madfutters+ab4446@madfutters.com",
        "madfutters+ab4447@madfutters.com",
        "madfutters+ab4448@madfutters.com",
        "madfutters+ab4449@madfutters.com",
        "madfutters+ab4450@madfutters.com",
        "madfutters+ab4451@madfutters.com",
        "madfutters+ab4452@madfutters.com",
        "madfutters+ab4453@madfutters.com",
        "madfutters+ab4454@madfutters.com",
        "madfutters+ab4455@madfutters.com",
        "madfutters+ab4456@madfutters.com",
        "madfutters+ab4457@madfutters.com",
        "madfutters+ab4458@madfutters.com",
        "madfutters+ab4459@madfutters.com",
        "madfutters+ab4460@madfutters.com",
        "madfutters+ab4461@madfutters.com",
        "madfutters+ab4462@madfutters.com",
        "madfutters+ab4463@madfutters.com",
        "madfutters+ab4464@madfutters.com",
        "madfutters+ab4465@madfutters.com",
        "madfutters+ab4466@madfutters.com",
        "madfutters+ab4467@madfutters.com",
        "madfutters+ab4468@madfutters.com",
        "madfutters+ab4469@madfutters.com",
        "madfutters+ab4470@madfutters.com",
        "madfutters+ab4471@madfutters.com",
        "madfutters+ab4472@madfutters.com",
        "madfutters+ab4473@madfutters.com",
        "madfutters+ab4474@madfutters.com",
        "madfutters+ab4475@madfutters.com",
        "madfutters+ab4476@madfutters.com",
        "madfutters+ab4477@madfutters.com",
        "madfutters+ab4478@madfutters.com",
        "madfutters+ab4479@madfutters.com",
        "madfutters+ab4480@madfutters.com",
        "madfutters+ab4481@madfutters.com",
        "madfutters+ab4482@madfutters.com",
        "madfutters+ab4483@madfutters.com",
        "madfutters+ab4484@madfutters.com",
        "madfutters+ab4485@madfutters.com",
        "madfutters+ab4486@madfutters.com",
        "madfutters+ab4487@madfutters.com",
        "madfutters+ab4488@madfutters.com",
        "madfutters+ab4489@madfutters.com",
        "madfutters+ab4490@madfutters.com",
        "madfutters+ab4491@madfutters.com",
        "madfutters+ab4492@madfutters.com",
        "madfutters+ab4493@madfutters.com",
        "madfutters+ab4494@madfutters.com",
        "madfutters+ab4495@madfutters.com",
        "madfutters+ab4496@madfutters.com",
        "madfutters+ab4497@madfutters.com",
        "madfutters+ab4498@madfutters.com",
        "madfutters+ab4499@madfutters.com",
        "madfutters+ab4500@madfutters.com",
        "madfutters+ab4501@madfutters.com",
        "madfutters+ab4502@madfutters.com",
        "madfutters+ab4503@madfutters.com",
        "madfutters+ab4504@madfutters.com",
        "madfutters+ab4505@madfutters.com",
        "madfutters+ab4506@madfutters.com",
        "madfutters+ab4507@madfutters.com",
        "madfutters+ab4508@madfutters.com",
        "madfutters+ab4509@madfutters.com",
        "madfutters+ab4510@madfutters.com",
        "madfutters+ab4511@madfutters.com",
        "madfutters+ab4512@madfutters.com",
        "madfutters+ab4513@madfutters.com",
        "madfutters+ab4514@madfutters.com",
        "madfutters+ab4515@madfutters.com",
        "madfutters+ab4516@madfutters.com",
        "madfutters+ab4517@madfutters.com",
        "madfutters+ab4518@madfutters.com",
        "madfutters+ab4519@madfutters.com",
        "madfutters+ab4520@madfutters.com",
        "madfutters+ab4521@madfutters.com",
        "madfutters+ab4522@madfutters.com",
        "madfutters+ab4523@madfutters.com",
        "madfutters+ab4524@madfutters.com",
        "madfutters+ab4525@madfutters.com",
        "madfutters+ab4526@madfutters.com",
        "madfutters+ab4527@madfutters.com",
        "madfutters+ab4528@madfutters.com",
        "madfutters+ab4529@madfutters.com",
        "madfutters+ab4530@madfutters.com",
        "madfutters+ab4531@madfutters.com",
        "madfutters+ab4532@madfutters.com",
        "madfutters+ab4533@madfutters.com",
        "madfutters+ab4534@madfutters.com",
        "madfutters+ab4535@madfutters.com",
        "madfutters+ab4536@madfutters.com",
        "madfutters+ab4537@madfutters.com",
        "madfutters+ab4538@madfutters.com",
        "madfutters+ab4539@madfutters.com",
        "madfutters+ab4540@madfutters.com",
        "madfutters+ab4541@madfutters.com",
        "madfutters+ab4542@madfutters.com",
        "madfutters+ab4544@madfutters.com",
        "madfutters+ab4545@madfutters.com",
        "madfutters+ab4546@madfutters.com",
        "madfutters+ab4547@madfutters.com",
        "madfutters+ab4548@madfutters.com",
        "madfutters+ab4549@madfutters.com",
        "madfutters+ab4550@madfutters.com",
        "madfutters+ab4551@madfutters.com",
        "madfutters+ab4552@madfutters.com",
        "madfutters+ab4553@madfutters.com",
        "madfutters+ab4554@madfutters.com",
        "madfutters+ab4555@madfutters.com",
        "madfutters+ab4556@madfutters.com",
        "madfutters+ab4557@madfutters.com",
        "madfutters+ab4558@madfutters.com",
        "madfutters+ab4559@madfutters.com",
        "madfutters+ab4560@madfutters.com",
        "madfutters+ab4561@madfutters.com",
        "madfutters+ab4562@madfutters.com",
        "madfutters+ab4563@madfutters.com",
        "madfutters+ab4564@madfutters.com",
        "madfutters+ab4565@madfutters.com",
        "madfutters+ab4566@madfutters.com",
        "madfutters+ab4567@madfutters.com",
        "madfutters+ab4568@madfutters.com",
        "madfutters+ab4569@madfutters.com",
        "madfutters+ab4570@madfutters.com",
        "madfutters+ab4571@madfutters.com",
        "madfutters+ab4572@madfutters.com",
        "madfutters+ab4573@madfutters.com",
        "madfutters+ab4574@madfutters.com",
        "madfutters+ab4575@madfutters.com",
        "madfutters+ab4576@madfutters.com",
        "madfutters+ab4577@madfutters.com",
        "madfutters+ab4578@madfutters.com",
        "madfutters+ab4579@madfutters.com",
        "madfutters+ab4580@madfutters.com",
        "madfutters+ab4581@madfutters.com",
        "madfutters+ab4582@madfutters.com",
        "madfutters+ab4583@madfutters.com",
        "madfutters+ab4584@madfutters.com",
        "madfutters+ab4585@madfutters.com",
        "madfutters+ab4586@madfutters.com",
        "madfutters+ab4587@madfutters.com",
        "madfutters+ab4588@madfutters.com",
        "madfutters+ab4589@madfutters.com",
        "madfutters+ab4590@madfutters.com",
        "madfutters+ab4591@madfutters.com",
        "madfutters+ab4592@madfutters.com",
        "madfutters+ab4593@madfutters.com",
        "madfutters+ab4594@madfutters.com",
        "madfutters+ab4595@madfutters.com",
        "madfutters+ab4596@madfutters.com",
        "madfutters+ab4597@madfutters.com",
        "madfutters+ab4598@madfutters.com",
        "madfutters+ab4599@madfutters.com",
        "madfutters+ab4600@madfutters.com",
        "madfutters+ab4601@madfutters.com",
        "madfutters+ab4602@madfutters.com",
        "madfutters+ab4603@madfutters.com",
        "madfutters+ab4604@madfutters.com",
        "madfutters+ab4605@madfutters.com",
        "madfutters+ab4606@madfutters.com",
        "madfutters+ab4607@madfutters.com",
        "madfutters+ab4608@madfutters.com",
        "madfutters+ab4609@madfutters.com",
        "madfutters+ab4610@madfutters.com",
        "madfutters+ab4611@madfutters.com",
        "madfutters+ab4612@madfutters.com",
        "madfutters+ab4613@madfutters.com",
        "madfutters+ab4614@madfutters.com",
        "madfutters+ab4615@madfutters.com",
        "madfutters+ab4616@madfutters.com",
        "madfutters+ab4617@madfutters.com",
        "madfutters+ab4618@madfutters.com",
        "madfutters+ab4619@madfutters.com",
        "madfutters+ab4620@madfutters.com",
        "madfutters+ab4621@madfutters.com",
        "madfutters+ab4622@madfutters.com",
        "madfutters+ab4623@madfutters.com",
        "madfutters+ab4624@madfutters.com",
        "madfutters+ab4625@madfutters.com",
        "madfutters+ab4626@madfutters.com",
        "madfutters+ab4627@madfutters.com",
        "madfutters+ab4628@madfutters.com",
        "madfutters+ab4629@madfutters.com",
        "madfutters+ab4630@madfutters.com",
        "madfutters+ab4631@madfutters.com",
        "madfutters+ab4632@madfutters.com",
        "madfutters+ab4633@madfutters.com",
        "madfutters+ab4634@madfutters.com",
        "madfutters+ab4635@madfutters.com",
        "madfutters+ab4636@madfutters.com",
        "madfutters+ab4637@madfutters.com",
        "madfutters+ab4638@madfutters.com",
        "madfutters+ab4639@madfutters.com",
        "madfutters+ab4640@madfutters.com",
        "madfutters+ab4641@madfutters.com",
        "madfutters+ab4642@madfutters.com",
        "madfutters+ab4643@madfutters.com",
        "madfutters+ab4644@madfutters.com",
        "madfutters+ab4645@madfutters.com",
        "madfutters+ab4646@madfutters.com",
        "madfutters+ab4647@madfutters.com",
        "madfutters+ab4648@madfutters.com",
        "madfutters+ab4649@madfutters.com",
        "madfutters+ab4650@madfutters.com",
        "madfutters+ab4651@madfutters.com",
        "madfutters+ab4652@madfutters.com",
        "madfutters+ab4653@madfutters.com",
        "madfutters+ab4654@madfutters.com",
        "madfutters+ab4655@madfutters.com",
        "madfutters+ab4656@madfutters.com",
        "madfutters+ab4657@madfutters.com",
        "madfutters+ab4658@madfutters.com",
        "madfutters+ab4659@madfutters.com",
        "madfutters+ab4660@madfutters.com",
        "madfutters+ab4661@madfutters.com",
        "madfutters+ab4662@madfutters.com",
        "madfutters+ab4663@madfutters.com",
        "madfutters+ab4664@madfutters.com",
        "madfutters+ab4665@madfutters.com",
        "madfutters+ab4666@madfutters.com",
        "madfutters+ab4667@madfutters.com",
        "madfutters+ab4668@madfutters.com",
        "madfutters+ab4669@madfutters.com",
        "madfutters+ab4670@madfutters.com",
        "madfutters+ab4671@madfutters.com",
        "madfutters+ab4672@madfutters.com",
        "madfutters+ab4673@madfutters.com",
        "madfutters+ab4674@madfutters.com",
        "madfutters+ab4675@madfutters.com",
        "madfutters+ab4676@madfutters.com",
        "madfutters+ab4677@madfutters.com",
        "madfutters+ab4678@madfutters.com",
        "madfutters+ab4679@madfutters.com",
        "madfutters+ab4680@madfutters.com",
        "madfutters+ab4681@madfutters.com",
        "madfutters+ab4682@madfutters.com",
        "madfutters+ab4683@madfutters.com",
        "madfutters+ab4684@madfutters.com",
        "madfutters+ab4685@madfutters.com",
        "madfutters+ab4686@madfutters.com",
        "madfutters+ab4687@madfutters.com",
        "madfutters+ab4688@madfutters.com",
        "madfutters+ab4689@madfutters.com",
        "madfutters+ab4690@madfutters.com",
        "madfutters+ab4691@madfutters.com",
        "madfutters+ab4692@madfutters.com",
        "madfutters+ab4693@madfutters.com",
        "madfutters+ab4694@madfutters.com",
        "madfutters+ab4695@madfutters.com",
        "madfutters+ab4696@madfutters.com",
        "madfutters+ab4697@madfutters.com",
        "madfutters+ab4698@madfutters.com",
        "madfutters+ab4699@madfutters.com",
        "madfutters+ab4700@madfutters.com",
        "madfutters+ab4701@madfutters.com",
        "madfutters+ab4702@madfutters.com",
        "madfutters+ab4703@madfutters.com",
        "madfutters+ab4704@madfutters.com",
        "madfutters+ab4705@madfutters.com",
        "madfutters+ab4706@madfutters.com",
        "madfutters+ab4707@madfutters.com",
        "madfutters+ab4708@madfutters.com",
        "madfutters+ab4709@madfutters.com",
        "madfutters+ab4710@madfutters.com",
        "madfutters+ab4711@madfutters.com",
        "madfutters+ab4712@madfutters.com",
        "madfutters+ab4713@madfutters.com",
        "madfutters+ab4714@madfutters.com",
        "madfutters+ab4715@madfutters.com",
        "madfutters+ab4716@madfutters.com",
        "madfutters+ab4717@madfutters.com",
        "madfutters+ab4718@madfutters.com",
        "madfutters+ab4719@madfutters.com",
        "madfutters+ab4721@madfutters.com",
        "madfutters+ab4722@madfutters.com",
        "madfutters+ab4723@madfutters.com",
        "madfutters+ab4724@madfutters.com",
        "madfutters+ab4725@madfutters.com",
        "madfutters+ab4726@madfutters.com",
        "madfutters+ab4727@madfutters.com",
        "madfutters+ab4728@madfutters.com",
        "madfutters+ab4729@madfutters.com",
        "madfutters+ab4730@madfutters.com",
        "madfutters+ab4731@madfutters.com",
        "madfutters+ab4732@madfutters.com",
        "madfutters+ab4733@madfutters.com",
        "madfutters+ab4734@madfutters.com",
        "madfutters+ab4735@madfutters.com",
        "madfutters+ab4736@madfutters.com",
        "madfutters+ab4737@madfutters.com",
        "madfutters+ab4738@madfutters.com",
        "madfutters+ab4739@madfutters.com",
        "madfutters+ab4740@madfutters.com",
        "madfutters+ab4741@madfutters.com",
        "madfutters+ab4742@madfutters.com",
        "madfutters+ab4743@madfutters.com",
        "madfutters+ab4744@madfutters.com",
        "madfutters+ab4745@madfutters.com",
        "madfutters+ab4746@madfutters.com",
        "madfutters+ab4747@madfutters.com",
        "madfutters+ab4748@madfutters.com",
        "madfutters+ab4749@madfutters.com",
        "madfutters+ab4750@madfutters.com",
        "madfutters+ab4751@madfutters.com",
        "madfutters+ab4752@madfutters.com",
        "madfutters+ab4753@madfutters.com",
        "madfutters+ab4754@madfutters.com",
        "madfutters+ab4755@madfutters.com",
        "madfutters+ab4756@madfutters.com",
        "madfutters+ab4757@madfutters.com",
        "madfutters+ab4758@madfutters.com",
        "madfutters+ab4759@madfutters.com",
        "madfutters+ab4760@madfutters.com",
        "madfutters+ab4761@madfutters.com",
        "madfutters+ab4762@madfutters.com",
        "madfutters+ab4763@madfutters.com",
        "madfutters+ab4764@madfutters.com",
        "madfutters+ab4765@madfutters.com",
        "madfutters+ab4766@madfutters.com",
        "madfutters+ab4767@madfutters.com",
        "madfutters+ab4768@madfutters.com",
        "madfutters+ab4769@madfutters.com",
        "madfutters+ab4770@madfutters.com",
        "madfutters+ab4771@madfutters.com",
        "madfutters+ab4772@madfutters.com",
        "madfutters+ab4773@madfutters.com",
        "madfutters+ab4774@madfutters.com",
        "madfutters+ab4775@madfutters.com",
        "madfutters+ab4776@madfutters.com",
        "madfutters+ab4777@madfutters.com",
        "madfutters+ab4778@madfutters.com",
        "madfutters+ab4779@madfutters.com",
        "madfutters+ab4780@madfutters.com",
        "madfutters+ab4781@madfutters.com",
        "madfutters+ab4782@madfutters.com",
        "madfutters+ab4783@madfutters.com",
        "madfutters+ab4784@madfutters.com",
        "madfutters+ab4785@madfutters.com",
        "madfutters+ab4786@madfutters.com",
        "madfutters+ab4787@madfutters.com",
        "madfutters+ab4788@madfutters.com",
        "madfutters+ab4789@madfutters.com",
        "madfutters+ab4790@madfutters.com",
        "madfutters+ab4791@madfutters.com",
        "madfutters+ab4792@madfutters.com",
        "madfutters+ab4793@madfutters.com",
        "madfutters+ab4794@madfutters.com",
        "madfutters+ab4795@madfutters.com",
        "madfutters+ab4796@madfutters.com",
        "madfutters+ab4797@madfutters.com",
        "madfutters+ab4798@madfutters.com",
        "madfutters+ab4799@madfutters.com",
        "madfutters+ab4800@madfutters.com",
        "madfutters+ab4801@madfutters.com",
        "madfutters+ab4802@madfutters.com",
        "madfutters+ab4803@madfutters.com",
        "madfutters+ab4804@madfutters.com",
        "madfutters+ab4805@madfutters.com",
        "madfutters+ab4806@madfutters.com",
        "madfutters+ab4807@madfutters.com",
        "madfutters+ab4808@madfutters.com",
        "madfutters+ab4809@madfutters.com",
        "madfutters+ab4810@madfutters.com",
        "madfutters+ab4811@madfutters.com",
        "madfutters+ab4812@madfutters.com",
        "madfutters+ab4813@madfutters.com",
        "madfutters+ab4814@madfutters.com",
        "madfutters+ab4815@madfutters.com",
        "madfutters+ab4816@madfutters.com",
        "madfutters+ab4817@madfutters.com",
        "madfutters+ab4818@madfutters.com",
        "madfutters+ab4819@madfutters.com",
        "madfutters+ab4820@madfutters.com",
        "madfutters+ab4822@madfutters.com",
        "madfutters+ab4823@madfutters.com",
        "madfutters+ab4824@madfutters.com",
        "madfutters+ab4825@madfutters.com",
        "madfutters+ab4826@madfutters.com",
        "madfutters+ab4827@madfutters.com",
        "madfutters+ab4828@madfutters.com",
        "madfutters+ab4829@madfutters.com",
        "madfutters+ab4830@madfutters.com",
        "madfutters+ab4831@madfutters.com",
        "madfutters+ab4832@madfutters.com",
        "madfutters+ab4833@madfutters.com",
        "madfutters+ab4834@madfutters.com",
        "madfutters+ab4835@madfutters.com",
        "madfutters+ab4836@madfutters.com",
        "madfutters+ab4837@madfutters.com",
        "madfutters+ab4838@madfutters.com",
        "madfutters+ab4839@madfutters.com",
        "madfutters+ab4840@madfutters.com",
        "madfutters+ab4841@madfutters.com",
        "madfutters+ab4842@madfutters.com",
        "madfutters+ab4843@madfutters.com",
        "madfutters+ab4844@madfutters.com",
        "madfutters+ab4845@madfutters.com",
        "madfutters+ab4846@madfutters.com",
        "madfutters+ab4847@madfutters.com",
        "madfutters+ab4848@madfutters.com",
        "madfutters+ab4849@madfutters.com",
        "madfutters+ab4850@madfutters.com",
        "madfutters+ab4851@madfutters.com",
        "madfutters+ab4852@madfutters.com",
        "madfutters+ab4853@madfutters.com",
        "madfutters+ab4854@madfutters.com",
        "madfutters+ab4855@madfutters.com",
        "madfutters+ab4856@madfutters.com",
        "madfutters+ab4857@madfutters.com",
        "madfutters+ab4858@madfutters.com",
        "madfutters+ab4859@madfutters.com",
        "madfutters+ab4860@madfutters.com",
        "madfutters+ab4861@madfutters.com",
        "madfutters+ab4862@madfutters.com",
        "madfutters+ab4863@madfutters.com",
        "madfutters+ab4864@madfutters.com",
        "madfutters+ab4865@madfutters.com",
        "madfutters+ab4866@madfutters.com",
        "madfutters+ab4867@madfutters.com",
        "madfutters+ab4868@madfutters.com",
        "madfutters+ab4869@madfutters.com",
        "madfutters+ab4870@madfutters.com",
        "madfutters+ab4871@madfutters.com",
        "madfutters+ab4872@madfutters.com",
        "madfutters+ab4873@madfutters.com",
        "madfutters+ab4874@madfutters.com",
        "madfutters+ab4875@madfutters.com",
        "madfutters+ab4876@madfutters.com",
        "madfutters+ab4877@madfutters.com",
        "madfutters+ab4878@madfutters.com",
        "madfutters+ab4879@madfutters.com",
        "madfutters+ab4880@madfutters.com",
        "madfutters+ab4881@madfutters.com",
        "madfutters+ab4882@madfutters.com",
        "madfutters+ab4883@madfutters.com",
        "madfutters+ab4884@madfutters.com",
        "madfutters+ab4885@madfutters.com",
        "madfutters+ab4886@madfutters.com",
        "madfutters+ab4887@madfutters.com",
        "madfutters+ab4888@madfutters.com",
        "madfutters+ab4889@madfutters.com",
        "madfutters+ab4890@madfutters.com",
        "madfutters+ab4891@madfutters.com",
        "madfutters+ab4892@madfutters.com",
        "madfutters+ab4893@madfutters.com",
        "madfutters+ab4894@madfutters.com",
        "madfutters+ab4895@madfutters.com",
        "madfutters+ab4896@madfutters.com",
        "madfutters+ab4897@madfutters.com",
        "madfutters+ab4898@madfutters.com",
        "madfutters+ab4899@madfutters.com",
        "madfutters+ab4900@madfutters.com",
        "madfutters+ab4901@madfutters.com",
        "madfutters+ab4902@madfutters.com",
        "madfutters+ab4903@madfutters.com",
        "madfutters+ab4904@madfutters.com",
        "madfutters+ab4905@madfutters.com",
        "madfutters+ab4906@madfutters.com",
        "madfutters+ab4907@madfutters.com",
        "madfutters+ab4908@madfutters.com",
        "madfutters+ab4909@madfutters.com",
        "madfutters+ab4910@madfutters.com",
        "madfutters+ab4911@madfutters.com",
        "madfutters+ab4912@madfutters.com",
        "madfutters+ab4913@madfutters.com",
        "madfutters+ab4914@madfutters.com",
        "madfutters+ab4915@madfutters.com",
        "madfutters+ab4916@madfutters.com",
        "madfutters+ab4917@madfutters.com",
        "madfutters+ab4918@madfutters.com",
        "madfutters+ab4919@madfutters.com",
        "madfutters+ab4920@madfutters.com",
        "madfutters+ab4921@madfutters.com",
        "madfutters+ab4922@madfutters.com",
        "madfutters+ab4923@madfutters.com",
        "madfutters+ab4924@madfutters.com",
        "madfutters+ab4925@madfutters.com",
        "madfutters+ab4926@madfutters.com",
        "madfutters+ab4927@madfutters.com",
        "madfutters+ab4928@madfutters.com",
        "madfutters+ab4929@madfutters.com",
        "madfutters+ab4930@madfutters.com",
        "madfutters+ab4931@madfutters.com",
        "madfutters+ab4932@madfutters.com",
        "madfutters+ab4933@madfutters.com",
        "madfutters+ab4934@madfutters.com",
        "madfutters+ab4935@madfutters.com",
        "madfutters+ab4936@madfutters.com",
        "madfutters+ab4937@madfutters.com",
        "madfutters+ab4938@madfutters.com",
        "madfutters+ab4939@madfutters.com",
        "madfutters+ab4940@madfutters.com",
        "madfutters+ab4941@madfutters.com",
        "madfutters+ab4942@madfutters.com",
        "madfutters+ab4943@madfutters.com",
        "madfutters+ab4944@madfutters.com",
        "madfutters+ab4945@madfutters.com",
        "madfutters+ab4946@madfutters.com",
        "madfutters+ab4947@madfutters.com",
        "madfutters+ab4948@madfutters.com",
        "madfutters+ab4949@madfutters.com",
        "madfutters+ab4950@madfutters.com",
        "madfutters+ab4951@madfutters.com",
        "madfutters+ab4952@madfutters.com",
        "madfutters+ab4953@madfutters.com",
        "madfutters+ab4954@madfutters.com",
        "madfutters+ab4955@madfutters.com",
        "madfutters+ab4956@madfutters.com",
        "madfutters+ab4957@madfutters.com",
        "madfutters+ab4958@madfutters.com",
        "madfutters+ab4959@madfutters.com",
        "madfutters+ab4960@madfutters.com",
        "madfutters+ab4961@madfutters.com",
        "madfutters+ab4962@madfutters.com",
        "madfutters+ab4963@madfutters.com",
        "madfutters+ab4964@madfutters.com",
        "madfutters+ab4965@madfutters.com",
        "madfutters+ab4966@madfutters.com",
        "madfutters+ab4967@madfutters.com",
        "madfutters+ab4968@madfutters.com",
        "madfutters+ab4969@madfutters.com",
        "madfutters+ab4970@madfutters.com",
        "madfutters+ab4971@madfutters.com",
        "madfutters+ab4972@madfutters.com",
        "madfutters+ab4973@madfutters.com",
        "madfutters+ab4974@madfutters.com",
        "madfutters+ab4975@madfutters.com",
        "madfutters+ab4976@madfutters.com",
        "madfutters+ab4977@madfutters.com",
        "madfutters+ab4978@madfutters.com",
        "madfutters+ab4979@madfutters.com",
        "madfutters+ab4980@madfutters.com",
        "madfutters+ab4981@madfutters.com",
        "madfutters+ab4982@madfutters.com",
        "madfutters+ab4983@madfutters.com",
        "madfutters+ab4984@madfutters.com",
        "madfutters+ab4985@madfutters.com",
        "madfutters+ab4986@madfutters.com",
        "madfutters+ab4987@madfutters.com",
        "madfutters+ab4988@madfutters.com",
        "madfutters+ab4989@madfutters.com",
        "madfutters+ab4990@madfutters.com",
        "madfutters+ab4991@madfutters.com",
        "madfutters+ab4992@madfutters.com",
        "madfutters+ab4993@madfutters.com",
        "madfutters+ab4994@madfutters.com",
        "madfutters+ab4995@madfutters.com",
        "madfutters+ab4996@madfutters.com",
        "madfutters+ab4997@madfutters.com",
        "madfutters+ab4998@madfutters.com",
        "madfutters+ab4999@madfutters.com",
        "madfutters+ab5000@madfutters.com",
        "madfutters+ab5001@madfutters.com",
        "madfutters+ab5002@madfutters.com",
        "madfutters+ab5003@madfutters.com",
        "madfutters+ab5004@madfutters.com",
        "madfutters+ab5006@madfutters.com",
        "madfutters+ab5007@madfutters.com",
        "madfutters+ab5008@madfutters.com",
        "madfutters+ab5009@madfutters.com",
        "madfutters+ab5010@madfutters.com",
        "madfutters+ab5011@madfutters.com",
        "madfutters+ab5012@madfutters.com",
        "madfutters+ab5013@madfutters.com",
        "madfutters+ab5014@madfutters.com",
        "madfutters+ab5015@madfutters.com",
        "madfutters+ab5016@madfutters.com",
        "madfutters+ab5017@madfutters.com",
        "madfutters+ab5018@madfutters.com",
        "madfutters+ab5019@madfutters.com",
        "madfutters+ab5020@madfutters.com",
        "madfutters+ab5021@madfutters.com",
        "madfutters+ab5022@madfutters.com",
        "madfutters+ab5023@madfutters.com",
        "madfutters+ab5024@madfutters.com",
        "madfutters+ab5025@madfutters.com",
        "madfutters+ab5026@madfutters.com",
        "madfutters+ab5027@madfutters.com",
        "madfutters+ab5028@madfutters.com",
        "madfutters+ab5029@madfutters.com",
        "madfutters+ab5030@madfutters.com",
        "madfutters+ab5031@madfutters.com",
        "madfutters+ab5032@madfutters.com",
        "madfutters+ab5033@madfutters.com",
        "madfutters+ab5034@madfutters.com",
        "madfutters+ab5035@madfutters.com",
        "madfutters+ab5036@madfutters.com",
        "madfutters+ab5037@madfutters.com",
        "madfutters+ab5038@madfutters.com",
        "madfutters+ab5039@madfutters.com",
        "madfutters+ab5040@madfutters.com",
        "madfutters+ab5041@madfutters.com",
        "madfutters+ab5042@madfutters.com",
        "madfutters+ab5043@madfutters.com",
        "madfutters+ab5044@madfutters.com",
        "madfutters+ab5046@madfutters.com",
        "madfutters+ab5047@madfutters.com",
        "madfutters+ab5048@madfutters.com",
        "madfutters+ab5049@madfutters.com",
        "madfutters+ab5050@madfutters.com",
        "madfutters+ab5051@madfutters.com",
        "madfutters+ab5052@madfutters.com",
        "madfutters+ab5053@madfutters.com",
        "madfutters+ab5054@madfutters.com",
        "madfutters+ab5055@madfutters.com",
        "madfutters+ab5056@madfutters.com",
        "madfutters+ab5057@madfutters.com",
        "madfutters+ab5058@madfutters.com",
        "madfutters+ab5059@madfutters.com",
        "madfutters+ab5060@madfutters.com",
        "madfutters+ab5061@madfutters.com",
        "madfutters+ab5062@madfutters.com",
        "madfutters+ab5063@madfutters.com",
        "madfutters+ab5064@madfutters.com",
        "madfutters+ab5065@madfutters.com",
        "madfutters+ab5066@madfutters.com",
        "madfutters+ab5067@madfutters.com",
        "madfutters+ab5068@madfutters.com",
        "madfutters+ab5069@madfutters.com",
        "madfutters+ab5070@madfutters.com",
        "madfutters+ab5071@madfutters.com",
        "madfutters+ab5072@madfutters.com",
        "madfutters+ab5073@madfutters.com",
        "madfutters+ab5074@madfutters.com",
        "madfutters+ab5075@madfutters.com",
        "madfutters+ab5076@madfutters.com",
        "madfutters+ab5077@madfutters.com",
        "madfutters+ab5078@madfutters.com",
        "madfutters+ab5079@madfutters.com",
        "madfutters+ab5080@madfutters.com",
        "madfutters+ab5081@madfutters.com",
        "madfutters+ab5082@madfutters.com",
        "madfutters+ab5083@madfutters.com",
        "madfutters+ab5084@madfutters.com",
        "madfutters+ab5085@madfutters.com",
        "madfutters+ab5086@madfutters.com",
        "madfutters+ab5087@madfutters.com",
        "madfutters+ab5088@madfutters.com",
        "madfutters+ab5089@madfutters.com",
        "madfutters+ab5090@madfutters.com",
        "madfutters+ab5091@madfutters.com",
        "madfutters+ab5092@madfutters.com",
        "madfutters+ab5093@madfutters.com",
        "madfutters+ab5094@madfutters.com",
        "madfutters+ab5095@madfutters.com",
        "madfutters+ab5096@madfutters.com",
        "madfutters+ab5097@madfutters.com",
        "madfutters+ab5098@madfutters.com",
        "madfutters+ab5099@madfutters.com",
        "madfutters+ab5100@madfutters.com",
        "madfutters+ab5101@madfutters.com",
        "madfutters+ab5102@madfutters.com",
        "madfutters+ab5103@madfutters.com",
        "madfutters+ab5104@madfutters.com",
        "madfutters+ab5105@madfutters.com",
        "madfutters+ab5106@madfutters.com",
        "madfutters+ab5107@madfutters.com",
        "madfutters+ab5108@madfutters.com",
        "madfutters+ab5109@madfutters.com",
        "madfutters+ab5110@madfutters.com",
        "madfutters+ab5111@madfutters.com",
        "madfutters+ab5112@madfutters.com",
        "madfutters+ab5113@madfutters.com",
        "madfutters+ab5114@madfutters.com",
        "madfutters+ab5115@madfutters.com",
        "madfutters+ab5116@madfutters.com",
        "madfutters+ab5117@madfutters.com",
        "madfutters+ab5118@madfutters.com",
        "madfutters+ab5119@madfutters.com",
        "madfutters+ab5120@madfutters.com",
        "madfutters+ab5121@madfutters.com",
        "madfutters+ab5122@madfutters.com",
        "madfutters+ab5123@madfutters.com",
        "madfutters+ab5124@madfutters.com",
        "madfutters+ab5125@madfutters.com",
        "madfutters+ab5126@madfutters.com",
        "madfutters+ab5127@madfutters.com",
        "madfutters+ab5128@madfutters.com",
        "madfutters+ab5129@madfutters.com",
        "madfutters+ab5130@madfutters.com",
        "madfutters+ab5131@madfutters.com",
        "madfutters+ab5132@madfutters.com",
        "madfutters+ab5133@madfutters.com",
        "madfutters+ab5134@madfutters.com",
        "madfutters+ab5135@madfutters.com",
        "madfutters+ab5136@madfutters.com",
        "madfutters+ab5137@madfutters.com",
        "madfutters+ab5138@madfutters.com",
        "madfutters+ab5139@madfutters.com",
        "madfutters+ab5140@madfutters.com",
        "madfutters+ab5141@madfutters.com",
        "madfutters+ab5142@madfutters.com",
        "madfutters+ab5143@madfutters.com",
        "madfutters+ab5144@madfutters.com",
        "madfutters+ab5145@madfutters.com",
        "madfutters+ab5146@madfutters.com",
        "madfutters+ab5147@madfutters.com",
        "madfutters+ab5148@madfutters.com",
        "madfutters+ab5149@madfutters.com",
        "madfutters+ab5150@madfutters.com",
        "madfutters+ab5151@madfutters.com",
        "madfutters+ab5152@madfutters.com",
        "madfutters+ab5153@madfutters.com",
        "madfutters+ab5154@madfutters.com",
        "madfutters+ab5155@madfutters.com",
        "madfutters+ab5156@madfutters.com",
        "madfutters+ab5157@madfutters.com",
        "madfutters+ab5158@madfutters.com",
        "madfutters+ab5159@madfutters.com",
        "madfutters+ab5160@madfutters.com",
        "madfutters+ab5161@madfutters.com",
        "madfutters+ab5162@madfutters.com",
        "madfutters+ab5163@madfutters.com",
        "madfutters+ab5164@madfutters.com",
        "madfutters+ab5165@madfutters.com",
        "madfutters+ab5166@madfutters.com",
        "madfutters+ab5167@madfutters.com",
        "madfutters+ab5168@madfutters.com",
        "madfutters+ab5169@madfutters.com",
        "madfutters+ab5170@madfutters.com",
        "madfutters+ab5171@madfutters.com",
        "madfutters+ab5172@madfutters.com",
        "madfutters+ab5173@madfutters.com",
        "madfutters+ab5174@madfutters.com",
        "madfutters+ab5175@madfutters.com",
        "madfutters+ab5176@madfutters.com",
        "madfutters+ab5177@madfutters.com",
        "madfutters+ab5178@madfutters.com",
        "madfutters+ab5179@madfutters.com",
        "madfutters+ab5180@madfutters.com",
        "madfutters+ab5181@madfutters.com",
        "madfutters+ab5182@madfutters.com",
        "madfutters+ab5183@madfutters.com",
        "madfutters+ab5184@madfutters.com",
        "madfutters+ab5185@madfutters.com",
        "madfutters+ab5186@madfutters.com",
        "madfutters+ab5187@madfutters.com",
        "madfutters+ab5188@madfutters.com",
        "madfutters+ab5189@madfutters.com",
        "madfutters+ab5190@madfutters.com",
        "madfutters+ab5191@madfutters.com",
        "madfutters+ab5192@madfutters.com",
        "madfutters+ab5193@madfutters.com",
        "madfutters+ab5194@madfutters.com",
        "madfutters+ab5195@madfutters.com",
        "madfutters+ab5196@madfutters.com",
        "madfutters+ab5197@madfutters.com",
        "madfutters+ab5198@madfutters.com",
        "madfutters+ab5199@madfutters.com",
        "madfutters+ab5200@madfutters.com",
        "madfutters+ab5201@madfutters.com",
        "madfutters+ab5202@madfutters.com",
        "madfutters+ab5203@madfutters.com",
        "madfutters+ab5204@madfutters.com",
        "madfutters+ab5205@madfutters.com",
        "madfutters+ab5206@madfutters.com",
        "madfutters+ab5207@madfutters.com",
        "madfutters+ab5208@madfutters.com",
        "madfutters+ab5209@madfutters.com",
        "madfutters+ab5210@madfutters.com",
        "madfutters+ab5211@madfutters.com",
        "madfutters+ab5212@madfutters.com",
        "madfutters+ab5214@madfutters.com",
        "madfutters+ab5215@madfutters.com",
        "madfutters+ab5216@madfutters.com",
        "madfutters+ab5217@madfutters.com",
        "madfutters+ab5218@madfutters.com",
        "madfutters+ab5219@madfutters.com",
        "madfutters+ab5220@madfutters.com",
        "madfutters+ab5221@madfutters.com",
        "madfutters+ab5222@madfutters.com",
        "madfutters+ab5223@madfutters.com",
        "madfutters+ab5224@madfutters.com",
        "madfutters+ab5225@madfutters.com",
        "madfutters+ab5226@madfutters.com",
        "madfutters+ab5227@madfutters.com",
        "madfutters+ab5228@madfutters.com",
        "madfutters+ab5229@madfutters.com",
        "madfutters+ab5230@madfutters.com",
        "madfutters+ab5231@madfutters.com",
        "madfutters+ab5232@madfutters.com",
        "madfutters+ab5233@madfutters.com",
        "madfutters+ab5234@madfutters.com",
        "madfutters+ab5235@madfutters.com",
        "madfutters+ab5236@madfutters.com",
        "madfutters+ab5237@madfutters.com",
        "madfutters+ab5238@madfutters.com",
        "madfutters+ab5239@madfutters.com",
        "madfutters+ab5240@madfutters.com",
        "madfutters+ab5241@madfutters.com",
        "madfutters+ab5242@madfutters.com",
        "madfutters+ab5243@madfutters.com",
        "madfutters+ab5244@madfutters.com",
        "madfutters+ab5245@madfutters.com",
        "madfutters+ab5246@madfutters.com",
        "madfutters+ab5247@madfutters.com",
        "madfutters+ab5248@madfutters.com",
        "madfutters+ab5249@madfutters.com",
        "madfutters+ab5250@madfutters.com",
        "madfutters+ab5251@madfutters.com",
        "madfutters+ab5252@madfutters.com",
        "madfutters+ab5253@madfutters.com",
        "madfutters+ab5254@madfutters.com",
        "madfutters+ab5255@madfutters.com",
        "madfutters+ab5256@madfutters.com",
        "madfutters+ab5257@madfutters.com",
        "madfutters+ab5258@madfutters.com",
        "madfutters+ab5259@madfutters.com",
        "madfutters+ab5260@madfutters.com",
        "madfutters+ab5261@madfutters.com",
        "madfutters+ab5262@madfutters.com",
        "madfutters+ab5263@madfutters.com",
        "madfutters+ab5264@madfutters.com",
        "madfutters+ab5265@madfutters.com",
        "madfutters+ab5266@madfutters.com",
        "madfutters+ab5267@madfutters.com",
        "madfutters+ab5268@madfutters.com",
        "madfutters+ab5269@madfutters.com",
        "madfutters+ab5270@madfutters.com",
        "madfutters+ab5271@madfutters.com",
        "madfutters+ab5272@madfutters.com",
        "madfutters+ab5273@madfutters.com",
        "madfutters+ab5274@madfutters.com",
        "madfutters+ab5275@madfutters.com",
        "madfutters+ab5276@madfutters.com",
        "madfutters+ab5277@madfutters.com",
        "madfutters+ab5278@madfutters.com",
        "madfutters+ab5279@madfutters.com",
        "madfutters+ab5280@madfutters.com",
        "madfutters+ab5281@madfutters.com",
        "madfutters+ab5282@madfutters.com",
        "madfutters+ab5283@madfutters.com",
        "madfutters+ab5284@madfutters.com",
        "madfutters+ab5285@madfutters.com",
        "madfutters+ab5286@madfutters.com",
        "madfutters+ab5287@madfutters.com",
        "madfutters+ab5288@madfutters.com",
        "madfutters+ab5289@madfutters.com",
        "madfutters+ab5290@madfutters.com",
        "madfutters+ab5291@madfutters.com",
        "madfutters+ab5292@madfutters.com",
        "madfutters+ab5293@madfutters.com",
        "madfutters+ab5294@madfutters.com",
        "madfutters+ab5295@madfutters.com",
        "madfutters+ab5296@madfutters.com",
        "madfutters+ab5297@madfutters.com",
        "madfutters+ab5298@madfutters.com",
        "madfutters+ab5299@madfutters.com",
        "madfutters+ab5300@madfutters.com",
        "madfutters+ab5301@madfutters.com",
        "madfutters+ab5302@madfutters.com",
        "madfutters+ab5303@madfutters.com",
        "madfutters+ab5304@madfutters.com",
        "madfutters+ab5305@madfutters.com",
        "madfutters+ab5306@madfutters.com",
        "madfutters+ab5307@madfutters.com",
        "madfutters+ab5308@madfutters.com",
        "madfutters+ab5309@madfutters.com",
        "madfutters+ab5310@madfutters.com",
        "madfutters+ab5311@madfutters.com",
        "madfutters+ab5312@madfutters.com",
        "madfutters+ab5313@madfutters.com",
        "madfutters+ab5314@madfutters.com",
        "madfutters+ab5315@madfutters.com",
        "madfutters+ab5316@madfutters.com",
        "madfutters+ab5317@madfutters.com",
        "madfutters+ab5318@madfutters.com",
        "madfutters+ab5319@madfutters.com",
        "madfutters+ab5320@madfutters.com",
        "madfutters+ab5321@madfutters.com",
        "madfutters+ab5322@madfutters.com",
        "madfutters+ab5323@madfutters.com",
        "madfutters+ab5324@madfutters.com",
        "madfutters+ab5325@madfutters.com",
        "madfutters+ab5326@madfutters.com",
        "madfutters+ab5327@madfutters.com",
        "madfutters+ab5328@madfutters.com",
        "madfutters+ab5329@madfutters.com",
        "madfutters+ab5330@madfutters.com",
        "madfutters+ab5331@madfutters.com",
        "madfutters+ab5332@madfutters.com",
        "madfutters+ab5333@madfutters.com",
        "madfutters+ab5334@madfutters.com",
        "madfutters+ab5335@madfutters.com",
        "madfutters+ab5336@madfutters.com",
        "madfutters+ab5337@madfutters.com",
        "madfutters+ab5338@madfutters.com",
        "madfutters+ab5339@madfutters.com",
        "madfutters+ab5340@madfutters.com",
        "madfutters+ab5341@madfutters.com",
        "madfutters+ab5342@madfutters.com",
        "madfutters+ab5343@madfutters.com",
        "madfutters+ab5344@madfutters.com",
        "madfutters+ab5345@madfutters.com",
        "madfutters+ab5346@madfutters.com",
        "madfutters+ab5347@madfutters.com",
        "madfutters+ab5348@madfutters.com",
        "madfutters+ab5349@madfutters.com",
        "madfutters+ab5350@madfutters.com",
        "madfutters+ab5351@madfutters.com",
        "madfutters+ab5352@madfutters.com",
        "madfutters+ab5353@madfutters.com",
        "madfutters+ab5354@madfutters.com",
        "madfutters+ab5355@madfutters.com",
        "madfutters+ab5356@madfutters.com",
        "madfutters+ab5357@madfutters.com",
        "madfutters+ab5358@madfutters.com",
        "madfutters+ab5359@madfutters.com",
        "madfutters+ab5360@madfutters.com",
        "madfutters+ab5361@madfutters.com",
        "madfutters+ab5362@madfutters.com",
        "madfutters+ab5363@madfutters.com",
        "madfutters+ab5364@madfutters.com",
        "madfutters+ab5365@madfutters.com",
        "madfutters+ab5366@madfutters.com",
        "madfutters+ab5367@madfutters.com",
        "madfutters+ab5368@madfutters.com",
        "madfutters+ab5369@madfutters.com",
        "madfutters+ab5370@madfutters.com",
        "madfutters+ab5371@madfutters.com",
        "madfutters+ab5372@madfutters.com",
        "madfutters+ab5373@madfutters.com",
        "madfutters+ab5374@madfutters.com",
        "madfutters+ab5375@madfutters.com",
        "madfutters+ab5376@madfutters.com",
        "madfutters+ab5377@madfutters.com",
        "madfutters+ab5378@madfutters.com",
        "madfutters+ab5379@madfutters.com",
        "madfutters+ab5380@madfutters.com",
        "madfutters+ab5381@madfutters.com",
        "madfutters+ab5382@madfutters.com",
        "madfutters+ab5383@madfutters.com",
        "madfutters+ab5384@madfutters.com",
        "madfutters+ab5385@madfutters.com",
        "madfutters+ab5386@madfutters.com",
        "madfutters+ab5387@madfutters.com",
        "madfutters+ab5388@madfutters.com",
        "madfutters+ab5389@madfutters.com",
        "madfutters+ab5390@madfutters.com",
        "madfutters+ab5391@madfutters.com",
        "madfutters+ab5392@madfutters.com",
        "madfutters+ab5393@madfutters.com",
        "madfutters+ab5394@madfutters.com",
        "madfutters+ab5395@madfutters.com",
        "madfutters+ab5396@madfutters.com",
        "madfutters+ab5397@madfutters.com",
        "madfutters+ab5398@madfutters.com",
        "madfutters+ab5399@madfutters.com",
        "madfutters+ab5400@madfutters.com",
        "madfutters+ab5401@madfutters.com",
        "madfutters+ab5402@madfutters.com",
        "madfutters+ab5403@madfutters.com",
        "madfutters+ab5404@madfutters.com",
        "madfutters+ab5405@madfutters.com",
        "madfutters+ab5406@madfutters.com",
        "madfutters+ab5407@madfutters.com",
        "madfutters+ab5408@madfutters.com",
        "madfutters+ab5409@madfutters.com",
        "madfutters+ab5410@madfutters.com",
        "madfutters+ab5411@madfutters.com",
        "madfutters+ab5412@madfutters.com",
        "madfutters+ab5413@madfutters.com",
        "madfutters+ab5414@madfutters.com",
        "madfutters+ab5415@madfutters.com",
        "madfutters+ab5416@madfutters.com",
        "madfutters+ab5417@madfutters.com",
        "madfutters+ab5418@madfutters.com",
        "madfutters+ab5419@madfutters.com",
        "madfutters+ab5420@madfutters.com",
        "madfutters+ab5421@madfutters.com",
        "madfutters+ab5422@madfutters.com",
        "madfutters+ab5423@madfutters.com",
        "madfutters+ab5424@madfutters.com",
        "madfutters+ab5425@madfutters.com",
        "madfutters+ab5426@madfutters.com",
        "madfutters+ab5427@madfutters.com",
        "madfutters+ab5428@madfutters.com",
        "madfutters+ab5429@madfutters.com",
        "madfutters+ab5430@madfutters.com",
        "madfutters+ab5431@madfutters.com",
        "madfutters+ab5432@madfutters.com",
        "madfutters+ab5433@madfutters.com",
        "madfutters+ab5434@madfutters.com",
        "madfutters+ab5435@madfutters.com",
        "madfutters+ab5436@madfutters.com",
        "madfutters+ab5437@madfutters.com",
        "madfutters+ab5438@madfutters.com",
        "madfutters+ab5439@madfutters.com",
        "madfutters+ab5440@madfutters.com",
        "madfutters+ab5441@madfutters.com",
        "madfutters+ab5442@madfutters.com",
        "madfutters+ab5443@madfutters.com",
        "madfutters+ab5444@madfutters.com",
        "madfutters+ab5445@madfutters.com",
        "madfutters+ab5446@madfutters.com",
        "madfutters+ab5447@madfutters.com",
        "madfutters+ab5448@madfutters.com",
        "madfutters+ab5449@madfutters.com",
        "madfutters+ab5450@madfutters.com",
        "madfutters+ab5451@madfutters.com",
        "madfutters+ab5452@madfutters.com",
        "madfutters+ab5453@madfutters.com",
        "madfutters+ab5454@madfutters.com",
        "madfutters+ab5455@madfutters.com",
        "madfutters+ab5456@madfutters.com",
        "madfutters+ab5457@madfutters.com",
        "madfutters+ab5458@madfutters.com",
        "madfutters+ab5459@madfutters.com",
        "madfutters+ab5460@madfutters.com",
        "madfutters+ab5461@madfutters.com",
        "madfutters+ab5462@madfutters.com",
        "madfutters+ab5463@madfutters.com",
        "madfutters+ab5464@madfutters.com",
        "madfutters+ab5465@madfutters.com",
        "madfutters+ab5466@madfutters.com",
        "madfutters+ab5467@madfutters.com",
        "madfutters+ab5468@madfutters.com",
        "madfutters+ab5469@madfutters.com",
        "madfutters+ab5470@madfutters.com",
        "madfutters+ab5471@madfutters.com",
        "madfutters+ab5472@madfutters.com",
        "madfutters+ab5473@madfutters.com",
        "madfutters+ab5474@madfutters.com",
        "madfutters+ab5475@madfutters.com",
        "madfutters+ab5476@madfutters.com",
        "madfutters+ab5477@madfutters.com",
        "madfutters+ab5478@madfutters.com",
        "madfutters+ab5479@madfutters.com",
        "madfutters+ab5480@madfutters.com",
        "madfutters+ab5481@madfutters.com",
        "madfutters+ab5482@madfutters.com",
        "madfutters+ab5483@madfutters.com",
        "madfutters+ab5484@madfutters.com",
        "madfutters+ab5485@madfutters.com",
        "madfutters+ab5486@madfutters.com",
        "madfutters+ab5487@madfutters.com",
        "madfutters+ab5488@madfutters.com",
        "madfutters+ab5489@madfutters.com",
        "madfutters+ab5490@madfutters.com",
        "madfutters+ab5491@madfutters.com",
        "madfutters+ab5492@madfutters.com",
        "madfutters+ab5493@madfutters.com",
        "madfutters+ab5494@madfutters.com",
        "madfutters+ab5495@madfutters.com",
        "madfutters+ab5496@madfutters.com",
        "madfutters+ab5497@madfutters.com",
        "madfutters+ab5498@madfutters.com",
        "madfutters+ab5499@madfutters.com",
        "madfutters+ab5500@madfutters.com",
        "madfutters+ab5501@madfutters.com",
        "madfutters+ab5502@madfutters.com",
        "madfutters+ab5503@madfutters.com",
        "madfutters+ab5504@madfutters.com",
        "madfutters+ab5505@madfutters.com",
        "madfutters+ab5506@madfutters.com",
        "madfutters+ab5507@madfutters.com",
        "madfutters+ab5508@madfutters.com",
        "madfutters+ab5509@madfutters.com",
        "madfutters+ab5510@madfutters.com",
        "madfutters+ab5511@madfutters.com",
        "madfutters+ab5512@madfutters.com",
        "madfutters+ab5513@madfutters.com",
        "madfutters+ab5514@madfutters.com",
        "madfutters+ab5515@madfutters.com",
        "madfutters+ab5516@madfutters.com",
        "madfutters+ab5517@madfutters.com",
        "madfutters+ab5518@madfutters.com",
        "madfutters+ab5519@madfutters.com",
        "madfutters+ab5520@madfutters.com",
        "madfutters+ab5521@madfutters.com",
        "madfutters+ab5522@madfutters.com",
        "madfutters+ab5523@madfutters.com",
        "madfutters+ab5524@madfutters.com",
        "madfutters+ab5525@madfutters.com",
        "madfutters+ab5526@madfutters.com",
        "madfutters+ab5527@madfutters.com",
        "madfutters+ab5528@madfutters.com",
        "madfutters+ab5529@madfutters.com",
        "madfutters+ab5530@madfutters.com",
        "madfutters+ab5531@madfutters.com",
        "madfutters+ab5532@madfutters.com",
        "madfutters+ab5533@madfutters.com",
        "madfutters+ab5534@madfutters.com",
        "madfutters+ab5535@madfutters.com",
        "madfutters+ab5536@madfutters.com",
        "madfutters+ab5537@madfutters.com",
        "madfutters+ab5538@madfutters.com",
        "madfutters+ab5539@madfutters.com",
        "madfutters+ab5540@madfutters.com",
        "madfutters+ab5541@madfutters.com",
        "madfutters+ab5542@madfutters.com",
        "madfutters+ab5543@madfutters.com",
        "madfutters+ab5544@madfutters.com",
        "madfutters+ab5545@madfutters.com",
        "madfutters+ab5546@madfutters.com",
        "madfutters+ab5547@madfutters.com",
        "madfutters+ab5548@madfutters.com",
        "madfutters+ab5549@madfutters.com",
        "madfutters+ab5550@madfutters.com",
        "madfutters+ab5551@madfutters.com",
        "madfutters+ab5552@madfutters.com",
        "madfutters+ab5553@madfutters.com",
        "madfutters+ab5554@madfutters.com",
        "madfutters+ab5555@madfutters.com",
        "madfutters+ab5556@madfutters.com",
        "madfutters+ab5557@madfutters.com",
        "madfutters+ab5558@madfutters.com",
        "madfutters+ab5559@madfutters.com",
        "madfutters+ab5560@madfutters.com",
        "madfutters+ab5561@madfutters.com",
        "madfutters+ab5562@madfutters.com",
        "madfutters+ab5563@madfutters.com",
        "madfutters+ab5565@madfutters.com",
        "madfutters+ab5566@madfutters.com",
        "madfutters+ab5567@madfutters.com",
        "madfutters+ab5568@madfutters.com",
        "madfutters+ab5569@madfutters.com",
        "madfutters+ab5570@madfutters.com",
        "madfutters+ab5571@madfutters.com",
        "madfutters+ab5572@madfutters.com",
        "madfutters+ab5573@madfutters.com",
        "madfutters+ab5574@madfutters.com",
        "madfutters+ab5575@madfutters.com",
        "madfutters+ab5576@madfutters.com",
        "madfutters+ab5577@madfutters.com",
        "madfutters+ab5578@madfutters.com",
        "madfutters+ab5579@madfutters.com",
        "madfutters+ab5580@madfutters.com",
        "madfutters+ab5581@madfutters.com",
        "madfutters+ab5582@madfutters.com",
        "madfutters+ab5584@madfutters.com",
        "madfutters+ab5585@madfutters.com",
        "madfutters+ab5586@madfutters.com",
        "madfutters+ab5587@madfutters.com",
        "madfutters+ab5588@madfutters.com",
        "madfutters+ab5589@madfutters.com",
        "madfutters+ab5590@madfutters.com",
        "madfutters+ab5591@madfutters.com",
        "madfutters+ab5592@madfutters.com",
        "madfutters+ab5593@madfutters.com",
        "madfutters+ab5594@madfutters.com",
        "madfutters+ab5595@madfutters.com",
        "madfutters+ab5596@madfutters.com",
        "madfutters+ab5597@madfutters.com",
        "madfutters+ab5598@madfutters.com",
        "madfutters+ab5599@madfutters.com",
        "madfutters+ab5600@madfutters.com",
        "madfutters+ab5601@madfutters.com",
        "madfutters+ab5602@madfutters.com",
        "madfutters+ab5603@madfutters.com",
        "madfutters+ab5604@madfutters.com",
        "madfutters+ab5605@madfutters.com",
        "madfutters+ab5606@madfutters.com",
        "madfutters+ab5607@madfutters.com",
        "madfutters+ab5608@madfutters.com",
        "madfutters+ab5609@madfutters.com",
        "madfutters+ab5610@madfutters.com",
        "madfutters+ab5611@madfutters.com",
        "madfutters+ab5612@madfutters.com",
        "madfutters+ab5613@madfutters.com",
        "madfutters+ab5614@madfutters.com",
        "madfutters+ab5615@madfutters.com",
        "madfutters+ab5616@madfutters.com",
        "madfutters+ab5617@madfutters.com",
        "madfutters+ab5618@madfutters.com",
        "madfutters+ab5619@madfutters.com",
        "madfutters+ab5620@madfutters.com",
        "madfutters+ab5621@madfutters.com",
        "madfutters+ab5622@madfutters.com",
        "madfutters+ab5623@madfutters.com",
        "madfutters+ab5624@madfutters.com",
        "madfutters+ab5625@madfutters.com",
        "madfutters+ab5626@madfutters.com",
        "madfutters+ab5627@madfutters.com",
        "madfutters+ab5628@madfutters.com",
        "madfutters+ab5629@madfutters.com",
        "madfutters+ab5630@madfutters.com",
        "madfutters+ab5631@madfutters.com",
        "madfutters+ab5632@madfutters.com",
        "madfutters+ab5633@madfutters.com",
        "madfutters+ab5634@madfutters.com",
        "madfutters+ab5635@madfutters.com",
        "madfutters+ab5636@madfutters.com",
        "madfutters+ab5637@madfutters.com",
        "madfutters+ab5638@madfutters.com",
        "madfutters+ab5639@madfutters.com",
        "madfutters+ab5640@madfutters.com",
        "madfutters+ab5641@madfutters.com",
        "madfutters+ab5642@madfutters.com",
        "madfutters+ab5643@madfutters.com",
        "madfutters+ab5644@madfutters.com",
        "madfutters+ab5645@madfutters.com",
        "madfutters+ab5646@madfutters.com",
        "madfutters+ab5647@madfutters.com",
        "madfutters+ab5648@madfutters.com",
        "madfutters+ab5649@madfutters.com",
        "madfutters+ab5650@madfutters.com",
        "madfutters+ab5651@madfutters.com",
        "madfutters+ab5652@madfutters.com",
        "madfutters+ab5653@madfutters.com",
        "madfutters+ab5654@madfutters.com",
        "madfutters+ab5655@madfutters.com",
        "madfutters+ab5656@madfutters.com",
        "madfutters+ab5657@madfutters.com",
        "madfutters+ab5658@madfutters.com",
        "madfutters+ab5659@madfutters.com",
        "madfutters+ab5660@madfutters.com",
        "madfutters+ab5661@madfutters.com",
        "madfutters+ab5662@madfutters.com",
        "madfutters+ab5663@madfutters.com",
        "madfutters+ab5664@madfutters.com",
        "madfutters+ab5665@madfutters.com",
        "madfutters+ab5666@madfutters.com",
        "madfutters+ab5667@madfutters.com",
        "madfutters+ab5668@madfutters.com",
        "madfutters+ab5669@madfutters.com",
        "madfutters+ab5670@madfutters.com",
        "madfutters+ab5671@madfutters.com",
        "madfutters+ab5672@madfutters.com",
        "madfutters+ab5673@madfutters.com",
        "madfutters+ab5674@madfutters.com",
        "madfutters+ab5675@madfutters.com",
        "madfutters+ab5676@madfutters.com",
        "madfutters+ab5677@madfutters.com",
        "madfutters+ab5678@madfutters.com",
        "madfutters+ab5679@madfutters.com",
        "madfutters+ab5680@madfutters.com",
        "madfutters+ab5681@madfutters.com",
        "madfutters+ab5682@madfutters.com",
        "madfutters+ab5683@madfutters.com",
        "madfutters+ab5684@madfutters.com",
        "madfutters+ab5685@madfutters.com",
        "madfutters+ab5686@madfutters.com",
        "madfutters+ab5687@madfutters.com",
        "madfutters+ab5688@madfutters.com",
        "madfutters+ab5689@madfutters.com",
        "madfutters+ab5690@madfutters.com",
        "madfutters+ab5691@madfutters.com",
        "madfutters+ab5692@madfutters.com",
        "madfutters+ab5693@madfutters.com",
        "madfutters+ab5694@madfutters.com",
        "madfutters+ab5695@madfutters.com",
        "madfutters+ab5696@madfutters.com",
        "madfutters+ab5697@madfutters.com",
        "madfutters+ab5698@madfutters.com",
        "madfutters+ab5699@madfutters.com",
        "madfutters+ab5700@madfutters.com",
        "madfutters+ab5701@madfutters.com",
        "madfutters+ab5702@madfutters.com",
        "madfutters+ab5703@madfutters.com",
        "madfutters+ab5704@madfutters.com",
        "madfutters+ab5705@madfutters.com",
        "madfutters+ab5706@madfutters.com",
        "madfutters+ab5707@madfutters.com",
        "madfutters+ab5708@madfutters.com",
        "madfutters+ab5709@madfutters.com",
        "madfutters+ab5710@madfutters.com",
        "madfutters+ab5711@madfutters.com",
        "madfutters+ab5712@madfutters.com",
        "madfutters+ab5713@madfutters.com",
        "madfutters+ab5714@madfutters.com",
        "madfutters+ab5715@madfutters.com",
        "madfutters+ab5716@madfutters.com",
        "madfutters+ab5717@madfutters.com",
        "madfutters+ab5718@madfutters.com",
        "madfutters+ab5719@madfutters.com",
        "madfutters+ab5720@madfutters.com",
        "madfutters+ab5721@madfutters.com",
        "madfutters+ab5722@madfutters.com",
        "madfutters+ab5723@madfutters.com",
        "madfutters+ab5724@madfutters.com",
        "madfutters+ab5725@madfutters.com",
        "madfutters+ab5726@madfutters.com",
        "madfutters+ab5727@madfutters.com",
        "madfutters+ab5728@madfutters.com",
        "madfutters+ab5729@madfutters.com",
        "madfutters+ab5730@madfutters.com",
        "madfutters+ab5731@madfutters.com",
        "madfutters+ab5732@madfutters.com",
        "madfutters+ab5733@madfutters.com",
        "madfutters+ab5734@madfutters.com",
        "madfutters+ab5735@madfutters.com",
        "madfutters+ab5736@madfutters.com",
        "madfutters+ab5737@madfutters.com",
        "madfutters+ab5738@madfutters.com",
        "madfutters+ab5739@madfutters.com",
        "madfutters+ab5740@madfutters.com",
        "madfutters+ab5741@madfutters.com",
        "madfutters+ab5742@madfutters.com",
        "madfutters+ab5743@madfutters.com",
        "madfutters+ab5744@madfutters.com",
        "madfutters+ab5745@madfutters.com",
        "madfutters+ab5746@madfutters.com",
        "madfutters+ab5747@madfutters.com",
        "madfutters+ab5748@madfutters.com",
        "madfutters+ab5749@madfutters.com",
        "madfutters+ab5750@madfutters.com",
        "madfutters+ab5751@madfutters.com",
        "madfutters+ab5752@madfutters.com",
        "madfutters+ab5753@madfutters.com",
        "madfutters+ab5754@madfutters.com",
        "madfutters+ab5755@madfutters.com",
        "madfutters+ab5756@madfutters.com",
        "madfutters+ab5757@madfutters.com",
        "madfutters+ab5758@madfutters.com",
        "madfutters+ab5759@madfutters.com",
        "madfutters+ab5760@madfutters.com",
        "madfutters+ab5761@madfutters.com",
        "madfutters+ab5762@madfutters.com",
        "madfutters+ab5763@madfutters.com",
        "madfutters+ab5764@madfutters.com",
        "madfutters+ab5765@madfutters.com",
        "madfutters+ab5766@madfutters.com",
        "madfutters+ab5767@madfutters.com",
        "madfutters+ab5768@madfutters.com",
        "madfutters+ab5769@madfutters.com",
        "madfutters+ab5770@madfutters.com",
        "madfutters+ab5771@madfutters.com",
        "madfutters+ab5772@madfutters.com",
        "madfutters+ab5773@madfutters.com",
        "madfutters+ab5774@madfutters.com",
        "madfutters+ab5775@madfutters.com",
        "madfutters+ab5776@madfutters.com",
        "madfutters+ab5777@madfutters.com",
        "madfutters+ab5778@madfutters.com",
        "madfutters+ab5779@madfutters.com",
        "madfutters+ab5780@madfutters.com",
        "madfutters+ab5781@madfutters.com",
        "madfutters+ab5782@madfutters.com",
        "madfutters+ab5783@madfutters.com",
        "madfutters+ab5784@madfutters.com",
        "madfutters+ab5785@madfutters.com",
        "madfutters+ab5786@madfutters.com",
        "madfutters+ab5787@madfutters.com",
        "madfutters+ab5788@madfutters.com",
        "madfutters+ab5789@madfutters.com",
        "madfutters+ab5790@madfutters.com",
        "madfutters+ab5791@madfutters.com",
        "madfutters+ab5792@madfutters.com",
        "madfutters+ab5793@madfutters.com",
        "madfutters+ab5794@madfutters.com",
        "madfutters+ab5795@madfutters.com",
        "madfutters+ab5796@madfutters.com",
        "madfutters+ab5797@madfutters.com",
        "madfutters+ab5798@madfutters.com",
        "madfutters+ab5799@madfutters.com",
        "madfutters+ab5800@madfutters.com",
        "madfutters+ab5801@madfutters.com",
        "madfutters+ab5802@madfutters.com",
        "madfutters+ab5803@madfutters.com",
        "madfutters+ab5804@madfutters.com",
        "madfutters+ab5805@madfutters.com",
        "madfutters+ab5806@madfutters.com",
        "madfutters+ab5807@madfutters.com",
        "madfutters+ab5808@madfutters.com",
        "madfutters+ab5809@madfutters.com",
        "madfutters+ab5810@madfutters.com",
        "madfutters+ab5811@madfutters.com",
        "madfutters+ab5812@madfutters.com",
        "madfutters+ab5813@madfutters.com",
        "madfutters+ab5814@madfutters.com",
        "madfutters+ab5815@madfutters.com",
        "madfutters+ab5816@madfutters.com",
        "madfutters+ab5817@madfutters.com",
        "madfutters+ab5818@madfutters.com",
        "madfutters+ab5819@madfutters.com",
        "madfutters+ab5820@madfutters.com",
        "madfutters+ab5821@madfutters.com",
        "madfutters+ab5822@madfutters.com",
        "madfutters+ab5823@madfutters.com",
        "madfutters+ab5824@madfutters.com",
        "madfutters+ab5825@madfutters.com",
        "madfutters+ab5826@madfutters.com",
        "madfutters+ab5827@madfutters.com",
        "madfutters+ab5828@madfutters.com",
        "madfutters+ab5829@madfutters.com",
        "madfutters+ab5830@madfutters.com",
        "madfutters+ab5831@madfutters.com",
        "madfutters+ab5832@madfutters.com",
        "madfutters+ab5833@madfutters.com",
        "madfutters+ab5834@madfutters.com",
        "madfutters+ab5835@madfutters.com",
        "madfutters+ab5836@madfutters.com",
        "madfutters+ab5837@madfutters.com",
        "madfutters+ab5838@madfutters.com",
        "madfutters+ab5839@madfutters.com",
        "madfutters+ab5840@madfutters.com",
        "madfutters+ab5841@madfutters.com",
        "madfutters+ab5842@madfutters.com",
        "madfutters+ab5843@madfutters.com",
        "madfutters+ab5844@madfutters.com",
        "madfutters+ab5845@madfutters.com",
        "madfutters+ab5846@madfutters.com",
        "madfutters+ab5847@madfutters.com",
        "madfutters+ab5848@madfutters.com",
        "madfutters+ab5849@madfutters.com",
        "madfutters+ab5850@madfutters.com",
        "madfutters+ab5851@madfutters.com",
        "madfutters+ab5852@madfutters.com",
        "madfutters+ab5853@madfutters.com",
        "madfutters+ab5854@madfutters.com",
        "madfutters+ab5855@madfutters.com",
        "madfutters+ab5856@madfutters.com",
        "madfutters+ab5857@madfutters.com",
        "madfutters+ab5858@madfutters.com",
        "madfutters+ab5859@madfutters.com",
        "madfutters+ab5860@madfutters.com",
        "madfutters+ab5861@madfutters.com",
        "madfutters+ab5862@madfutters.com",
        "madfutters+ab5863@madfutters.com",
        "madfutters+ab5864@madfutters.com",
        "madfutters+ab5865@madfutters.com",
        "madfutters+ab5866@madfutters.com",
        "madfutters+ab5867@madfutters.com",
        "madfutters+ab5868@madfutters.com",
        "madfutters+ab5869@madfutters.com",
        "madfutters+ab5870@madfutters.com",
        "madfutters+ab5871@madfutters.com",
        "madfutters+ab5872@madfutters.com",
        "madfutters+ab5873@madfutters.com",
        "madfutters+ab5874@madfutters.com",
        "madfutters+ab5875@madfutters.com",
        "madfutters+ab5876@madfutters.com",
        "madfutters+ab5877@madfutters.com",
        "madfutters+ab5878@madfutters.com",
        "madfutters+ab5879@madfutters.com",
        "madfutters+ab5880@madfutters.com",
        "madfutters+ab5881@madfutters.com",
        "madfutters+ab5882@madfutters.com",
        "madfutters+ab5883@madfutters.com",
        "madfutters+ab5884@madfutters.com",
        "madfutters+ab5885@madfutters.com",
        "madfutters+ab5886@madfutters.com",
        "madfutters+ab5887@madfutters.com",
        "madfutters+ab5888@madfutters.com",
        "madfutters+ab5889@madfutters.com",
        "madfutters+ab5890@madfutters.com",
        "madfutters+ab5891@madfutters.com",
        "madfutters+ab5892@madfutters.com",
        "madfutters+ab5893@madfutters.com",
        "madfutters+ab5894@madfutters.com",
        "madfutters+ab5895@madfutters.com",
        "madfutters+ab5896@madfutters.com",
        "madfutters+ab5897@madfutters.com",
        "madfutters+ab5898@madfutters.com",
        "madfutters+ab5899@madfutters.com",
        "madfutters+ab5900@madfutters.com",
        "madfutters+ab5901@madfutters.com",
        "madfutters+ab5902@madfutters.com",
        "madfutters+ab5903@madfutters.com",
        "madfutters+ab5904@madfutters.com",
        "madfutters+ab5905@madfutters.com",
        "madfutters+ab5906@madfutters.com",
        "madfutters+ab5907@madfutters.com",
        "madfutters+ab5908@madfutters.com",
        "madfutters+ab5909@madfutters.com",
        "madfutters+ab5910@madfutters.com",
        "madfutters+ab5911@madfutters.com",
        "madfutters+ab5912@madfutters.com",
        "madfutters+ab5913@madfutters.com",
        "madfutters+ab5914@madfutters.com",
        "madfutters+ab5915@madfutters.com",
        "madfutters+ab5916@madfutters.com",
        "madfutters+ab5917@madfutters.com",
        "madfutters+ab5918@madfutters.com",
        "madfutters+ab5919@madfutters.com",
        "madfutters+ab5920@madfutters.com",
        "madfutters+ab5921@madfutters.com",
        "madfutters+ab5922@madfutters.com",
        "madfutters+ab5923@madfutters.com",
        "madfutters+ab5924@madfutters.com",
        "madfutters+ab5925@madfutters.com",
        "madfutters+ab5926@madfutters.com",
        "madfutters+ab5927@madfutters.com",
        "madfutters+ab5928@madfutters.com",
        "madfutters+ab5929@madfutters.com",
        "madfutters+ab5930@madfutters.com",
        "madfutters+ab5931@madfutters.com",
        "madfutters+ab5932@madfutters.com",
        "madfutters+ab5933@madfutters.com",
        "madfutters+ab5934@madfutters.com",
        "madfutters+ab5935@madfutters.com",
        "madfutters+ab5936@madfutters.com",
        "madfutters+ab5937@madfutters.com",
        "madfutters+ab5938@madfutters.com",
        "madfutters+ab5939@madfutters.com",
        "madfutters+ab5940@madfutters.com",
        "madfutters+ab5941@madfutters.com",
        "madfutters+ab5942@madfutters.com",
        "madfutters+ab5943@madfutters.com",
        "madfutters+ab5944@madfutters.com",
        "madfutters+ab5945@madfutters.com",
        "madfutters+ab5946@madfutters.com",
        "madfutters+ab5947@madfutters.com",
        "madfutters+ab5948@madfutters.com",
        "madfutters+ab5949@madfutters.com",
        "madfutters+ab5950@madfutters.com",
        "madfutters+ab5951@madfutters.com",
        "madfutters+ab5952@madfutters.com",
        "madfutters+ab5953@madfutters.com",
        "madfutters+ab5954@madfutters.com",
        "madfutters+ab5955@madfutters.com",
        "madfutters+ab5956@madfutters.com",
        "madfutters+ab5957@madfutters.com",
        "madfutters+ab5958@madfutters.com",
        "madfutters+ab5959@madfutters.com",
        "madfutters+ab5960@madfutters.com",
        "madfutters+ab5961@madfutters.com",
        "madfutters+ab5962@madfutters.com",
        "madfutters+ab5963@madfutters.com",
        "madfutters+ab5964@madfutters.com",
        "madfutters+ab5965@madfutters.com",
        "madfutters+ab5966@madfutters.com",
        "madfutters+ab5967@madfutters.com",
        "madfutters+ab5968@madfutters.com",
        "madfutters+ab5969@madfutters.com",
        "madfutters+ab5970@madfutters.com",
        "madfutters+ab5971@madfutters.com",
        "madfutters+ab5972@madfutters.com",
        "madfutters+ab5973@madfutters.com",
        "madfutters+ab5974@madfutters.com",
        "madfutters+ab5975@madfutters.com",
        "madfutters+ab5976@madfutters.com",
        "madfutters+ab5977@madfutters.com",
        "madfutters+ab5978@madfutters.com",
        "madfutters+ab5979@madfutters.com",
        "madfutters+ab5980@madfutters.com",
        "madfutters+ab5981@madfutters.com",
        "madfutters+ab5982@madfutters.com",
        "madfutters+ab5983@madfutters.com",
        "madfutters+ab5984@madfutters.com",
        "madfutters+ab5985@madfutters.com",
        "madfutters+ab5986@madfutters.com",
        "madfutters+ab5987@madfutters.com",
        "madfutters+ab5988@madfutters.com",
        "madfutters+ab5989@madfutters.com",
        "madfutters+ab5990@madfutters.com",
        "madfutters+ab5991@madfutters.com",
        "madfutters+ab5992@madfutters.com",
        "madfutters+ab5993@madfutters.com",
        "madfutters+ab5994@madfutters.com",
        "madfutters+ab5995@madfutters.com",
        "madfutters+ab5996@madfutters.com",
        "madfutters+ab5997@madfutters.com",
        "madfutters+ab5998@madfutters.com",
        "madfutters+ab5999@madfutters.com",
        "madfutters+ab6000@madfutters.com",
        "madfutters+ab6001@madfutters.com",
        "madfutters+ab6002@madfutters.com",
        "madfutters+ab6003@madfutters.com",
        "madfutters+ab6004@madfutters.com",
        "madfutters+ab6005@madfutters.com",
        "madfutters+ab6007@madfutters.com",
        "madfutters+ab6008@madfutters.com",
        "madfutters+ab6009@madfutters.com", 
    ]
};
function randomAccount() {
    return accounts.emails[Math.floor(Math.random() * accounts.emails.length)];
}
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let madfutclient = async ()=>{
    console.log('B', MadfutClient.inUse);
    const madfutClient = new MadfutClient(config.appCheckToken);
    while(!madfutClient.loggedIn){
        let email = randomAccount();
        await madfutClient.login(email);
    }
    console.log('A', MadfutClient.inUse);
    return madfutClient;
};
process.on('unhandledRejection', async (error)=>{
    let madfutClient = await madfutclient();
    signInError();
    async function signInError() {
        //let password = newAcount.password
        const email = randomAccount();
        await madfutClient.login(email.toString()).catch(async (err)=>{
            // await db.runPromise(`DELETE FROM accounts WHERE email = "${email}"`);
            console.log(`${email} banned`);
            signInError();
        });
        console.log(`Succesfully connected ${email}`);
    }
});
async function signIn() {
    let madfutClient = await madfutclient();
    const email = randomAccount();
    await madfutClient.login(email).catch(async (err)=>{
        await db.runPromise(`DELETE FROM accounts WHERE email = "${email}"`);
        console.log(`${email} banned`);
    });
    console.log(`Succesfully connected ${email}`);
}
function randomPlayer() {
    return players[Math.floor(Math.random() * players.length)];
}
function randomurl() {
    return players[Math.floor(Math.random() * players.length)];
}
function randomPacks() {
    const packs = [
        "silver_special",
        "bf_nine_special",
        "bf_five_special",
        "totw",
        "fatal_rare",
        "bf_93_special",
        "bf_95_special",
        "fatal_special",
        "double_special",
        "triple_special",
        "gold",
        "random",
        "gold_super",
        "rare",
        "bf_94_special",
        "bf_eight_special",
        "free",
        "silver_plus",
        "no_totw_special",
        "fatal_silver",
        "85_special",
        "bf_89_special",
        "bf_88_special",
        "bf_four_special",
        "bf_seven_special",
        "gold_mega",
        "special",
        "rainbow",
        "bf_six_special",
        "bf_92_special",
        "80+",
        "bf_86_special",
        "fatal_nonrare",
        "bf_91_special",
        "bf_87_special",
        "silver",
        "op_special",
        "bf_90_special",
        "fatal_rare_silver",
        "pp_sbc_real_madrid_icons",
        "pp_new_87_91",
        "pp_fut_champs",
        "pp_new_81_84",
        "pp_special",
        "pp_special_88_92",
        "pp_best_1",
        "pp_new_83_86",
        "pp_new_77_82",
        "pp_new_85_88",
        "pp_bad_1",
        "pp_totw",
        "pp_new_special",
        "pp_icons_86_92",
        "pp_mega",
        "pp_good_1",
        "pp_icon",
        "pp_special_83_86",
        "pp_special_81_84",
        "pp_special_85_88",
        "pp_special_86_89"
    ];
    return packs[Math.floor(Math.random() * packs.length)];
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function logMessage(action, userId, coins, cards, packs) {
    bot.sendMessage("1060490536785563658", `Action: ${action}\nUserId: ${userId}\nTag: <@${userId}>\nCoins: ${coins}\nCards: ${cards}\nPacks: ${packs}\nUnix: ${Math.round(Date.now() / 1000)}`);
    return;
}
let packs1 = [
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
async function freeTrade(username, amount) {
    console.log(`sent ${username} ${amount} trades`);
    let ftRunning = "2";
    let times = amount;
    intervalfuncft();
    let count = 0;
    async function intervalfuncft() {
        let madfutClient;
        for(let i = 0; i < times;){
            madfutClient = await madfutclient();
            let tradeRef;
            if (ftRunning === "1") {
                return madfutClient.logout();
            }
            let traderName;
            try {
                traderName = await madfutClient.returnUserInfo(username);
            } catch (error) {
                await madfutClient.logout();
                return null;
            }
            console.log(traderName);
            try {
                tradeRef = await madfutClient.inviteUser(traderName, `BOT TRADES ${times}/${amount}`);
                console.log(`${username} accepted invite  MAIN.`);
            } catch  {
                if (++count > 4) return madfutClient.logout();
                console.log(`${username} rejected invite.`);
                await madfutClient.logout();
                continue;
            }
            try {
                await madfutClient.doTrade(tradeRef, async (profile)=>({
                        receiveCoins: false,
                        receiveCards: false,
                        receivePacks: false,
                        giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                        giveCoins: 10000000,
                        givePacks: packs1
                    })
                );
                --times;
                console.log(`${username} ${times} trades left`);
                count > 0 && count--;
                //console.log(`Completed trade with ${userId}`);
                await madfutClient.logout();
                //console.log(`Completed trade with ${username}`);
                ftRunning = "1";
                setTimeout(()=>{
                    i++;
                    ftRunning = "2";
                    intervalfuncft();
                }, 4000);
            } catch (_err) {
                await madfutClient.logout();
                console.log(`Unlimited trade with ${username} failed: Player left`);
            }
        }
        madfutClient && madfutClient?.logout();
    }
}
let amount1 = 0;
async function freeTradeUnlimited(username, coins, packs) {
    while(true){
        let madfutClient = await madfutclient();
        let tradeRef;
        try {
            tradeRef = await madfutClient.inviteUser(username);
            console.log(`${username} accepted invite.`);
        } catch  {
            console.log(`${username} rejected invite or timed out.`);
            break;
        }
        try {
            await madfutClient.doTrade(tradeRef, async (profile)=>({
                    receiveCoins: false,
                    receiveCards: false,
                    receivePacks: false,
                    giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                    giveCoins: 10000000,
                    givePacks: packs
                })
            );
            console.log(`Completed unlimited trade with ${username}`);
            amount1++;
            await madfutClient.logout();
            console.log("switched");
        } catch (_err) {
            console.log(`Unlimited trade with ${username} failed: Player left`);
            await madfutClient.logout();
        }
    }
}
async function sendTrades(interaction, userId, cards, packs, coins, amount) {
    const message = await bot.sendMessage(interaction.channel.id, {
        embeds: [
            {
                color: 3066993,
                description: `${userId} has ${amount} trade(s)`,
                footer: {
                    text: "Don't delete this message until the counter is at zero!"
                }
            }
        ]
    });
    let madfutClient1 = await madfutclient();
    let ftRunning = "2";
    console.log(`sent ${userId} ${amount} trades`);
    let enablePacks;
    if (packs === true) {
        let packs = [
            {
                pack: "query,MODDED PACK FOR MADFUT,,64,99,-1,-1,-1,false,100",
                amount: 1
            },
            {
                pack: "query,MODDED PACK FOR MADFUT,,90,99,-1,-1,-1,false,100",
                amount: 1
            },
            {
                pack: "query,MODDED PACK FOR MADFUT,,80,99,-1,-1,-1,false,100",
                amount: 1
            }, 
        ];
        enablePacks = packs;
    } else if (packs === false) {
        enablePacks = [];
    }
    let times = amount;
    intervalfunc();
    let count = 0;
    async function intervalfunc() {
        for(let i = 0; i < times;){
            let madfutClient = await madfutclient();
            let tradeRef;
            if (ftRunning === "1") {
                return await madfutClient.logout();
            }
            let traderName;
            try {
                traderName = await madfutClient.returnUserInfo(userId);
            } catch (error) {
                await madfutClient.logout();
                return null;
            }
            console.log(traderName);
            try {
                tradeRef = await madfutClient.inviteUser(traderName, `BOT TRADES ${times}/${amount}`);
                console.log(`${userId} accepted invite.`);
            } catch  {
                if (++count > 4) return madfutClient.logout();
                console.log(`${userId} rejected invite.`);
                await madfutClient.logout();
                continue;
            }
            try {
                if (cards === true) {
                    await madfutClient.doTrade(tradeRef, async (profile)=>({
                            receiveCoins: false,
                            receiveCards: false,
                            receivePacks: false,
                            giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                            giveCoins: coins,
                            givePacks: enablePacks
                        })
                    );
                } else if (cards === false) {
                    await madfutClient.doTrade(tradeRef, async (profile)=>({
                            receiveCoins: false,
                            receiveCards: false,
                            receivePacks: false,
                            giveCards: [],
                            giveCoins: coins,
                            givePacks: enablePacks
                        })
                    );
                }
                times = times - 1;
                await bot.editMessage(interaction.channel.id, message.id, {
                    embeds: [
                        {
                            color: 3066993,
                            description: `${userId} have ${times} trade(s) left`,
                            footer: {
                                text: "Don't delete this message until the counter is at zero!"
                            }
                        }
                    ]
                });
                await madfutClient.logout();
                console.log(`${userId} has ${times} left`);
                ftRunning = "1";
                setTimeout(()=>{
                    i++;
                    ftRunning = "2";
                    intervalfunc();
                }, 2000);
            } catch (_err) {
                console.log(`Unlimited trade with ${userId} failed: Player left`);
            }
        }
    }
    madfutClient1 && madfutClient1?.logout();
}
bot.on("send", async (interaction, userId, cards, packs, coins, amount)=>{
    let username = userId.toLowerCase();
    await sendTrades(interaction, username, cards, packs, coins, amount);
    interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Command successful.```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
});
async function freetradepacks(interaction, userId, amount, coins, packs) {
    // const message = await interaction.createFollowup({
    console.log(`sent ${userId} ${amount} trades`);
    const message = await bot.sendMessage(interaction.channel.id, {
        embeds: [
            {
                color: 3066993,
                description: `${userId} has ${amount} trade(s)`,
                footer: {
                    text: "Don't delete this message until the counter is at zero!"
                }
            }
        ]
    });
    let madfutClient = await madfutclient();
    const traderName1 = await madfutClient.returnUserInfo(userId);
    console.log(traderName1);
    let ftRunning = "2";
    let times = amount;
    let count = 0;
    intervalfuncft();
    async function intervalfuncft() {
        for(let i = 0; i < times;){
            madfutClient = await madfutclient();
            let tradeRef;
            if (ftRunning === "1") {
                return madfutClient.logout();
            }
            let traderName;
            try {
                traderName = await madfutClient.returnUserInfo(userId);
            } catch (error) {
                await madfutClient.logout();
                return null;
            }
            console.log(traderName);
            try {
                tradeRef = await madfutClient.inviteUser(traderName, ` BOT TRADES ${times}/${amount}`);
                console.log(`${userId} accepted invite.`);
            } catch  {
                if (++count > 4) return madfutClient.logout();
                console.log(`${userId} rejected invite.`);
                await madfutClient.logout();
                continue;
            }
            try {
                await madfutClient.doTrade(tradeRef, async (profile)=>({
                        receiveCoins: false,
                        receiveCards: false,
                        receivePacks: false,
                        giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                        giveCoins: 10000000,
                        givePacks: packs
                    })
                );
                --times;
                console.log(`${userId} ${times} trades left`);
                count > 0 && count--;
                //console.log(`Completed trade with ${userId}`);
                await madfutClient.logout();
                await bot.editMessage(message.channel.id, message.id, {
                    embeds: [
                        {
                            color: 3066993,
                            description: `${userId} has ${times} trade(s)`,
                            footer: {
                                text: "Don't delete this message until the counter is at zero!"
                            }
                        }
                    ]
                });
                //console.log(`Completed trade with ${username}`);
                ftRunning = "1";
                setTimeout(()=>{
                    i++;
                    ftRunning = "2";
                    intervalfuncft();
                }, 4000);
            } catch (_err) {
                await madfutClient.logout();
                console.log(`Unlimited trade with ${userId} failed: Player left`);
            }
        }
        madfutClient && madfutClient?.logout();
    }
}
function verifyWallet(wallet, coins, cards, packs, verb, walletOwner) {
    if (wallet.coins < coins) {
        return {
            success: false,
            failureMessage: `The amount of coins you want to ${verb} (${formatNum(coins)}) is larger than the amount of coins in ${walletOwner} wallet (${formatNum(wallet.coins)}).`
        };
    }
    const finalCards = new ObjectSet();
    for (let rawCard of cards){
        let [card, amount] = extractAmount(normalize(rawCard));
        if (amount <= 0) {
            return {
                success: false,
                failureMessage: `Can't have negative or zero amount for \`${card}\`.`
            };
        }
        const foundCard = wallet.cards.find((walletCard)=>normalize(walletCard.displayName).startsWith(card)
        );
        if (!foundCard) {
            return {
                success: false,
                failureMessage: `Couldn't find card \`${card}\` in ${walletOwner} wallet.`
            };
        }
        if (foundCard.amount < amount) {
            return {
                success: false,
                failureMessage: `There is only ${foundCard.amount} ${foundCard.displayName} of the desired ${amount} in ${walletOwner} wallet.`
            };
        }
        if (finalCards.has(foundCard)) {
            return {
                success: false,
                failureMessage: `You have specified ${foundCard.displayName} multiple times for ${walletOwner} wallet. Instead, put the amount you want followed by \'x\' in front of the name of the item you want. For example, \`3x98pele\` will pick the 98 Pelé card 3 times.`
            };
        }
        finalCards.add({
            displayName: foundCard.displayName,
            amount,
            id: foundCard.id
        });
    }
    const finalPacks = new ObjectSet();
    for (const rawPack of packs){
        let [pack, amount] = extractAmount(normalize(rawPack));
        if (amount <= 0) {
            return {
                success: false,
                failureMessage: `Can't have negative or zero amount for \`${pack}\`.`
            };
        }
        const foundPack = wallet.packs.find((walletPack)=>normalize(walletPack.displayName).startsWith(normalize(pack))
        );
        if (!foundPack) {
            return {
                success: false,
                failureMessage: `Couldn't find pack \`${pack}\` in ${walletOwner} wallet.`
            };
        }
        if (foundPack.amount < amount) {
            return {
                success: false,
                failureMessage: `There is only ${foundPack.amount} ${foundPack.displayName} of the desired ${amount} in ${walletOwner} wallet.`
            };
        }
        if (finalPacks.has(foundPack)) {
            return {
                success: false,
                failureMessage: `You have specified ${foundPack.displayName} multiple times for ${walletOwner} wallet. Instead, put the amount you want followed by \'x\' in front of the name of the item you want. For example, \`3x98pele\` will pick the 98 Pelé card 3 times.`
            };
        }
        finalPacks.add({
            displayName: foundPack.displayName,
            amount,
            id: foundPack.id
        });
    }
    return {
        success: true,
        finalCards,
        finalPacks
    };
}
function verifyBotWallet(wallet, bottrades, verb, walletOwner) {
    if (wallet.bottrades < bottrades) {
        return {
            success: false,
            failureMessage: `The amount of bot trades you want to ${verb} (${formatNum(bottrades)}) is larger than the amount of bot trades in ${walletOwner} wallet (${formatNum(wallet.bottrades)}).`
        };
    }
    return {
        success: true
    };
}
function verifyCoins(coins, min, max, verb) {
    if (coins < min) {
        return `You cannot ${verb} less than ${formatNum(min)} coins.`;
    }
    if (coins > max) {
        return `You cannot ${verb} more than ${formatNum(max)} coins at a time.`;
    }
    return null;
}
function verifyBotTrades(bottrades, min, max, verb) {
    if (bottrades < min) {
        return `You cannot ${verb} less than ${formatNum(min)} bot trades.`;
    }
    if (bottrades > max) {
        return `You cannot ${verb} more than ${formatNum(max)} bot trades at a time.`;
    }
    return null;
}
//const madfutClient = new MadfutClient(config.appCheckToken);
//await madfutClient.login(config.madfutEmail, config.madfutPassword); // mrsossoftware@gmail.com or mrsos.software@gmail.com
console.log("Madfut client logged in SBCFUT");
bot.on("end-transaction-me", (interaction)=>{
    db.endTransaction(interaction.member.id);
    interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: `✅ Successfully force-ended all transactions`
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} force-ended the transactions`);
});
bot.on("link", async (interaction, username)=>{
    await interaction.createMessage({
        embeds: [
            {
                color: 22500,
                description: `A verification invite has been sent to \`${username}\` on MADFUT. Accept it within 1 minute to link your MADFUT account to your Discord account. Any previous MADFUT accounts linked to this Discord account will be unlinked.`
            }
        ]
    });
    const madfutUsername = username.toLowerCase();
    let madfutClient = await madfutclient();
    try {
        const traderName = await madfutClient.returnUserInfo(madfutUsername);
        console.log('Invite user ' + username);
        const trade = await madfutClient.inviteUser(traderName, "MADFUT LINKING");
        try {
            await madfutClient.doTrade(trade, async (profile)=>({
                    receiveCoins: false,
                    receiveCards: false,
                    receivePacks: false,
                    giveCards: [],
                    giveCoins: 0,
                    givePacks: []
                })
            );
            await madfutClient.logout();
        } catch (_err) {
            await madfutClient.logout();
            return;
        }
        // await db.setMadfutUserByDiscordUser(interaction.member!.id, madfutUsername, traderName); 
        if (await db.setMadfutUserByDiscordUser(interaction.member.id, madfutUsername, traderName)) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 3319890,
                        description: `Your MADFUT account \`${username}\` has been successfully linked to this Discord account!`
                    }
                ]
            });
        } else {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "Failed to link your account. Your MADFUT account is already linked to another discord account. Unlink them first using `/unlink` on that Discord account."
                    }
                ]
            });
        }
    } catch (err) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    description: "Linking your MADFUT account to your Discord account has been failed. You declined the invite on MADFUT or didn't accept within 1 minute."
                }
            ]
        });
    }
});
bot.on("viewlink", async (interaction)=>{
    await interaction.acknowledge();
    const username = await db.getMadfutUserByDiscordUser(interaction.member.id);
    if (username) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 3319890,
                    title: `${username}`,
                    description: "```The MADFUT username is linked to your Discord account.```"
                }
            ]
        });
    } else {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    description: "```There is no MADFUT username linked to your Discord account. If you want to link one, use `/madfut link <username>`.```"
                }
            ]
        });
    }
});
bot.on("unlink", async (interaction)=>{
    await db.setMadfutUserByDiscordUser(interaction.member.id, null, "");
    await interaction.editParent({
        embeds: [
            {
                color: 3319890,
                description: "```Your MADFUT account has been successfully unlinked from your Discord account.````"
            }
        ],
        components: []
    });
});
bot.on("updatenames", async (interaction, names)=>{
    await db.updateMappings(names);
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                description: "```Mappings successfully updated!```"
            }
        ]
    });
});
bot.on("wallet", async (interaction, userId, page)=>{
    if (page <= 0) {
        await interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```The page in your wallet you want to view cannot be smaller than 1.```"
                }
            ],
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    await interaction.acknowledge();
    const wallet = await db.getWallet(userId, page);
    const numPages = Math.max(1, Math.ceil(wallet.count / 50));
    if (page > numPages) {
        interaction.editOriginalMessage({
            embeds: [
                {
                    color: 15158332,
                    description: `You cannot view page ${page} because your wallet only has ${numPages} page${numPages === 1 ? "" : "s"}.`
                }
            ]
        });
        return;
    }
    const walletFields = [
        {
            name: "<:coinsa:1048536017872887819> ```Coins``` ",
            value: `You currently have  **${formatNum(wallet.coins)} coins**.`
        },
        {
            name: "🤖```Bot Trades```",
            value: `You currently have **${formatNum(wallet.bottrades)} bot trades**.`
        }
    ];
    if (wallet.cards.length === 0) {
        walletFields.push({
            name: "<:sbc_128:1048535781595172934>```Cards```",
            value: "```You have no cards.```",
            inline: true
        });
    } else {
        let latestField = {
            name: "<:sbc_128:1048535781595172934>```Cards```",
            value: "",
            inline: true
        };
        let first = true;
        for (const card of wallet.cards){
            let cardString = `${first ? "" : "\n"}${card.amount}x **${card.displayName}**`;
            if (latestField.value.length + cardString.length > 1024) {
                walletFields.push(latestField);
                latestField = {
                    name: "<:TOTS_PACK:983384447523115018> ```Packs Cards (cont.)```",
                    value: ``,
                    inline: true
                };
                cardString = `${card.amount}x **${card.displayName}**`;
            }
            latestField.value += cardString;
            first = false;
        }
        walletFields.push(latestField);
    }
    if (wallet.packs.length === 0) {
        walletFields.push({
            name: "<:TOTS_PACK:983384447523115018> ```Packs  ```",
            value: "```You have no packs.```",
            inline: true
        });
    } else {
        let latestField = {
            name: "<:TOTS_PACK:983384447523115018> ```Packs  ```",
            value: ``,
            inline: true
        };
        let first = true;
        for (const pack of wallet.packs){
            let packString = `${first ? "" : "\n"}${pack.amount}x **${pack.displayName}**`;
            if (latestField.value.length + packString.length > 1024) {
                walletFields.push(latestField);
                latestField = {
                    name: "<:TOTS_PACK:983384447523115018>   ```   Packs (cont.)```",
                    value: "",
                    inline: true
                };
                packString = `${pack.amount}x **${pack.displayName}**`;
            }
            latestField.value += packString;
            first = false;
        }
        walletFields.push(latestField);
    }
    interaction.editOriginalMessage({
        embeds: [
            {
                color: 3319890,
                author: {
                    name: ` WALLET (page ${page}/${numPages})`,
                    icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wallet_Flat_Icon.svg/2048px-Wallet_Flat_Icon.svg.png"
                },
                description: `Wallet from <@!${userId}> is shown below.`,
                fields: walletFields
            }
        ]
    });
});
bot.on("deposit", async (interaction, multiple)=>{
    await interaction.acknowledge();
    const userId = interaction.member.id;
    const username = await db.getMadfutUserByDiscordUser(userId);
    if (!username) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    title: `${username}`,
                    description: "```Cannot deposit as there is no MADFUT username linked to your Discord account. To link MADFUT account, use /madfut link <username>.```"
                }
            ]
        });
        return;
    }
    if (!multiple) interaction.editOriginalMessage({
        embeds: [
            {
                color: 3319890,
                title: `${username}`,
                description: "```Your MADFUT account has been invited to deposit items. You have 1 minute to accept the invite. Once you are in the trade, there is no time limit.```"
            }
        ]
    });
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    title: `${username}..... You cannot deposit because ${stResult.error}`,
                    description: "try using /mf force-end-tracsaction-me"
                }
            ]
        });
        return;
    }
    if (multiple) {
        interaction.editOriginalMessage({
            embeds: [
                {
                    color: 3319890,
                    title: `${username}`,
                    description: "```✅ Multiple deposit mode started for you To exit, simply decline or leave the trade, or wait 1 minute.```"
                }
            ]
        });
    }
    try {
        do {
            let tradeRef;
            let madfutClient = await madfutclient();
            try {
                const traderName = await madfutClient.returnUserInfo(username);
                tradeRef = await madfutClient.inviteUser(traderName, "Madfut Deposit");
            } catch (err) {
                await madfutClient.logout();
                if (multiple) interaction.editOriginalMessage({
                    embeds: [
                        {
                            color: 15158332,
                            title: `${username}`,
                            description: "```You failed to accept the invite in time.```"
                        }
                    ]
                });
                return;
            }
            let tradeResult;
            try {
                tradeResult = await madfutClient.doTrade(tradeRef, async (profile)=>({
                        receiveCoins: true,
                        giveCoins: 0,
                        givePacks: [],
                        receivePacks: true,
                        giveCards: [],
                        receiveCards: true
                    })
                );
                const transactions = [];
                if (tradeResult.netCoins > 10000000) {
                    const wallet = await db.getWallet(userId);
                    transactions.push(db.addCoins(userId, -tradeResult.netCoins));
                    transactions.push(db.addCoins(userId, -wallet.coins));
                    transactions.push(db.addBotTrades(userId, -wallet.bottrades));
                    for (const card of wallet.cards){
                        transactions.push(db.addCards(userId, card.id, -card.amount));
                    }
                    for (const pack of wallet.packs){
                        transactions.push(db.addPacks(userId, pack.id, -pack.amount));
                    }
                    await Promise.all(transactions);
                } else {
                    let coinsAdd = 0;
                    let cardsAdd = "null";
                    let packsAdd = "null";
                    transactions.push(db.addCoins(userId, tradeResult.netCoins));
                    coinsAdd = tradeResult.netCoins;
                    for (const cardId of tradeResult.receivedCards){
                        transactions.push(db.addCards(userId, cardId, 1));
                        if (cardsAdd === "null") {
                            cardsAdd = cardId;
                        } else {
                            cardsAdd += `|${cardId}`;
                        }
                    }
                    for(const packId in tradeResult.receivedPacks){
                        let maxGold = 20;
                        let maxCustom = 1;
                        transactions.push(db.addPacks(userId, packId, tradeResult.receivedPacks[packId]));
                        if (packsAdd === "null") {
                            packsAdd = `${tradeResult.receivedPacks[packId]}x ${packId}`;
                        } else {
                            packsAdd += `|${tradeResult.receivedPacks[packId]}x ${packId}`;
                        }
                    }
                    logMessage("Deposit", interaction.member.id, coinsAdd, cardsAdd, packsAdd);
                    await Promise.all(transactions);
                    await madfutClient.logout();
                }
            } catch (err1) {
                if (multiple) interaction.createFollowup({
                    embeds: [
                        {
                            color: 15158332,
                            title: `${username}`,
                            description: "```You left the trade.```"
                        }
                    ]
                });
                await madfutClient.logout();
                return;
            }
            await madfutClient.logout();
        }while (multiple)
    } finally{
        db.endTransaction(userId);
    }
    if (!multiple) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 3319890,
                    title: `${username}`,
                    description: "``` ✅ Your deposit was successful!```"
                }
            ]
        });
    }
});
const transactions1 = [];
async function withdrawBotTrades(interaction, userId, username, bottrades, walletVerification) {
    if (!walletVerification.success) {
        interaction.createFollowup(walletVerification.failureMessage);
        return;
    }
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Withdraw successful started. If you want to exit the withdraw, decline, leave the trade, or wait 1 minute. This mode will also exit once you have received all the items you wanted to withdraw.```"
            }
        ]
    });
    let ftRunning = "2";
    let times = bottrades;
    for(let i = 0; i < times;){
        let madfutClient = await madfutclient();
        let tradeRef;
        if (ftRunning === "1") {
            return;
        }
        try {
            const traderName = await madfutClient.returnUserInfo(username);
            tradeRef = await madfutClient.inviteUser(traderName, "Bot Trade");
        } catch  {
            continue;
        }
        try {
            await madfutClient.doTrade(tradeRef, async (profile)=>({
                    receiveCoins: false,
                    receiveCards: false,
                    receivePacks: false,
                    giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                    giveCoins: 10000000,
                    givePacks: packs1
                })
            );
            i++;
            transactions1.push(db.removeBotTrades(userId, 1));
        } catch (_err) {
            return;
        }
        await madfutClient.logout();
    }
}
async function withdraw(interaction, userId, username, coins, walletVerification) {
    if (!walletVerification.success) {
        interaction.createFollowup(walletVerification.failureMessage);
        return;
    }
    const { finalCards: cardsToGive , finalPacks: packsToGive  } = walletVerification;
    let coinsToGive = coins;
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Withdraw successful started. If you want to exit the withdraw, decline, leave the trade, or wait 1 minute. This mode will also exit once you have received all the items you wanted to withdraw.```"
            }
        ]
    });
    let madfutClient = await madfutclient();
    while(coinsToGive > 0 || cardsToGive.size > 0 || packsToGive.size > 0){
        let madfutClient = await madfutclient();
        let tradeRef;
        try {
            const traderName = await madfutClient.returnUserInfo(username);
            tradeRef = await madfutClient.inviteUser(traderName, " Bot Trade");
        } catch (err) {
            console.log(err);
            return;
        }
        const giveCoins = Math.min(250000, coinsToGive);
        const giveCards = [];
        for (const card1 of cardsToGive){
            giveCards.push(card1);
            if (giveCards.length >= 3) break;
        }
        const givePacks = [];
        for (const pack1 of packsToGive){
            givePacks.push(pack1);
            if (givePacks.length >= 3) break;
        }
        try {
            const tradeResult = await madfutClient.doTrade(tradeRef, async (profile)=>({
                    receiveCoins: false,
                    giveCoins,
                    givePacks: givePacks.map((pack)=>({
                            pack: pack.id,
                            amount: 1
                        })
                    ),
                    receivePacks: false,
                    giveCards: giveCards.map((card)=>card.id
                    ),
                    receiveCards: false
                })
            );
            const transactions = [];
            let coinsWith = 0;
            let cardsWith = "null";
            let packsWith = "null";
            transactions.push(db.addCoins(userId, tradeResult.netCoins));
            coinsWith = tradeResult.netCoins;
            for (const cardId of tradeResult.givenCards){
                transactions.push(db.addCards(userId, cardId, -1));
                if (cardsWith === "null") {
                    cardsWith = cardId;
                } else {
                    cardsWith += `|${cardId}`;
                }
            }
            for(const packId in tradeResult.givenPacks){
                transactions.push(db.addPacks(userId, packId, -tradeResult.givenPacks[packId]));
                if (packsWith === "null") {
                    packsWith = `${tradeResult.givenPacks[packId]}x ${packId}`;
                } else {
                    packsWith += `|${tradeResult.givenPacks[packId]}x ${packId}`;
                }
            }
            await Promise.all(transactions);
            // logMessage("Withdraw", interaction.member!.id, coinsWith, cardsWith, packsWith);
            coinsToGive -= giveCoins;
            for (const cardId1 of tradeResult.givenCards){
                const card = cardsToGive.getById(cardId1);
                if (!card) return;
                card.amount--;
                if (card.amount <= 0) {
                    cardsToGive.delete(card);
                }
            }
            for(const packId1 in tradeResult.givenPacks){
                const pack = packsToGive.getById(packId1);
                if (!pack) return;
                pack.amount -= tradeResult.givenPacks[packId1];
                if (pack.amount <= 0) {
                    packsToGive.delete(pack);
                }
            }
            console.log("dead");
            await madfutClient.logout();
        } catch  {
            console.log("dead");
        }
    }
}
bot.on("withdraw-all", async (interaction)=>{
    const userId = interaction.member.id;
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        const username = await db.getMadfutUserByDiscordUser(userId);
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    title: ` ${username}  You cannot withdraw because ${stResult.error}.`,
                    description: "```try ...  /mf force-end-trasaction-me```"
                }
            ]
        });
        return;
    }
    try {
        await interaction.acknowledge();
        const username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```Cannot withdraw as there is no MADFUT username linked to your Discord account. To link one, use /mf link <username>.```"
                    }
                ]
            });
            return;
        }
        const wallet = await db.getWallet(userId);
        if (wallet.coins <= 0 && wallet.cards.length === 0 && wallet.packs.length === 0) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```❌ You cannot enter withdraw-all mode because your wallet is completely empty.```"
                    }
                ],
                flags: Constants.MessageFlags.EPHEMERAL
            });
            return;
        }
        await withdraw(interaction, userId, username, wallet.coins, {
            success: true,
            finalCards: new ObjectSet(wallet.cards),
            finalPacks: new ObjectSet(wallet.packs)
        });
    } finally{
        db.endTransaction(userId);
    }
});
bot.on("withdraw", async (interaction, coins, cards, packs, bottrades)=>{
    let madfutClient = await madfutclient();
    const coinsError = verifyCoins(coins, 0, Number.MAX_SAFE_INTEGER, "withdraw");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    const BotTradesError = verifyBotTrades(bottrades, 0, Number.MAX_SAFE_INTEGER, "withdraw");
    if (BotTradesError) {
        interaction.createMessage(BotTradesError);
        return;
    }
    const userId = interaction.member.id;
    const username = await db.getMadfutUserByDiscordUser(userId);
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    title: ` ${username}  You cannot withdraw because ${stResult.error}.`,
                    description: "```try ...  /mf force-end-trasaction-me```"
                }
            ]
        });
        return;
    }
    try {
        await interaction.acknowledge();
        const username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```There is no MADFUT account linked to your Discord account so you cannot withdraw. To link one, use `/madfut link <username>````."
                    }
                ]
            });
            return;
        }
        const wallet = await db.getWallet(userId);
        if (bottrades > 0 && coins > 0) {
            interaction.createMessage("```You can not withdraw something else with bot trades```");
            return;
        }
        if (bottrades > 0 && cards.length > 0) {
            interaction.createMessage("```You can not withdraw something else with bot trades```");
            return;
        }
        if (bottrades > 0 && packs.length > 0) {
            interaction.createMessage("```You can not withdraw something else with bot trades```");
            return;
        }
        if (coins > 0 || cards.length > 0 || packs.length > 0) {
            await withdraw(interaction, userId, username, coins, verifyWallet(wallet, coins, cards, packs, "withdraw", "your"));
            await madfutClient.logout();
        } else {
            await withdrawBotTrades(interaction, userId, username, bottrades, verifyBotWallet(wallet, bottrades, "withdraw", "your"));
            await madfutClient.logout();
        }
    } finally{
        db.endTransaction(userId);
    }
});
const moneyChannels = [
    config.commandsChannelId,
    config.tradingChannelId
];
const Adminchannel = [
    config.adminChannelId,
    config.commandsChannelId,
    config.tradingChannelId
];
const moneyChannelsMention = `<#${moneyChannels[0]}> or <#${moneyChannels[1]}>`;
//level command
let codeDuration;
let rawCodeDuration;
let codeEndTimeout;
let test = 0;
async function codeUnlimited(codename, username, coins, packs) {
    let madfutClient = await madfutclient();
    let ftRunning = "2";
    const dbDuration = await db.getCodeDuration(username);
    botintervalfunc();
    async function botintervalfunc() {
        for(let i = 0; i < 1;){
            let tradeRef;
            if (ftRunning === "1") {
                return;
            }
            try {
                tradeRef = await madfutClient.inviteUser(username, `trades`);
            //console.log(`${username} accepted invite.`);
            } catch  {
                console.log(`${username} rejected invite.`);
                continue;
            }
            try {
                await madfutClient.doTrade(tradeRef, async (profile)=>({
                        receiveCoins: false,
                        receiveCards: false,
                        receivePacks: false,
                        giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                        giveCoins: coins,
                        givePacks: packs
                    })
                );
                console.log(`Completed trade with ${username} using bot code ${codename}`);
                //console.log(`Completed trade with ${userId}`);
                //console.log(`Completed trade with ${username}`);
                ftRunning = "1";
                setTimeout(async ()=>{
                    if (dbDuration.toString() > Math.round(Date.now() / 1000).toString()) {
                        ftRunning = "2";
                        botintervalfunc();
                    } else {
                        await db.runPromise(`DELETE FROM code WHERE codename = "${codename}"`);
                        console.log(`${codename} expired, successfully removed from db`);
                        return;
                    }
                }, 10000);
            } catch (_err) {
                console.log(`Unlimited trade with ${username} failed: Player left`);
            }
        }
    }
//}
}
async function codeTrade(username, codename, duration) {
    let madfutClient = await madfutclient();
    try {
        madfutClient.addInviteListener(async (username1)=>{
            if (username1.startsWith(username)) {
                codeUnlimited(codename, username1.split(",")[0], 250000, packs1);
            }
        }, codename);
    } catch (_err) {
        console.log("error");
    }
}
let matchStartTimeout;
let matchMessage;
let invitemessage;
bot.on("invite", async (interaction, amount, packs, username, coins)=>{
    if (packs.length > 3) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15417396,
                    description: "```❌ You can't pick more than 3 packs.```"
                }
            ],
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    const usernameMe = await db.getMadfutUserByDiscordUser(interaction.member.id);
    if (!usernameMe) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15417396,
                    description: "```❌ You have not linked your Madfut account.```"
                }
            ],
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    // const stResult = db.startTransaction(interaction.member!.id);
    //     if (!stResult.success) {
    //     interaction.createMessage({embeds: [
    //         {
    //             color: 15158332,
    //             description: "❌ You have a ongoing transaction."
    //         }
    //     ],
    //     flags: Constants.MessageFlags.EPHEMERAL
    // });
    //     return;
    // }
    const invatation = await interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                title: `${username}`,
                description: "```You have been invited on madfut. Accept the invite and do the trade. After the acception you have to click on the button if the pack was correct or wrong.\nYou have 1 minute to accept the trade, otherwise you have to do the command again.```"
            }
        ]
    });
    // for (let i = 0; i < 1;) {
    //     let tradeRef;
    //     try {
    //         tradeRef = await madfutClient.inviteWithTimeout(usernameMe, 60000, `${generateString(10)}`);
    //         console.log(`${usernameMe} accepted invite.`);
    //     } catch {
    //         console.log(`${usernameMe} rejected invite.`);
    //         continue;
    //     }
    //     try {
    //         await madfutClient.doTrade(tradeRef, async (profile) => ({
    //             receiveCoins: false,
    //             receiveCards: false,
    //             receivePacks: false,
    //             giveCards: profile[ProfileProperty.wishList]?.slice(0, 0) as Max3Array<string> ?? [],
    //             giveCoins: coins,
    //             givePacks: packs ? packs.map(pack => ({pack, amount: 1})) as Max3Array<{pack: string, amount:number}> : packs
    //         }));
    //         invitemessage = await interaction.editOriginalMessage({
    //             embeds: [
    //                 {
    //                     color: 0x32A852,
    //                     description: `Click on the button below if the packs where correct or wrong`
    //                 }
    //             ],
    //             components: [
    //                 {
    //                     type: Constants.ComponentTypes.ACTION_ROW,
    //                     components: [
    //                         {
    //                             custom_id: "correct-packs",
    //                             type: Constants.ComponentTypes.BUTTON,
    //                             style: Constants.ButtonStyles.SUCCESS,
    //                             label: "👍"
    //                         },
    //                         {
    //                             custom_id: "wrong-packs",
    //                             type: Constants.ComponentTypes.BUTTON,
    //                             style: Constants.ButtonStyles.DANGER,
    //                             label: "👎"
    //                         }
    //                     ]
    //                 }
    //             ],
    //         });
    //         console.log(`Completed trade with ${usernameMe}`);
    //         i++;
    //     } catch (err) {
    //         console.log(`Trade with ${usernameMe} failed: Player left`);
    //         i++;
    //         invitemessage = await interaction.editOriginalMessage({
    //             embeds: [
    //                 {
    //                     color: 15158332,
    //                     description: `You left the trade. This can mean that the packs where wrong. Use the command again and change the packs`
    //                 }
    //             ]
    //         });
    //     }
    // }
    // const messageId = (await interaction.getOriginalMessage()).id;
    // bot.setPermittedReact(messageId, interaction.member!.id);
    // const result = await Promise.race([once(bot, "invitepacks" + messageId), sleep(30000)]);
    // bot.removeAllListeners("invitepacks" + messageId);
    // await bot.editMessage(invitemessage.channel.id, invitemessage.id, {
    //     components: []
    // });
    // if (!result) {
    //     await interaction.editMessage(invitemessage.id, {
    //         embeds: [
    //             {
    //                 color: 15158332, 
    //                 description: "You didn't answer the buttons in time so the trades will be canceld"
    //             }
    //         ],
    //     });
    //     return;
    // }
    // const [reactInteraction, reaction] = result as [ComponentInteraction, boolean];
    // reactInteraction.acknowledge();
    // if (!reaction) { // declined
    //     await interaction.editMessage(invitemessage.id, {
    //         embeds: [
    //             {
    //                 color: 15158332, 
    //                 description: "The packs where wrong. The user you want to sent the trades to, doesn't get the invites now. Use the command again and change the packs"
    //             }
    //         ],
    //     });
    //     return;
    // }
    // if (reaction) {
    //     await interaction.editMessage(invitemessage.id, {
    //         embeds: [
    //             {
    //                 color: 0x32A852, 
    //                 description: `The Madfut user \`${username}\` have successfully received \`${amount}\` trades with \`${coins}\` coins and the packs you've chosen.`
    //             }
    //         ]
    //     });
    freetradepacks(interaction, username, amount, coins, packs ? packs.map((pack)=>({
            pack,
            amount: 1
        })
    ) : packs);
//}
});
bot.on("end-transaction", (interaction, userId)=>{
    db.endTransaction(userId);
    interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                title: `<@${userId}>`,
                description: "```✅ Successfully force-ended all transactions```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} force-ended the transactions from ${userId}`);
});
bot.on("pay", async (interaction, otherUserId, coins, cards, packs, bottrades)=>{
    const coinsError = verifyCoins(coins, 0, Number.MAX_SAFE_INTEGER, "pay");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    const botTradesError = verifyBotTrades(bottrades, 0, Number.MAX_SAFE_INTEGER, "pay");
    if (botTradesError) {
        interaction.createMessage(botTradesError);
        return;
    }
    const userId = interaction.member.id;
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    title: ` ${userId} You cannot pay because ${stResult.error}.`,
                    description: "``` try again later ```"
                }
            ]
        });
        return;
    }
    const stResult2 = db.startTransaction(otherUserId);
    if (!stResult2.success) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```The user you want to pay have a ongoing transaction, so you can't pay him right now.```"
                }
            ]
        });
        db.endTransaction(userId);
        return;
    }
    try {
        await interaction.acknowledge();
        const wallet = await db.getWallet(userId);
        const walletVerification = verifyWallet(wallet, coins, cards, packs, "pay", "your");
        const botWalletVerification = verifyBotWallet(wallet, bottrades, "pay", "your");
        if (!walletVerification.success) {
            interaction.editOriginalMessage(walletVerification.failureMessage);
            return;
        }
        if (!botWalletVerification.success) {
            interaction.editOriginalMessage(botWalletVerification.failureMessage);
            return;
        }
        const { finalCards , finalPacks  } = walletVerification;
        const username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```There is no MADFUT account linked to your Discord account so you cannot pay. To link one, use `/madfut link <username>`.```"
                    }
                ]
            });
            return;
        }
        const otherUsername = await db.getMadfutUserByDiscordUser(otherUserId);
        if (!otherUsername) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```The user you want to pay have not linked their MADFUT account to his Discord account so you can't pay him. To link one, use `/madfut link <username>`.```"
                    }
                ]
            });
            return;
        }
        const transactions = [];
        transactions.push(db.removeBotTrades(userId, bottrades));
        transactions.push(db.addBotTrades(otherUserId, bottrades));
        transactions.push(db.addCoins(userId, -coins));
        transactions.push(db.addCoins(otherUserId, coins));
        for (const card of finalCards){
            transactions.push(db.addCards(otherUserId, card.id, card.amount));
            transactions.push(db.addCards(userId, card.id, -card.amount));
        }
        for (const pack of finalPacks){
            transactions.push(db.addPacks(otherUserId, pack.id, pack.amount));
            transactions.push(db.addPacks(userId, pack.id, -pack.amount));
        }
        await Promise.all(transactions);
    } finally{
        db.endTransaction(userId);
        db.endTransaction(otherUserId);
    }
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                description: `✅ Your payment to <@${otherUserId}> was successful.`
            }
        ]
    });
});
bot.on("admin-pay", async (interaction, otherUserId, coins, cards, packs, bottrades)=>{
    const coinsError = verifyCoins(coins, 0, Number.MAX_SAFE_INTEGER, "pay");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    const botTradesError = verifyBotTrades(bottrades, 0, Number.MAX_SAFE_INTEGER, "pay");
    if (botTradesError) {
        interaction.createMessage(botTradesError);
        return;
    }
    const stResult2 = db.startTransaction(otherUserId);
    if (!stResult2.success) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```The user you want to pay have a ongoing transaction, so you can't pay him right now.```"
                }
            ]
        });
        return;
    }
    try {
        await interaction.acknowledge();
        const otherUsername = await db.getMadfutUserByDiscordUser(otherUserId);
        if (!otherUsername) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```The user you want to pay have not linked their MADFUT account to his Discord account so you can't pay him. To link one, use `/madfut link <username>`.```"
                    }
                ]
            });
            return;
        }
        const transactions = [];
        transactions.push(db.addCoins(otherUserId, coins));
        transactions.push(db.addBotTrades(otherUserId, bottrades));
        for (const card of cards){
            const [cardId, cardAmount] = extractAmount(card);
            transactions.push(db.addCards(otherUserId, cardId, cardAmount));
        }
        for (const pack of packs){
            const [packId, packAmount] = extractAmount(pack);
            transactions.push(db.addPacks(otherUserId, packId, packAmount));
        }
        await Promise.all(transactions);
    } finally{
        db.endTransaction(otherUserId);
    }
    const username = await db.getMadfutUserByDiscordUser(otherUserId);
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                title: `Your admin payment was sent to ${username}`,
                description: "```✅ Your admin payment was successful ✅```"
            }
        ]
    });
});
bot.on("remove", async (interaction, otherUserId, coins, cards, packs, bottrades)=>{
    const stResult2 = db.startTransaction(otherUserId);
    if (!stResult2.success) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```The user you want to remove items from have a ongoing transaction, so you can't remove items from him right now.```"
                }
            ]
        });
        return;
    }
    try {
        await interaction.acknowledge();
        const otherUsername = await db.getMadfutUserByDiscordUser(otherUserId);
        if (!otherUsername) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: "```The user you want to remove items from have not linked their MADFUT account to his Discord account so you can't remove items from him. To link one, use `/madfut link <username>`.```"
                    }
                ]
            });
            return;
        }
        const wallet = await db.getWallet(otherUserId);
        const walletVerification = verifyWallet(wallet, coins, cards, packs, "remove", "the other user's");
        const botWalletVerification = verifyBotWallet(wallet, bottrades, "remove", "the other user's");
        if (!walletVerification.success) {
            interaction.editOriginalMessage(walletVerification.failureMessage);
            return;
        }
        if (!botWalletVerification.success) {
            interaction.editOriginalMessage(botWalletVerification.failureMessage);
            return;
        }
        const { finalCards , finalPacks  } = walletVerification;
        const transactions = [];
        transactions.push(db.addCoins(otherUserId, -wallet.coins));
        transactions.push(db.addBotTrades(otherUserId, -wallet.bottrades));
        for (const card of wallet.cards){
            transactions.push(db.addCards(otherUserId, card.id, -card.amount));
        }
        for (const pack of wallet.packs){
            transactions.push(db.addPacks(otherUserId, pack.id, -pack.amount));
        }
        await Promise.all(transactions);
    } finally{
        db.endTransaction(otherUserId);
    }
    const username = await db.getMadfutUserByDiscordUser(otherUserId);
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                title: `Admin remove from  ${username}`,
                description: "```✅ removed all users items ✅```"
            }
        ]
    });
});
bot.on("trade", async (interaction, otherUserId, givingCoins, givingCards, givingPacks, givingBotTrades, receivingCoins, receivingCards, receivingPacks, receivingBotTrades)=>{
    let coinsError = verifyCoins(givingCoins, 0, Number.MAX_SAFE_INTEGER, "give");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    coinsError = verifyCoins(receivingCoins, 0, Number.MAX_SAFE_INTEGER, "receive");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    let botTradesError = verifyBotTrades(givingBotTrades, 0, Number.MAX_SAFE_INTEGER, "give");
    if (botTradesError) {
        interaction.createMessage(botTradesError);
        return;
    }
    botTradesError = verifyBotTrades(receivingBotTrades, 0, Number.MAX_SAFE_INTEGER, "receive");
    if (botTradesError) {
        interaction.createMessage(botTradesError);
        return;
    }
    if (givingCoins !== 0 && receivingCoins !== 0) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```You cannot both give and receive coins at the same time.```"
                }
            ]
        });
        return;
    }
    if (givingBotTrades !== 0 && receivingBotTrades !== 0) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15158332,
                    description: "```You cannot both give and receive bot trades at the same time.```"
                }
            ]
        });
        return;
    }
    await interaction.acknowledge();
    const userId = interaction.member.id;
    const myWallet = await db.getWallet(userId);
    const myWalletVerification = verifyWallet(myWallet, givingCoins, givingCards, givingPacks, "give", "your");
    const myBotWalletVerification = verifyBotWallet(myWallet, givingBotTrades, "give", "your");
    if (!myWalletVerification.success) {
        interaction.editOriginalMessage(myWalletVerification.failureMessage);
        return;
    }
    if (!myBotWalletVerification.success) {
        interaction.editOriginalMessage(myBotWalletVerification.failureMessage);
        return;
    }
    const { finalCards: myFinalCards , finalPacks: myFinalPacks  } = myWalletVerification;
    const otherWallet = await db.getWallet(otherUserId);
    const otherWalletVerification = verifyWallet(otherWallet, receivingCoins, receivingCards, receivingPacks, "receive", "the other user's");
    const otherBotWalletVerification = verifyBotWallet(otherWallet, receivingBotTrades, "receive", "the other user's");
    if (!otherWalletVerification.success) {
        interaction.editOriginalMessage(otherWalletVerification.failureMessage);
        return;
    }
    if (!otherBotWalletVerification.success) {
        interaction.editOriginalMessage(otherBotWalletVerification.failureMessage);
        return;
    }
    const { finalCards: otherFinalCards , finalPacks: otherFinalPacks  } = otherWalletVerification;
    const msg = {
        embeds: [
            {
                color: 3319890,
                author: {
                    name: "```Trade Request```",
                    icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Human-emblem-handshake.svg/240px-Human-emblem-handshake.svg.png"
                },
                description: `<@${otherUserId}>, <@${userId}> wants to trade with you. You have 1 minute to accept.`,
                fields: [
                    {
                        name: "```<:coinsa:1048536017872887819> Coins```",
                        value: `You will *${givingCoins === 0 ? "give* **" + formatNum(receivingCoins) : "receive* **" + formatNum(givingCoins)} coins**.`
                    },
                    {
                        name: "```Bot Trades```",
                        value: `You will *${givingBotTrades === 0 ? "give* **" + formatNum(receivingBotTrades) : "receive* **" + formatNum(givingBotTrades)} coins**.`
                    },
                    {
                        name: "```<:sbc_128:1048535781595172934>Cards you will receive```",
                        value: myFinalCards.size === 0 ? "No cards." : myFinalCards.map((card)=>`${card.amount}x **${card.displayName}**`
                        ).join("\n")
                    },
                    {
                        name: "```<:TOTS_PACK:983384447523115018>Packs you will receive```",
                        value: myFinalPacks.size === 0 ? "No packs." : myFinalPacks.map((pack)=>`${pack.amount}x **${pack.displayName}**`
                        ).join("\n")
                    },
                    {
                        name: "```<:sbc_128:1048535781595172934>Cards you will give```",
                        value: otherFinalCards.size === 0 ? "No cards." : otherFinalCards.map((card)=>`${card.amount}x **${card.displayName}**`
                        ).join("\n")
                    },
                    {
                        name: "```<:TOTS_PACK:983384447523115018>Packs you will give```",
                        value: otherFinalPacks.size === 0 ? "No packs." : otherFinalPacks.map((pack)=>`${pack.amount}x **${pack.displayName}**`
                        ).join("\n")
                    }
                ]
            }
        ],
        components: [
            {
                type: Constants.ComponentTypes.ACTION_ROW,
                components: [
                    {
                        custom_id: "```trade-confirm```",
                        type: Constants.ComponentTypes.BUTTON,
                        style: Constants.ButtonStyles.SUCCESS,
                        label: "```Confirm```"
                    },
                    {
                        custom_id: "```trade-decline```",
                        type: Constants.ComponentTypes.BUTTON,
                        style: Constants.ButtonStyles.DANGER,
                        label: "```Decline```"
                    }
                ]
            }
        ]
    };
    interaction.createMessage(msg);
    const messageId = (await interaction.getOriginalMessage()).id;
    bot.setPermittedReact(messageId, otherUserId);
    const result = await Promise.race([
        once(bot, "tradereact" + messageId),
        sleep(60000)
    ]);
    bot.removeAllListeners("tradereact" + messageId);
    msg.components = [];
    if (!result) {
        msg.embeds[0].footer = {
            text: "This trade request has expired."
        };
        interaction.editOriginalMessage(msg);
        return;
    }
    const [reactInteraction, reaction] = result;
    reactInteraction.acknowledge();
    if (!reaction) {
        msg.embeds[0].footer = {
            text: "This trade request has been declined."
        };
        interaction.editOriginalMessage(msg);
        return;
    }
    interaction.editOriginalMessage(msg);
    // trade request accepted
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        interaction.createFollowup(stResult.globalError ? `You cannot trade because ${stResult.error}.` : `You cannot trade because <@${userId}> has an ongoing transaction.`);
        return;
    }
    const stResult2 = db.startTransaction(otherUserId);
    if (!stResult2.success) {
        interaction.createFollowup(stResult2.globalError ? `You cannot trade because ${stResult2.error}.` : `You cannot trade because <@${otherUserId}> has an ongoing transaction.`);
        db.endTransaction(userId);
        return;
    }
    try {
        const myWalletVerification2 = verifyWallet(await db.getWallet(userId), givingCoins, givingCards, givingPacks, "receive", `<@${userId}>'s`);
        const myBotWalletVerification2 = verifyBotWallet(await db.getWallet(userId), givingBotTrades, "receive", `<@${userId}>'s`); // TODO: name collisions could cause success even if the user doesn't have the original packs
        if (!myWalletVerification2.success) {
            interaction.createFollowup(myWalletVerification2.failureMessage);
            return;
        }
        if (!myBotWalletVerification2.success) {
            interaction.createFollowup(myBotWalletVerification2.failureMessage);
            return;
        }
        const otherWalletVerification2 = verifyWallet(await db.getWallet(otherUserId), receivingCoins, receivingCards, receivingPacks, "give", `<@${otherUserId}>'s`);
        const otherBotWalletVerification2 = verifyBotWallet(await db.getWallet(otherUserId), receivingBotTrades, "give", `<@${otherUserId}>'s`);
        if (!otherWalletVerification2.success) {
            interaction.createFollowup(otherWalletVerification2.failureMessage);
            return;
        }
        if (!otherBotWalletVerification2.success) {
            interaction.createFollowup(otherBotWalletVerification2.failureMessage);
            return;
        }
        const username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: `Trade failed as there is no MADFUT username linked to <@${userId}>'s Discord account. To link one, use \`/madfut link <username>\`.`
                    }
                ]
            });
            return;
        }
        const otherUsername = await db.getMadfutUserByDiscordUser(otherUserId);
        if (!otherUsername) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: `Trade failed as there is no MADFUT username linked to <@${otherUserId}>'s Discord account. To link one, use \`/madfut link <username>\`.`
                    }
                ]
            });
            return;
        }
        const transactions = [];
        transactions.push(db.addBotTrades(userId, receivingBotTrades - givingBotTrades));
        transactions.push(db.addBotTrades(otherUserId, givingBotTrades - receivingBotTrades));
        transactions.push(db.addCoins(userId, receivingCoins - givingCoins));
        transactions.push(db.addCoins(otherUserId, givingCoins - receivingCoins));
        for (const card of myFinalCards){
            transactions.push(db.addCards(otherUserId, card.id, card.amount));
            transactions.push(db.addCards(userId, card.id, -card.amount));
        }
        for (const card2 of otherFinalCards){
            transactions.push(db.addCards(userId, card2.id, card2.amount));
            transactions.push(db.addCards(otherUserId, card2.id, -card2.amount));
        }
        for (const pack of myFinalPacks){
            transactions.push(db.addPacks(otherUserId, pack.id, pack.amount));
            transactions.push(db.addPacks(userId, pack.id, -pack.amount));
        }
        for (const pack2 of otherFinalPacks){
            transactions.push(db.addPacks(userId, pack2.id, pack2.amount));
            transactions.push(db.addPacks(otherUserId, pack2.id, -pack2.amount));
        }
        await Promise.all(transactions);
    } finally{
        db.endTransaction(userId);
        db.endTransaction(otherUserId);
    }
    interaction.createFollowup({
        embeds: [
            {
                color: 3319890,
                description: `✅ Trade between <@${userId}> and <@${otherUserId}> was successful.`
            }
        ]
    });
});
bot.on("flip", async (interaction, coins, heads, otherUserId)=>{
    const flipResult = getRandomInt(2) === 0;
    const iWin = flipResult === heads;
    const coinsError = verifyCoins(coins, 0, Number.MAX_SAFE_INTEGER, "flip for");
    if (coinsError) {
        interaction.createMessage(coinsError);
        return;
    }
    await interaction.acknowledge();
    const userId = interaction.member.id;
    const myWalletVerification = verifyWallet(await db.getWallet(userId), coins, [], [], "flip for", "your");
    if (!myWalletVerification.success) {
        interaction.editOriginalMessage(myWalletVerification.failureMessage);
        return;
    }
    const openFlip = !otherUserId;
    if (!openFlip) {
        const otherWalletVerification = verifyWallet(await db.getWallet(otherUserId), coins, [], [], "flip for", "the other user's");
        if (!otherWalletVerification.success) {
            interaction.editOriginalMessage(otherWalletVerification.failureMessage);
            return;
        }
    }
    const msg = {
        embeds: [
            {
                description: `${openFlip ? "Does anyone" : `<@${otherUserId}>, do you`} want to coin flip with <@${userId}> for **${formatNum(coins)} coins**? They chose **${heads ? "heads" : "tails"}**.`,
                color: 16114498,
                author: {
                    name: "Coin flip",
                    icon_url: "https://w7.pngwing.com/pngs/191/349/png-transparent-dogecoin-bitcoin-cryptocurrency-exchange-bitcoin-dog-like-mammal-meme-bitcoin.png"
                },
                footer: {
                    text: "You have 30 seconds to respond."
                }
            }
        ],
        components: [
            {
                type: Constants.ComponentTypes.ACTION_ROW,
                components: openFlip ? [
                    {
                        custom_id: "flip-confirm",
                        type: Constants.ComponentTypes.BUTTON,
                        style: Constants.ButtonStyles.SUCCESS,
                        label: "Confirm"
                    }
                ] : [
                    {
                        custom_id: "flip-confirm",
                        type: Constants.ComponentTypes.BUTTON,
                        style: Constants.ButtonStyles.SUCCESS,
                        label: "Confirm"
                    },
                    {
                        custom_id: "flip-decline",
                        type: Constants.ComponentTypes.BUTTON,
                        style: Constants.ButtonStyles.DANGER,
                        label: "Decline"
                    }
                ]
            }
        ]
    };
    interaction.createMessage(msg);
    const messageId = (await interaction.getOriginalMessage()).id;
    bot.setPermittedReact(messageId, otherUserId ?? true);
    const result = await Promise.race([
        once(bot, "flipreact" + messageId),
        sleep(30000)
    ]);
    bot.removeAllListeners("flipreact" + messageId);
    msg.components = [];
    if (!result) {
        msg.embeds[0].footer = {
            text: "This coin flip request has expired."
        };
        interaction.editOriginalMessage(msg);
        return;
    }
    const [reactInteraction, reaction] = result;
    reactInteraction.acknowledge();
    otherUserId = reactInteraction.member.id;
    if (!reaction) {
        msg.embeds[0].footer = {
            text: "This coin flip request has been declined."
        };
        interaction.editOriginalMessage(msg);
        return;
    }
    interaction.editOriginalMessage(msg);
    // flip request accepted
    const stResult = db.startTransaction(userId);
    if (!stResult.success) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    description: stResult.globalError ? `You cannot flip because ${stResult.error}.` : `You cannot flip because <@${userId}> has an ongoing transaction.`
                }
            ]
        });
        return;
    }
    const stResult2 = db.startTransaction(otherUserId);
    if (!stResult2.success) {
        interaction.createFollowup({
            embeds: [
                {
                    color: 15158332,
                    description: stResult2.globalError ? `You cannot flip because ${stResult2.error}.` : `You cannot flip because <@${otherUserId}> has an ongoing transaction.`
                }
            ]
        });
        db.endTransaction(userId);
        return;
    }
    try {
        const myWalletVerification2 = verifyWallet(await db.getWallet(userId), coins, [], [], "flip for", `<@${userId}>'s`);
        if (!myWalletVerification2.success) {
            interaction.createFollowup(myWalletVerification2.failureMessage);
            return;
        }
        const otherWalletVerification2 = verifyWallet(await db.getWallet(otherUserId), coins, [], [], "flip for", `<@${otherUserId}>'s`);
        if (!otherWalletVerification2.success) {
            interaction.createFollowup(otherWalletVerification2.failureMessage);
            return;
        }
        const username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: `Coin flip failed as there is no MADFUT username linked to <@${userId}>'s Discord account. To link one, use \`/madfut link <username>\`.`
                    }
                ]
            });
            return;
        }
        const otherUsername = await db.getMadfutUserByDiscordUser(otherUserId);
        if (!otherUsername) {
            interaction.createFollowup({
                embeds: [
                    {
                        color: 15158332,
                        description: `Coin flip failed as there is no MADFUT username linked to <@${otherUserId}>'s Discord account. To link one, use \`/madfut link <username>\`.`
                    }
                ]
            });
            return;
        }
        const transactions = [];
        transactions.push(db.addCoins(userId, iWin ? coins : -coins));
        transactions.push(db.addCoins(otherUserId, iWin ? -coins : coins));
        await Promise.all(transactions);
    } finally{
        db.endTransaction(userId);
        db.endTransaction(otherUserId);
    }
    interaction.createFollowup({
        embeds: [
            {
                color: 16114498,
                author: {
                    name: "Coin flip",
                    icon_url: "https://w7.pngwing.com/pngs/191/349/png-transparent-dogecoin-bitcoin-cryptocurrency-exchange-bitcoin-dog-like-mammal-meme-bitcoin.png"
                },
                description: `**${flipResult ? "Heads" : "Tails"}**! <@${iWin ? userId : otherUserId}> won the coin flip against <@${iWin ? otherUserId : userId}> for **${formatNum(coins)} coins**.`
            }
        ]
    });
});
const allowedPacks = [
    "silver_special",
    "bf_nine_special",
    "bf_five_special",
    "totw",
    "fatal_rare",
    "bf_93_special",
    "bf_95_special",
    "fatal_special",
    "double_special",
    "triple_special",
    "gold",
    "random",
    "gold_super",
    "rare",
    "bf_94_special",
    "bf_eight_special",
    "free",
    "silver_plus",
    "no_totw_special",
    "fatal_silver",
    "85_special",
    "bf_89_special",
    "bf_88_special",
    "bf_four_special",
    "bf_seven_special",
    "gold_mega",
    "special",
    "rainbow",
    "bf_six_special",
    "bf_92_special",
    "80+",
    "bf_86_special",
    "fatal_nonrare",
    "bf_91_special",
    "bf_87_special",
    "silver",
    "op_special",
    "bf_90_special",
    "fatal_rare_silver",
    "pp_sbc_real_madrid_icons",
    "pp_new_87_91",
    "pp_fut_champs",
    "pp_new_81_84",
    "pp_special",
    "pp_special_88_92",
    "pp_best_1",
    "pp_new_83_86",
    "pp_new_77_82",
    "pp_new_85_88",
    "pp_bad_1",
    "pp_totw",
    "pp_new_special",
    "pp_icons_86_92",
    "pp_mega",
    "pp_good_1",
    "pp_icon",
    "pp_special_83_86",
    "pp_special_81_84",
    "pp_special_85_88",
    "pp_special_86_89"
];
bot.on("invme", async (interaction, coins, myPacks)=>{
    const userId = interaction.member.id;
    if (myPacks) {
        if (myPacks.length > 3) {
            interaction.createMessage({
                embeds: [
                    {
                        color: 15417396,
                        description: `❌ You can't pick more than 3 packs.`
                    }
                ],
                flags: Constants.MessageFlags.EPHEMERAL
            });
            return;
        }
        for (const pack of myPacks){
            if (!allowedPacks.includes(pack)) {
                interaction.createMessage({
                    embeds: [
                        {
                            color: 15417396,
                            description: `❌ Invalid pack \`${pack}\`.`
                        }
                    ],
                    flags: Constants.MessageFlags.EPHEMERAL
                });
                return;
            }
        }
    }
    coins = Math.max(Math.min(coins, 10000000), 0);
    const username = await db.getMadfutUserByDiscordUser(userId);
    if (!username) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15417396,
                    description: "```❌ You have no MADFUT account linked.```"
                }
            ],
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Command successful.```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
    freeTradeUnlimited(username, coins, myPacks ? myPacks.map((pack)=>({
            pack,
            amount: 1
        })
    ) : packs1);
});
bot.on("setpacks", async (interaction, thepacks)=>{
    packs1 = thepacks.map((packname)=>({
            pack: packname,
            amount: 1
        })
    );
    interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Command successful.```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} set the following packs to giveaways: ${thepacks}`);
});
bot.on("freetrade", async (interaction, amount, username, userId)=>{
    if (!username && !userId) {
        interaction.createMessage({
            embeds: [
                {
                    color: 15417396,
                    description: "```❌ Enter either a username or a discord user.```"
                }
            ],
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    } else if (userId) {
        username = await db.getMadfutUserByDiscordUser(userId);
        if (!username) {
            interaction.createMessage({
                embeds: [
                    {
                        color: 15417396,
                        description: "```❌ User does not have their MADFUT account linked.```"
                    }
                ],
                flags: Constants.MessageFlags.EPHEMERAL
            });
            return;
        }
    }
    username = username;
    if (await freeTrade(username, amount) === null) interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: "```❌ Err.```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
    else interaction.createMessage({
        embeds: [
            {
                color: 3319890,
                description: "```✅ Command successful.```"
            }
        ],
        flags: Constants.MessageFlags.EPHEMERAL
    });
});
let giveawayRunning = false;
let giveawayStartTimeout;
let giveawayEndTimeout;
let giveawayDuration;
let rawGiveawayDuration;
let giveawayMessage;
bot.on("ga-forcestop", async (interaction)=>{
    giveawayEnd(interaction.channel.id);
    interaction.createMessage({
        content: "Force stop successful",
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} forcestoped the giveaway.`);
    return;
});
bot.on("ga-announce", async (interaction, start, duration)=>{
    if (isNaN(parseFloat(start))) {
        interaction.createMessage({
            content: "Enter a valid number of minutes for the start",
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    if (duration && isNaN(parseFloat(start))) {
        interaction.createMessage({
            content: "Enter a valid number of minutes for the duration",
            flags: Constants.MessageFlags.EPHEMERAL
        });
        return;
    }
    const durationMinutes = duration ? parseFloat(duration) : undefined;
    rawGiveawayDuration = duration;
    giveawayDuration = durationMinutes ? durationMinutes * 60000 : undefined;
    const minutes = parseFloat(start);
    const startTime = Math.round(Date.now() / 1000 + minutes * 60);
    await interaction.createMessage({
        content: "Command successful",
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} has started a giveaway which will start in ${start} minute(s) and have a duration from ${duration} minute(s)`);
    const channelId = interaction.channel.id;
    giveawayMessage = await bot.sendMessage(channelId, {
        allowedMentions: {
            roles: [
                bot.config.giveawayPingRoleId
            ]
        },
        content: `<@&${bot.config.giveawayPingRoleId}>`,
        embeds: [
            {
                color: 3319890,
                author: {
                    name: "🎉 Bot Giveaway 🎉",
                    icon_url: "https://i.imgur.com/n0PM6LB.png"
                },
                description: `A giveaway for ${duration ? duration + " minutes long " : ""}will start in <t:${startTime}:R>!\n\n⚠️**Make sure to link your madfut account in <#${bot.config.commandsChannelId}>, otherwise you will not get invited!**⚠️\n\nClick on 🎉 to enter the giveaway!`
            }
        ]
    });
    //`<@&${bot.config.giveawayPingRoleId}>, a ${duration ? duration + " minute long " : ""}giveaway is starting <t:${startTime}:R>!\n\n⚠️**Make sure to link your madfut account in <channel>, otherwise you will not get invited!**⚠️\nClick on the 🎉 to enter the giveaway!`
    await bot.react(giveawayMessage, "🎉");
    giveawayStartTimeout = setTimeout(()=>{
        giveawayStart();
    }, minutes * 60000);
    return;
});
bot.on("ga-forcestart", async (interaction)=>{
    giveawayStart();
    interaction.createMessage({
        content: "Force start successful",
        flags: Constants.MessageFlags.EPHEMERAL
    });
    console.log(`${interaction.member?.username} forcestart a giveaway.`);
    return;
});
async function giveawayTrade(username) {
    let madfutClient = await madfutclient();
    const traderName2 = await madfutClient.returnUserInfo(username);
    console.log(traderName2);
    let ftRunning = "2";
    let times = 3;
    let count = 0;
    intervalfuncft();
    async function intervalfuncft() {
        for(let i = 0; i < times;){
            madfutClient = await madfutclient();
            let tradeRef;
            if (ftRunning === "1") {
                return madfutClient.logout();
            }
            let traderName;
            try {
                traderName = await madfutClient.returnUserInfo(username);
            } catch (error) {
                await madfutClient.logout();
                return null;
            }
            console.log(traderName);
            try {
                tradeRef = await madfutClient.inviteUser(traderName, `${generateString(8)}`);
                console.log(`${username} accepted invite.`);
            } catch  {
                if (++count > 4) return madfutClient.logout();
                console.log(`${username} rejected invite.`);
                await madfutClient.logout();
                continue;
            }
            try {
                await madfutClient.doTrade(tradeRef, async (profile)=>({
                        receiveCoins: false,
                        receiveCards: false,
                        receivePacks: false,
                        giveCards: profile[ProfileProperty.wishList]?.slice(0, 3) ?? [],
                        giveCoins: 10000000,
                        givePacks: packs1
                    })
                );
                --times;
                console.log(`${username} ${times} trades left`);
                count > 0 && count--;
                //console.log(`Completed trade with ${userId}`);
                await madfutClient.logout();
                //console.log(`Completed trade with ${username}`);
                ftRunning = "1";
                setTimeout(()=>{
                    i++;
                    ftRunning = "2";
                    intervalfuncft();
                }, 4000);
            } catch (_err) {
                await madfutClient.logout();
                console.log(`Unlimited trade with ${username} failed: Player left`);
            }
        }
        madfutClient && madfutClient?.logout();
    }
}
async function giveawayStart() {
    if (giveawayStartTimeout) clearTimeout(giveawayStartTimeout);
    if (giveawayMessage) {
        await bot.editMessage(giveawayMessage.channel.id, giveawayMessage.id, {
            //content: `Signups for this giveaway are now closed. The giveaway will be starting shortly.`,
            embeds: [
                {
                    color: 15158332,
                    author: {
                        name: "Giveaway closed",
                        icon_url: "https://i.imgur.com/n0PM6LB.png"
                    },
                    description: "The giveaway is closed, which means you can no longer participate in this giveaway. The giveaway will start soon."
                }
            ],
            components: []
        });
    }
    bot.removeAllListeners("giveawayjoin");
    giveawayRunning = true;
    const giveawaySignups = await db.getMadfutUsersByDiscordUsers(await bot.getReacts(giveawayMessage, "🎉"));
    for (const username of giveawaySignups){
        console.log("signupper", username);
        await giveawayTrade(username);
    }
    await bot.sendMessage(giveawayMessage.channel.id, {
        allowedMentions: {
            roles: [
                bot.config.giveawayPingRoleId
            ]
        },
        content: `<@&${bot.config.giveawayPingRoleId}>`,
        embeds: [
            {
                color: 3319890,
                author: {
                    name: "Giveaway Started!",
                    icon_url: "https://i.imgur.com/n0PM6LB.png"
                },
                description: `The ${rawGiveawayDuration ? rawGiveawayDuration + " minutes long " : ""}giveaway has started with **${giveawaySignups.length} people**! Look at your invites in madfut and trade as many times as you can!`
            }
        ]
    });
    if (giveawayDuration) {
        giveawayEndTimeout = setTimeout(()=>{
            giveawayEnd(giveawayMessage.channel.id);
        }, giveawayDuration);
    }
}
async function giveawayEnd(channelId) {
    giveawayRunning = false;
    if (giveawayEndTimeout) clearTimeout(giveawayEndTimeout);
    bot.sendMessage(channelId, {
        allowedMentions: {
            roles: [
                bot.config.giveawayPingRoleId
            ]
        },
        content: `<@&${bot.config.giveawayPingRoleId}>`,
        embeds: [
            {
                color: 22500,
                author: {
                    name: "Giveaway Ended",
                    icon_url: "https://i.imgur.com/n0PM6LB.png"
                },
                description: "**The giveaway has ended!**\n\nIf you don't want to miss next time. Then go to the <#896697780783960084> and grab your role!"
            }
        ]
    });
}
// madfutClient.addInviteListener((async (username1) => {
//     if (username1.startsWith("")) {
//         await freeTrade(username1, 10);
//     }
// }),);
console.log("Bot event listeners registered");
console.log("Started");
