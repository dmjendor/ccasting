<?php

	global $startingAge,$currentAge,$CuMod,$SolMod,$LegitMod,$BiMod,$TiMod,$cLevel,$sLevel,$illSib,$LSide,$DSide,$NSide,$RSide,$enslavement,$prisoner,$cSentence,$vicSoc,$loveCurse,$raceName,$ageGroup,$mRank,$mBranch,$mLength, $set111, $debug;

	$startingAge = $SolMod = $LegitMod = $BiMod = $TiMod = $illSib = $LSide = $DSide = $NSide = $RSide = $enslavement = $prisoner = $cSentence = $loveCurse = $ageGroup = $mRank = $CuMod = 0;
	$currentAge = 18;
	$set111 = false;
	$cLevel = $sLevel = $raceName = $mBranch = $vicSoc = "";
	$debug = 0;

	INCLUDE 'functions/tables/range100.php';
	INCLUDE 'functions/tables/range200.php';
	INCLUDE 'functions/tables/range300.php';
	INCLUDE 'functions/tables/range400.php';
	INCLUDE 'functions/tables/range500.php';
	INCLUDE 'functions/tables/range600.php';
	INCLUDE 'functions/tables/range700.php';
	INCLUDE 'functions/tables/range800.php';
	INCLUDE 'functions/tables/range900.php';

function showFunction($func){
		echo "<span class='label label-warning' ng-show='char.debug'>".$func."</span>";
}

function roll($bot,$top,$tab,$mod = 0, $id="-99") {
	if($id=="-99"){
		$roll = rand($bot,$top);
		$roll += $mod;
		$query = "SELECT * FROM `".$tab."` WHERE rndb <= ".$roll." AND rndt >= ".$roll;

	} else {
		$roll = 99;
		$query = "SELECT * FROM `".$tab."` WHERE `".$tab."id` = ".$id;
	}

	$tResult = [];
	$rollArray = [];

	$stmt = $GLOBALS['pdo']->prepare($query);
	$stmt->execute();

	while($row = $stmt->fetch()) {
		$rollArray = $row;
		if(array_key_exists('tbl',$row)){
			$tResult = tableFilter($row['tbl']);
		}
	}
//	print_r($rollArray);
	return array("roll"=>$roll,"result" => $rollArray, "tResult" =>$tResult);
}

function droll($roll){
	$scount = explode("d",$roll);
	if(strpos($roll, '+') !== FALSE){
		$sMx = explode('+',$scount[1]);
		$sMod = $sMx[1];
	} else if(strpos($roll, '-') !== FALSE){
		$sMx = explode('+',$scount[1]);
		$sMod = $sMx[1];
	} else {
		$sMod = 0;
	}
	$rTop = $scount[1]*$scount[0];
	$rN = rand($scount[0],$rTop);
	$finalRoll = $rN + $sMod;
	return array("roll"=>$rN, "mod"=>$sMod, "final"=>$finalRoll);
}





function getAge($cat){
	switch($GLOBALS['raceName']){
		case "Human":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
		case "Elf":
			if($cat=='child'){ $age = droll("1d11+9"); } else { $age = droll("2d20+20");  }
		break;
		case "Dwarf":
			if($cat=='child'){ $age = droll("1d8+8"); } else { $age = droll("1d20+16");  }
		break;
		case "Halfling":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
		case "Half elf":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
		case "Beastman":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
		case "Reptileman":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
		case "Orc":
			if($cat=='child'){ $age = droll("1d5+5"); } else { $age = droll("1d1+10");  }
		break;
		case "Half orc":
			if($cat=='child'){ $age = droll("1d7+5"); } else { $age = droll("1d6+12");  }
		break;
	}
	return $age;
}

function loveCheck() {


	global $loveCurse;
	if($loveCurse == 1){
		t545();
	}
}

function ordinal_suffix($num){
	 switch($num % 10){
		case 1: return 'st';
		case 2: return 'nd';
		case 3: return 'rd';
		default: return 'th';
	}
}

