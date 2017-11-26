<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin">Social Tabs</h2>
<?php } ?>

<div class="social-tabs">
	<div id="social-tabs" class="tabs-area">

		<nav class="tabs-nav">
			<ul>
				<li><a href="#sct-tab1" title="Tab 1"><span class="aycicon-twitter icon"></span></a></li>
				<li><a href="#sct-tab2" title="Tab 2"><span class="aycicon-facebook icon"></span></a></li>
			</ul>
		</nav>

		<div class="tabs-content">
			<!-- Tab 1 -->
			<article id="sct-tab1" class="tab-sct">
				<div class="twitter-feed">
					<?php
					$aycsocurl = "http://www.socialassets.aycmedia.com/api/twitter.php?user=1&count=1";
					$aycsoccontent = file_get_contents($aycsocurl);
					$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
					echo($aycsoccontent);
					?>
				</div>
			</article>

			<!-- Tab 2 -->
			<article id="sct-tab2" class="tab-sct">
				<div class="facebook-feed">
					<?php
					$aycsocurl = "http://www.socialassets.aycmedia.com/api/facebook.php?user=1&count=1";
					$aycsoccontent = file_get_contents($aycsocurl);
					$aycsoccontent = mb_convert_encoding($aycsoccontent, 'HTML-ENTITIES', "UTF-8");
					echo($aycsoccontent);
					?>
				</div>
			</article>
		</div> <!-- END .tabs-content -->

	</div> <!-- END .tabs-area -->
</div>
