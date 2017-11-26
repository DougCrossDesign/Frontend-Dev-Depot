/*!
	* dpdwn v0.2
	* - General Dropdown
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
(function($){
	$.fn.dpdwn = function(options) {
		// allows for chaining
		return this.each(function() {
			// Variables
			var $wrap = $(this),
				$btn = $wrap.find(".dpdwn-btn"),
				$list = $wrap.find(".dpdwn-list"),
				$listLinks = $list.find("a"),
				dpdwnTitle = $wrap.attr("data-title"),
				$dpdwnTitle = $(dpdwnTitle);
			// Defaults
			var defaults = {
				optionName: "value"
			};
			// Combine Defaults and Options into Settings
			var settings = $.extend({}, defaults, options);

			var plugin = {

				// Dropdown Toggle
				dpdwnToggle: function() {
					$btn.on("click", function(e) {
						if ($wrap.hasClass("active")) {
							$list.slideUp("fast");
						} else {
							$list.slideDown("fast");
						}
						$wrap.toggleClass("active");
						e.stopPropagation();
					});
				},

				// Link Clicked
				linkClicked: function() {
					$listLinks.on("click", function() {
						var $this = $(this),
							newTitle = $this.attr('data-title');
						$listLinks.removeClass('current');
						$this.addClass('current');
						if ($dpdwnTitle != '' || $dpdwnTitle != undefined) $dpdwnTitle.html(newTitle); // change dropdown title
						$wrap.removeClass("active");
						$list.slideUp("fast");
					});
				},

				// Escape Toggle
				escapeToggle: function() {
					$(document).on("click", function(e) {
						$wrap.removeClass("active");
						$list.slideUp("fast");
					});
				},

				// Start it All
				init: function() {
					plugin.dpdwnToggle();
					plugin.escapeToggle();
					plugin.linkClicked();
				}

			};
			// START IT ALL
			plugin.init();
		});
	}
})(jQuery);
