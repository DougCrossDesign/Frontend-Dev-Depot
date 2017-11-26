<?php include '__viewer/functions.php';?>
<?php include '__viewer/includes/head.php';?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<?php
	$exp = htmlspecialchars($_GET["exp"]);
?>
<div class="lmenu">
	<h3>Experiments</h3>
	<hr>
	<?php printExpLinks();?>
	<br>
	<a href="/"><strong>home</strong></a>
</div>
<div class="content posr" style="padding:0px;">
	<?php if($exp) { ?>
	<iframe src="experiments/<?php echo $exp; ?>/" width="100%" height="100%"></iframe>
	<?php } ?>
</div>

<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>
