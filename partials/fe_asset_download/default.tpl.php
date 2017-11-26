<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Assets Gallery / Download</h2>
<?php } ?>

<div class="col-space4 auto-3-2-1 col-vsp-lg btm-margin-lg clearfix">
	<?php for ($c=0; $c < 3; $c++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div class="col1-3 col">
			<div class="asset-dl-wrap">
				<a href="<?php insertImage("img_example.jpg") ?>" class="asset-dl-item cbox">
					<img class="fluid-img" src="http://placehold.it/350x350" alt="Photo" />
					<div class="overlay"><div class="vcenter2"><span class="aycicon-magnify icon"></span></div></div>
				</a>
				<div class="asset-dl-title btm-margin-sm">
					Title of Asset
				</div>
				<div class="asset-dl-download center">
					<a class="btn" href="test.pdf" title="Download Asset">Download Files</a>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
