myApp.config(config);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/main")// 必ずmainから!
    $stateProvider
      .state('main', {
          url: "/main",
          templateUrl: "contents/main.html",
          controller: "mainCtrl"
      })
      .state('nori', {
          url: "/mem/nori",
          templateUrl: "contents/member/nori.html",
      })

};
