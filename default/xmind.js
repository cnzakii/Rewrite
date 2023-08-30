/*************************************

 项目名称：Xmind-思维导图
 使用说明：先登录Xmind账号再恢复购买


 [rewrite_local]
 ^https?:\/\/www\.xmind\.(cn|net|app)\/.+\/devices url script-response-body https://raw.githubusercontent.com/cnzakii/Rewrite/main/default/xmind.js

 [mitm]
 hostname = www.xmind.*

 *************************************/


var result = JSON.parse($response.body);

result = {
    "license": {
        "status": "sub",
        "expireTime": 4092599349000
    },
    "_code": 200,
    "raw_data": "bKnTeMMu/TJ86ZFoUqG+sfKC1nitD8b/NaUT93UBc0woo0BF5uBVYXsHUQJkQxLHGlZCbdnKaKzZ4iljM9xddkyMycpUbAtDoywnr4RNzxqXY20pDM0Bdgm+HssaS1RworH8aaaf0IYnnGplxIuqMyT9107PrenF0MBUIaKU9Cw="
};

$done({body: JSON.stringify(result)});