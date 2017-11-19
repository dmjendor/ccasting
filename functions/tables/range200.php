<?php 
function t215($solmod=null) { 
	global $ageGroup, $LSide, $DSide, $NSide, $RSide,$SolMod;
	if($solmod == null){$solmod = $SolMod; } else { $solmod = 0;}
	$result = roll('1','20','215',$solmod);
    	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	if($result["roll"] == 10 OR $result["roll"] == 11 OR $result["roll"] == 19){
		if($ageGroup == 1){
			$result = t216a();
		} else { 
			$result = t216b();
		}
	}

	if($result["roll"] == 13  ){
		global $raceName,$cLevel, $sLevel;
		switch($raceName){
			case "Human":
				echo "Has an enounter with "; 
				$result = t751();
				echo $result["result"]["name"]." and befriends them.";
			break;
			case "Elf":
				$result = t530();
			break;
			case "Dwarf":
				$result = t531();
			break;
			case "Halfling":
				$result = t532();
			break;
			case "Half elf":
				$result = t530();
			break;
			case "Beastman":
				$result = t533();
			break;
			case "Reptileman":
				$result = t533();
			break;
			case "Orc":
				$result = t533();
			break;
			case "Half orc":
				$result = t533();
			break;
		}
	}
	if($result["roll"] == 25  ){
		if($sLevel == "Wealthy" OR $sLevel == "Extremely Wealthy" OR $sLevel == "Noble") {
			$rolMod = $solmod + 5;
		}	else { $rolMod = $solmod + 2; }
			$result = roll('1','20','215',$rolMod);
	}
	return $result;
}
function t215a() {

 
	global $LSide, $DSide, $NSide, $RSide;
	$result = roll('1','10','215a');
    	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t215b() {

 
	$result = roll('1','6','215b');
	return $result;
}
function t215c() {

 
	$result = roll('1','6','215c');
	return $result;
}
function t215d() {

 
	$result = roll('1','4','215d');
	return $result;
}
function t215e() {

 
	$result = roll('1','4','215e');
	return $result;
}
function t216a() {

 
	$result = roll('1','20','216a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t216b() {

 
	$result = roll('1','20','216b');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t216b1() {

 
	$result = roll('1','6','216b1');
    $GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t216b2() {

 
	$result = roll('1','4','216b2');
    $GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217($solmod = null) { 

 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('2','40','217',$solmod);
	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217a() {

 
	$result = roll('1','8','217a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217b() {

 
	$result = roll('1','3','217b');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217c() {

 
	$result = roll('1','3','217c');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217d() {

 
	$result = roll('1','4','217d');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t217e() {

 
	$result = roll('1','6','217e');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
?>