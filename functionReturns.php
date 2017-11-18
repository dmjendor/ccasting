<?php

function r101() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	global $raceName;
	$result = roll('1','20','101');
	$raceName = $result['result']['name'];
	if($result["result"]["tbl"] != ""){
		$tvar = "t".$result["result"]["tbl"];
		$result = call_user_func($tvar);
	}
	masterFunction($result);
}

function r101a() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	global $raceName;
	$result = roll('1','10','101a');
	$raceName = $result['result']['name'];
	masterFunction($result);
}

function r102() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','10','102');
	masterFunction($result);
}
function r103($cmod = 0) { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','100','103',$cmod);
	if($result["result"]["tbl"] != ""){
		$result = t103a();
	}
	masterFunction($result);
}
function r103a() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','100','103');
	masterFunction($result);
}
function r104() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','10','104');
	masterFunction($result);
}
function r105($cmod = NULL) { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','10','105',$cmod);
	masterFunction($result);
}
function r106($cmod = NULL) { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$resultA = roll('1','20','106',$cmod);
	if($resultA["roll"] == 20){
		$guardRoll = droll("1d20");
		if($guardRoll["roll"] <= 8){
			echo "Character was Orphaned somehow at birth and adopted into a more-or-less normal family group.";
			$result = roll('1','20','106',$cmod);
			masterFunction($result);
		}
		$result=t754($guardRoll["roll"]);
		masterFunction($result);
	}
	masterFunction($resultA);
}
function r107() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	global $illSib;
	$result = roll('1','20','107');
	if($result["roll"] == 20){
		$sibN = droll($result["result"]["name"]);
		$illSib += $sibN['roll'];
		$result = t107();
	} else {
		$roll = droll($result["result"]["name"]);
		$result['result']['name'] = $roll['final'];
	}
	masterFunction($result);
}

function r108() { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	$result = roll('1','20','108');
	masterFunction($result);
}
function r110($lmod = 0) { 
	if($GLOBALS['debug'] == 1){
		echo "( F:".__FUNCTION__.") ";
	}
	t110($lmod);
}
function r111() {
	t111();
}


