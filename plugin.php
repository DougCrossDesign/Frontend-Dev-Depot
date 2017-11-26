<?php include '__viewer/functions.php';?>
<?php include '__viewer/includes/head.php';?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<?php
	$plugin = htmlspecialchars($_GET["plugin"]);
	$confile = "plugins/".$plugin."/config.php";
	if( file_exists($confile) ){
		include($confile);
		$pluginExp = "plugins/".$plugin."/example.php";
		$pluginCss = "plugins/".$plugin."/style.css";
		$pluginScss = "plugins/".$plugin."/style.scss";
		$pluginInit = "plugins/".$plugin."/init.js";
		$pluginnotes = "plugins/".$plugin."/notes.txt";
	}
?>
<div class="lmenu">
	<h3>Plugins</h3>
	<hr>
	<?php printPluginLinks();?>
	<br>
	<a href="/"><strong>home</strong></a>
</div>
<div class="content">

	<?php if($plugin){ ?>

	<div class="wrap-lg wrap-pad wrap-vpad bg-white comp-sdw" style="<?php if($expstyle){print($expstyle);} ?>">
		<div class="comp-info">
			<?php print("<div style='font-size:26px;margin-bottom:5px;'><strong>Plugin Name : </strong><span>".$name."</span><strong>Ver: </strong><span>".$version."</span></div>"); ?>
		</div>
		<?php if($desc){print("<span>".$desc."</span>");} ?>
		<hr>
		<?php include($pluginExp); ?>
		<hr>

		<?php if(file_exists($pluginnotes)){ ?>
			<h3 class="hdr4">Notes:</h3>
			<pre class="code">
				<code class="Markdown"><?php echo htmlspecialchars( file_get_contents($pluginnotes)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists($pluginExp)){ ?>
			<h3 class="hdr4">PHP / HTML Example:</h3>
			<pre class="code">
				<code class="html"><?php echo htmlspecialchars( file_get_contents($pluginExp)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists($pluginCss)){ ?>
			<h3 class="hdr4">CSS (Copy to your plugins.scss)</h3>
			<pre class="code">
				<code class="css"><?php echo htmlspecialchars( file_get_contents($pluginCss)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists($pluginScss)){ ?>
			<h3 class="hdr4">SCSS (will be included in grunt build)</h3>
			<pre class="code">
				<code class="css"><?php echo htmlspecialchars( file_get_contents($pluginScss)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists($pluginInit)){ ?>
			<h3 class="hdr4">Init: (add to theme/assets/js/init.js</h3>
			<pre class="code">
				<code class="js"><?php echo htmlspecialchars( file_get_contents($pluginInit)); ?></code>
			</pre>
		<?php } ?>

		<?php
			foreach ($pluginfiles as $pfile) {
				$pf = "plugins/".$plugin."/".$pfile;
		?>
			<h3 class="hdr4">Plugin File : <?php print($pfile); ?> (copy to theme/assets/js/plugins/)</h3>
			<pre class="code">
				<code class="js"><?php echo htmlspecialchars( file_get_contents($pf)); ?></code>
			</pre>
		<?php } ?>
		<hr>
	</div>
	<?php } else { ?>

	<?php } ?>
</div>

<?php if(file_exists($pluginCss)){ print("<link rel='stylesheet' href='".$pluginCss."'>"); } ?>
<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>
