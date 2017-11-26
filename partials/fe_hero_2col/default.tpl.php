<?php
	//Example Content
	$obj-> hero_slick = array(
		array(
			"lg" => "http://placehold.it/950x611",
			"title" => "Hero Header",
			"byline" => "Supporting Text Line",
			"description" => "Hero Body Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dolor erat, sit amet porttitor purus venenatis vel. Sed vehicula lacus velit, in pretium ligula rutrum sed. Nam eget nibh at erat malesuada ornare.",
			"btn_text" => "More Info",
			"btn_link" => "#link",
		),
		array(
			"lg" => "http://placehold.it/950x611",
			"title" => "Hero Header 2",
			"byline" => "Supporting Text Line",
			"description" => "Hero Body Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dolor erat, sit amet porttitor purus venenatis vel. Sed vehicula lacus velit, in pretium ligula rutrum sed. Nam eget nibh at erat malesuada ornare.",
			"btn_text" => "More Info",
			"btn_link" => "#link",
		)
	);

	$hslider_lg = '';
	$hslider_md = '';

	$num = 0;
	foreach ($obj-> hero_slick as $num => $slide) {
		$num = $num + 1; // start at "1" now
		$hslider_lg .= "\n" . '.hero-2col .slide'. $num .'{background-image: url("'. $slide['lg'] .'");}';
	}
	echo '
		<!-- Hero Slider Images -->
		<style>'
			. $hslider_lg .
		'</style>
	';

?>

<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Hero - 2 Column</h2>
<?php } ?>

<div class="hero-2col-outer">
	<div class="wrap-xlg wrap-pad clearfix">
		<div class="hero-2col slick-slider">
			<?php foreach ($obj-> hero_slick as $num => $slide) { ?>
				<div class="slick-slide">

					<div class="hero-image slide<?php echo $num + 1; ?> eqheight"></div>

					<div class="hero-content eqheight">
						<div class="hero-center">
							<?php ###  Simple Text Box - Hide Row If No Entry #### ?>
							<div class="hero-hdr upper"><?php echo $slide['title'] ?></div>

							<?php ###  Simple Text Box - Hide Row If No Entry#### ?>
							<div class="hero-byline"><?php echo $slide['byline'] ?></div>

							<?php ###  Simple Area Text Box - Hide Row If No Entry#### ?>
							<p class="hero-text"><?php echo $slide['description'] ?></p>

							<?php ###  Href - Btn Text - Open New Window (y/n) - Hide Row If No Entry #### ?>
							<a href="<?php echo $slide['btn_link'] ?>" class="btn small hero-btn"><?php echo $slide['btn_text'] ?></a>
						</div>
					</div>

				</div>
			<?php } ?>
		</div>
	</div>
</div>
