// jQuery required
// ng-click="innerLink('about')"のクリック時の動き
var smoothScroll = function(elementOrName, event){
  var element = {'true':$('*[name='+elementOrName+'],'+
                          '#'+elementOrName).eq(0),
                 'false':elementOrName}[typeof elementOrName === 'string'];
  if(!element){
    return;
  }
  if(!element.offset){
    element = $(element);
  }
  if(!element.offset){
    return;
  }
  var top = Math.max(0, element.offset().top);
  $('html,body').
  animate(
    {'scrollTop': top},
    'slow'
  );
  $(".navbar-collapse").collapse('hide'); //スマホ用navbar-collapseにおいて、liをクリックすると、navbarを閉じる

};
