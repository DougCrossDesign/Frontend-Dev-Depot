<?php include '__viewer/functions.php';?>

<?php 
	$module = htmlspecialchars($_GET["module"]);
	$page = htmlspecialchars($_GET["page"]);
	$confile = "modules/".$module."/config.php";		
	if( file_exists($confile) ){				
		include($confile);
		$moduleExp = "modules/".$module."/".$page.".php";
		$moduleJs = "modules/".$module."/".$page.".js";
		$modulenotes = "modules/".$module."/notes.txt";
	} 
?>

<?php include '__viewer/includes/head.php';?>
<?php insertModuleDp("$module"); ?>
<?php include '__viewer/includes/head2.php';?>

<link rel="stylesheet" href="__viewer/highlight/styles/monokai-sublime.css">
<script src="__viewer/highlight/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<div class="lmenu">
	<h3>Modules</h3>
	<hr>
	<?php printModuleLinks();?>
	<br>
	<a href="/"><strong>home</strong></a>
</div>

<?php if($module){ ?>
<div class="content"> 
	<div class="wrap-lg wrap-pad wrap-vpad bg-white comp-sdw" style="<?php if($expstyle){print($expstyle);} ?>">
	<?php include($moduleExp); ?>

	<?php if(file_exists($modulenotes)){ ?>
		<hr>
		<h3 class="hdr4">Notes:</h3>
		<pre class="code">
			<code class="Markdown"><?php echo htmlspecialchars( file_get_contents($modulenotes)); ?></code>
		</pre>
	<?php } ?>

	</div>	
</div>
<?php } ?>

<?php include '__viewer/includes/footer.php';?>
<?php if(file_exists($moduleJs)){ ?>
<script>
$(function(){
	<?php include($moduleJs); ?>
});
</script>
<?php } ?>
<?php include '__viewer/includes/footer_close.php';?>