<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Media Gallery (Images or Youtube)</h2>
<?php } ?>

<div class="media-viewer-main">
	<?php for ($i=0; $i < 10; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div>
			<a class="cbox" href="http://placehold.it/1500x1200"><img src="http://placehold.it/1300x650?text=<?php echo $i ?>" class="fluid-img" alt="Photo" /></a>
			<!-- IMG OR IFRAME FOR VIDEO -->
		</div>
	<?php } ?>
</div>
<div class="media-viewer-thumbs btm-margin-lg">
	<?php for ($i=0; $i < 10; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div><img src="http://placehold.it/300x250?text=<?php echo $i ?>" class="fluid-img" alt="Photo" /></div>
	<?php } ?>
</div>
