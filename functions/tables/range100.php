<?php 
function t101() { 
	$result = roll('1','20','101');
	return $result;
}

function t101a() { 
	$result = roll('1','10','101a');
	return $result;
}

function t102() { 
	$result = roll('1','10','102');
	return $result;
}

function t102out(){
	return t102();
}

function t103($cmod = 0) { 
	$result = roll('1','100','103',$cmod);
	return $result;
}

function t103a($cmod = 0) {
	$result = roll('1','100','103a',$cmod);
	return $result;
}

function t104() { 
	$result = roll('1','10','104');
	return $result;
}

function t105($cmod = NULL) { 
	$result = roll('1','10','105',$cmod);
	return $result;
}

function t106($cmod = NULL) { 
	$resultA = roll('1','20','106',$cmod);
	if($resultA["roll"] == 20){
		$guardRoll = droll("1d20");
		if($guardRoll["roll"] <= 8){
			echo "Character was Orphaned somehow at birth and adopted into a more-or-less normal family group.";
			$result = roll('1','20','106',$cmod);
			return $result;
		}
		$result=t754($guardRoll["roll"]);
		return $result;
	}
	return $resultA;
}

function t107() { 


	global $illSib;
	$result = roll('1','20','107');
	if($result["roll"] == 20){
		$sibN = droll($result["result"]["name"]);
		$illSib += $sibN['roll'];
		$result = t107();
	} else {
		$roll = droll($result["result"]["name"]);
		$result['result']['name'] = $roll['final'];
	}
	return $result;
}

function t108() { 


	$result = roll('1','20','108');
	return $result;
}
function t110($lmod = 0) { 


	$result = roll('1','20','110',$lmod);
	$GLOBALS['BiMod'] += $result["result"]["biMod"];
	return $result;
	return $BiMod;
}
function t111() {

 
	$GLOBALS['set111'] == true;
	$result = roll('1','20','111');
	$GLOBALS['BiMod'] += $result["result"]["biMod"];
	return $result;
}

function t112($bimod=0) { 
	if(!empty($bimod)){ $bimod = $GLOBALS['BiMod']; }
	$result = roll('1','100','112',$bimod);
	echo $result['result']['descrip'];
	echo "<ol>";

	if((strpos($result["result"]["tbl"], ',') == FALSE) AND $result["result"]["tbl"] !== "" ){
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
		echo "<li>".$result['result']['descrip']."</li>";
	}

	if($result["tResult"][0]["table"] != ""){

		foreach ($result["tResult"] as $table => $sub) {
			foreach ($sub as $k => $v) {
				if($k == "table"){
					$tvar = "t".$v;
					$resultA = call_user_func($tvar);
					if($v == "113g"){
						echo "<li style='color:#eee'>GM: ".$resultA["result"]["descrip"]."</li>";
					} else {
						echo "<li>".$resultA["result"]["descrip"]."</li>";
					}
				}
			}
		}
	}
	if($result["roll"]>=95 AND $result["roll"]<=97){
		$subV = 3;
		$gR = droll("1d2");
	}
	if($result["roll"]>=99 AND $result["roll"]<=150){
		$subV = 4;
		$gR = droll("1d3");
	}
	if($result['roll']>=95){
		$vRoll = $subV-$gR['roll'];
		for($i = $vRoll; $i > 0; $i--){
			$rx = t113();
			echo "<li>".$resultA["roll"].$rx["result"]["descrip"]."</li>";
		} 
		for($i = $gR['roll']; $i > 0; $i--){
			$rx = t113g();
			echo "<li style='color:#eee'>GM: ".$resultA["roll"].$rx["result"]["descrip"]."</li>";
		} 
	}
		echo "</ol>";
}

function t113() {

 
	$result = roll('1','100','113');
	if($result['roll'] == 100){
		$resultA = roll('1','100','113',20);
		$resultB = roll('1','100','113',20);
		masterFunction($resultA);
		masterFunction($resultB);
	} else {
		return $result;
	}
}
function t113a() {

 
	$result = roll('1','10','113a');
	return $result;
}
function t113b() {

 
	$result = roll('1','10','113b');
	return $result;
}
function t113g() {


	$result = roll('1','100','113');
	$deskA = "";
	if($result["result"]["tbl"] != ""){
		$deskA = $result["result"]["descrip"];
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
	$deskB = $deskA.$result["result"]["descrip"];
	$result["result"]["descrip"] = $deskB;
	return $result;
}

function t114a() { 
	$result = roll('1','20','114a');
	return $result;
}

function t114b() {

 
	$repeat = droll('1d3');
	echo "<ul>";
	for($i=0;$i < $repeat["roll"]; $i++){
		$who = droll('1d6');
		if($who["roll"] >= 5){ $which = "Other Parent: "; } else { $which = "Head of Household: "; }
		$result = roll('1','20','114b');
		echo "<li>".$which;
		return $result;
		echo "</li>";
	}
	echo "</ul>";
}

function t114b1() {

 
	$result = roll('1','6','114b1');
	return $result;
}
function t114b2() {

 
	$result = roll('1','6','114b2');
	if($result["roll"] == 3){
		$eR = droll("1d6");
		if ($eR["roll"] <=3){ t648(); } else { t647(); }
	}
	return $result;
}
function t114b3() {

 
	$result = roll('1','4','114b3');
	return $result;
}
function t114b4() {

 
	$result = roll('1','4','114b4');
	return $result;
}
function t114b5() {

 
	$result = roll('1','6','114b5');
	return $result;
}
?>