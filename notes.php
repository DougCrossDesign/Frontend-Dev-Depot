<?php include '__viewer/functions.php';?>
<?php include '__viewer/includes/head.php';?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<div class="content" style="width:100%; margin:0px;">
	<div class="wrap-lg wrap-pad wrap-vpad bg-white comp-sdw" style="<?php if($expstyle){print($expstyle);} ?>">

	<?php
		$notes = array_filter(glob('notes/*'));
		foreach ($notes as $part) {
			$t = str_replace("notes/", '', $part);
			$t = str_replace(".txt", '', $t);
	?>
		<h3 class="hdr4"><?php echo $t; ?></h3>
		<pre class="code">
			<code class="Markdown"><?php echo htmlspecialchars( file_get_contents($part)); ?></code>
		</pre>
		<hr>
	<?php
		}
	?>

	</div>
</div>

<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>
