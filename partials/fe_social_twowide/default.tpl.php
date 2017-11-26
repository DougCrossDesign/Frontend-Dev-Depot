<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Social Tabs - Two Wide</h2>
<?php } ?>

<div class="social-feed-twowide">

	<a class="sf-button sf-twitter sf-active" href="#sf-twitter" title="Twitter">
		<span class="aycicon-twitter icon vcenter2"></span>
	</a>

	<a class="sf-button sf-facebook" href="#sf-facebook" title="Facebook">
		<span class="aycicon-facebook icon vcenter2"></span></a>
	</a>

	<div class="sf-content">
		<article id="sf-twitter" class="sf-item sf-active">
			<div class="twitter-feed">
				<?php
				$aycsocurl = "http://www.socialassets.aycmedia.com/api/twitter.php?user=1&count=1";
				$aycsoccontent = file_get_contents($aycsocurl);
				$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
				echo($aycsoccontent);
				?>
			</div>
		</article>

		<article id="sf-facebook" class="sf-item">
			<div class="facebook-feed">
				<?php
				$aycsocurl = "http://www.socialassets.aycmedia.com/api/facebook.php?user=1&count=1";
				$aycsoccontent = file_get_contents($aycsocurl);
				$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
				echo($aycsoccontent);
				?>
			</div>
		</article>
	</div>

</div>
