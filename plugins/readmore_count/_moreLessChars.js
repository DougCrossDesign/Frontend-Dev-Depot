/*!
	* moreLessChars v0.1
	* based on: http://code-tricks.com/jquery-read-more-less-example/
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($){
	$.fn.moreLessChars = function(options) {
		// allows for chaining
		return this.each(function() {
			// Variables
			var $wrap = $(this),
				$content = $wrap.find(".moreless-content"),
				content = $content.html(),
				$btn = $wrap.find(".moreless-btn"),
				$btnTxt = $btn.find('.txt'),
				btnTxt = $btnTxt.html();
			var $sep, $extra;
			// Defaults
			var defaults = {
				showChar: 100, // How many characters are shown by default
				septext: "...",
				moretext: "Show More",
				lesstext: "Show Less"
			};
			// Combine Defaults and Options into Settings
			var settings = $.extend({}, defaults, options);
			// Plugin Object
			var plugin = {};
			plugin.init = function() {
				// calls all methods that are needed from the start
				plugin.separateContent();
				plugin.contentToggle();
			}
			plugin.separateContent = function() {
				if (content.length > settings.showChar) {
					$btn.removeClass('hide');
					var intro = content.substr(0, settings.showChar);
					var wordBreakpoint = Math.min(intro.length, intro.lastIndexOf(" "));
					intro = intro.substr(0, wordBreakpoint);
					var extra = content.substr(wordBreakpoint, content.length - wordBreakpoint);
					var html = intro + '<span class="moreless-sep">' + settings.septext+ '&nbsp;</span><span class="moreless-extra">' + extra + '</span>';
					$content.html(html);
					$wrap.removeClass('hide');
					$sep = $wrap.find('.moreless-sep');
					$extra = $wrap.find('.moreless-extra');
				} else {
					$wrap.removeClass('hide');
				}
			}
			plugin.contentToggle = function() {
				$btn.on('click', function(e){
					e.preventDefault();
					if($btn.hasClass("less")) {
						$btn.removeClass("less");
						$btnTxt.html(settings.moretext);
					} else {
						$btn.addClass("less");
						$btnTxt.html(settings.lesstext);
					}
					$sep.toggle();
					$extra.toggle();
				});
			}
			// START IT ALL
			plugin.init();
		});
	}
})(jQuery);
