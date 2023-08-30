/*************************************

 项目名称： 图图记账

 [rewrite_local]
 ^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/totowallet.js

 [mitm]
 hostname = api.revenuecat.com

 *************************************/

// 此响应内容还适用于同作者的其他软件
const result = {
    "request_date_ms": 1670916721890,
    "request_date": "2022-12-13T07:32:01Z",
    "subscriber": {
        "non_subscriptions": {},
        "first_seen": "2022-12-13T07:15:45Z",
        "original_application_version": "27",
        "entitlement": {},
        "other_purchases": {},
        "management_url": null,
        "subscriptions": {
            "com.zaki.premium.yearly": {
                "wechat": "zaki",
                "purchase_date": "2022-09-09T09:09:09Z",
                "expires_date": "2099-09-09T09:09:09Z",
                "original_purchase_date": "2022-09-09T09:09:09Z",
                "feedback": "zaki",
                "ownership_type": "PURCHASED"
            }
        },
        "entitlements": {
            "all": {
                "wechat": "zaki",
                "ownership_type": "PURCHASED",
                "product_identifier": "com.zaki.premium.yearly",
                "feedback": "zaki",
                "original_purchase_date": "2022-09-09T09:09:09Z",
                "purchase_date": "2022-09-09T09:09:09Z",
                "expires_date": "2099-09-09T09:09:09Z"
            }
        },
        "original_purchase_date": "2022-12-13T07:15:15Z",
        "original_app_user_id": "$RCAnonymousID:7937cc279bfe463c9495003857f22faf",
        "last_seen": "2022-12-13T07:18:05Z"
    }
};

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('totowallet') != -1) {
    Body = (result);
}
// 如果需要其他软件，去除对应注解即可
// if (ua.indexOf('widget_art') != -1) {
//     Body = (result);
// }
//
// if (ua.indexOf('apollo') != -1) {
//     Body = (result);
// }
//
// if (ua.indexOf('Aphrodite') != -1) {
//     Body = (result);
// }

$done({body: JSON.stringify(result)});