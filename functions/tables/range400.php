<?php 
function t419a() {

 
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

 
	$result = roll('1','20','419b');
	return $result;
}
function t419b1() {

 
	$result = roll('1','10','419b1');
	return $result;
}
function t420() {

 
	$result = roll('1','20','420');
	return $result;
}
function t420a() {

 
	$result = roll('1','20','420a');
	return $result;
}
function t420b() {

 
	$result = roll('1','4','420b');
	return $result;
}
function t421a() {

 
	$result = roll('1','20','421a');
	return $result;
}
function t421b() {

 
	$result = roll('1','20','421b');
	return $result;
}
function t422a() {

 
	$result = roll('1','20','422a');
	return $result;
}
function t422b() {

 
	$result = roll('1','20','422b');
	return $result;
}
function t423a($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;} else {$solmod = 0;};
	$result = roll('1','10','423a',$solmod);
	return $result;
}
function t423b() {

 
	$result = roll('1','20','423b');
	return $result;
}
function t423b1() {

 
	$result = roll('1','4','423b1');
	return $result;
}
function t423b2() {

 
	$result = roll('1','6','423b2');
	return $result;
}
function t423b3() {

 
	$result = roll('1','6','423b3');
	return $result;
}
function t423b4() {

 
	$result = roll('1','4','423b4');
	return $result;
}
function t423c() {

 
	$result = roll('1','20','423c');
	return $result;
}
function t423c1() {

 
	$result = roll('1','4','423c1');
	return $result;
}
function t423c1a() {

 
	$result = roll('1','4','423c1a');
	return $result;
}
function t423c1b() {

 
	$result = roll('1','3','423c1b');
	return $result;
}
function t423d() {

 
	$result = roll('1','20','423d');
	return $result;
}
function t423d1() {

 
	$result = roll('1','6','423d1');
	return $result;
}
function t423e() {

 
	$result = roll('1','20','423e');
	return $result;
}
function t423e1() {

 
	$result = roll('1','4','423e1');
	return $result;
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

 
	$result = roll('1','20','424a');
	return $result;
}

function t424b() {

 
	$result = roll('1','20','424b');
	return $result;
}
function t424c() {

 
	$result = roll('1','20','424c');
	return $result;
}
function t425($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','425',$solmod);
	return $result;
}
function t426a() {

 
	$result = roll('1','6','426a');
	return $result;
}
function t426a1() {

 
	$result = roll('1','20','426a1');
	return $result;
}
function t426a2() {

 
	$result = roll('1','20','426a2');
	return $result;
}
function t426b() {

 
	$result = roll('1','20','426b');
	return $result;
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

 
	$result = roll('1','20','427a');
	return $result;
}
function t427a1() {

 
	$result = roll('1','8','427a1');
	return $result;
}
function t427a2() {

 
	$result = roll('1','8','427a2');
	return $result;
}
function t427b() {

 
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

 
	$result = roll('1','10','427c');
	return $result;
}
?>