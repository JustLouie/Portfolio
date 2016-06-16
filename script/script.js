$(function(){

	// var indexofHeader = $(".menu-active").attr("index1");
	// $('.hidden-txt').click(function(){
		
 //        $('.menu-active').eq(indexofHeader).removeClass('active');
	// 	$('.menu-active').eq(indexofHeader).addClass('active');
	// });
	var index1=$('.blast').index(this);
	function addAnimation(mainClass,addClassName,index){
          
          $("."+mainClass).eq(index).attr("class", mainClass);
          $("."+mainClass).eq(index).addClass("animated");
          $("."+mainClass).eq(index).addClass(addClassName);
       }


	 $(".blast").hover(function(){
	 	

	 	var indexofBlast=$(this).attr("index");
	   	addAnimation("blast","rubberBand",indexofBlast);
        $(".blast").eq(indexofBlast).addClass('Blast-color');

	  


	 }, function(){
	 	var indexofBlast=$(this).attr("index");
	 	$(".blast").eq(indexofBlast).removeClass('Blast-color');
	  	addAnimation("blast","rubberBand",indexofBlast);
        function blastFunc()
        {
            addAnimation("blast","",indexofBlast);
        }
        setTimeout(blastFunc,1000);
	  	


	 });
	 $(".contact-me").hover(function(){
	 	addAnimation("contact-me","rubberBand",0);


	 },function(){


	 	addAnimation("contact-me","pulse",0);
	 });
	 $(".menu-content").hover(function(){
	 	var index = $(this).attr("index");

	 	addAnimation("hidden-txt","fadeIn",index);
	 	$('.hidden-txt').eq(index).addClass('Dispblock');


	 },function(){
		var index = $(this).attr("index");

	 	$('.hidden-txt').eq(index).removeClass('Dispblock');
	 	addAnimation("hidden-txt","flash",index);
	 

	 });
	 
	 $(".Cyrcle-border").hover(function() {
	 	var indexOfCircle=$(this).attr("index");
	 	addAnimation("Cyrcle-border","zoomOut",indexOfCircle);
	 	$(".Chart-cyrcle").eq(indexOfCircle).addClass("Circle-active");
	 	$(".Circle-txt").eq(indexOfCircle).addClass("Circle-txt-active");
	 }, function() {
	 	var indexOfCircle=$(this).attr("index");
	 	$(".Chart-cyrcle").eq(indexOfCircle).removeClass("Circle-active");
	 	$(".Circle-txt").eq(indexOfCircle).removeClass("Circle-txt-active");
	 	addAnimation("Cyrcle-border","zoomIn",indexOfCircle);
	 });

	 $(".Portfolio-block").hover(function() {
	 	var indexOfPortfolio=$(this).attr("index");
	 	addAnimation("Portfolio-circle","fadeIn",indexOfPortfolio);
	 }, function() {
        var indexOfPortfolio=$(this).attr("index");
	 	addAnimation("Portfolio-circle","fadeOut",indexOfPortfolio);
	 });
     $('.Input-Active').click(function() {
        var IndexOfInputs=$(this).attr("index");
        $('.Text-input-active').removeClass('Under-active');          
        $('.Text-input-active').eq(IndexOfInputs).addClass('Under-active');

     });
     $('.Portfolio-circle').click(function(event) {
        var indexOfPortfolioPic=$(this).attr("index");
         $('.Portfolio-pic').eq(indexOfPortfolioPic).addClass("disp-block");
     });
     $('.Portfolio-pic').click(function(event) {
        var indexOfPortfolioPic=$(this).attr("index");
        $('.Portfolio-pic').eq(indexOfPortfolioPic).removeClass("disp-block");
     });
     // ---------------canvas codes
        var canvas=document.getElementById("myCanvas");
        var ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(135,85,30,22,2*Math.PI);
        ctx.stroke();
        
     
	 // ---------------Map codes 




     
var styleArray = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 20
            },
            {
                "lightness": 50
            },
            {
                "gamma": 0.4
            },
            {
                "hue": "#00ffee"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#405769"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#232f3a"
            }
        ]
    }
	  ];
	 function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(41.7187861,44.7743898,17.75),
	    zoom:17,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    styles:styleArray
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);


});