
//Sponsors Footer 
$('.footer-sponsors').slick({
	infinite: false,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 5000,
	slidesToShow: 5,
	slidesToScroll: 5,
	arrows: false,
	dots: true,		
	responsive: 
	[
	 	{
	    	breakpoint: 1200, settings: {slidesToShow: 5, slidesToScroll: 5 }
	    },			  
	    {
	    	breakpoint: 1000, settings: {slidesToShow: 4, slidesToScroll: 4 } 
	  	},
	    {
	    	breakpoint: 700, settings: {slidesToShow: 3, slidesToScroll: 3 } 
	    },
	    {	
	    	breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 2 } 
	    }
	]
});


