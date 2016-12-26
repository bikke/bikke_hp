myApp.controller('topCtrl', Controller);

// $sceはngSanitizeから
function Controller($scope, $sce) {
  var max = 2;
  var random = Math.floor( Math.random() * max+1 ); //1~maxまでの乱数生成
  $scope.randQue = random;

  $scope.que="test";

  $scope.que1 = $sce.trustAsHtml('<a ui-sref="main">answer</a>');
  // $scope.question1 = [
  //   {question:$sce.trustAsHtml('<a ui-sref="main">answer</a>')},
  //   {question:'<a>false</a>'}
  // ];
  // $scope.question1 = $sce.trustAsHtml($scope.quest1);
  $scope.question2 = [
    {question:'<a ui-sref="main">answer2</a>'},
    {question:'<a>false2</a>'}
  ]
}
// function Controller($scope, $location, uiUtils, $interval) {
//   $scope.innerLink = uiUtils.smoothScroll;// smooth scrollを実現
//   // $location.url($location.path()); //ハッシュ以下のURL消去
//
//   // スマホ向けにパララックス画像を５秒おきに変更
//   var max = 20; ///backディレクトリ内の写真の数をここで指定しておく
//   $interval((max)=> {
//     var rand = Math.floor( Math.random() * max+1 ); //1~maxまでの乱数生成
//     console.log(rand);
//     $scope.randNum = rand;
//   }, 5000);
//
// }
