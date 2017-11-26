<?php
	//Example Content
	$obj-> hero_slick = array(
		array(
			"lg" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"md" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"sm" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"title" => "Hero Header",
			"byline" => "Supporting Text Line",
			"description" => "Hero Body Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dolor erat, sit amet porttitor purus venenatis vel. Sed vehicula lacus velit, in pretium ligula rutrum sed. Nam eget nibh at erat malesuada ornare.",
			"btn_text" => "More Info",
			"btn_link" => "#link",
			"buy_text" => "Buy Tickets",
			"buy_link" => "#link"
		),
		array(
			"lg" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"md" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"sm" => "/themes/site/assets/images/hero-slick-slide2.jpg",
			"title" => "Hero Header 2",
			"byline" => "Supporting Text Line",
			"description" => "Hero Body Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dolor erat, sit amet porttitor purus venenatis vel. Sed vehicula lacus velit, in pretium ligula rutrum sed. Nam eget nibh at erat malesuada ornare.",
			"btn_text" => "More Info",
			"btn_link" => "#link",
			"buy_text" => "Buy Tickets",
			"buy_link" => "#link"
		)
	);

	// Hero Slider Images (desktop, tablet, mobile)
	$hslider_lg = '';
	$hslider_md = '';
	$hslider_sm = '';

	$num = 0;
	foreach ($obj-> hero_slick as $num => $slide) {
		$num = $num + 1; // start at "1" now
		$hslider_lg .= "\n" . '.hero-wide .slide'. $num .'{background-image: url("'. $slide['lg'] .'");}';
		$hslider_md .= "\n" . '.hero-wide .slide'. $num .'{background-image: url("'. $slide['md'] .'");}';
		$hslider_sm .= "\n" . '.hero-wide .slide'. $num .'{background-image: url("'. $slide['sm'] .'");}';
	}
	echo '
		<!-- Hero Slider Images -->
		<style>
			@media screen and (min-width : 961px) { '
				. $hslider_lg .
			'}
			@media screen and (max-width : 960px) { '
				. $hslider_md .
			'}
			@media screen and (max-width : 700px) { '
				. $hslider_sm .
			'}
		</style>
		<!--[if lte IE 8]>
			<style>'
				. $hslider_lg .
			'</style>
		<![endif]-->
	';
?>

<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Hero - Wide</h2>
<?php } ?>

<div class="hero-wide slick-slider">
	<?php foreach ($obj-> hero_slick as $num => $slide) { ?>
		<?php ###  Slide Background Image 2000x500 default size #### ?>
		<div class="slick-slide slide<?php echo $num + 1; ?>">
			<div class="hero-wide-overlay">

				<div class="hero-slick-content vcenter2 center">
					<?php ###  Simple Text Box - Hide Row If No Entry #### ?>
					<div class="hero-hdr upper"><?php echo $slide['title'] ?></div>

					<?php ###  Simple Text Box - Hide Row If No Entry#### ?>
					<div class="hero-byline"><?php echo $slide['byline'] ?></div>

					<?php ###  Simple Area Text Box - Hide Row If No Entry#### ?>
					<p class="hero-text"><?php echo $slide['description'] ?></p>

					<?php ###  Href - Btn Text - Open New Window (y/n) - Hide Row If No Entry #### ?>
					<a href="<?php echo $slide['btn_link'] ?>" class="btn hero-btn"><?php echo $slide['btn_text'] ?></a>
				</div>

			</div>
		</div>
	<?php } ?>
</div>
