<?php 
function t750() {
	$result = roll('1','20','750');
	return $result;
}
function t751() {
	$result = roll('1','20','751');
	return $result;
}
function t752() {
	$result = roll('1','20','752');
	return $result;
}
function t753() {
	$result = roll('1','20','753');
	return $result;
}
function t754($id=0) { 
	if($id != 0){ $result = roll('1','20','754',0,$id); } else { $result = roll('1','20','754');  }
	return $result;
}
function t755() {
	$result = roll('1','20','755');
	return $result;
}
function t756() {
	$result = roll('1','20','756');
	return $result;
}
function t757(){
	charSex();
	t757a();
	t757b();
}
function t757a() {
	$result = roll('1','20','757a');
	return $result;
}
function t757b() {
	$result = roll('1','20','757b');
	return $result;
}

function t758a($cLevel){
	switch ($cLevel){
		case "Primitive":
			$res2 = t758a1();
		break;
		case "Nomad":
			$res2 = t758a2();
		break;
		case "Barbarian":
			$res2 = t758a3();
		break;
		case "Civilized":
			$res2 = t758a4();
		break;
		case "Civilized-Decadent":
			$res2 = t758a4();
		break;
		default:
			$res2 = t758a1();
		break;
	}
	return $res2;
}
function t758a1() {
	$result = roll('1','100','758a1');
	return $result;
}
function t758a2() {
	$result = roll('1','100','758a2');
	return $result;
}
function t758a3() {
	$result = roll('1','100','758a3');
	return $result;
}
function t758a4() {
	$result = roll('1','100','758a4');
	return $result;
}
function t758b() {
	$result = roll('1','20','758b');
	return $result;
}
function t759() {
	$result = roll('1','20','759');
		t760();
	return $result;
}
function t760() {

 
	$cR1 = droll("1d20");
	if($cR1["roll"]>=15){
		echo "Abilities unknown to character";
	}
	$cR2 = droll("1d3");
	for($i = 0; $i <= $cR2["roll"]; $i++){
		$result = roll('1','20','760');
		return $result;
	}
}

function t760a() {


	$result = roll('1','10','760a');
	return $result;
}

function t761() {

 
	t761a();
	t102out();
	t103out();
	t114a();
	t761b();
	t761c();
}
function t761a($tid="") {

 
	if(!empty($tid)){
		$result = roll('1','10','761a',$tid);
	} else {
		$result = roll('1','10','761a');
	}
	$result = roll('1','10','761a');
	charSex();
	if($result['roll'] == 10){
		$cR1 = droll("1d10");
		if($cR1["roll"] == 10){
			t978("11");
		} else {
			t761a();
		}
	}
	return $result;
}
function t761b() {

 
	$result = roll('1','10','761b');
	return $result;
}

function t761c() {

 
	$result = roll('1','10','761c');
	return $result;
}
function t762() {

 
	t762a();
	t102out();
	t103out();
	t114a();
	t762b();
	t762c();
}
function t762a($tid = "") {

 
	if(!empty($tid)){
		$result = roll('1','10','762a',$tid);
	} else {
		$result = roll('1','10','762a');
	}
	if($result["roll"] == 10){
		$pGod = droll("1d10");
		if($pGod["roll"] == 10){
			echo "Rival is a God!";
			t864();
		} else {
			$result = roll('1','10','762a',0,$pGod["roll"]);
		}
	}
	return $result;
}
function t762b() {

 
	$result = roll('1','10','762b');
	return $result;
}
function t762c() {

 
	$result = roll('1','10','762c');
	return $result;
}
?>