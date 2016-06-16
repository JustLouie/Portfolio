
<?php 

print_r($_POST);


if ( isset($_GET['event'])){

 	insert_user($_POST, $connection);
}





header('Location: http://localhost:8000/updateportfolio/?registration');







?>