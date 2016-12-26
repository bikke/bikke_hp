<?php
header('X-FRAME-OPTIONS: DENY');
?>
<!doctype html>
<html lang="ja">

<head>
<meta charset="UTF-8">

<title>BIKKE会員専用ページ</title>

<meta name="viewport" content="initial-scale=1.0">


<!-- Slidebars CSS -->
<link rel="stylesheet" href="css/slidebars.css">


<!--  Styles -->
<link rel="stylesheet" href="css/style.css">


<!-- jQuery -->
<script src="js/jquery-1.11.0.min.js"></script>

<script src="js/slidebars.js"></script>
<script>

(function($) {

	$(document).ready(function() {

	$.slidebars();

	});SS

}) (jQuery);

</script>

</head>

<body >
<div id="header" <?php include("php/bgcolor.php"); ?>>
<p class="sb-toggle-left">◆</p>

HOME
<p class="sb-toggle-right">◆</p>

</div>


<div id="sb-site" >

<h1>昔懐かしの<br>びっけブログまとめ</h1>
<div id="click-event">
<em>以前のホームページではアクセス制限をかけずに公開していたと思われるページです。<br>
昔のものを見られるのが恥ずかしいという先輩もいらっしゃるかと思うので、会員専用ページに移動しました。<br>以下、元のまま貼り付けておきます～</em>
<p>* びっけ部ログとは [#be3914b9]<br>
びっけでは週代わりでメンバが部ログを書いています！~<br>
普段のびっけでは見れない”あいつの個性がチラリズム”<br>

今週は誰が書いてるのかな！？(^o^)<br>
<br>
* 過去の部ログ [#m6f18eac]<br>
過去の部ログには以下のアドレスからアクセスできます☆~<br>
こうやって見てみると，びっけ部ログの歴史も結構長いねぇ～<br>

<ol style="list-style-type: hebrew">
<li><a href="http://ameblo.jp/bikkeblo-2015/">– 2015年度 部ログ係：ここず</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2014/">– 2014年度 部ログ係：はるな</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2013/">– 2013年度 部ログ係：ゆりぼ</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2012/">– 2012年度 部ログ係：ゆみ</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2011/">– 2011年度 部ログ係：みさき</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2010/">– 2010年度 部ログ係：あみ</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2009/">– 2009年度 部ログ係：ゆー</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2008/">– 2008年度 部ログ係：りな</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2007/">– 2007年度 部ログ係：ゆぅ</a></li>
<li><a href="http://ameblo.jp/bikkeblo-2006/">– 2006年度 部ログ係：あやぽん</a></li>
<li><a href="http://blog.livedoor.jp/music96963/">– 2004年12月～2005年9月の部ログ♪</a></li>
</ol>
</p>
</div>
<script>
$("#click-event").click(function(){
  $(this).slideUp();
});
</script>

</div>

<div class="sb-slidebar sb-left">
<div id="menu">
<?php include("php/left.php"); ?>
</div><!---menu--->
</div>
<div class="sb-slidebar sb-right">
<div id="menu">
<?php include("php/right.php"); ?>
</div><!---menu--->
</div>

</body>

</html>
