function init_vidlist(vidPlayerContainerID, triggerClass){

	$(triggerClass).click( function(e){
		$(triggerClass).removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
		var URL = $(this).attr('href');
		var htm = '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + URL + '?rel=0&autoplay=1" frameborder="0" allowfullscreen ></iframe>';	 
	    $(vidPlayerContainerID).html(htm);
		return false;
	});

}

init_vidlist("#video-list-replacer", ".video-list-select-trigger");