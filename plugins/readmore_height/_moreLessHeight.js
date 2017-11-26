/*!
	* moreLessHeight v0.4
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($) {
	$.moreLessHeight = function(el, options) {
		// Default Settings
		var defaults = {
			contentHeight: 150,
			lessTxt: 'Show Less'
		};
		// This
		var plugin = this;
		plugin.settings = {};
		// Vars
		var $el = $(el),
			el = el,
			$moreContent = $el.find('.moreh-content'),
			$moreInner = $el.find('.moreh-inner'),
			$moreToggle = $el.find('.moreh-toggle'),
			moreContentHeight = $moreContent.height(),
			innerHeight = $moreInner.height(),
			moreTxt = $moreToggle.text();
		// Plugin Methods
		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			// Hide learn more if too short
			if ($moreInner.height() < plugin.settings.contentHeight) {
				$el.addClass('disable');
				return;
			}
			// Start/Call certain functions
			plugin.moreClick();
		}
		plugin.moreClick = function() {
			$moreToggle.on('click', function(e){
				e.preventDefault();
				if ($moreContent.hasClass("active")) {
					// Active -> Not
					$moreContent.removeClass('active');
					$moreToggle.text( moreTxt );
					$moreContent.animate({
						'height': moreContentHeight
					});
				} else {
					// Not -> Active
					$moreContent.animate({
						'height': innerHeight
					}, function(){
						$moreContent.addClass('active');
						$moreToggle.text( plugin.settings.lessTxt );
					});
				}
			});
		}
		plugin.init();
	}
	// Add the plugin to the jQuery.fn object
	$.fn.moreLessHeight = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('moreLessHeight')) {
				var plugin = new $.moreLessHeight(this, options);
				$(this).data('moreLessHeight', plugin);
			}
		});
	}
})(jQuery);
