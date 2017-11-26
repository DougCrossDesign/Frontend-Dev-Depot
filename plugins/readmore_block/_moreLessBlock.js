/*!
	* moreLessBlock v0.1
	* URL...
	* Copyright (c) 2016
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($){
	$.fn.moreLessBlock = function(options) {
		// allows for chaining
		return this.each(function() {
			// Variables
			var $wrap = $(this),
				$content = $wrap.find(".more-content"),
				$toggle = $wrap.find(".more-toggle"),
				showTxt = $toggle.text();
			var active = ($wrap.hasClass('active')) ? true : false;
			// Defaults
			var defaults = {
				lessTxt: 'Show Less'
			};
			// Combine Defaults and Options into Settings
			var settings = $.extend({}, defaults, options);

			// Plugin Object
			var plugin = {};

			// Init
			plugin.init = function() {
				$content.removeClass('hide').hide(); // hide content
				plugin.moreClick();
			};

			// show/hide
			plugin.showHide = function() {
				if (active) {
					// then hide
					$content.slideUp('fast');
					$toggle.text(showTxt);
				} else {
					// then show
					$content.slideDown('fast');
					$toggle.text(settings.lessTxt);
				}
				active = !active; 
			};

			// moreClick
			plugin.moreClick = function() {
				$toggle.on('click', function(){
					plugin.showHide();
				});
			};

			// START IT ALL
			plugin.init();

			// PUBLIC METHODS
			// $.fn.moreLessBlock.publicMethodName = function($newEl) {
			// 	plugin.methodName($newEl);
			// };
		});
	}
})(jQuery);