

<?php  

// print_r($_GET);

if  ( empty($_GET) ){


	include('include/home.php');



} else {


if (isset($_GET['about'])){

	include('include/About.php');

}
if (isset($_GET['contact']))
{
	include('include/Contact.php');
}
if(isset($_GET['skills']))
{
	include('include/Skill.php');
}

if(isset($_GET['portfolio']))
{
	include('include/Portfolio.php');
}

if(isset($_GET['registration']))
{
	include('include/registration.php');
}

if(isset($_GET['event']))
{
	include('include/event.php');
}
if(isset($_GET['home']))
{
	include('include/home.php');
}


}




?>