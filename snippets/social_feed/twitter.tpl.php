<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Twitter Feed</h2>
<?php } ?>

<div class="twitter-feed-example">
	<?php
		$aycsocurl = "http://www.socialassets.aycmedia.com/api/twitter.php?user=1&count=3";
		$aycsoccontent = file_get_contents($aycsocurl);
		$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
		echo($aycsoccontent);
	?>
</div>
