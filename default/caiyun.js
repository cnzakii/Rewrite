/*************************************

 项目名称：彩云天气-净化/SVIP
 **************************************

 [rewrite_local]
 ^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/caiyun.js
 ^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

 [mitm]
 hostname = *.cyapi.cn, adx.sogaha.cn

 *************************************/


var a = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1) {
    a.vip = {
        "expires_time": "4092599349",
        "is_auto_renewal": true
    };
    a.svip = {
        "expires_time": "4092599349",
        "is_auto_renewal": true
    };
}

if ($request.url.indexOf(adhf) != -1) {
    a.activities = [];
}

if ($request.url.indexOf('user') != -1) {
    a.result.ranking_above = 99;
    a.result.is_vip = true;
    a.result.vip_expired_at = 4092599349;
    a.result.svip_given = 9999;
    a.result.is_xy_vip = true;
    a.result.xy_svip_expire = 4092599349;
    a.result.wt.vip = {
        "auto_renewal_type": "",
        "expired_at": 0,
        "enabled": true,
        "svip_apple_expired_at": 4092599349,
        "is_auto_renewal": true,
        "svip_expired_at": 4092599349,
        "svip_auto_renewal_type": ""
    };
    a.result.wt.svip_given = 9999;
    a.result.wt.ranking_above = 99;
    a.result.is_phone_verified = true;
    a.result.name = "zaki";
    a.result.avatar = "";
    a.result.phone_num = "13145200000";
    a.result.vip_take_effect = 1;
    a.result.is_primary = true;
    a.result.xy_vip_expire = 4092599349;
    a.result.svip_expired_at = 4092599349;
    a.result.svip_take_effect = 1;
    a.result.vip_type = "s";
    a.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    a.result.bound_status.qq.username = "zaki";
    a.result.bound_status.weixin.username = "zaki";
    a.result.bound_status.caiyun.username = "zaki";
    a.result.bound_status.twitter.username = "zaki";
    a.result.bound_status.facebook.username = "";
    a.result.bound_status.apple.username = "";
    a.result.bound_status.weibo.username = "";
}

$done({body: JSON.stringify(a)});