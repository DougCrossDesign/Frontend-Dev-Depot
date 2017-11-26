<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Facebook Feed</h2>
<?php } ?>

<div class="facebook-feed-example">
	<?php
		$aycsocurl = "http://www.socialassets.aycmedia.com/api/facebook.php?user=1&count=2&resolution=low_resolution";
		$aycsoccontent = file_get_contents($aycsocurl);
		$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
		echo($aycsoccontent);
	?>
</div>
