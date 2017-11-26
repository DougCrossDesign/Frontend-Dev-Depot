$(function(){	
	// Init - more/less chars
	$('.moreless-chars').moreLessChars({
		showChar: 60, // character limit to cut at
		septext: "...", // separator at end of abbreviated text
		moretext: "Read More", // inactive state text
		lesstext: "Read Less" // active state text
	});
});