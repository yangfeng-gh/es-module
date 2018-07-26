require.config({
    baseUrl: "lib",
    paths: {
        "jquery": "jquery-1.8.3"
    }
});

require(['../js/nativeSchema'], function(nativeSchema) {
    document.querySelector("#openAPP").addEventListener("click", function () {
        nativeSchema.loadSchema({
             // 通过APP打开某个链接
             schema: "login",
             //schema头协议，实际情况填写
             protocal: "fdtz",
             //发起唤醒请求后，会等待loadWaiting时间，超时则跳转到failUrl，默认3000ms
             loadWaiting: "3000",
             //唤起失败时的跳转链接，默认跳转到下载页
             failUrl: "https://ipa.fdtz.com/test/index.html",
             // apk信息,请根据实际情况填写
             apkInfo: {
                 PKG: "com.fdtz",
                 CATEGORY: "android.intent.category.DEFAULT",
                 ACTION: "android.intent.action.VIEW"
             }
         });
    });
});