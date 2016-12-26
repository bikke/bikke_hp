$(function() {
  $("#pics").hide();
    $(window).scroll(function () {
        var s = $(this).scrollTop();//はじめは隠しておく
        var m = 1000;
        if(s > m ) {
            $("#pics").fadeIn('slow');
            // $("img:hidden").show("fast");
        } else  {
            $("#pics").fadeOut('slow');
        }
    });
});
// 即時関数
(function (){
  var rand = Math.floor( Math.random() * 20+1 ); //1~maxまでの乱数生成

var Pic="img/nori.gif";  //画像指定"back/"+rand+".jpg";
var inZ=0.1;
var spd=35;          //数値が大きいほど遅い
document.write("<img src='"+Pic+"' id='pics' class='members' height='100' style='position:fixed; z-index:"+inZ+";' ui-sref='nori'>");//固定指定へ

var R=0,PB=0,RD=0,VB=0,HB=0;
var Y=10,X=10,D=Math.floor(Math.random()*60+10);
function Curve(){
  var plusMinus=[1,-1,2,-2,3,-3,0,1,-1,0,4];
  R=Math.floor(Math.random()*plusMinus.length);
  RD=plusMinus[R];
  setTimeout(Curve,1800);
}
function MoveRandom(){
  var H=window.innerHeight, W=window.innerWidth;
  var BY=-(pics.offsetHeight), BX=-(pics.offsetWidth);
  PB=D+=RD;
  var y=3*Math.sin(PB*Math.PI/180);/*SY=3を数値で*/
  var x=5*Math.cos(PB*Math.PI/180);/*SX=5を数値で*/
  if (D<0){ D+=360;}
  Y+=y; X+=x; VB=180-D; HB=0-D;
  //Corner rebounds! not necessary but looks nice.
  if ((Y < 1) && (X < 1)) {Y=1;X=1;D=45;}
  if ((Y < 1) && (X > W+BX)) {Y=1;X=W+BX;D=135;}
  if ((Y > H+BY) && (X < 1)) {Y=H+BY;X=1;D=315;}
  if ((Y > H+BY) && (X > W+BX)) {Y=H+BY;X=W+BX;D=225;}
  //Edge rebounds!
  if (Y < 1) {Y=1;D=HB;}
  if (Y > H+BY) {Y=H+BY;D=HB;}
  if (X < 1) {X=1;D=VB;}
  if (X > W+BX) {X=W+BX;D=VB;}
  pics.style.top=Y+"px"; pics.style.left=X+"px";
  setTimeout(MoveRandom,spd);
}
Curve(); MoveRandom();
}());
