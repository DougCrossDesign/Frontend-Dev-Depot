
<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Events List</h2>
<?php } ?>

<div class="events-list-hdr center hdr2 upper btm-margin">
	<span class="font-light">Upcoming</span> Events
</div>

<div class="events-list btm-margin">
	<?php for ($i=0; $i < 6; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<a href="/events" class="clearfix">
			<div class="inner">
				<div class="col1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
				<div class="col2">July 07, 2016 8:00am - 10:00am</div>
				<div class="col3"><span class="aycicon-right_arrow_circ icon"></span></div>
			</div>
		</a>
	<?php } ?>
</div>
<div class="center">
	<a href="/events" class="btn">View All Events</a>
</div>
