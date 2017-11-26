$(function(){
	
	// Init - more/less height
	$(window).load(function(){
		$('.more-height').moreLessHeight({
			contentHeight: 160, // match it up with CSS height
			lessTxt: 'Show Less'
		});
	});

});