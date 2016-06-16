<?php 

 

  $connection = mysqli_connect('localhost', 'admin', '');

 

	$conn = mysqli_select_db($connection, 'test');
	 mysqli_query($connection,"SET NAMES 'utf8'");
	// print($conn);
?>