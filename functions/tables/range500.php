<?php 
function t528($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','528',$solmod);
	masterFunction($result);
}
function t528a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528a');
	masterFunction($result);
}
function t528b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528b'); 
	masterFunction($result);
}
function t528c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528c'); 
	masterFunction($result);
}

function t528d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528d'); 
	masterFunction($result);
}
function t528e() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528e'); 
	masterFunction($result);
}
function t528f() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','528f'); 
	masterFunction($result);
}
function t528g() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528g'); 
	masterFunction($result);
}
function t528h() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','528h');
	masterFunction($result);
}
function t528i() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	$result = roll('1','6','528i'); 
	masterFunction($result);
}

function t528j() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','528i'); 
	masterFunction($result);
}

function t529($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','529',$solmod);
	masterFunction($result);
}
function t530() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','530');
	masterFunction($result);
}
function t531() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','531');
	masterFunction($result);
}
function t532() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','532');
	masterFunction($result);
}
function t532a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','532a');
	masterFunction($result);
}
function t533() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','533');
	masterFunction($result);
}
function t534(){
	t534a();
	t534b();
	$eR = droll("1d3");
	echo "<br />Events during your criminal life: ";
		if($GLOBALS['debug'] == 1){
			echo $eR["roll"]." ";
		}
	for($i = 1; $i <= $eR["roll"]; $i++){
		if($GLOBALS['debug'] == 1){
			echo $i." ";
		}
		echo "<br />";
		t534c();
	}
}
function t534a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','534a');
	echo "<br />How you became a criminal: ";
	masterFunction($result);
}
function t534b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','534b');
	echo "<br />Type of crimes you commit: ";
	masterFunction($result);
}
function t534b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','534b1');

	masterFunction($result);
}
function t534c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','534c');
	masterFunction($result);
}
function t534d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','534d');
	masterFunction($result);
}
function t535a(){
	switch($cLevel){
		case "Primitive":
			t535a1();
			break;
		case "Nomad":
			t535a2();
			break;
		case "Barbarian":
			t535a3();
			break;
		case "Civilized":
			t535a4();
			break;
		case "Civilized-Decadent":
			t535a5();
			break;
		default:
			t535a1();
			break;
	}
}
function t535a1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','535a1');
	masterFunction($result);
}
function t535a2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','535a2');
	masterFunction($result);
}
function t535a3() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','535a3');
	masterFunction($result);
}
function t535a4() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','535a4');
	masterFunction($result);
}
function t535b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','535b');
	masterFunction($result);
}
function t535b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','22','535b1');
	masterFunction($result);
}
function t535b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','535b2');
	masterFunction($result);
}
function t536() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','536');
	masterFunction($result);
}
function t537() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','537');
	masterFunction($result);
}
function t538(){
	global $branch;
	if($branch == "Navy"){
		t538b();
	} else {
		t538a();
	}
}
function t538a($solmod = null) { 
	global $cLevel, $SolMod,$mRank;
	if($solmod = null){$solmod=$SolMod;};
	if($sLevel == "Comfortable" OR $sLevel == "Wealthy" OR  $sLevel == "Extremely Wealthy" OR  $sLevel == "Noble"){
		echo "Rank: ";
		$result = roll('1','6','538a',$solmod);
		$mRank = $result["roll"]["538aid"];
		masterFunction($result);
	} else {
		echo "Rank: Soldier";
	}
}
function t538b($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	if($sLevel == "Comfortable" OR $sLevel == "Wealthy" OR  $sLevel == "Extremely Wealthy" OR  $sLevel == "Noble"){
		echo "Rank: ";
		$result = roll('1','6','538a',$solmod);
		$mRank = $result["roll"]["538aid"];
		masterFunction($result);
	} else {
		echo "Rank: Sailor";
	}
}
function musterOut($rank = null){
	global $mRank, $mBranch, $mLength;
	if($rank != null){
		$result = roll('1','6','538a',0,$rank);
		$gold = ($result['result']['name']*10)+($rank*10);
		echo "Your pay is ".$gold." gold.<br />You may retain your units weapons and armor, but must pay <i>half</i> the normal purchase price for them.";
	}
}
function t539() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	}
	global $enslavement;
	echo "<div style='border: 1px solid #000;'>The Owner:";
	t101();
	charSex();
	$o102 = t102();
	echo $o102["result"]["level"];
	$o103 = t103();
	echo $o103["result"]["level"];
	$oJob = jobSelect($o102['result']['level']);
	echo $oJob;
	$eR1 = droll("1d6");
	$enslavement += $eR1["roll"];
	echo "</div>";
	$eR2 = droll("1d6");
	for($i = 0; $i <= $eR2["roll"]; $i++){
		slaveEvents();
	}
}

function slaveEvents() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	global $enslavement,$startingage;
	$result = roll('1','20','539');
	if($result["roll"] == 4){ 
		$emR = droll("1d4"); 
		$startingage += $emR["roll"]; 
		echo $emR["roll"]." years as employee."; 
	}
	if($result["roll"] == 9){ 
		$pR1 = droll("1d6");	
		$pR2 = droll("1d6");
		$pR3 = droll("1d6");
		echo "You ";
		if($pR1["roll"] != 6){ echo "did not"; }
		echo " lead the revolt.<br />";
		echo "The revolt ";
		if($pR2["roll"] <= 3){ echo "failed<br />"; t870(); } else { echo "succeeds. And you escape.<br />"; t539a(); }
		if($pR1["roll"] == 6){ echo "The owner is killed.<br />"; t540b(); }

		if($pR1 == 6 AND $pR2 >= 4){
			$cRoll = droll("1d6");
			echo "For leading a successful slave revolt, you continue to lead ".$cRoll["roll"]." low-ability NPC followers.<br />";
			for($i = 0; $i <= $cRoll["roll"]; $i++){
				t761a();
			}

		}
		
	}	
	if($result["roll"] >= 19 AND $result["roll"] >= 20){
		$eRoll = droll("1d4");
		$enslavement += $eRoll["roll"];
		$evRoll = droll("1d3");
		echo "Added ".$eRoll["roll"]."additional years to the period of enslavement and rolled for ".$evRoll["roll"]."additional Enslaved Events.<br />";
		for($i = 0; $i <= $evRoll["roll"]; $i++){
			$result = roll('1','20','539',1);
			masterFunction($result);
		}
	} else {
		masterFunction($result);
	}

}
function t539a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','539a');
	masterFunction($result);
}
function t539b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','539b');
	masterFunction($result);
}
function t539c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','539c');
	masterFunction($result);
}
function t540() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$evRoll = droll("1d3");
	for($i = 0; $i <= $evRoll["roll"]; $i++){
		prisonEvents();
	}
}

