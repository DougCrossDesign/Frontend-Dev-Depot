$(function() {
	/* Lazy Load XT */
	$.extend($.lazyLoadXT, {
		autoinit: false,
		oninit: {},
		onshow: {addClass: 'lazy-loaded'}
	});
});

var lazyLoadXTHelper = function(init) {
	function LazyLoadXTConstructor(args) {

		var scrollTimer;
		function scrollTrigger() {
			clearTimeout(scrollTimer);
			scrollTimer = setTimeout(function() {
				var trigger_test = ( $(window).scrollTop() + $(window).height() + 200 ) > ( args.lazy_wrapper.offset().top + args.lazy_wrapper.outerHeight() );
				if(trigger_test){
					process_data();
				}
			}, 150);
		}
		$(window).on('scroll', function() { scrollTrigger(); });

		function jsonResultData() { this._data = undefined; }
		Object.defineProperty(jsonResultData.prototype, "data", {
			set: function(val) { this._data = val; resetOutput(); },
			get: function() { return this._data; }
		});
		var currentJson = new jsonResultData();

		var currentItem = 0;
		function resetOutput() {
			args.lazy_wrapper.empty();
			currentItem = 0;
			if( currentJson.data.length < 1 ) {
				args.lazy_wrapper.html(args.no_items_message);
			} else if( currentJson.data.length > currentItem ) {
				process_data();
			}
		}

		function updateJson(tags) {
			var ajax_request = args.ajax_service + '?' + (tags || args.default_tags);
			// console.log(ajax_request);
			$.ajax({
				url: ajax_request,
				type: 'GET',
				dataType: 'json',
				data: {
					format: 'json'
				},
				error: function( event, jqxhr, settings, thrownError ) {
					console.log('ajax error:');
					console.log( event, jqxhr, settings, thrownError );
				},
				success: function(data) {
					// console.log('ajax success:');
					// console.log(data);
					currentJson.data = data[Object.keys(data)[0]];
				}
			});
		}
		updateJson();
		args.filter_inputs.change(function() {
			var tags = '';
			args.filter_inputs.each(function() {
				tags += $(this).val() + '&'
			});
			tags = tags.substr(0, tags.length - 1);
			updateJson(tags);
		});

		function process_data() {
			var feedOutput = $('<div>');
			if(currentJson.data.length > currentItem) {
				for (var i = 0; i < args.add_items_count; i++) {
					if(currentJson.data.length < currentItem) { break; }
					feedOutput.append(args.format_data(currentJson.data[i]));
					currentItem += 1;
				}
				args.lazy_wrapper.append(feedOutput.children());
				args.lazy_wrapper.find('.lazy:not(.lazy-loaded), img[data-src]:not(.lazy-loaded)').lazyLoadXT();
				scrollTrigger();
			}
		}

	}
	return new LazyLoadXTConstructor(init);
}
