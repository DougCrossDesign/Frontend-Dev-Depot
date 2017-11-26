$('.events-slider-default').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: true,
	dots: false,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev">&lt;</div>',
	nextArrow: '<div class="slick-next">&gt;</div>',
	responsive: [{
		breakpoint: 1000,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		}
	},
	{
		breakpoint: 700,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 500,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	},
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
]
});