function prisonEvents(){
	$result = roll('1','10','540');
	if($result["roll"] == 1){ 
		$cSRoll = droll("1d100");
		$sM = round(($cSRoll["roll"]/100)*$GLOBALS['cSentence'],0,PHP_ROUND_HALF_UP);
		echo "Served ".$sM." years of sentence.";
	}
	if($result["roll"] == 8){ $GLOBALS['prisoner'] += 5; }
	if($result["roll"] == 9){ 
		$pR1 = droll("1d6");	
		$pR2 = droll("1d6");
		$pR3 = droll("1d6");
		echo "You ";
		if($pR1["roll"] != 6){ echo "did not"; }
		echo " lead the uprising.<br />";
		echo "The uprising ";
		if($pR2["roll"] <= 3){ echo "failed.<br />"; t870(); } else { echo "succeeds. And you escape.<br />"; t540a();}
		if($pR1["roll"] == 6){ 
			$pR4 = droll("1d10");
			echo $pR4["roll"]." guards were killed.<br />"; 
		}
		if($pR1 == 6 AND $pR2 >= 4){
			$cRoll = droll("1d6");
			echo "For leading a successful prison uprising, you continue to lead ".$cRoll["roll"]." low-ability NPC followers.<br />";
			for($i = 0; $i <= $cRoll["roll"]; $i++){
				t761a();
			}
		}
	}	
	masterFunction($result);
	$GLOBALS['prisoner'] += $GLOBALS['cSentence'];
}
function t540a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','540a');
	masterFunction($result);
}
function t540b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','540b');
	masterFunction($result);
}
function t541(){
	echo "<br />Type of God: ";
	t864();
	echo "<br />How it started: ";
	t541a();
	echo "<br />Religious Events: ";
	$religR = droll("1d3");
	echo "<ul>";
	for($i=0;$i <= $religR['roll']; $i++){
		t541b();
	}
	echo "</ul>";
}
function t541a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','541a');
	masterFunction($result);
}
function t541b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','541b');
	if($result['roll'] == 20) {
		$cR1 = droll("1d100");
		if($cR1["roll"] >= 80){
			echo "The knowledge causes the character to develop an Exotic Personality Feature.";
			t649a();
		}
	}
	masterFunction($result);
}
function t541b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','541b1');
	masterFunction($result);
}
function t541b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','541b2');
	masterFunction($result);
}
function t541b3() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','541b3');
	masterFunction($result);
}
function t542() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','542');
	if($result['roll'] == 17){
		$kids = droll("1d4");
		echo "The character has ".$kids['roll']." children by the beloved.";
		for($i == 1; $i <= $kids['roll']; $i++){
			echo "<li>".$i.": ";
			t112();
			echo "</li>";
		}
	}

	if($result['roll'] == 17){
		$companion = droll("1d10");
		if($companion['roll'] == 10){
			echo "The beloved becomes the character's Companion.";
			t761c();
		}
	}

	masterFunction($result);
	loveCheck();
}
function t542a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','542a');
	masterFunction($result);
}
function t542b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','542b');
	masterFunction($result);
}
function t543() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	t543a();
	t543b();
	t543c();
}

function t543a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','543a');
	if($result["roll"] == 10){
		$pGod = droll("1d10");
		if($pGod["roll"] == 10){
			echo "Patron is a God!";
			t864();
		} else {
			$result = roll('1','10','543a',0,$pGod["roll"]);
		}
	}
	masterFunction($result);
}
function t543b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','543b');
	masterFunction($result);
}
function t543c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('2','8','543c');
	masterFunction($result);
}
function t544() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','544');
	masterFunction($result);
}
function t544a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','544a');
	masterFunction($result);
}
function t544b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','3','544b');
	masterFunction($result);
}
function t544c() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','544c');
	masterFunction($result);
}
function t544d() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','10','544d');
	masterFunction($result);
}
function t545() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','545');
	masterFunction($result);
}
function t545a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','6','545');
	masterFunction($result);
}
function t546(){
	$cR1 = droll("1d100");
	echo "<br />Who Died? ";
	if ($cR1["roll"] >= 51){
		echo "Mother ";
	} else {
		echo "Father ";
	}
	t546a();
	t546b();
}
function t546a() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','8','546a');
	echo "<br />Inheritance: ";
	masterFunction($result);
}
function t546a1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	echo "<br />Condition: ";
	$result = roll('1','4','546a1');
	masterFunction($result);
}
function t546b() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','20','546b');
	echo "<br />Event: ";
	masterFunction($result);
}
function t546b1() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','546b1');
	masterFunction($result);
}
function t546b2() {
	if($GLOBALS['debug'] == 1){
		showFunction(__FUNCTION__);
	} 
	$result = roll('1','4','546b2');
	masterFunction($result);
}
?>