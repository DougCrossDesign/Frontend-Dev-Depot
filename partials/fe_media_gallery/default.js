$('.media-viewer-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots:false,
	fade: true,
	asNavFor: '.media-viewer-thumbs'
});
$('.media-viewer-thumbs').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.media-viewer-main',
	dots: false,
	arrows: false,
	focusOnSelect: true
});