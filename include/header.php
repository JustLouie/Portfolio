<div class="header">
	<a href="?home" class="logo">george</a>
	<div class="lang">
		<a href="">EN</a>
		<a href="">GE</a>
	</div>


	<?php

		 

		
		
/*
		foreach ($menu1 as  $value) {
			# code....>
			print('<li><a href="">'.$value["id"].'</a></li>');
		}*/

		

	   $menu = array('home' => "home", 'about' => "about", 'skill' => "skills", 'portfolio' => "portfolio" ,'contact' => "contact"  ); 
	   $menu_icon = array("fa fa-home","fa fa-user-secret",  "fa fa-code", "fa fa-picture-o", "fa fa-envelope-o");

	   $menu_link = array("index.php","?about","?skills","?portfolio","?contact"); 

	    ?>

	<div class="menu">

		<?php

			get_menu($connection);
		?>
	</div>
	<ul class="Web">
		<li><a href=""><i class="fa fa-twitter"></i></a></li>
		<li><a href=""><i class="fa fa-linkedin"></i></a></li>
		<li><a href=""><i class="fa fa-facebook"></i></a></li>
		<li><a href=""><i class="fa fa-rss"></i></a></li>
	</ul>
</div>