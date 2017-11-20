<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="castingApp" ng-controller="baseController">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Central Casting - Heroes of Legend - Generator</title>
    <meta name="author" content="Lee Vaughan" />

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

	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular.min.js" integrity="sha256-Nfc6cMygZ4KL6eCnEri0iQjhvESQY3xivXAVj5XNbic=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js" integrity="sha256-6vbKDGwy9JmzGKxxeypGzCjyOmACDtgheaOQT6ZVafA=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js" integrity="sha256-tyfWW2LtJQNI+l3F0h6xDV/ij6Mfn8lwSKHWOsmEgXM=" crossorigin="anonymous"></script>

	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css" rel="stylesheet" type="text/css" />

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

				<div class="row" ng-show="charInfo.survival">
					<div class="col-xs-offset-1 col-xs-10">
						<b>Survival: </b> <span ng-attr-title="{{charInfo.survival}}">{{charInfo.survival}} of survival skill</span>
					</div>
				</div>
				
				<?php 

				$legitRoll = rand(1,20);
// if(($legitRoll+$CuMod)>19 OR $legitRoll == 20){
//     echo "<br /><span class='text-danger'><b>Character is Illegitimate:</b></span> ";
// $LegitMod = rand(1,4);
// $legitReason = t105($CuMod);
// echo $legitReason['result']['descrip'];
// }
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
// $tob = droll("1d12");
// $pth = ordinal_suffix($tob["roll"]);
// $tobh = droll("1d12");
// $tobm = droll("1d60");
// $tobmp = sprintf("%02s", $tobm['roll']);
// $tobAPm = droll("1d2");
// if($tobAPm["roll"] == "1"){ $apm = "AM"; } else { $apm = "PM"; }
// echo "<br />Born in the ".$tob["roll"].$pth." month, at ".$tobh["roll"].":".$tobmp." ".$apm."<br />";
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

<script type="text/javascript" src="scripts/controllers/base-controller.js"></script>

<script type="text/javascript" src="components/race-info/race.js"></script>
<script type="text/javascript" src="components/culture-info/culture.js"></script>
<script type="text/javascript" src="components/parent-info/parent.js"></script>
<script type="text/javascript" src="components/parent-info/parent-status/status.js"></script>
<script type="text/javascript" src="components/parent-info/parent-title/title.js"></script>

</body>
<?php $pdo = null; ?>
</html>