<!-- Dropdown -->
<!-- w/ability to change title -->
<h3 class="gallery-title btm-margin-sm">No Title</h3>

<div class="dpdwn clearfix" data-title=".gallery-title">
	<div class="dpdwn-btn">Sort by Type</div>
	<div class="dpdwn-list">
		<a href="#Test" title="Sort by Test" data-title="Test">Test</a>
		<?php for ($i=0; $i < 8; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
			<a href="#<?php echo $i + 1; ?>" title="Sort by Page <?php echo $i + 1; ?>" data-title="Page <?php echo $i + 1; ?>">Page <?php echo $i + 1; ?></a>
		<?php } ?>
	</div>
</div>