$(function(){


	//////////////////////////////
	// Core Inits
	//////////////////////////////


	// Init - Placeholder
	$('input, textarea').placeholder();

	// Init - Label Hint
	$('.lbl-hint').labelHint();

	// Init - Chosen Plugin
	$(".chosen-select").chosen();

	// Init - Custom Checkbox
	$('.custom-chbx').customChbx();

	// Init - File Input 
	$('.fileinput').fileInput();





	//////////////////////////////
	// Site Inits
	//////////////////////////////







	//////////////////////////////
	// Other
	//////////////////////////////

	// Fix Startup CSS animations
	$(window).load(function() {
	  $("body").removeClass("preload");
	});
	

});

