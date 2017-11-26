// On load...
$(window).on('load', function(){
	
	// Init - Horizontal Ticker
	// IE9- needs requestAnimationFrame fallback
	$('.hrz-ticker').hrzTicker({
		velocity: 1.5
	});

});