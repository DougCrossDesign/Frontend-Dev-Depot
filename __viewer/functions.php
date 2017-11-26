<?php
	error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

	function insertPartial($partialName, $layoutName = "default", $obj = null, $wrap = null){
		$partialName = strtolower($partialName);
		$file = "partials/".$partialName."/".$layoutName.".tpl.php";
		include($file);
	}

	function insertSnippet($snippetName, $layoutName = "default", $obj = null, $wrap = null){
		$snippetName = strtolower($snippetName);
		$file = "snippets/".$snippetName."/".$layoutName.".tpl.php";
		include($file);
	}

	function showPartialDp($partialName){
		$file = "partials/".$partialName."/config.php";
		if(file_exists($file)){
			$required = null;
			include($file);
			if(count($required) > 0){
				$out = "<h2 class=btm-margin-sm>Required Plugins:</h2>";
				foreach ($required as &$req) {
					$out .= "<a class='btn small' href='plugin.php?plugin=".$req."'>".$req."</a> ";
				}
				print($out."<hr>");
			}
		}
	}

	function showSnippetDp($snippetName){
		$file = "snippets/".$snippetName."/config.php";
		if(file_exists($file)){
			$required = null;
			include($file);
			if(count($required) > 0){
				$out = "<h2 class=btm-margin-sm>Required Plugins:</h2>";
				foreach ($required as &$req) {
					$out .= "<a class='btn small' href='plugin.php?plugin=".$req."'>".$req."</a> ";
				}
				print($out."<hr>");
			}
		}
	}

	function insertPartialDp($partialName){
		$file = "partials/".$partialName."/config.php";
		if(file_exists($file)){
			$required = null;
			$iconsets = null;
			include($file);
			if(count($required) > 0){
				$styles = "";
				foreach ($required as $req) {
					$stf = "plugins/".$req."/style.css";
					if( file_exists($stf) ){
						$styles .= "<link rel='stylesheet' href='".$stf."'>";
					}
				}
				print($styles);
			}
			if(count($iconsets) > 0){
				$iconsout = "";
				foreach ($iconsets as $icn) {
				    $icnf = "iconsets/".$icn."/style.css";
				    if( file_exists($icnf) ){
				     	$iconsout .= "<link rel='stylesheet' href='".$icnf."'>";
				    }
				}
				print($iconsout);
			}
		}
	}

	function insertSnippetDp($snippetName){
		$file = "snippets/".$snippetName."/config.php";
		if(file_exists($file)){
			$required = null;
			$iconsets = null;
			include($file);
			if(count($required) > 0){
				$styles = "";
				foreach ($required as $req) {
					$stf = "plugins/".$req."/style.css";
					if( file_exists($stf) ){
						$styles .= "<link rel='stylesheet' href='".$stf."'>";
					}
				}
				print($styles);
			}
			if(count($iconsets) > 0){
				$iconsout = "";
				foreach ($iconsets as $icn) {
					$icnf = "iconsets/".$icn."/style.css";
					if( file_exists($icnf) ){
						$iconsout .= "<link rel='stylesheet' href='".$icnf."'>";
					}
				}
				print($iconsout);
			}
		}
	}

	function insertModuleDp($moduleName){
		$file = "modules/".$moduleName."/config.php";
		if(file_exists($file)){
			$required = null;
			$iconsets = null;
			include($file);
			if(count($required) > 0){
				$styles = "";
				foreach ($required as $req) {
					$stf = "plugins/".$req."/style.css";
					if( file_exists($stf) ){
						$styles .= "<link rel='stylesheet' href='".$stf."'>";
					}
				}
				print($styles);
			}
			if(count($iconsets) > 0){
				$iconsout = "";
				foreach ($iconsets as $icn) {
					$icnf = "iconsets/".$icn."/style.css";
					if( file_exists($icnf) ){
						$iconsout .= "<link rel='stylesheet' href='".$icnf."'>";
					}
				}
				print($iconsout);
			}
		}
	}

	function printModuleLinks(){
		$modules = array_filter(glob('modules/*'), 'is_dir');
		foreach ($modules as $part) {
			$confile = $part."/config.php";
			$t = str_replace("modules/", '', $part);
			if( file_exists($confile) ){
				$layouts = null;
				include($confile);
				if(count($layouts) > 0){
					$out = "<div style='padding:5px 0px 5px 0px'><div class='partial_wlayouts'>".$name."</div><div class='lsubmenu'>";
					foreach ($layouts as $layout) {
						$out .= "<a class='' href=modules.php?module=".$t."&page=".$layout.">".$layout."</a> ";
					}
					$out .= "</div></div>";
					print($out);
				} else {
					$out = "layouts required";
					print($out);
				}
			} else {

			}
		}
	}

	function printPartialsLinks(){
		$partials = array_filter(glob('partials/*'), 'is_dir');
		foreach ($partials as $part) {
			$confile = $part."/config.php";
			$t = str_replace("partials/", '', $part);
			if( file_exists($confile) ){
				$layouts = null;
				$name = null;
				include($confile);
				if(!$name){$name=$t;}
				if(count($layouts) > 0){
					$out = "<div style='padding:5px 0px 5px 0px'><div class='partial_wlayouts'>".$name."</div><div class='lsubmenu'>";
					foreach ($layouts as $layout) {
						$out .= "<a class='' href=partial.php?partial=".$t."&layout=".$layout.">".$layout."</a> ";
					}
					$out .= "</div></div>";
					print($out);
				} else {
					$out = "<a class='' href=partial.php?partial=".$t.">".$name."</a> ";
					print($out);
				}
			} else {
				$out = "<a class='' href=partial.php?partial=".$t.">".$name."</a> ";
				print($out);
			}
		}
	}

	function printPluginLinks(){
		$plugins = array_filter(glob('plugins/*'), 'is_dir');
		foreach ($plugins as $part) {
			$confile = $part."/config.php";
			$t = str_replace("plugins/", '', $part);
			if(file_exists($confile) ){
				include($confile);
				if(!$name){$name=$t;}
			}
			$out = "<a class='' href=plugin.php?plugin=".$t.">".$name."</a> ";
			print($out);
		}
	}

	function printSnippetsLinks(){
		$snippets = array_filter(glob('snippets/*'), 'is_dir');
		foreach ($snippets as $snippet) {
			$confile = $snippet."/config.php";
			$t = str_replace("snippets/", '', $snippet);
			if( file_exists($confile) ){
				$layouts = null;
				$name = null;
				include($confile);
				if(!$name){$name=$t;}
				if(count($layouts) > 0){
					$out = "<div style='padding:5px 0px 5px 0px'><div class='partial_wlayouts'>".$name."</div><div class='lsubmenu'>";
					foreach ($layouts as $layout) {
						$out .= "<a class='' href=snippet.php?snippet=".$t."&layout=".$layout.">".$layout."</a> ";
					}
					$out .= "</div></div>";
					print($out);
				} else {
					$out = "<a class='' href=snippet.php?snippet=".$t.">".$name."</a> ";
					print($out);
				}
			} else {
				$out = "<a class='' href=snippet.php?snippet=".$t.">".$name."</a> ";
				print($out);
			}
		}
	}

	function printExpLinks(){
		$exp = array_filter(glob('experiments/*'), 'is_dir');
		foreach ($exp as $part) {
			$t = str_replace("experiments/", '', $part);
			$out = "<a class='' href=experiments.php?exp=".$t.">".$t."</a> ";
			print($out);
		}
	}

	function insertImage($imagefile){
		$outfile = "core/themes/site/assets/images/".$imagefile;
		print($outfile);
	}

?>
