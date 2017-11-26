<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Video List</h2>
<?php } ?>

<div class="video-list-yt">
	<div class="video-list-player eqheight" id="video-list-replacer">
		<iframe width="100%" height="100%" src="https://www.youtube.com/embed/mEoN_Xe-B-s?rel=0" frameborder="0" allowfullscreen ></iframe>
	</div>
	<div class="video-list-select eqheight">
		<ul>
			<?php for ($i=0; $i < 10; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
				<li>
					<a class="video-list-select-trigger" href="mEoN_Xe-B-s">
						Title of video
					</a>
				</li>
			<?php } ?>
		</ul>
	</div>
</div>
