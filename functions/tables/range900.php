<?php 
function t978($tid) { 
	$result = roll('1','10','978',0,$tid);
	if($tid == 4){
		$cR1 = droll("1d10");
		if($cR1["roll"] <= 4){
			t978c();
		} else {
			echo ", but is not.";
		}
	}
	return $result;
}
function t978a() {
	$result = roll('1','4','978a');
	return $result;
}
function t978b() { 
	$result = roll('1','6','978b');
	return $result;
}
function t978c() {
	$result = roll('1','6','978c');
	return $result;
}

?>