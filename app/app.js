var myApp = angular.module('myapp', ['ui.router', 'ngSanitize'])
  .factory('uiUtils',[function() {
    return {
      smoothScroll:smoothScroll
    };
  }])
  .controller('PageLink', [function(uiUtils) {
    uiUtils.smoothScroll(page-top);
  }])
  ;
