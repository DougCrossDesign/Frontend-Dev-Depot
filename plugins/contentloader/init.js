$(function(){
	
	// Init - Content Loader
	// dynamicGallery();
	$('.cl-area').contentLoader({
		callback: function(){
			console.log('Change!'); // Re-init plugins, etc.
		}
	});

});