$(function() {

	var lazyLoaders = {
		init1: lazyLoadXTHelper({
			lazy_wrapper: $('.lazyload-wrapper1'),
			filter_inputs: $('#form_year, #form_month'),
			ajax_service: 'plugins/lazyLoadXT/test.json',
			default_tags: 'form_year=clear&form_month=clear',
			add_items_count: 9,
			no_items_message: '<p class="no-items">No items to display.</p>',
			format_data: function(data) {
				return '<div class="lazy col1-3 col btm-margin-lg"><article class="example-box"><p class="black">By <strong class="blue">' + data['author'] + '</strong></p><h2 class="hdr3 btm-margin"><a class="drk-blue" href="' + data['link'] + '" title="Learn More" target="_blank">' + data['title'] + '</a></h2><a href="' + data['link'] + '" title="Learn More" target="_blank"><img class="fluid-img btm-margin" data-src="' + data['image'] + '" alt="' + data['image_alt'] + '" /></a><p class="black btm-margin-sm">' + data['date'] + '</p><div class="entry-content font2">' + data['description'] + '</div></article></div>';
			}
		}),
		init2: lazyLoadXTHelper({
			lazy_wrapper: $('.lazyload-wrapper2'),
			filter_inputs: $('#form_year, #form_month'),
			ajax_service: 'plugins/lazyLoadXT/test.json',
			default_tags: 'form_year=clear&form_month=clear',
			add_items_count: 3,
			no_items_message: '<p class="no-items">No items to display.</p>',
			format_data: function(data) {
				return '<div class="lazy col1-3 col btm-margin-lg"><article class="example-box"><p class="black">By <strong class="blue">' + data['author'] + '</strong></p><h2 class="hdr3 btm-margin"><a class="drk-blue" href="' + data['link'] + '" title="Learn More" target="_blank">' + data['title'] + '</a></h2><a href="' + data['link'] + '" title="Learn More" target="_blank"><img class="fluid-img btm-margin" data-src="' + data['image'] + '" alt="' + data['image_alt'] + '" /></a><p class="black btm-margin-sm">' + data['date'] + '</p><div class="entry-content font2">' + data['description'] + '</div></article></div>';
			}
		})
	};

});
