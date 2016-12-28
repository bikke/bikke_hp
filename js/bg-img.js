(function (){
  var max=5;
  setInterval(()=> {
    var rand = Math.floor( Math.random() * max + 1 );
    console.log(rand);
    document.write("<link rel='stylesheet' type='text/css'  href='css/css_back/style_back"+rand+".css'>");
  }, 5000);
}());
