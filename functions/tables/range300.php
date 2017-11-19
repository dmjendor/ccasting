<?php 
function t318a() {

 
	$result = roll('1','100','318a');
   	$GLOBALS['LSide'] += $result["result"]["L"];
	$GLOBALS['DSide'] += $result["result"]["D"];
	$GLOBALS['NSide'] += $result["result"]["N"];
	$GLOBALS['RSide'] += $result["result"]["R"];
	return $result;
}
function t318b() {

 
	$result = roll('2','20','318b');
	return $result;
}
?>