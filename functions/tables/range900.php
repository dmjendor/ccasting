<?php 
function t978($tid) { 
	$result = roll('1','10','978',0,$tid);
	if($tid == 4){
		$cR1 = droll("1d10");
		if($cR1["roll"] <= 4){
			t978c();
		} else {
			echo ", but is not.";
		}
	}
	masterFunction($result);
}
function t978a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','978a');
	masterFunction($result);
}
function t978b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','978b');
	masterFunction($result);
}
function t978c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','978c');
	masterFunction($result);
}

?>