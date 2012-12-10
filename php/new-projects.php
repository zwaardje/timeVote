<?php 

if(isset($_GET['id'])){
	print_r($_GET);			
}

$return = array();
for($i=0;$i<10;$i++){
	$return[$i]['id'] = $i;
	$return[$i]['name'] = "Project $i";
	$return[$i]['description'] = "Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.";
	$return[$i]['image'] = "http://placehold.it/350x150";
	
}
echo json_encode($return);
?>