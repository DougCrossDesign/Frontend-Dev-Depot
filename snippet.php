<?php include '__viewer/functions.php';?>
<?php
	$snippet = htmlspecialchars($_GET["snippet"]);
	$layout = htmlspecialchars($_GET["layout"]);
	if(!$layout){
		$layout = "default";
	}
	$confile = "snippets/".$snippet."/config.php";
	if( file_exists($confile) ){
		include($confile);
		$snippetnotes = "snippets/".$snippet."/notes.txt";
	}
?>
<?php include '__viewer/includes/head.php';?>
<?php insertSnippetDp("$snippet"); ?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<div class="lmenu">
	<h3>Snippets</h3>
	<hr>
	<?php printSnippetsLinks();?>
	<br>
	<a href="/"><strong>home</strong></a>
</div>

<div class="content">
	<?php if($snippet){ ?>
	<div class="wrap-lg wrap-pad wrap-vpad bg-white comp-sdw" style="<?php if($expstyle){print($expstyle);} ?>">
		<div class="comp-info">
			<?php print("<div style='font-size:26px;margin-bottom:5px;'><strong>Snippet : </strong> <span>".$snippet."</span><strong>Layout: </strong> <span>".$layout."</span><strong>Ver: </strong> <span>".$version."</span></div>"); ?>
		</div>
		<hr>
		<div>
			<?php insertSnippet("$snippet","$layout"); ?>
			<hr>
		</div>
		<?php showSnippetDp("$snippet"); ?>
		<?php if(file_exists($snippetnotes)){ ?>
			<h3 class="hdr4">Input Types, Limits, and Notes:</h3>
			<pre class="code">
				<code class="Markdown"><?php echo htmlspecialchars( file_get_contents($snippetnotes)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('snippets/'.$snippet.'/'.$layout.'.scss')){ ?>
			<h3 class="hdr4">SCSS:</h3>
			<pre class="code codel">
				<code class="css"><?php echo htmlspecialchars( file_get_contents('snippets/'.$snippet.'/'.$layout.'.scss')); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('snippets/'.$snippet.'/'.$layout.'.js')){ ?>
			<h3 class="hdr4">JS:</h3>
			<pre class="code codel">
				<code class="js"><?php echo htmlspecialchars( file_get_contents('snippets/'.$snippet.'/'.$layout.'.js')); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('snippets/'.$snippet.'/'.$layout.'.tpl.php')){ ?>
			<h3 class="hdr4">PHP:</h3>
			<pre class="code codel">
				<code class="html"><?php echo htmlspecialchars( file_get_contents('snippets/'.$snippet.'/'.$layout.'.tpl.php')); ?></code>
			</pre>
		<?php } ?>

	</div>
	<?php } else { ?>
		<!-- No Snippet Selected -->
	<?php } ?>

</div>

<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>
