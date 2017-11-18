<?php 
function t101() { 
	$result = roll('1','20','101');
	$GLOBALS['raceName'] = $result['result']['name'];
	return $result;
}

function t101a() { 
	$result = roll('1','10','101a');
	$GLOBALS['raceName'] = $result['result']['name'];
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
	if($result["result"]["tbl"] != ""){
		$result = t103a();
	}
	return $result;
}

function t103a() {
	$result = roll('1','100','103a',$cmod);
	return $result;
}

function t104() { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$result = roll('1','10','104');
	return $result;
}
function t105($cmod = NULL) { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$result = roll('1','10','105',$cmod);
	return $result;
}
function t106($cmod = NULL) { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$resultA = roll('1','20','106',$cmod);
	if($resultA["roll"] == 20){
		$guardRoll = droll("1d20");
		if($guardRoll["roll"] <= 8){
			echo "Character was Orphaned somehow at birth and adopted into a more-or-less normal family group.";
			$result = roll('1','20','106',$cmod);
			masterFunction($result);
		}
		$result=t754($guardRoll["roll"]);
		masterFunction($result);
	}
	return $resultA;
}
function t107() { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
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
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$result = roll('1','20','108');
	return $result;
}
function t110($lmod = 0) { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$result = roll('1','20','110',$lmod);
	$GLOBALS['BiMod'] += $result["result"]["biMod"];
	masterFunction($result);
	return $BiMod;
}
function t111() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$GLOBALS['set111'] == true;
	$result = roll('1','20','111');
	$GLOBALS['BiMod'] += $result["result"]["biMod"];
	masterFunction($result);
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
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','100','113');
	if($result['roll'] == 100){
		$resultA = roll('1','100','113',20);
		$resultB = roll('1','100','113',20);
		masterFunction($resultA);
		masterFunction($resultB);
	} else {
		masterFunction($result);
	}
}
function t113a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','113a');
	return $result;
}
function t113b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','113b');
	return $result;
}
function t113g() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
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

function t114a($culture = NULL) { 
	if($culture == NULL){ $culture = $GLOBALS['cLevel']; }
	$result = roll('1','20','114a');
		echo $result['result']['descrip']."<br />";
		switch ($result["roll"]){
			case 13:
				$job = jobSelect($culture);
				$tvar = "t".$job;
				echo "Primary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				$job2 = jobSelect($social,"-1");
				$tvar2 = "t".$job2;
				echo "Secondary Occupation: ";
				$result2 = call_user_func($tvar2);
				echo "<span title='".$result2['result']['descrip']."'>".$result2['result']['name']."</span><br />";
				break;
			case 14:
				$job = jobSelect($culture);
				$tvar = "t".$job;
				echo "Primary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				$job = jobSelect($social,"-1");
				$tvar = "t".$job;
				echo "Secondary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				echo "<br />";
				break;
			case 15:
				$job = jobMod($culture);
				$tvar = "t".$job;
				echo "Primary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				break;
			case 16:
				$job = jobMod($culture);
				$tvar = "t".$job;
				echo "Primary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				break;
			case 17:
				$job = jobSelect($culture);
				$tvar = "t".$job;
				echo "Parent 1 Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				$job = jobSelect($social);
				$tvar = "t".$job;
				echo "Parent 2 Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				break;
			case 18:
				$job = jobSelect($culture);
				$tvar = "t".$job;
				echo "Parent 1 Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				$job = jobSelect($social);
				$tvar = "t".$job;
				echo "Parent 2 Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				break;
			case 19:
				echo "Primary Occupation: ";
				foreach ($result["tResult"] as $table => $sub) {
					foreach ($sub as $k => $v) {
						if($k == "table"){
							$tvar = "t".$v;
							$resultA = call_user_func($tvar);
							echo "<span style='color:#000'>".$resultA["result"]["name"]." ".$resultA["result"]["descrip"]."</span><br />";
						}
					}
				}
				break;
			case 20:
					echo "Primary Occupation: ";
					$tvar = "t".$result["tResult"][0]["table"];
					$resultA = call_user_func($tvar,$result['tResult'][0]['tid']);
					echo "<span style='color:#000'>".$resultA["result"]["descrip"]."</span>";
				break;
			default:
				$job = jobSelect($culture);
				$tvar = "t".$job;
				echo "Primary Occupation: ";
				$result = call_user_func($tvar);
				echo "<span title='".$result['result']['descrip']."'>".$result['result']['name']."</span><br />";
				break;
		}


}
function t114b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$repeat = droll('1d3');
	echo "<ul>";
	for($i=0;$i < $repeat["roll"]; $i++){
		$who = droll('1d6');
		if($who["roll"] >= 5){ $which = "Other Parent: "; } else { $which = "Head of Household: "; }
		$result = roll('1','20','114b');
		echo "<li>".$which;
		masterFunction($result);
		echo "</li>";
	}
	echo "</ul>";
}

function t114b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','114b1');
	masterFunction($result);
}
function t114b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','114b2');
	if($result["roll"] == 3){
		$eR = droll("1d6");
		if ($eR["roll"] <=3){ t648(); } else { t647(); }
	}
	masterFunction($result);
}
function t114b3() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','114b3');
	masterFunction($result);
}
function t114b4() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','114b4');
	masterFunction($result);
}
function t114b5() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','114b5');
	masterFunction($result);
}
?>