function tableFilter($tab){
	$tabArray = explode(',',$tab);
	$tableArray=array();
	foreach ($tabArray as $tabs){
		# (:) colon = Specific ID
		# (+ - ) add or subtract specific modifier to roll (can be used inside brackets or on table itself)
		# ([x]) brackets indicate random 1-x an repeat table $roll times.
		# example 589+1[4+1] (this would indicate to roll table 589 1d4+1 times and add 1 to the roll on the table each time.
		$table = $tid = $rptr = $rMod = $tMod = $i = $repeat = NULL;
		if(strpos($tabs, ':') !== FALSE){
			$cols = explode(':',$tabs);
			$table = $cols[0];
			$tid = $cols[1];
		} else if(strpos($tabs, '[') !== FALSE){
			preg_match("/(.*)\[(.*)\]/",$tabs,$repeat);
			$table = $repeat[1];
			$rptr = $repeat[2];
			if(strpos($table, '+') !== FALSE){
				$tMods = explode('+',$table);
				$table = $tMods[0];
				$tMod = $tMods[1];
			}
			if(strpos($table, '-') !== FALSE){
				$tMods = explode('-',$table);
				$table = $tMods[0];
				$tMod = "-".$tMods[1];
			}
			if(strpos($rptr, '+') !== FALSE){
				$rMods = explode('+',$rptr);
				$rptr = $rMods[0];
				$rMod = $rMods[1];
			}

			if(strpos($rptr, '-') !== FALSE){
				$rMods = explode('-',$rptr);
				$rptr = $rMods[0];
				$rMod = "-".$rMods[1];
			}
		} else {
			if(strpos($tabs, '+') !== FALSE){
				$tMods = explode('+',$tabs);
				$table = $tMods[0];
				$tMod = $tMods[1];
			} else if(strpos($tabs, '-') !== FALSE){
				$tMods = explode('-',$tabs);
				$table = $tMods[0];
				$tMod = "-".$tMods[1];
			} else {
				$table = $tabs;
			}
		}
		$tableArray[] = array("table" => $table,"tMod" => $tMod,"repeat" => $rptr,"rMod" => $rMod,"tid" => $tid);
	}
	return $tableArray;
}

function charSex(){


	$sRoll = droll("1d6");
        if($sRoll["roll"] <= 3){ echo "Sex: Male<br />"; } else {  echo "Sex: Female<br />"; }
}

function masterFunction($result){
	
    if(!empty($result['result']['name'])){
		if(!empty($result['result']['descrip'])){
            echo "<span class='titled' data-toggle='tooltip' data-placement='top'  title='".$result['result']['descrip']."'>".$result['result']['name']."</span> ";
		} else {
            echo "<span>".$result['result']['name']."</span> ";
		}
    } else {
            echo "<span>".$result['result']['descrip']."</span> ";
    }
    if(!empty($result["result"]["tbl"])){
		foreach ($result["tResult"] as $table => $sub) {
			# define the variables as empty for logic checks.
			$tRoll = $tRpt = $tVar = $tId = "";
			foreach ($sub as $k => $v) {
			
				#if the repeat value is set determine number of times to repeat
				if($k == "repeat" AND !empty($v)){
						$tRoll = droll("1d".$v);
						$tRpt = $tRoll["roll"];
						if($GLOBALS['debug'] == 1){
							echo "( Rpt: 1d".$v." = ".$tRpt." )";
						}
				}

				#if the rMod value is set, add its value to the number of times to repeat
				if($k == "rMod" AND !empty($v)) {
						if($GLOBALS['debug'] == 1){
							echo "( ".$tRpt." + ".$v." = ";
						}
						$tRpt += $v;
						if($GLOBALS['debug'] == 1){
							echo $tRpt." )";
						}
				}

				if($k == "table" AND !empty($v)){
						$tVar = "t".$v;
				}
				#if the tid value is set, set value of table id
				if($k == "tid" AND !empty($v)) {
						$tId = $v;
				}
			}

			if(!empty($tVar)){
				#loop call for each repeat
				if($tRpt != ""){ 
					for($i = 1; $i <= $tRpt; $i++){
						echo $i;
						if(!empty($tId)){
								$resultA = call_user_func($tVar,$tId);
						} else {
								$resultA = call_user_func($tVar);
						}
					}
				} else {
					if(!empty($tId)){
							$resultA = call_user_func($tVar,$tId);
					} else {
							$resultA = call_user_func($tVar);
					}
				}
			}
		}
		print_r($resultA);
		if(!empty($result['result']['name'])){
			if(!empty($result['result']['descrip'])){
				echo "<span class='titled' data-toggle='tooltip' data-placement='top'  title='".$result['result']['descrip']."'>".$result['result']['name']."</span> ";
			} else {
				echo "<span>".$result['result']['name']."</span> ";
			}
		} else {
				echo "<span>".$result['result']['descrip']."</span> ";
		} 
	}

}





