<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Accordion W/ Complex Content</h2>
<?php } ?>

<div class='accordion clearfix btm-margin-lg'>
	<?php for ($i=0; $i < 3; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
		<div class="accordion-cont">
			<div class="accordion-toggle">
				<span class="accordion-title">Accordion Complex Title</span>
				<div class="accordion-icon-wrap"><span class="aycicon-down_arrow icons accordion-icon"></span></div>
			</div>
			<div class="accordion-content">
				<div class="col-space4 col-auto-md clearfix">
					<div class="col1-3 col">
						<img src="http://placehold.it/350x350" class="fluid-img btm-margin" alt="Photo" />
					</div>
					<div class="col2-3 col">
						<h2 class="hdr2">Title</h2>
						<h3 class="hdr3 btm-margin-sm">Supporting Text Highlight</h3>
						<div class="entry-content btm-margin">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum vehicula eros, sed dignissim justo egestas ut. Mauris ex nisl, pharetra quis sem laoreet, maximus ultricies velit. Donec diam neque, imperdiet eget faucibus nec, vulputate vel nisi. Nam ut enim nec leo interdum viverra vel eu lectus. Mauris quis nisl purus. Morbi blandit tellus ut magna consectetur, at volutpat lorem ultrices.</p>
							<p>Pharetra quis sem laoreet, maximus ultricies velit. Donec diam neque, imperdiet eget faucibus nec, vulputate vel nisi. Nam ut enim nec leo interdum viverra vel eu lectus. Mauris quis nisl purus. Morbi blandit tellus ut magna consectetur, at volutpat lorem ultrices.</p>
						</div>
						<a href="#button" class="btn small">Button</a>
					</div>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
