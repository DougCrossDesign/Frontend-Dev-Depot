$(function(){
	
	// Sly - Horizontal Scroller
	(function () {
		var $timeline = $('.timeline-wrap');
		$('.timeline-frame').sly({
			horizontal: 1,
			itemNav: 'centered',
			smart: 1,
			activateOn: 'click',
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $timeline.find('.scrollbar'),
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 0,
			// Buttons
			prevPage: $timeline.find('.timeline-prev'),
			nextPage: $timeline.find('.timeline-next')
		});
		$(window).resize(function(e) {
			$('.timeline-frame').sly('reload');
		});
	})(); 

});