<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Images : Row w/ Slide and Click</h2>
<?php } ?>

<div class="images-slider-multi-wrap">
	<div class="images-slider-multi">
		<?php for ($i=0; $i < 5; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
			<div class="images-row-item">
				<a href="<?php insertImage("fullsized.jpg") ?>" class="cbox_group1"><img src="http://placehold.it/350x350" class="fluid-img" alt="Photo" /></a>
			</div>
		<?php } ?>
	</div>
</div>
