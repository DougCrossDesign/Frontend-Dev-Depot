<?php include '__viewer/functions.php';?>
<?php 
	$partial = htmlspecialchars($_GET["partial"]);
	$layout = htmlspecialchars($_GET["layout"]);
	if(!$layout){
		$layout = "default";
	}
	$confile = "partials/".$partial."/config.php";		
	if( file_exists($confile) ){				
		include($confile);	
		$partialnotes = "partials/".$partial."/notes.txt";		
	}
?>
<?php include '__viewer/includes/head.php';?>
<?php insertPartialDp("$partial"); ?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<div class="lmenu">	
	<h3>Frontend Partials</h3>
	<hr>
	<?php printPartialsLinks();?>
	<br>
	<a href="/"><strong>home</strong></a>
</div>

<div class="content"> 
	<?php if($partial){ ?>
	<div class="wrap-lg wrap-pad wrap-vpad bg-white comp-sdw" style="<?php if($expstyle){print($expstyle);} ?>">
		<div class="comp-info">
			<?php print("<div style='font-size:26px;margin-bottom:5px;'><strong>Partial : </strong> <span>".$partial."</span><strong>Layout: </strong> <span>".$layout."</span><strong>Ver: </strong> <span>".$version."</span></div>"); ?>
		</div>
		<hr>
		<div>
			<?php insertPartial("$partial","$layout"); ?>	
			<hr>	
		</div>	
		<?php showPartialDp("$partial"); ?>
		<?php if(file_exists($partialnotes)){ ?>
			<h3 class="hdr4">Input Types, Limits, and Notes:</h3>
			<pre class="code">
				<code class="Markdown"><?php echo htmlspecialchars( file_get_contents($partialnotes)); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('partials/'.$partial.'/'.$layout.'.scss')){ ?>
			<h3 class="hdr4">SCSS:</h3>
			<pre class="code codel">
				<code class="css"><?php echo htmlspecialchars( file_get_contents('partials/'.$partial.'/'.$layout.'.scss')); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('partials/'.$partial.'/'.$layout.'.js')){ ?>
			<h3 class="hdr4">JS:</h3>
			<pre class="code codel">
				<code class="js"><?php echo htmlspecialchars( file_get_contents('partials/'.$partial.'/'.$layout.'.js')); ?></code>
			</pre>
		<?php } ?>

		<?php if(file_exists('partials/'.$partial.'/'.$layout.'.tpl.php')){ ?>
			<h3 class="hdr4">PHP:</h3>
			<pre class="code codel">
				<code class="html"><?php echo htmlspecialchars( file_get_contents('partials/'.$partial.'/'.$layout.'.tpl.php')); ?></code>
			</pre>
		<?php } ?>
		
	</div>
	<?php } else { ?> 		
		<!-- No Partial Selected -->
	<?php } ?>

</div>

<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>