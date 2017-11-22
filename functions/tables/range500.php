<?php 
function t528($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','528',$solmod);
	return $result;
}
function t528a() {

 
	$result = roll('1','6','528a');
	return $result;
}
function t528b() {

 
	$result = roll('1','6','528b'); 
	return $result;
}
function t528c() {

 
	$result = roll('1','6','528c'); 
	return $result;
}

function t528d() {

 
	$result = roll('1','6','528d'); 
	return $result;
}
function t528e() {

 
	$result = roll('1','6','528e'); 
	return $result;
}
function t528f() {

 
	$result = roll('1','8','528f'); 
	return $result;
}
function t528g() {

 
	$result = roll('1','6','528g'); 
	return $result;
}
function t528h() {

 
	$result = roll('1','10','528h');
	return $result;
}
function t528i() {


	$result = roll('1','6','528i'); 
	return $result;
}

function t528j() {

 
	$result = roll('1','6','528i'); 
	return $result;
}

function t529($solmod = null) { 
	if($solmod = null){$solmod=$SolMod;};
	$result = roll('1','20','529',$solmod);
	return $result;
}
function t530() {

 
	$result = roll('1','10','530');
	return $result;
}
function t531() {

 
	$result = roll('1','10','531');
	return $result;
}
function t532() {

 
	$result = roll('1','10','532');
	return $result;
}
function t532a() {

 
	$result = roll('1','6','532a');
	return $result;
}
function t533() {

 
	$result = roll('1','10','533');
	return $result;
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

 
	$result = roll('1','10','534a');
	echo "<br />How you became a criminal: ";
	return $result;
}
function t534b() {

 
	$result = roll('1','6','534b');
	echo "<br />Type of crimes you commit: ";
	return $result;
}
function t534b1() {

 
	$result = roll('1','10','534b1');

	return $result;
}
function t534c() {

 
	$result = roll('1','20','534c');
	return $result;
}
function t534d() {

 
	$result = roll('1','10','534d');
	return $result;
}

function t535a1() { 
	$result = roll('1','20','535a1');
	return $result;
}
function t535a2() {

 
	$result = roll('1','20','535a2');
	return $result;
}
function t535a3() {

	$result = roll('1','20','535a3');
	return $result;
}
function t535a4() {
	$result = roll('1','20','535a4');
	return $result;
}

function t535a5() {
	$result = roll('1','20','535a5');
	return $result;
}
function t535b() {
	$result = roll('1','20','535b');
	return $result;
}
function t535b1() {
	$result = roll('1','22','535b1');
	return $result;
}
function t535b2() {

	$result = roll('1','10','535b2');
	return $result;
}
function t536() {

	$result = roll('1','20','536');
	return $result;
}
function t537() {

	$result = roll('1','10','537');
	return $result;
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
		return $result;
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
		return $result;
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
			return $result;
		}
	} else {
		return $result;
	}

}
function t539a() {

	$result = roll('1','8','539a');
	return $result;
}
function t539b() {

	$result = roll('1','10','539b');
	return $result;
}
function t539c() {

	$result = roll('1','6','539c');
	return $result;
}
function t540() {

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
	return $result;
	$GLOBALS['prisoner'] += $GLOBALS['cSentence'];
}
function t540a() {

	$result = roll('1','8','540a');
	return $result;
}
function t540b() {

	$result = roll('1','4','540b');
	return $result;
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

	$result = roll('1','10','541a');
	return $result;
}
function t541b() {

	$result = roll('1','20','541b');
	if($result['roll'] == 20) {
		$cR1 = droll("1d100");
		if($cR1["roll"] >= 80){
			echo "The knowledge causes the character to develop an Exotic Personality Feature.";
			t649a();
		}
	}
	return $result;
}
function t541b1() {

	$result = roll('1','10','541b1');
	return $result;
}
function t541b2() {

	$result = roll('1','6','541b2');
	return $result;
}
function t541b3() {

	$result = roll('1','6','541b3');
	return $result;
}
function t542() {

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

	return $result;
	loveCheck();
}
function t542a() {

	$result = roll('1','6','542a');
	return $result;
}
function t542b() {

	$result = roll('1','6','542b');
	return $result;
}
function t543() {

	t543a();
	t543b();
	t543c();
}

function t543a() {

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
	return $result;
}
function t543b() {

	$result = roll('1','8','543b');
	return $result;
}
function t543c() {

	$result = roll('2','8','543c');
	return $result;
}
function t544() {

	$result = roll('1','20','544');
	return $result;
}
function t544a() {

	$result = roll('1','6','544a');
	return $result;
}
function t544b() {

	$result = roll('1','3','544b');
	return $result;
}
function t544c() {

	$result = roll('1','6','544c');
	return $result;
}
function t544d() {

	$result = roll('1','10','544d');
	return $result;
}
function t545() {

	$result = roll('1','20','545');
	return $result;
}
function t545a() {

	$result = roll('1','6','545');
	return $result;
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

	$result = roll('1','8','546a');
	echo "<br />Inheritance: ";
	return $result;
}
function t546a1() {

	echo "<br />Condition: ";
	$result = roll('1','4','546a1');
	return $result;
}
function t546b() {

	$result = roll('1','20','546b');
	echo "<br />Event: ";
	return $result;
}
function t546b1() {

	$result = roll('1','4','546b1');
	return $result;
}
function t546b2() {

	$result = roll('1','4','546b2');
	return $result;
}
?>