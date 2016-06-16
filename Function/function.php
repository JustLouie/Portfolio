<?php

/*function get_menu($connection){



	$query="SELECT * FROM `menu`";
	print_r($query);
	$result= mysqli_query($connection,$query);

 

	while($row = mysqli_fetch_array($result))
	{
		print('<li><a href="">'.$row["name"].'</a></li>');
	}


}*/


function insert_user($users,$connection){

	print_r($users);

	 $query = " INSERT INTO users (name, email, password)
     VALUES ('".$users['name']."', '".$users['email']."', '".$users['password']."') ";
 	 mysqli_query($connection, $query);

}


// function login($users,$connection){

// 	print_r($users);

// 	 $query = " INSERT INTO users (name, email, password)
//      VALUES ('".$users['name']."', '".$users['email']."', '".$users['password']."') ";
//  	 mysqli_query($connection, $query);

// }

function get_menu($connection){



	$query="SELECT * FROM `menu`";
	
	
	$result= mysqli_query($connection, $query);
	

 	
 	// return $row;
	$cnt = 0;
	while($row = mysqli_fetch_array($result))
	{
		print('

					<a href="'.$row["link"].'" class="menu-content" index="'.$cnt.'">
						<i class="'.$row["image_name"].' menu-active" index1="'.$cnt.'"></i>
						<p class="hidden-txt">'.$row["title"]  .'</p>
					</a>
			');
		$cnt++;
	}


}
function get_text($connection)
{
	$text_query="SELECT * FROM `menu`";
	$text_result=mysqli_query($connection,$text_query);

	while($text_row=mysqli_fetch_array($text_result))
	{
		print('
				<p>'.$text_row["content"].'</p><br>
			');
	}


}

 

?>