function r112() { 
	if($useChar == true){
		t112($GLOBALS['bimod']);
	} else { 
		t112();
	}
}
function r113() { t113(); } 
function r113a() { t113a(); } 
function r113b() { t113b(); } 
function r113g() { t113g(); }  
function r114a(){
	if($useChar == true){
		t114a($GLOBALS['cLevel']);
	} else { 
		t114a();
	}
}
function r114b() { t114b(); }  
function r114b1() { t114b1(); } 
function r114b2() { t114b2(); } 
function r114b3() { t114b3(); } 
function r114b4() { t114b4(); } 
function r114b5() { t114b5(); } 
function r215(){
	if($useChar == true){
		t215($GLOBALS['SolMod']);
	} else { 
		t215();
	}
} 
function r215a() { t215a(); } 
function r215b() { t215b(); } 
function r215c() { t215c(); } 
function r215d() { t215d(); } 
function r215e() { t215e(); } 
function r216a() { t216a(); } 
function r216b() { t216b(); } 
function r216b1() { t216b1(); } 
function r216b2() { t216b2(); } 
function r217() {  
	if($useChar == true){
		t217($GLOBALS['SolMod']);
	} else { 
		t217();
	}
} 
function r217a() { t217a(); } 
function r217b() { t217b(); } 
function r217c() { t217c(); } 
function r217d() { t217d(); } 
function r217e() { t217e(); } 
function r318a() { t318a(); } 
function r318b() { t318b(); } 
function r419a() { t419a(); } 
function r419b() { t419b(); } 
function r419b1() { t419b1(); } 
function r420() { t420(); } 
function r420a() { t420a(); } 
function r420b() { t420b(); } 
function r421a() { t421a(); } 
function r421b() { t421b(); } 
function r422a() { t422a(); } 
function r422b() { t422b(); } 
function r423a() {
	if($useChar == true){
		t423a($GLOBALS['SolMod']);
	} else { 
		t423a();
	}	
} 
function r423b() { 	t423b(); } 
function r423b1() { t423b1(); } 
function r423b2() { t423b2(); } 
function r423b3() { t423b3(); } 
function r423b4() { t423b4(); } 
function r423c() { t423c(); } 
function r423c1() { t423c1(); } 
function r423c1a() { t423c1a(); } 
function r423c1b() { t423c1b(); } 
function r423d() { t423d(); } 
function r423d1() { t423d1(); } 
function r423e() { t423e(); } 
function r423e1() { t423e1(); } 
function r424(){ t424(); } 
function r424a() { t424a(); }  
function r424b() { t424b(); } 
function r424c() { t424c(); } 
function r425() {  
	if($useChar == true){
		t425($GLOBALS['SolMod']);
	} else { 
		t425();
	}
} 
function r426a() { t426a(); } 
function r426a1() { t426a1(); } 
function r426a2() { t426a2(); } 
function r426b() { t426b(); } 
function r427(){ t427(); } 
function r427a() { t427a(); } 
function r427a1() { t427a1(); } 
function r427a2() { t427a2(); } 
function r427b() { t427b(); } 
function r427c() { t427c(); } 
function r528() {  
	if($useChar == true){
		t528($GLOBALS['SolMod']);
	} else { 
		t528();
	}
} 
function r528a() { t528a(); } 
function r528b() { t528b();  } 
function r528c() { t528c();  }  
function r528d() { t528d();  } 
function r528e() { t528e();  } 
function r528f() { t528f();  } 
function r528g() { t528g();  } 
function r528h() { t528h(); } 
function r528i() { t528i();  } 
function r528j() { t528i();  } 
function r529() {
	if($useChar == true){
		t529($GLOBALS['SolMod']);
	} else { 
		t529();
	}
} 
function r530() { t530(); } 
function r531() { t531(); } 
function r532() { t532(); } 
function r532a() { t532a(); } 
function r533() { t533(); } 
function r534(){ t534(); } 
function r534a() { t534a(); } 
function r534b() { t534b(); } 
function r534b1() { t534b1(); } 
function r534c() { t534c(); } 
function r534d() { t534d(); } 
function r535a(){ t535(); } 
function r535a1() { t535a1(); } 
function r535a2() { t535a2(); } 
function r535a3() { t535a3(); } 
function r535a4() { t535a4(); } 
function r535b() { t535b(); } 
function r535b1() { t535b1(); } 
function r535b2() { t535b2(); } 
function r536() { t536(); } 
function r537() { t537(); } 
function r538(){ t538(); } 
function r538a() {
	if($useChar == true){
		t538a($GLOBALS['SolMod']);
	} else { 
		t538a();
	}
} 
function r538b() {
	if($useChar == true){
		t538b($GLOBALS['SolMod']);
	} else { 
		t538b();
	}
} 
function r539() { t539(); } 
function r539a() { t539a(); } 
function r539b() { t539b(); } 
function r539c() { t539c(); } 
function r540() { t540(); } 
function r540a() { t540a(); } 
function r540b() { t540b(); } 
function r541(){ t541(); } 
function r541a() { t541a(); } 
function r541b() { t541b(); } 
function r541b1() { t541b1(); } 
function r541b2() { t541b2(); } 
function r541b3() { t541b3(); } 
function r542() { t542(); } 
function r542a() { t542a(); } 
function r542b() { t542b(); } 
function r543() { t543(); } 
function r543a() { t543a(); } 
function r543b() { t543b(); } 
function r543c() { t543c(); } 
function r544() { t544(); } 
function r544a() { t544a(); } 
function r544b() { t544b(); } 
function r544c() { t544c(); } 
function r544d() { t544d(); } 
function r545() { t545(); } 
function r545A() { t545(); } 
function r546(){ t546(); } 
function r546a() { t546a(); } 
function r546a1() { t546a1(); } 
function r546b() { t546b(); } 
function r546b1() { t546b1(); } 
function r546b2() { t546b2(); } 
function r647() { t647(); } 
function r648() { t648(); } 
function r649a() { t649a(); } 
function r649b($tid = "A") {  t649b($tid); } 
function r649b1() { t649b1(); } 
function r649b1a() { t649b1a(); } 
function r649b1b() { t649b1b(); } 
function r649c() { t649c(); } 
function r649d() { t649d1(); } 
function r649e() { t649e(); } 
function r649f() { t649f(); } 
function r649f1() { t649f1(); } 
function r750() { t750(); } 
function r751() { t751(); } 
function r752() { t752(); } 
function r753() { t753(); } 
function r754($id=0) {  t754($id); } 
function r755() { t755(); } 
function r756() { t756(); } 
function r757(){ t757(); } 
function r757a() { t757a(); } 
function r757b() { t757b(); }  
function r758a(){ t758a(); } 
function r758a1() { t758a1(); } 
function r758a2() { t758a2(); } 
function r758a3() { t758a3(); } 
function r758a4() { t758a4(); } 
function r758b() { t758b(); } 
function r759() { t759(); } 
function r760() { t760(); } 
function r760a() { t760a(); } 
function r761() { t761(); } 
function r761a() { t761a(); } 
function r761b() { t761b(); } 
function r761c() { t761c(); } 
function r762() { t762(); } 
function r762a() { t762a(); } 
function r762b() { t762b(); } 
function r762c() { t762c(); } 
function r863() { t863(); }  
function r863a() { t863a(); } 
function r863b() { t863b(); } 
function r863c() { t863c(); } 
function r863d() { t863d(); } 
function r863e() { t863e(); } 
function r864() { t864(); } 
function r865() { t865(); } 
function r866() { t866(); } 
function r867() { t867(); } 
function r868() { t868(); } 
function r869a() { t869a(); } 
function r869a1() { t869a1(); } 
function r869b() { t869b(); } 
function r870() {  t870(); } 
function r870a() { t870a(); } 
function r870b() { t870b(); } 
function r871a() { t871a(); } 
function r871b() { t871b(); } 
function r871c() { t871c(); } 
function r872() { t872(); } 
function r873() { t873(); } 
function r874() { t874(); } 
function r874a() { t874a(); } 
function r875() { t875(); } 
function r875a() { t875a(); } 
function r875b() { t875b(); } 
function r875c() { t875c(); } 
function r875d() { t875d(); } 
function r876() { t876(); } 
function r876a() { t876a(); } 
function r876b() { t876b(); } 
function r876c() { t876c(); } 
function r876d() { t876d(); } 
function r876e() { t876e(); } 
function r876f() { t876f(); } 
function r877($id = 0) { t877a($id); } 
function r877a($id = 0) { t877a($id); } 
function r877b($id = 0) { t877a($id); } 
function r877c($id = 0) { t877a($id); } 
function r877d($id = 0) { t877a($id); } 
function r978($tid) { t978(); } 
function r978a() { t978a(); } 
function r978b() { t978b(); } 
function r978c() { t978c(); } 
?>