angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
//    https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
//    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9b8c10626527d144&secret=10f2a51a5fe3821ee4e4a9c029ea0b06';
//    var config = {
//      params: {
//        grant_type: "client_credential",
//        appid: 'wx9b8c10626527d144',
//        secret: '10f2a51a5fe3821ee4e4a9c029ea0b06'
//      }
//    }
//   //  url="http://test.hsjq.com/AndroidServer/Login/LoginHandler.ashx";
//    alert("进入方法");
//   // var url='https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=wx9b8c10626527d144&pre_auth_code=@ViewBag.PreAuthCode&redirect_uri=@ViewBag.RedirectUri'
//    $http.get(url).success(function (data) {
//      alert('get is right!');
//      var tiketurl="https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+data.access_token+"&type=jsapi";
//      $http.get(tiketurl).success(function(d){
//        var timetamp=Math.floor(Date.now()/1000);
//        alert(timetamp);
//        //var string1="jsapi_ticket="+ d.ticket+"&noncestr=Wm3WZYTPz0wzccnW&timestamp="+timetamp+"&url=http://mp.weixin.qq.com?params=value";
//
//        var string1="jsapi_ticket="+ d.ticket+"&noncestr=Wm3WZYTPz0wzccnW&timestamp="+timetamp+"&url=http://www.huikelvyou.com/android-h5/weixin/www/index.html#/tab/dash";
//  console.log(string1);
//         console.log(hex_sha1(string1));
//        wx.config({
//          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//          appId: 'wx9b8c10626527d144', // 必填，公众号的唯一标识
//          timestamp:timetamp , // 必填，生成签名的时间戳
//          nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
//          signature: hex_sha1(string1),// 必填，签名，见附录1
//          jsApiList: ['checkJsApi',
//            'onMenuShareTimeline',
//            'onMenuShareAppMessage',
//            'onMenuShareQQ',
//            'onMenuShareWeibo',
//            'onMenuShareQZone',
//            'hideMenuItems',
//            'showMenuItems',
//            'hideAllNonBaseMenuItem',
//            'showAllNonBaseMenuItem',
//            'translateVoice',
//            'startRecord',
//            'stopRecord',
//            'onVoiceRecordEnd',
//            'playVoice',
//            'onVoicePlayEnd',
//            'pauseVoice',
//            'stopVoice',
//            'uploadVoice',
//            'downloadVoice',
//            'chooseImage',
//            'previewImage',
//            'uploadImage',
//            'downloadImage',
//            'getNetworkType',
//            'openLocation',
//            'getLocation',
//            'hideOptionMenu',
//            'showOptionMenu',
//            'closeWindow',
//            'scanQRCode',
//            'chooseWXPay',
//            'openProductSpecificView',
//            'addCard',
//            'chooseCard',
//            'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//        });
//        wx.ready(function(){
//          alert('success');
//          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
//          // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
//          // 则可以直接调用，不需要放在ready函数中。
//        });
//        wx.error(function(res){
//          alert(res);
//          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，
//          // 也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
//
//        });
//      });
//
//    })
//      .error(function (err) {
//        console.log(err)
//        alert(err);
//      })
    var timetamp=Math.floor('1447310784');
    var ticket="sM4AOVdWfPE4DxkXGEs8VLaNYMQ1wEKnhMXPn8M5Kl3m5vYsYXFfkABIfzTMRVAUgkhtneITEygwZBjgsydeLA";
    var string1="jsapi_ticket="+ ticket+"&noncestr=Wm3WZYTPz0wzccnW&timestamp="+timetamp+"&url=http://www.huikelvyou.com/android-h5/weixin/www/index.html#/tab/dash";
   var sign=hex_sha1(string1);
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx9b8c10626527d144', // 必填，公众号的唯一标识
      timestamp:timetamp , // 必填，生成签名的时间戳
      nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
      signature: sign,// 必填，签名，见附录1
      jsApiList: ['checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(
      function(){
        alert('ready');
      }
    );
    wx.error(function(){
      alert('error');
    })
    //打开位置
    $scope.openlocation=function(){
      wx.openLocation({
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'TIT 创意园',
        address: '广州市海珠区新港中路 397 号',
        scale: 14,
        infoUrl: 'http://weixin.qq.com'
      });
    }
    //选择图片
    $scope.choseimage=function(){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          alert(res);
        //  var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
      });
      //wx.getNetworkType({
      //  success: function (res) {
      //    alert(res.networkType);
      //  },
      //  fail: function (res) {
      //    alert(JSON.stringify(res));
      //  }
      //});


    }
    $scope.checkapi=function()
    {
      wx.checkJsApi({
        jsApiList: ['startRecord'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function(res) {
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          console.log(res);
          alert(JSON.stringify(res));
        }
      });

    }
  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
