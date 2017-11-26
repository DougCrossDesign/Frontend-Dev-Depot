/*!
	* hrzTicker v0.2
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($){
	$.fn.hrzTicker = function(options) {
		// allows for chaining
		return this.each(function() {
			// Elements
			var $wrap = $(this),
				$ul = $wrap.find("ul"),
				$li = $wrap.find("li");
			// Vars
			var wrapWidth = $wrap.outerWidth(),
				liLen = $li.length,
				liTotWidths = 0,
				step = 0,
				reqMove,
				cssTrans = null;
			// Defaults
			var defaults = {
				velocity: 1.5
			};
			// Combine Defaults and Options into Settings
			var sett = $.extend({}, defaults, options);

			var plugin = {};

			// Move
			plugin.move = function(){
				if (step < (liTotWidths + wrapWidth)) {
					step = step + sett.velocity;
					if (cssTrans) {
						// CSS Transforms SUPPORTED
						$ul.css({
							'-webkit-transform': 'translateX(' + (wrapWidth - step) + 'px)',
							'-ms-transform': 'translateX(' + (wrapWidth - step) + 'px)',
							'transform': 'translateX(' + (wrapWidth - step) + 'px)'
						});
					} else {
						// NOT SUPPORTED
						$ul.css({
							'left': wrapWidth - step
						});
					}
					plugin.moveTimer();
				} else {
					// after animation
					step = 0;
					plugin.posUl();
					plugin.moveTimer();
				}
			};

			// Call Animation
			plugin.moveTimer = function(){
				cancelAnimationFrame(reqMove);
				reqMove = requestAnimationFrame(function() {
					plugin.move();
				});
			};

			// Position UL
			plugin.posUl = function(){
				if (cssTrans) {
					// CSS Transforms SUPPORTED
					$ul.css({
						'-webkit-transform': 'translateX(' + wrapWidth + 'px)',
						'-ms-transform': 'translateX(' + wrapWidth + 'px)',
						'transform': 'translateX(' + wrapWidth + 'px)'
					});
				} else {
					// NOT SUPPORTED
					$ul.css({
						'left': wrapWidth
					});
				}
				plugin.move();
			};

			// Get Width
			plugin.getTotalWidth = function(){
				$li.each(function(index){
					liTotWidths += $(this).outerWidth();
					if (liLen == (index + 1)) {
						$ul.width(liTotWidths + 20);
						$wrap.addClass('active');
						plugin.posUl();
						plugin.moveTimer();
					}
				});
			};

			// Check for CSS Transform Support
			plugin.checkCssTrans = function() {
				var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
				var div = document.createElement('div');
				for(var i = 0; i < prefixes.length; i++) {
					if(div && div.style[prefixes[i]] !== undefined) {
						// return prefixes[i];
						cssTrans = true;
						return;
					}
				}
				// return false;
				cssTrans = false;
				return;
			};

			// Events
			plugin.initEvents = function(){
				$wrap.on('mouseenter', function(){
					cancelAnimationFrame(reqMove);
				});
				$wrap.on('mouseleave', function(){
					plugin.moveTimer();
				});
			};

			// Init
			plugin.init = function(){
				plugin.checkCssTrans();
				plugin.getTotalWidth();
				plugin.initEvents();
			};

			// START IT ALL
			plugin.init();
		});
	}
})(jQuery);
