
<?php include '__viewer/includes/head.php';?>
<?php include '__viewer/includes/head2.php';?>
<?php include '__viewer/includes/nav.php';?>

<div class="content"> 
	<div class="wrap-lg wrap-pad wrap-vpad style-guide bg-white comp-sdw">
	
		<!-- Flex Cols w/ Break on Mobile -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Individually Set Width Columns with Auto Responsive Stacking (Mobile) -> vars.scss -> core:layouts</h2>
			<div class="col-space1 col-vsp-sm col-auto-sm col-pad-sm col-example clearfix">
				<div class="col1-2 col">
					.col1-2
				</div>
				<div class="col1-2 col">
					.col1-2
				</div>

				<div class="col1-3 col">
					.col1-3
				</div>
				<div class="col1-3 col">
					.col1-3
				</div>
				<div class="col1-3 col">
					.col1-3
				</div>	

				<div class="col1-4 col">
					.col1-4
				</div>
				<div class="col1-4 col">
					.col1-4
				</div>
				<div class="col1-4 col">
					.col1-4
				</div>
				<div class="col1-4 col">
					.col1-4
				</div>	

				<div class="col1-5 col">
					.col1-5
				</div>
				<div class="col1-5 col">
					.col1-5
				</div>
				<div class="col1-5 col">
					.col1-5
				</div>
				<div class="col1-5 col">
					.col1-5
				</div>
				<div class="col1-5 col">
					.col1-5
				</div>	

				<div class="col2-3 col">
					.col2-3
				</div>
				<div class="col1-3 col">
					.col1-3
				</div>

				<div class="col1-4 col">
					.col1-4
				</div>					
				<div class="col1-4 col">
					.col1-4
				</div>
				<div class="col1-2 col">
					.col1-2
				</div>

				<div class="col3-4 col">
					.col3-4
				</div>
				<div class="col1-4 col">
					.col1-4
				</div>

				<div class="col1-5 col">
					.col1-5
				</div>
				<div class="col4-5 col">
					.co4-5
				</div>

				<div class="col2-5 col">
					.col2-5
				</div>
				<div class="col3-5 col">
					.col3-5
				</div>

				<div class="col">
					Full Width
				</div>
			</div>
		</div>

		<!-- Equal Width Columns With Auto Responsive Breaks (5-4-3-2-1) -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Equal Width Columns With Auto Responsive Breaks (5-4-3-2-1)  -> vars.scss -> core:layouts</h2>
			<div class="auto-5-4-3-2-1 col-space1 col-example col-vsp-sm col-pad-sm clearfix">					
				<?php for ($i=0; $i < 10; $i++) { ?>
				<div class="col">
					Auto (5-4-3-2-1)
				</div>	
				<?php } ?>
			</div>
		</div>

		<!-- Equal Width Columns With Auto Responsive Breaks (4-3-2-1) -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Equal Width Columns With Auto Responsive Breaks (4-3-2-1)  -> vars.scss -> core:layouts</h2>
			<div class="auto-4-3-2-1 col-space1 col-example col-vsp-sm col-pad-sm clearfix">
				<?php for ($i=0; $i < 8; $i++) { ?>
				<div class="col">
					Auto (4-3-2-1)
				</div>
				<?php } ?>
			</div>
		</div>

		<!-- Equal Width Columns With Auto Responsive Breaks (4-2) -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Equal Width Columns With Auto Responsive Breaks (4-2)  -> vars.scss -> core:layouts</h2>
			<div class="auto-4-2 col-space1 col-example col-vsp-sm col-pad-sm clearfix">					
				<?php for ($i=0; $i < 8; $i++) { ?>
				<div class="col">
					Auto (4-2)
				</div>
				<?php } ?>		
			</div>
		</div>

		<!-- Equal Width Columns With Auto Responsive Breaks (3-2) -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Equal Width Columns With Auto Responsive Breaks (3-2)  -> vars.scss -> core:layouts</h2>
			<div class="auto-3-2 col-space1 col-example col-vsp-sm col-pad-sm clearfix">					
				<?php for ($i=0; $i < 6; $i++) { ?>
				<div class="col">
					Auto (3-2)
				</div>
				<?php } ?>		
			</div>
		</div>

		<!-- Equal Width Columns With Auto Responsive Breaks (3-2-1) -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Equal Width Columns With Auto Responsive Breaks (3-2-1)  -> vars.scss -> core:layouts</h2>
			<div class="auto-3-2-1 col-space1 col-example col-vsp-sm col-pad-sm clearfix">					
				<?php for ($i=0; $i < 6; $i++) { ?>
				<div class="col">
					Auto (3-2-1)
				</div>
				<?php } ?>		
			</div>
		</div>

		
	</div>
 </div>
<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>