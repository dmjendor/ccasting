<?php 
function t419a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','419a');
	if($result["roll"]>=7){
		$job = jobSelect($social);
		$tvar = "t".$job;
		echo "Masters Occupation: ";
		$result = call_user_func($tvar);
	}
	if($result["result"]["tbl"] != ""){
		echo "Masters Occupation: ";
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
}
function t419b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','419b');
	masterFunction($result);
}
function t419b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','419b1');
	masterFunction($result);
}
function t420() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','420');
	masterFunction($result);
}
function t420a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','420a');
	masterFunction($result);
}
function t420b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','420b');
	masterFunction($result);
}
function t421a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','421a');
	masterFunction($result);
}
function t421b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','421b');
	masterFunction($result);
}
function t422a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','422a');
	masterFunction($result);
}
function t422b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','422b');
	masterFunction($result);
}
function t423a($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;} else {$solmod = 0;};
	$result = roll('1','10','423a',$solmod);
	masterFunction($result);
}
function t423b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','423b');
	masterFunction($result);
}
function t423b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','423b1');
	masterFunction($result);
}
function t423b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','423b2');
	masterFunction($result);
}
function t423b3() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','423b3');
	masterFunction($result);
}
function t423b4() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','423b4');
	masterFunction($result);
}
function t423c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','423c');
	masterFunction($result);
}
function t423c1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','423c1');
	masterFunction($result);
}
function t423c1a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','423c1a');
	masterFunction($result);
}
function t423c1b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','3','423c1b');
	masterFunction($result);
}
function t423d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','423d');
	masterFunction($result);
}
function t423d1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','423d1');
	masterFunction($result);
}
function t423e() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','423e');
	masterFunction($result);
}
function t423e1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','423e1');
	masterFunction($result);
}
function t424(){
	$craft = droll("1d3");
	switch($craft["roll"]){
		case 1:
			t424a();
		break;
		case 2:
			t424b();
		break;
		case 3:
			t424c();
		break;
		default:
			t424a();
		break;
	}
}
function t424a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','424a');
	masterFunction($result);
}

function t424b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','424b');
	masterFunction($result);
}
function t424c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','424c');
	masterFunction($result);
}
function t425($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','425',$solmod);
	masterFunction($result);
}
function t426a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','426a');
	masterFunction($result);
}
function t426a1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','426a1');
	masterFunction($result);
}
function t426a2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','426a2');
	masterFunction($result);
}
function t426b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','426b');
	masterFunction($result);
}
function t427(){
	echo "<br />Degree of interest: ";
	t427c();
	echo "<br />Type of Hobby: ";
	t427a();
	echo "<br />Proficiency: ";
	t427b();
	echo "<br />";
}
function t427a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','427a');
	masterFunction($result);
}
function t427a1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','427a1');
	masterFunction($result);
}
function t427a2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','427a2');
	masterFunction($result);
}
function t427b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$hLevel = 0;
	switch($GLOBALS['cLevel']){
		case "Primitive":
			$hLevel += -2;
			break;
		case "Nomad":
			$hLevel += -1;
			break;
		case "Barbarian":
			$hLevel += 0;
			break;
		case "Civilized":
			$hLevel += 1;
			break;
		case "Civilized-Decadent":
			$hLevel += 1;
			break;
		default;
			$hLevel += 0;
		break;
	}
	switch ($GLOBALS['sLevel']){
		case "Destitute":
			$hLevel += -1;
			break;
		case "Poor":
			$hLevel += 0;
			break;
		case "Comfortable":
			$hLevel += 0;
			break;
		case "Well-to-Do":
			$hLevel += 0;
			break;
		case "Wealthy":
			$hLevel += 1;
			break;
		case "Nobility":
			$hLevel += 2;
			break;
		case "Extremely Wealthy":
			$hLevel += 2;
			break;
		default:
			$hLevel += 0;
			break;
	}
	$roll = droll("1d4");
	$hLevel += $roll['roll'];
	if($hLevel <= 0){ $hLevel = 1; }
	echo $hLevel." ranks";
}
function t427c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','427c');
	masterFunction($result);
}
?>