
<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Events Slider - Reveal</h2>
<?php } ?>

<div class="events-slider-reveal">
	<?php for ($i=0; $i < 5; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div class="events-slider-reveal-slide" style="background-image: url(<?php insertImage('example.jpg') ?>);">
			<div class="events-slider-reveal-darken"></div>
			<div class="events-slider-reveal-overlay">
				<div class="vcenter2-reveal">
					<div class="events-slider-reveal-byline">11.17.2017 | 8:00pm</div>
					<h2 class="events-slider-reveal-hdr">Event Title</h2>
					<div class="events-slider-reveal-desc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit placerat magna, ac pretium massa luctus mattis. Aliquam accumsan feugiat pellentesque.
					</div>
					<div class="events-slider-reveal-btns">
						<a href="/events" class="hero-btn">Buy Tickets</a>
						<a href="/events" class="hero-btn">More Info</a>
					</div>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
