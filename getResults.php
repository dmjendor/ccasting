<?php
	INCLUDE 'functions/pdo.php';
	INCLUDE 'functions.php';
	INCLUDE 'functionReturns.php';
	global $startingAge,$currentAge,$CuMod,$SolMod,$LegitMod,$BiMod,$TiMod,$cLevel,$sLevel,$illSib,$LSide,$DSide,$NSide,$RSide,$enslavement,$prisoner,$cSentence,$vicSoc,$loveCurse,$raceName,$ageGroup,$mRank,$mBranch,$mLength, $set111, $debug;

			$startingAge = $SolMod = $LegitMod = $BiMod = $TiMod = $illSib = $LSide = $DSide = $NSide = $RSide = $enslavement = $prisoner = $cSentence = $loveCurse = $ageGroup = $mRank = $CuMod = 0;
			$currentAge = 18;
			$set111 = false;
			$cLevel = $sLevel = $raceName = $mBranch = $vicSoc = "";
			$debug = 1;

	if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);
	$return = 'FAIL';

	if(isset($_POST['table'])){
		$table = $_POST['table'];
		if($table != "") {
			if(!empty($_POST['useChar'])){ $useChar = TRUE; } else { $useChar = FALSE; }
//			$return =  call_user_func($table);
			$funcName = $table;
			if(isset($_POST['d2'])){
				$return = $funcName($_POST['d1'],$_POST['d2']);
			} elseif(isset($_POST['d1'])){
				$return = $funcName($_POST['d1']);
			} else {
				$return = $funcName();
			}
		}
	}
 

	$retVal = json_encode($return);

	echo $retVal;
	return $retVal;
	
?>
