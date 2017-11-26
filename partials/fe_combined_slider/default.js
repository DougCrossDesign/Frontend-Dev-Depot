// Init - Video Slider Slick
$('.combined-slider').slick({
	autoplay: false,
	autoplaySpeed: 3000,
	arrows: true,
	dots: true,
	mobileFirst: true,
	prevArrow: '<span class="slick-prev">&lt;</span>',
	nextArrow: '<span class="slick-next">&gt;</span>',
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	cssEase: 'linear'
});

// Init - YT EMBED
var onYouTubeIframeAPIReady = function() {
	player = new YT.Player('player', {
		height: 500,
		width: 100,
		videoId: 'HoSMWkL1iGY',
		playerVars: {
			'color': 'white',
			'html5': 1,
			'controls': 1,
			'modestbranding': 1,
			'autoplay': 0,
			'rel': 0,
			'showinfo': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});

	// YT EMBED Thumbnail
	var thumbnail = document.getElementById('ytembed-thumbnail');
	var thumbnailImg = "http://lchomesde.aycdemo.com/themes/site/assets/images/hp-video-example.jpg";
	if(thumbnail) {
		thumbnail.src = thumbnailImg;
		thumbnail.height = 500;
		thumbnail.width = 100 + "%";
	}
};
/* Create Player Variable*/
var player;

/* Pull in Youtube API Script*/
var playView = document.getElementById("player");
$(playView).hide();

/* When Youtube Video Ends Replace iFrame with Thumbnail*/
var onPlayerStateChange = function(event) {
	if (event.data == YT.PlayerState.PAUSED) {
			$("#player").hide();
			$('.hero-wide-overlay').fadeIn("slow");
			$("#thumbnail_container").fadeIn("slow");
		}
	if (event.data == YT.PlayerState.ENDED) {
		$("#player").hide();
		$('.start-video').fadeIn("slow");
		$("#thumbnail_container").fadeIn("slow");
	}
};

/* Start Youtube Video Replace Thumbnail with iFrame*/
$(document).on('click', '.start-video', function() {
	$(this).fadeOut("slow");
	$("#player").show();
	$("#thumbnail_container").fadeOut("slow");
	player.playVideo();
});
