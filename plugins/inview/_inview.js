/*!
	* inView v0.4.2
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($){
	$.fn.inView = function(options) {
		// allows for chaining
		return this.each(function() {
			// Variables
			var $el = $(this),
				$wrap = $el.closest(".inview"),
				wrapH = $wrap.outerHeight(),
				wrapDist = $wrap.offset().top,
				winH = $(window).outerHeight(),
				hrzDist = 0, // horizontal (x) distance of element
				vertDist = 0, // vertical (y) distance of element
				scrollDist = 0, // distance scrolled
				totalDist = 0, // distance scrolled + half window height
				distDiff = 0; // totalDist - wrapDist
			// Defaults
			var defaults = {
				moveYN: true, // whether to move element
				bonusDist: winH/2, // Distance to wait other than scroll distance
				hrzVelocity: 1.0, // horizontal (x) speed
				hrzProperty: null, // 'left' or 'right'
				hrzNeg: false, // subtract from position rather than add. -(distance)
				hrzMax: null, // max el position (x)
				vertVelocity: 1.0, // vertical (y) speed
				vertProperty: null, // 'top' or 'bottom'
				vertNeg: false, // subtract from position rather than add. -(distance)
				vertMax: null,  // max el position (y)
				max: null // max distance to move
			};
			// Combine Defaults and Options into Settings
			var settings = $.extend({}, defaults, options);

			var plugin = {};

			// Set Position
			plugin.setPos = function(xValue, yValue){
				switch (settings.hrzProperty) {
					case 'left':
						$el.css('left', xValue);
						break;
					case 'right':
						$el.css('right', xValue);
						break;
				}
				switch (settings.vertProperty) {
					case 'top':
						$el.css('top', yValue);
						break;
					case 'bottom':
						$el.css('bottom', yValue);
						break;
				}
			};

			// Move
			plugin.move = function(){
				// Horizontal (x)
				var hrzProduct = distDiff * settings.hrzVelocity;
				hrzProduct = (settings.hrzNeg) ? hrzProduct * -1 : hrzProduct; // make negative distance if true
				var x = hrzDist + hrzProduct;
				// Vertical (y)
				var vertProduct = distDiff * settings.vertVelocity;
				vertProduct = (settings.vertNeg) ? vertProduct * -1 : vertProduct; // make negative distance if true
				var y = vertDist + vertProduct;
				// Set Max y
				// (when given)
				if (! settings.vertNeg && settings.vertMax !== null) {
					// adding distance
					if (y >= settings.vertMax ) y = settings.vertMax; // over max.. set to max
				} else if (settings.vertNeg && settings.vertMax !== null) {
					// subtracting distance
					if (y <= settings.vertMax ) y = settings.vertMax;
				}
				// Set Max x
				// (when given)
				if (! settings.hrzNeg && settings.hrzMax !== null) {
					// adding distance
					if (x >= settings.hrzMax ) x = settings.hrzMax; // over max.. set to max
				} else if (settings.hrzNeg && settings.hrzMax !== null) {
					// subtracting distance
					if (x <= settings.hrzMax ) x = settings.hrzMax;
				}
				// Move to new x/y
				plugin.setPos(x, y);
			}

			// Check if in "specified" View for moving (parallax)
			plugin.checkDist = function(){
				if (settings.moveYN === true) {
					// Yes, move element
					scrollDist = $(window).scrollTop() + 1; // distance scrolled
					totalDist = scrollDist + settings.bonusDist; // distance scrolled + half window height
					if (totalDist > wrapDist) {
						// in "specified" view
						distDiff = totalDist - wrapDist;
						if (settings.max === null || distDiff < settings.max) {
							// no max or under max
							plugin.move();
						}
					} else {
						// reset back to start
						plugin.setPos(hrzDist, vertDist);
					}
				}
			};

			// Check if in Viewport
			plugin.inViewport = function(){
				scrollDist = $(window).scrollTop() + 1; // distance scrolled
				var insideDist = scrollDist + winH; // distance scrolled + window height
				if (insideDist > wrapDist && (wrapDist + wrapH) > scrollDist) {
					// inside viewport
					$el.addClass('el-inview');
				} else {
					// outside viewport
					$el.removeClass('el-inview');
				}
			};

			// Distance of Element x/y
			plugin.getElDist = function(){
				// reset back to start
				switch (settings.hrzProperty) {
					case 'left':
						// get left position or zero it
						hrzDist = parseInt($el.css('left')) || 0;
						break;
					case 'right':
						// get right position or zero it
						hrzDist = parseInt($el.css('right')) || 0;
						break;
				}
				switch (settings.vertProperty) {
					case 'top':
						// get top position or zero it
						vertDist = parseInt($el.css('top')) || 0;
						break;
					case 'bottom':
						// get bottom position or zero it
						vertDist = parseInt($el.css('bottom')) || 0;
						break;
				}
				plugin.checkDist(); // take css positioning and then factor in scroll position
				$(window).on('scroll', function(){
					plugin.checkDist();
					plugin.inViewport();
				});
			};

			// Init
			plugin.init = function() {
				plugin.getElDist();
				plugin.inViewport();
			};

			// START IT ALL
			plugin.init();
		});
	}
})(jQuery);
