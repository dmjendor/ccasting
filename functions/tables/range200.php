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
	masterFunction($result);
}
function t215a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	global $LSide, $DSide, $NSide, $RSide;
	$result = roll('1','10','215a');
    	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t215b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','215b');
	masterFunction($result);
}
function t215c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','215c');
	masterFunction($result);
}
function t215d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','215d');
	masterFunction($result);
}
function t215e() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','215e');
	masterFunction($result);
}
function t216a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','216a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t216b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','216b');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t216b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','216b1');
    $GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t216b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','216b2');
    $GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217($solmod = null) { 
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('2','40','217',$solmod);
	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','217a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','3','217b');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','3','217c');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','217d');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t217e() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','217e');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
?>