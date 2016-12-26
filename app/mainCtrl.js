myApp.controller('mainCtrl', Controller);

function Controller($scope, $location, uiUtils, $interval) {
  $scope.innerLink = uiUtils.smoothScroll;// smooth scrollを実現
  // $location.url($location.path()); //ハッシュ以下のURL消去
  // スマホ向けにパララックス画像を５秒おきに変更
  $scope.max = 20; ///backディレクトリ内の写真の数をここで指定しておく

  $interval(()=> {
    var rand = Math.floor( Math.random() * $scope.max+1 ); //1~maxまでの乱数生成
    console.log(rand);
    $scope.randNum = rand;
  }, 5000);

  //carousel用の画像を4枚ランダムに生成
  $scope.rand4_1 = Math.floor( Math.random() * $scope.max+1 );
  $scope.rand4_2 = ($scope.rand4_1+1) % $scope.max;
  $scope.rand4_3 = ($scope.rand4_1+2) % $scope.max;
  $scope.rand4_4 = ($scope.rand4_1+3) % $scope.max;

}
