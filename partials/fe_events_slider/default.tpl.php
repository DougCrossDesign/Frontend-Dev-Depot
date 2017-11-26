
<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Events Slider</h2>
<?php } ?>

<div class="events-slider-default">
	<?php for ($i=0; $i < 5; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div class="events-slider-slide" style="background-image: url(<?php insertImage('example.jpg') ?>);">
			<div class="events-slider-darken"></div>
			<div class="events-slider-overlay">
				<div class="vcenter2">
					<div class="events-slider-byline">11.17.2017 | 8:00pm</div>
					<h2 class="events-slider-hdr">Event Title</h2>
					<div class="events-slider-desc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit placerat magna, ac pretium massa luctus mattis. Aliquam accumsan feugiat pellentesque.
					</div>
					<div class="events-slider-btns">
						<a href="/events" class="hero-btn">Buy Tickets</a>
						<a href="/events" class="hero-btn">More Info</a>
					</div>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
