$(function(){
	
	// Google Map Init Area
	(function(){
		// Custom Marker (if desired)
		function gmapMarker(width, height, anchor){
			return {
				url: 'googlemap/images/marker@2x.png', // image location
				size: new google.maps.Size(width, height), // size of image
				scaledSize: new google.maps.Size(width, height), // position of marker sprite
				anchor: new google.maps.Point(anchor, height) // portion of image to dock to location point (center, bottom)
			}
		}

		// Init - gMapHelper (single)
		$('#gmap-single').gMapHelper({ 
			address:"1100 Hector Street, Conshohocken, PA 19403", // plain text address
			//icon: gmapMarker(40, 40, 20), // custom marker (can remove for default)
			scrollwheel: false, // boolean. scroll to zoom or not
			zoom: 14, // 0 to 18
			mapType: "roadmap", // options: "roadmap", "satellite", "hybrid", terrain
			// Popup info when you click on marker
			addressInfoWindow: '<div class="info-window">' +
					'<h2>Visit Work</h2>' +
					'<p>1100 Hector Street</p>' +
					'<p>Conshohocken, PA 19428</p>' +
				'</div>',
			// Can be left blank for default styles. Styles Pulled from... https://snazzymaps.com/style/134/light-dream
			styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
		});


		// Init - gMapHelper (multiple)
		$('#gmap-multiple').gMapHelper({ 
			// address name, lat/lng, info window popup
			address: [
				{ 
					itemName: "Work",
					itemAddress: [40.075210, -75.288226],
					itemInfoWindow: '<div class="info-window">' +
							'<h2>Visit Work</h2>' +
							'<p>1100 Hector Street</p>' +
							'<p>Conshohocken, PA 19428</p>' +
						'</div>'
				}, 
				{ 
					itemName: "Home",
					itemAddress: [40.1211770, -75.4015760],
					itemInfoWindow: '<div class="info-window">' +
							'<h2>Visit Home</h2>' +
						'</div>'
				}, 	
				{ 
					itemName: "Home Home",
					itemAddress: [39.817583, -76.981294],
					itemInfoWindow: '<div class="info-window">' +
							'<h2>Visit Home Home</h2>' +
						'</div>'
				}
			],
			//icon: gmapMarker(40, 40, 20), // custom marker (can remove for default)
			scrollwheel: false, // boolean. scroll to zoom or not
			zoom: 14, // 0 to 18
			mapType: "roadmap", // options: "roadmap", "satellite", "hybrid", terrain
			// Can be left blank for default styles. Styles Pulled from... https://snazzymaps.com/style/134/light-dream
			styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
		});
	})();

});