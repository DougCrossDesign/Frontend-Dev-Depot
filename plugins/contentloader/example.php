<?php 
		// Album ID
		if (isset($_GET['album_id'])) {
			$album_id = $_GET['album_id'];
		} else {
			$album_id = 1;
		}
		?>
		<!-- Content Loader -->
		<div class="cl-area posr">
			<div class="loading-overlay"><span class="icon"><img src="<?php insertImage("loading.gif") ?>" class="fluid-img"></span></div>
			<!-- NOTE: use either the dropdown or the buttons/links. both are not needed -->
			<div class="clearfix">
				<div class="">
					<!-- Dropdown -->
					<select class="gallery-nav chosen-select" id="form_month" name="form_month">
						<!-- NOTE: change value to gallery URL on your site... e.g. /gallery.php?album_id=1 -->
						<option value="/gallery?album_id=1">Restaurant Photos</option>
						<option value="/gallery?album_id=2">St. Paddy's Day</option>
						<option value="/gallery?album_id=3">Octoberfest</option>
					</select>
				</div>
			</div>
			<br>
			<!-- Items to Load -->
			<div id="cl-items">
				<?php 
				switch ($album_id) {
					case 1:
						$count = 8;
						$album_title = 'Restaurant Photos';
						break;
					case 2:
						$count = 2;
						$album_title = 'St. Paddy\'s Day';
						break;
					case 3:
						$count = 1;
						$album_title = 'Octoberfest';
						break;
					default:
						$count = 8;
						$album_title = 'Restaurant Photos';
						break;
				} ?>
				<div class="auto-4-2 col-space3 col-vsp-md clearfix">
					<?php
					for ($i=0; $i < $count; $i++) { 
					?>
					<div class="col">
						<a class="cbox_group1" href="<?php insertImage('popup.png') ?>" title="Insert_your_caption"><img class="fluid-img" src="http://placehold.it/640x640/7bbddc/000000/" alt="Product" width="640" height="640"></a>
					</div>
					<?php } ?>
				</div>
			</div>
		</div><!-- END .cl-area -->
				