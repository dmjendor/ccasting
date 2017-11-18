<?php 
function t318a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','100','318a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	masterFunction($result);
}
function t318b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('2','20','318b');
	masterFunction($result);
}
?>