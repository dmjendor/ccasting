<?php 
function t863() {

 
	$result = roll('1','20','863');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}

function t863a() {

 
	$result = roll('1','10','863a');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t863b() {

 
	$result = roll('1','10','863b');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t863c() {

 
	$result = roll('1','10','863c');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t863d() {

 
	$result = roll('1','8','863d');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t863e() {

 
	$result = roll('1','10','863e');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t864() {

 
	$result = roll('1','20','864');
	if($result["result"]["tbl"] != ""){
		if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
	if($result['result']['descrip'] !=""){ echo "<span class='titled' title='".$result['result']['descrip']."'>".$result['result']['name']."</span> "; } else { echo "<span>".$result['result']['name']."</span> "; }
}
function t865() {

 
	$result = roll('1','20','865');
	return $result;
}
function t866() {

 
	$result = roll('1','10','866');
	return $result;
	t865();
	t867();
}
function t867() {

 
	$result = roll('1','20','867');
	return $result;
}
function t868() {

 
	$result = roll('1','20','868');
	global $loveCurse;
	if($result['roll'] == 3){ $loveCurse = 1; }
	echo "<span class='text-danger'>";
	return $result;
	echo "</span>";
}
function t869a() {

 
	$result = roll('1','20','869a');
	return $result;
}
function t869a1() {

 
	$result = roll('1','6','869a1');
	return $result;
}
function t869b() {

 
	$result = roll('1','6','869b');
	return $result;
}
function t870($id = 0) { 
	if($id == 0) {
		$result = roll('1','20','870');
	} else {
		$result = roll('1','20','870',0,$id);
	}
	return $result;
}
function t870a() {

 
	$result = roll('1','8','870a');
	return $result;
}
function t870b() {

 
	$result = roll('1','6','870b');
	return $result;
}
function t871a() {

 
	$result = roll('1','20','871a');
	return $result;
	t871b();
}
function t871b() {

 
	$result = roll('1','20','871b');
	return $result;
	t871c();
}
function t871c() {

 
	$result = roll('1','20','871c');
	return $result;
}
function t872() {

 
	$result = roll('1','100','872');
	return $result;
}
function t873() {

 
	$result = roll('1','20','873');
	return $result;
}
function t874() {

 
	$result = roll('1','20','874');
	return $result;
	if($result['roll'] == 4){
		$cR1 = droll('1d100');
		if($cR1['roll'] >= 60){
			echo "Eyes Glow ";
			t865();
			echo "Convey special power: ";
			t874a();
		} else {
			echo "Eyes Glow White";
		}
	}
}
function t874a() {

 
	$result = roll('1','4','874a');
	return $result;
}
function t875() {
	$GLOBALS['cSentence'] = 0;

 
	$result = roll('1','20','875');
	$vSoc = t103();
	$GLOBALS['vicSoc'] = $vSoc["result"]["level"];
	echo "Victim was from the ".$GLOBALS['vicSoc']." social class.<br /> The crime was "; 
	return $result;
	echo "<br />";
	if($result["roll"] == 1){
		$cR = droll("1d2");
		switch($cR1["roll"]){
			case 1:
				$cR = droll("1d4");
			break;
			case 2:
				echo "Character is publicly flogged. Subtract 1d4 from Charisma attribute.";
			break;
			default:
				echo "Character is publicly flogged. Subtract 1d4 from Charisma attribute.";
			break;
		}
	}
	if($result["roll"] == 2 OR $result["roll"] == 3){ $cR = droll("2d10"); }
	if($result["roll"] == 4 OR $result["roll"] == 9){ $cR = droll("1d20+20"); }
	if($result["roll"] == 6){ $cR = droll("1d10"); }
	if($result["roll"] == 7 OR $result["roll"] == 18 ){ $cR = droll("1d3"); }
	if($result["roll"] == 9){ $cR1 = droll("1d6"); 	echo "Character is tortured "; if($cR1['roll'] == 6){ t870(); }	}
	if($result["roll"] == 10 OR $result["roll"] == 11  ){ $cR = droll("1d8"); }
	if($result["roll"] == 14){ $cR = droll("2d8"); }
	if($result["roll"] == 16){
		$cR = droll("1d3");
		switch($cR1["roll"]){
			case 1:
				$cR = droll("1d3");
			break;
			case 2:
				echo "Character has right hand cut off.";
				t870(10);
			break;
			case 3:
				echo "Character is publicly flogged. Subtract 1d4 from Charisma attribute.";
			break;
			default:
				echo "Character is publicly flogged. Subtract 1d4 from Charisma attribute.";
			break;
		}
	}
	if($result["roll"] == 19){ $cR = droll("1d10+5"); }
	if($result["roll"] == 1 OR $result["roll"] == 4 OR $result["roll"] == 6 OR $result["roll"] == 7 OR $result["roll"] == 18){
		if($GLOBALS['vicSoc'] == "Wealthy" OR $GLOBALS['vicSoc'] == "Extremely Wealthy"){ 
			$cR1b = droll("1d6"); 
			$cSentence += $cR1b["roll"]; 
		}
		if($GLOBALS['vicSoc'] == "Noble") { $GLOBALS['cSentence'] += 5; }
	}

	if(!empty($cR['roll'])){
		echo $cR['roll']." years of imprisonment.";
		$GLOBALS['cSentence'] += $cR['roll'];
	}
	
	return $result;
}
function t875a() {

 
	$result = roll('1','6','875a');
	if($result["roll"] == 2){ 
		if($GLOBALS['vicSoc']=="Noble"){ $cR = droll("1d20+20"); echo "NPCs are put to death."; } else { $cR = droll("2d10");} 
	}
	if($result["roll"] == 3 OR $result["roll"] == 4){ 
		$dR = droll('1d100');
		if($dR['roll'] <= 50 AND $result["roll"] == 4 ){ echo "Character is pilloried, placed on public display in the stocks for a week.<br /> Subtract 1d4 from Charisma attribute";} else { $cR = droll("1d3"); }
	}
	if($result["roll"] == 5){ $cR = droll("1d6"); }

	if( $result["roll"] == 6){
		$cR = droll("1d8");
		if($GLOBALS['vicSoc'] == "Wealthy" OR $GLOBALS['vicSoc'] == "Extremely Wealthy"){ 
			$cR1b = droll("1d6"); 
			$GLOBALS['cSentence'] += $cR1b["roll"]; 
		}
		if($GLOBALS['vicSoc'] == "Noble") { $GLOBALS['cSentence'] += 5; }
	}

	if(!empty($cR['roll'])){
		echo $cR['roll']." years of imprisonment.";
		$GLOBALS['cSentence'] += $cR['roll'];
	}
	return $result;
}
function t875b() {

 
	$result = roll('1','10','875b');
	if($result["roll"] == 3){ $cR = droll("2d8"); }
	if($result["roll"] == 7 OR $result["roll"] == 8){ $cR = droll("1d10"); }

	if(!empty($cR['roll'])){
		echo $cR['roll']." years of imprisonment.";
		$GLOBALS['cSentence'] += $cR['roll'];
	}

	return $result;
}
function t875c() {

 
	$result = roll('1','4','875c');
	if($result["roll"] == 1 OR $result["roll"] == 3){ $cR = droll("2d4"); }
	if($result["roll"] == 2){ $cR = droll("1d6"); }
	if($result["roll"] == 4){ $cR = droll("1d8"); echo "Character is pilloried, placed on public display in the stocks for a week.<br /> Subtract 1d4 from Charisma attribute."; }

	if( $result["roll"] == 1 OR $result["roll"] == 2  ){
		$cR = droll("1d8");
		if($GLOBALS['vicSoc'] == "Wealthy" OR $GLOBALS['vicSoc'] == "Extremely Wealthy"){ 
			$cR1b = droll("1d6"); 
			$GLOBALS['cSentence'] += $cR1b["roll"]; 
		}
		if($GLOBALS['vicSoc'] == "Noble") { $GLOBALS['cSentence'] += 5; }
	}

	if(!empty($cR['roll'])){
		echo $cR['roll']." years of imprisonment.";
		$GLOBALS['cSentence'] += $cR['roll'];
	}

	return $result;
}
function t875d() {

 
	$result = roll('1','4','875d');
	if($result["roll"] == 2){ $cR = droll("1d6");}
	if($result["roll"] == 1 OR $result["roll"] == 2){	echo "Character is pilloried, placed on public display in the stocks for a week.<br /> Subtract 1d4 from Charisma attribute."; }
	if($result["roll"] == 3){ $cR = droll("1d4");}
	if($result["roll"] == 4){	echo "Character is publicly flogged. Subtract 1d4 from Charisma attribute.";}
	
	if(!empty($cR['roll'])){
		echo $cR['roll']." years of imprisonment.";
		$GLOBALS['cSentence'] += $cR['roll'];
	}

	return $result;
}
function t876() {

 
	$result = roll('1','20','876');
	return $result;
}
function t876a() {

 
	$result = roll('1','6','876a');
	return $result;
}
function t876b() {

 
	$result = roll('1','8','876b');
	return $result;
}
function t876c() {

 
	$result = roll('1','6','876c');
	return $result;
}
function t876d() {

 
	$result = roll('1','10','876d');
	return $result;
}
function t876e() {

 
	$result = roll('1','8','876e');
	return $result;
}
function t876f() {

 
	$result = roll('1','10','876f');
	return $result;
}

function t877($id = 0) { 
	if($id != 0 ) {
		$result = roll('1','9','877a',0,$id);
	} else {
		$result = roll('1','9','877a');	
	}
	if($result["result"]["tbl"] != ""){
		foreach ($result["tResult"] as $table => $sub) {
			foreach ($sub as $k => $v) {
				$tRoll = $tRpt = $tvar = $tid = "";
				if($k == "repeat" AND $v != ""){
					$tRoll = droll("1d".$v);
					$tRpt = $tRoll["roll"];
				}
				if($k == "rMod" AND $v != "" ) {
					$tRpt += $v;
				}
				if($k == "table"){
					$tvar = "t".$v;
				}
				if($k == "tid" and $v != "" ) {
					$tid = $v;
				}
				
				if($tRpt != ""){ 
					for($i = 0; $i <= $tRpt; $i++){
						if($tid != ""){
							$result = call_user_func($tvar,$tid);
						} else {
							$result = call_user_func($tvar);
						}
					}
				} else {
					if($tid != ""){
						$result = call_user_func($tvar,$tid);
					} else {
						$result = call_user_func($tvar);
					}
				}

			}
		}
	} else {
		echo "<span>".$result['result']['descrip']."</span>";
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
	echo "<span>".$result['result']['descrip']."</span>";
}

function t877a($id = 0) { 
	if($id != 0 ) {
		$result = roll('1','10','877a',0,$id);
	} else {
		$result = roll('1','10','877a');	
	}
	return $result;
}
function t877b($id = 0) { 
	if($id != 0 ) {
		$result = roll('1','10','877a',0,$id);
	} else {
		$result = roll('1','10','877a');	
	}
	return $result;
}
function t877c($id = 0) { 
	if($id != 0 ) {
		$result = roll('1','10','877a',0,$id);
	} else {
		$result = roll('1','10','877a');	
	}
	return $result;
}
function t877d($id = 0) { 
	if($id != 0 ) {
		$result = roll('1','10','877a',0,$id);
	} else {
		$result = roll('1','10','877a');	
	}
	return $result;
}
?>