<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Testimonials Slider</h2>
<?php } ?>

<div class="testimonials-slider slick-slider">
	<?php for ($i=0; $i < 6; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<li>
			<div class="testimonials-slider-txt">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere, nisi a venenatis euismod, odio enim eleifend ligula, sit amet volutpat diam libero id nunc. Mauris iaculis, nisl at ultrices blandit, elit nisi consequat neque, et vehicula tellus metus vitae enim. Nullam imperdiet ligula ac felis lacinia condimentum. Morbi et diam elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
			</div>
			<div class="testimonials-slider-name">
				Persons Name
			</div>
		</li>
	<?php } ?>
</div>
