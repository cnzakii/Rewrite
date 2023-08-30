/*************************************

 项目名称：彩云天气-净化/SVIP
 **************************************

 [rewrite_local]
 ^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/caiyun.js
 ^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

 [mitm]
 hostname = *.cyapi.cn, adx.sogaha.cn

 *************************************/


const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v1/vip_info")) {
    if (obj.vip) {
        obj.vip.expires_time = "4092599438";
    }
    if (obj.svip) {
        obj.svip.expires_time = "4092599438";
    }
} else if (url.includes("/v2/user")) {
    if (obj.result) {
        obj.result.svip_given = 730;
        obj.result.is_phone_verified = true;
        obj.result.is_xy_vip = true;
        obj.result.vip_expired_at = 4092599438.16;
        obj.result.is_vip = true;
        obj.result.xy_svip_expire = 4092599438.16;
        if (obj.result.wt) {
            if (obj.result.wt.vip) {
                obj.result.wt.vip.enabled = true;
                obj.result.wt.vip.expired_at = 4092599438.16;
                obj.result.wt.vip.svip_expired_at = 4092599438.16;
            }
            obj.result.wt.svip_given = 730;
        }
        obj.result.is_primary = true;
        obj.result.xy_vip_expire = 4092599438.16;
        obj.result.svip_expired_at = 4092599438.16;
        obj.result.vip_type = "s";
    }
}

$done({ body: JSON.stringify(obj) });