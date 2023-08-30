/*************************************

 项目名称：Goodnotes6

 [rewrite_local]
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/goodnotes6.js
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/goodnotes6.js

 [mitm]
 hostname = isi.csan.goodnotes.com

 *************************************/


const result = {};
const response = JSON.parse(typeof $response != "undefined" && $response.body || null);

const appleAccess = "apple_access";
const crossplatformAccess = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";


if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    result.headers = $request.headers;
} else if (response && response.subscriber) {
    data = {
        "purchase_date": "2022-09-09T09:09:09Z"
    };
    response.subscriber.subscriptions[(jsid)] = {
        "original_purchase_date": "2022-09-09T09:09:09Z",
        "purchase_date": "2022-09-09T09:09:09Z",
        "store": "app_store",
        "ownership_type": "PURCHASED"
    };

    response.subscriber.entitlements[(appleAccess)] = JSON.parse(JSON.stringify(data));
    response.subscriber.entitlements[(crossplatformAccess)] = JSON.parse(JSON.stringify(data));
    response.subscriber.entitlements[(appleAccess)].product_identifier = (jsid);
    response.subscriber.entitlements[(crossplatformAccess)].product_identifier = (jsid);
    result.body = JSON.stringify(response);
}

$done(result)