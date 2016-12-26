<?php
$target_dir = './back';
$result = array();
$command = "find " . $target_dir . " -name '*.jpg' | wc -l";
exec($command, $result);
///////$result[0]

$numArr=array();
for($i=0;$i<5;$i++){
	$num=mt_rand(1,$result[0]);
	for(;;){
		if(in_array($num,$numArr)){
			$num=mt_rand(1,$result[0]);
		}
		else{
			break;
		}
	}
	$numArr[]=$num;
}
//sort($numArr);
//foreach($numArr as $num){
//	echo $num, "<br>\n";
//}
print "<li><a href=\"http://www.mendoksa.pr.kyoto-u.ac.jp\"><img src=\"back/{$numArr[0]}.jpg\" alt=\"1\" /></a></li>";
print "<li><a href=\"http://www.mendoksa.pr.kyoto-u.ac.jp\"><img src=\"back/{$numArr[1]}.jpg\" alt=\"2\" /></a></li>";
print "<li><a href=\"http://www.mendoksa.pr.kyoto-u.ac.jp\"><img src=\"back/{$numArr[2]}.jpg\" alt=\"3\" /></a></li>";
print "<li><a href=\"http://www.mendoksa.pr.kyoto-u.ac.jp\"><img src=\"back/{$numArr[3]}.jpg\" alt=\"4\" /></a></li>";
print "<li><a href=\"http://www.mendoksa.pr.kyoto-u.ac.jp\"><img src=\"back/{$numArr[4]}.jpg\" alt=\"5\" /></a></li>";
?>
