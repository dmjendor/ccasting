<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="castingApp" ng-controller="baseController">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Central Casting - Heroes of Legend - Generator</title>
    <meta name="author" content="Lee Vaughan" />
	<link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
    <?php
			INCLUDE 'functions/pdo.php';
			INCLUDE 'functions.php';
			INCLUDE 'functionReturns.php';
			// initialize global variables
			global $startingAge,$currentAge,$CuMod,$SolMod,$LegitMod,$BiMod,$TiMod,$cLevel,$sLevel,$illSib,$LSide,$DSide,$NSide,$RSide,$enslavement,$prisoner,$cSentence,$vicSoc,$loveCurse,$raceName,$ageGroup,$mRank,$mBranch,$mLength, $set111, $debug,$pdo;

			$startingAge = $SolMod = $LegitMod = $BiMod = $TiMod = $illSib = $LSide = $DSide = $NSide = $RSide = $enslavement = $prisoner = $cSentence = $loveCurse = $ageGroup = $mRank = $CuMod = 0;
			$currentAge = 18;
			$set111 = false;
			$cLevel = $sLevel = $raceName = $mBranch = $vicSoc = "";
			$debug = 1;
		?>

	<script src="scripts/jquery-3.2.1.min.js" type="text/javascript"></script>
	<script src="scripts/jquery-ui.1.12.1.min.js" type="text/javascript"></script>
    
	<script src="scripts/angular.1.6.6.min.js" type="text/javascript"></script>
	<script src="scripts/sprintf.min.js" type="text/javascript"></script>
	<script src="scripts/angular-sprintf.min.js" type="text/javascript"></script>
	<script src="scripts/ui-bootstrap.2.5.0.min.js" type="text/javascript"></script>
	<script src="scripts/ui-bootstrap-tpls.2.5.0.min.js" type="text/javascript"></script>

	<link href="css/bootstrap.3.3.7.min.css" rel="stylesheet" type="text/css" >
    <link href="css/cupertino-jquery-ui.css" rel="stylesheet" type="text/css" />

    <link href="css/main.css" rel="stylesheet" type="text/css" />

    <script type="javascript">
        $( document ).ready(function() {

            $(".titled").tooltip();

            $( "#tableSelect" ).change(function () {
				alert("test");
                var str = $( "option:selected" ).val();
                $.ajax({
                    type: 'POST',
                    url: 'getResults.php',
                    data: {table:str}
                }).done(function(msg){
                    $('#results').html(msg);
                });
            });
            $( "#goButton" ).on('click', function () {
                var str = $( "#tableSelect option:selected" ).val();
                $.ajax({
                    type: 'POST',
                    url: 'getResults.php',
                    data: {table:str}
                }).done(function(msg){
                    $('#results').html(msg);
                });
            });
        });


    </script>

</head>
<body>

<div id="container-fluid">
    <div class="col-xs-6">
        <div class="panel panel-primary">
            <div class="panel-heading">Basic Info</div>
            <div class="panel-body">
				<race-info></race-info>
				<culture-info></culture-info>
				<survival-info></survival-info>
				<legitimacy-info></legitimacy-info>


				<?php 

				
// echo "<br/>";
// echo "<b>Family:</b> ";
// $family = t106($CuMod);
// if($family['roll']>=21 AND $family['roll']<=24){
//     $SolMod = "-1";
// $social['result']['level'] = "Poor";
// }
// echo $family['result']['descrip'];
// echo "<br/>";
// $siblings = t107(20);
// $sibNum = $siblings['result']['name'];
// echo $sibNum." siblings";
// if($illSib > 0){
//     echo " and ".$illSib." illegitimate siblings.";
// }
// echo "<br/>";
// if($sibNum !== 0){
//     $birthOrder = t108();
// echo $birthOrder['result']['descrip'];
// }

