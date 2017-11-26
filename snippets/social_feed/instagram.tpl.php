<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Instagram Feed</h2>
<?php } ?>

<div class="instagram-feed-example">
	<div class="instagram-feed">
		<ul>
			<?php
				$aycsocurl = "http://www.socialassets.aycmedia.com/api/instagram.php?user=5&count=25&resolution=thumbnail";
				$aycsoccontent = file_get_contents($aycsocurl);
				$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
				echo($aycsoccontent);
			?>
		</ul>
	</div>
</div>
