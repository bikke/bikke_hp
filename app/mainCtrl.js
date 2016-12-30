myApp.controller('mainCtrl', Controller);
myApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;application/json;charset=utf-8';
});

function Controller($scope, $location, uiUtils, $interval, $http) {
  $scope.innerLink = uiUtils.smoothScroll;// smooth scrollを実現
  // $location.url($location.path()); //ハッシュ以下のURL消去
  // スマホ向けにパララックス画像を５秒おきに変更
  $scope.max = 20; ///backディレクトリ内の写真の数をここで指定しておく

  $interval(()=> {
    var rand = Math.floor( Math.random() * $scope.max+1 ); //1~maxまでの乱数生成
    console.log(rand);
    $scope.randNum = rand;
  }, 5000);

  //   // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;application/json;charset=utf-8';
  //   $scope.send = function() {
  //   // $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  //       // clickEvent.preventDefault(); // prevent default submit behaviour
  //       // get values from FORM
  //       var name = $scope.Name;
  //       var email = $scope.Mail;
  //       var univ = $scope.Univ;
  //       var fac = $scope.Fac;
  //       var dep = $scope.Dep;
  //       var message = $scope.Message;
  //       var data = {
  //           name: name,
  //           email: email,
  //           univ: univ,
  //           fac: fac,
  //           dep: dep,
  //           message: message
  //       };
  //       console.log(name+email+univ+fac+dep+message);
  //       var firstName = name; // For Success/Failure Message
  //       // Check for white space in name for Success/Fail message
  //       if (firstName.indexOf(' ') >= 0) {
  //           firstName = name.split(' ').slice(0, -1).join(' ');
  //       }
  //       $http.post('mail/contact_me.php',
  //       {
  //           "name":name,
  //           "email":email,
  //           "univ":univ,
  //           "fac":fac,
  //           "dep":dep,
  //           "message":message
  //       },config)
  //       .success(function(response){
  //
  //           // //response
  //           // $scope.name = response.name;
  //           // $scope.email = response.email;
  //           console.log(name);
  //
  //       });
  //
  //       // $http({
  //       //   method: 'POST',
  //       //   url: 'mail/contact_me.php',
  //       //   // data: $.param(data),
  //       //   // data: {
  //       //   //     name: name,
  //       //   //     email: email,
  //       //   //     univ: univ,
  //       //   //     fac: fac,
  //       //   //     dep: dep,
  //       //   //     message: message
  //       //   // },
  //       //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  //       // })
  //       // // 成功時の処理（ページにあいさつメッセージを反映）
  //       // .success(function(data, status, headers, config){
  //       //   $scope.result = data;
  //       //   console.log("success");
  //       // })
  //       // // 失敗時の処理（ページにエラーメッセージを反映）
  //       // .error(function(data, status, headers, config){
  //       //   $scope.result = '通信失敗！';
  //       //   console.log("false");
  //       // });
  //
  //       /////////////////////////
  //
  //
  //       // $.ajax({
  //       //     url: "app/contact_me.php",
  //       //     type: "POST",
  //       //     data: {
  //       //         name: name,
  //       //         email: email,
  //       //         univ: univ,
  //       //         fac: fac,
  //       //         dep: dep,
  //       //         message: message
  //       //     }
  //       // })
  // };

  //carousel用の画像を4枚ランダムに生成
  $scope.rand4_1 = Math.floor( Math.random() * $scope.max+1 );
  $scope.rand4_2 = ($scope.rand4_1+1) % ($scope.max+1);//あまりは1~20!
  $scope.rand4_3 = ($scope.rand4_1+2) % ($scope.max+1);
  $scope.rand4_4 = ($scope.rand4_1+3) % ($scope.max+1);

}