// echo "<b>Birth Place:</b> ";
// $birthPlace = t110($LegitMod);
// if($GLOBALS['set111']==true){
//     echo "<br /><b>Unusual Birth Circumstances:</b> ";
// t112($BiMod);
// }
				?>
			</div>

		</div>
		<parent-info></parent-info>
		<birth-info></birth-info>
        <div class="panel panel-primary">
            <div class="panel-heading">Significant Events of Childhood</div>
            <div class="panel-body">
				<?php
					//$childR = droll("1d3");
					// $ages = array();
					// $ageArray = array();
					//
					// echo "<ul class='list-group'>";
					//
					// for($i=0;$i <= $childR['final']; $i++){
					//     array_push($ageArray,getAge('child'));
					// }
					//
					// foreach ($ageArray as $age) {
					//     $ages[] = $age['final'];
					// }
					// asort($ages);
					//
					// foreach ($ages as $age){
					//     echo "<li class='list-group-item'><b class='text-primary'>Age ".$age.": </b>";
					// t215();
					// }
					//
					//
					// echo "</ul>";               
                ?>
				</div>
            </div>

			<div class="panel panel-primary">
				<div class="panel-heading">Significant Events of Adolescence</div>
				<div class="panel-body">
				<?php
					// $adolesR = droll("1d3");
					// $ages2 = array();
					// $age2Array = array();
					// echo "<ul>";
					// for($i=0;$i <= $adolesR['final']; $i++){
					//     array_push($age2Array,getAge('child'));
					// }
					//
					// foreach ($age2Array as $age) {
					//     $ages2[] = $age['final'];
					// }
					// asort($ages2);
					//
					// foreach ($ages2 as $age2){
					//     echo "<li class='list-group-item'><b class='text-primary'>Age ".$age2.": </b>";
					// t215();
					// }
					//
					// echo "</ul>";
				?>
				</div>
			</div>
			<div class="panel panel-primary" ng-if="charInfo.military.rank">
				<div class="panel-heading">Your Military Service</div>
				<div class="panel-body">

				<?php 
					//$muster = musterOut($mRank);
				?>
				</div>
			</div>

				
        </div>
    </div>

    <div class="col-xs-6">
	<form class="form-horizontal">
	  <div class="form-group">
		<label for="inputEmail3" class="col-sm-3 control-label">Select a Table</label>
		<div class="col-sm-9">
		  <select id="tableSelect">
            <option></option>
            <?php

				$stmt = $pdo->query("SELECT `TABLE_NAME`, `TABLE_COMMENT` FROM information_schema.tables where `TABLE_SCHEMA` = 'ccasting'");
				while ($row = $stmt->fetch())
				{
					if(!empty($row['TABLE_COMMENT'])){ 
						$display = $row['TABLE_NAME'].": ".$row['TABLE_COMMENT']; 
					} else { 
						$display = $row['TABLE_NAME']; 
					}
					echo "<option value='r".$row['TABLE_NAME']."'>".$display."</option>" . "\n";
				}
			
            ?>
        </select>
		</div>
	  </div>
	  <div class="form-group">
		<div class="col-sm-offset-2 col-sm-4">
		  <div class="checkbox">
			<label>
			  <input type="checkbox" ng-model="charInfo.showRolls"> Show Rolls
			</label>
		  </div>
		</div>
		<div class="col-sm-offset-2 col-sm-4">
		  <div class="checkbox">
			<label>
			  <input type="checkbox" ng-model="charInfo.debug"> Debug?
			</label>
		  </div>
		</div>

	  </div>
	  <div class="form-group">
		<div class="col-sm-offset-2 col-sm-10">
		  <button type="submit" class="btn btn-default">Sign in</button>
		</div>
	  </div>
	</form>
	<div class="row">
		<div class="col-xs-12">
			<div class="panel panel-primary">
				<div class="panel-heading">Object Info</div>
				<div class="panel-body">
					<pre>@{{ charInfo | json}}</pre>
				</div>
			</div>
		</div>
	</div>
        <div id="results"></div>
    </div>

</div>

<div class="navbar navbar-default navbar-fixed-top">
	<ul class="nav nav-pills">
		<li class="active">Age: <span class="badge">{{charInfo.age}}</span></li>
		<li ng-show='charInfo.debug'>CuMod:  <span class="badge">{{charInfo.cuMod}}</span></li>
		<li ng-show='charInfo.debug'>SolMod  <span class="badge">{{charInfo.solMod}}</span></li>
		<li ng-show='charInfo.debug'>LegitMod  <span class="badge">{{charInfo.legitMod}}</span></li>
		<li ng-show='charInfo.debug'>BiMod  <span class="badge">{{charInfo.biMod}}</span></li>
		<li ng-show='charInfo.debug'>TiMod  <span class="badge">{{charInfo.tiMod}}</span></li>
		<li ng-show='charInfo.imprisoned'>Imprisoned  <span class="badge">{{charInfo.imprisoned}} years</span></li>
		<li ng-show='charInfo.enslaved'>Enslaved  <span class="badge">{{charInfo.enslaved}} years</span></li>
	</ul>
</div>
<script type="text/javascript" src="scripts/main-app.js"></script>

<script type="text/javascript" src="scripts/services/CharData.js"></script>
<script type="text/javascript" src="scripts/services/ResourceNotification.js"></script>
<script type="text/javascript" src="scripts/services/SharedFunctions.js"></script>

<script type="text/javascript" src="scripts/services/FunctionGroup.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup1.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup2.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup3.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup4.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup5.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup6.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup7.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup8.js"></script>
<script type="text/javascript" src="scripts/services/SubFunctionGroup9.js"></script>

<script type="text/javascript" src="scripts/services/SharedData.js"></script>

<script type="text/javascript" src="scripts/controllers/base-controller.js"></script>

<script type="text/javascript" src="components/race-info/race.js"></script>
<script type="text/javascript" src="components/culture-info/culture.js"></script>
<script type="text/javascript" src="components/survival-info/survival.js"></script>
<script type="text/javascript" src="components/legitimacy-info/legitimacy.js"></script>

<!-- Birth related files -->
<script type="text/javascript" src="components/birth-info/birth.js"></script>
<script type="text/javascript" src="components/birth-info/birth-time/time.js"></script>
<script type="text/javascript" src="components/birth-info/birth-place/place.js"></script>
<script type="text/javascript" src="components/birth-info/birth-order/order.js"></script>
<script type="text/javascript" src="components/birth-info/birth-events/events.js"></script>

<!-- Parent Related Files -->
<script type="text/javascript" src="components/parent-info/parent.js"></script>
<script type="text/javascript" src="components/parent-info/parent-status/status.js"></script>
<script type="text/javascript" src="components/parent-info/parent-jobs/jobs.js"></script>
<script type="text/javascript" src="components/parent-info/parent-titles/titles.js"></script>
<script type="text/javascript" src="components/parent-info/parent-notes/notes.js"></script>

</body>
<?php $pdo = null; ?>
</html>
