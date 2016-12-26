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

<h1>歴代メンバー紹介</h1>
<div id="click-event">
<p>

<table class="mem">
<caption>
びっけの歴史<br>
ちなみに下の表の６期生以降は幹部を担当した人を書いてます．
</caption>
  <tr>
    <th>入学年</th>
    <td>メンバー<td>
  </tr>
  <tr>
    <th>20期生（2011年4月入学）</th>
    <td>吉良、つっくん、みさき、ありさ など</td>
  </tr>
    <th>19期生（2010年4月入学）</th>
    <td>かずま、じょー、りーざん、いよ、あすか など</td>
  </tr>
  <tr>
    <th>18期生（2009年4月入学）</th>
    <td>りょうま、たけし、りな、なおこ など</td>
  </tr>
  <tr>
    <th>17期生（2008年4月入学）</th>
    <td>たいき、つーじー、あいか、岩さんなど</td>
  </tr>
  <tr>
    <th>16期生（2007年4月入学）</th>
    <td>こがっち、まゆこ、やぶちゃん、ほっちなど</td>
  </tr>
  <tr>
    <th>15期生（2006年4月入学）</th>
    <td>ヤオス，しゅんくん，ゆり，ざびなど</td>
  </tr>
  <tr>
    <th>14期生（2005年4月入学）</th>
    <td>グリ、タイガ、なお、ムラムラなど</td>
  </tr>
  <tr>
    <th>13期生（2004年4月入学）</th>
    <td>うっしー、ぴよ、むっち、みゆなど</td>
  </tr>
  <tr>
    <th>12期生（2003年4月入学）</th>
    <td>ユウタ、山ちゃん、めぐ、みきなど</td>
  </tr>
  <tr>
    <th>11期生（2002年4月入学）</th>
    <td>こうじ、中野君、まい、ゆかなど</td>
  </tr>
  <tr>
    <th>10期生（2001年4月入学）</th>
    <td>きたじ、たまちゃん、みほ、まさよなど</td>
  </tr>
  <tr>
    <th>9期生（2000年4月入学）</th>
    <td>のざわっち、逸見さん、ゆうみさん、みささんなど</td>
  </tr>
  <tr>
    <th>8期生（1999年4月入学）</th>
    <td>はじめちゃん、西さん、めうねえ、ゆきねえなど</td>
  </tr>
  <tr>
    <th>7期生（1998年4月入学）</th>
    <td>太田プロなど</td>
  </tr>
  <tr>
    <th>6期生（1997年4月入学）</th>
    <td>よしきさんなど</td>
  </tr>
  <tr>
    <th>5期生（1996年4月入学）</th>
    <td>おーちゃん，タロウ，こーいっちゃん，など</td>
  </tr>
  <tr>
    <th>4期生（1995年4月入学）</th>
    <td>齊藤さん，Jr．さん，木虎さんなど</td>
  </tr>
  <tr>
    <th>3期生（1994年4月入学）</th>
    <td>烏さん，峯岸さん（芳樹の兄）など</td>
  </tr>
  <tr>
    <th>2期生（1993年4月入学）</th>
    <td>山田さん，池田さんなど</td>
  </tr>
  <tr>
    <th>1期生（1992年）</th>
    <td>溝口さん（3回生，あとはすべて2回生当時）<br>森田さん，吉田さん（Jr．さんの由来のもと）など</td>
  </tr>
<caption class="btm">以上.<br>独特な香りのするネーミングが多いmember紹介でした</caption>
</table>
</div>
</p>
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