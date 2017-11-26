<?php
	INCLUDE 'functions/pdo.php';
	INCLUDE 'functions.php';
	INCLUDE 'functionReturns.php';

	$return = [];
	
	if(isset($_GET['mod'])&&isset($_GET['roll'])){
		$return = roll($_GET['lowRoll'],$_GET['highRoll'],$_GET['table'],$_GET['mod'],$_GET['roll']);
	} else if(isset($_GET['mod'])){
		$return = roll($_GET['lowRoll'],$_GET['highRoll'],$_GET['table'],$_GET['mod']);
	} else {
		$return = roll($_GET['lowRoll'],$_GET['highRoll'],$_GET['table']);
	}
	

	$retVal = json_encode($return);

	echo $retVal;
	return $retVal;
	
?>
