$('.images-slider-multi').slick({
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: false,
	dots: true,		
	responsive: 
	[		 
	    {
	    	breakpoint: 800, settings: {slidesToShow: 2, slidesToScroll: 2 } 
	    },
	    {	
	    	breakpoint: 600, settings: {slidesToShow: 1, slidesToScroll: 1 } 
	    }
	]
});