function print_p($value = false, $exit = false, $return=false, $recurse=false) {
    if ($return === true && $exit === true)
        $return = false;
    $tab = str_repeat("&nbsp;", 8);
    if ($recurse == false) {
        $recurse = 0;
        $output = '<div style="width:100%; border: 2px dotted red; background-color: #fbffd6; display: block; padding: 4px;">';
        $backtrace = debug_backtrace();
        $output .= '<b>Line: </b>'.$backtrace[0]['line'].'<br>';
        $output .= '<b>File: </b> '.$backtrace[0]['file'].'<br>';
        $indent = "";
    } else {
        $output = '';
        $indent = str_repeat("&nbsp;", $recurse * 8);
    }
    if (is_array($value)) {
        if ($recurse == false) {
            $output .= '<b>Type: </b> Array<br>';
            $output .= "<br>array (<br>";
        } else {
            $output .= "array (<br>";
        }
        $items = array();
        foreach ($value as $k=>$v) {
            if (is_object($v) || is_array($v))
                $items[] = $indent.$tab."'".$k."'=>".print_p($v, false, true, ($recurse+1));
            else
                $items[] = $indent.$tab."'".$k."'=>".($v===null ? "NULL" : "'".$v."'");
        }
        $output .= implode(',<br>', $items);
        if ($recurse == false)
            $output .= '<br>)';
        else
            $output .= '<br>'.$indent.')';
    } elseif (is_object($value)) {
        if ($recurse == false) {
            $output .= '<b>Type: </b> Object<br>';
            $output .= '<br>object ('.get_class($value).'){'."<br>";
        } else {
            $output .= "object (".get_class($value)."){<br>";
        }

        // needed conditional because base class function dump is protected
        $vars = get_object_vars($value);
        $vars = (is_array($vars) == true ? $vars : array());

        $items = array();
        foreach ($vars as $k=>$v) {
            if (is_object($v) || is_array($v))
                $items[] = $indent.$tab."'".$k."'=>".print_p($v, false, true, ($recurse+1));
            else
                $items[] = $indent.$tab."'".$k."'=>".($v===null ? "NULL" : "'".$v."'");
        }
        $output .= implode(',<br>', $items);
        $vars = get_class_methods($value);
        $items = array();
        foreach ($vars as $v) {
            $items[] = $indent.$tab.$tab.$v;
        }
        $output .= '<br>'.$indent.$tab.'<b>Methods</b><br>'.implode(',<br>', $items);
        if ($recurse == false)
            $output .= '<br>}';
        else
            $output .= '<br>'.$indent.'}';
    } else {
        if ($recurse == false) {
            $output .= '<b>Type: </b> '.gettype($value).'<br>';
            $output .= '<b>Value: </b> '.$value;
        } else {
            $output .= '('.gettype($value).') '.$value;
        }
    }
    if ($recurse == false)
        $output .= '</div>';
    if ($return === false)
        echo $output;
    if ($exit === true)
        die();
    return $output;
}

?>