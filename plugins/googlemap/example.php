<!-- Google Map (single) -->
<h3 class="hdr3 red btm-margin-sm">Single Location</h3>
<div id="gmap-single" class="gmap"></div>
<br>
<!-- Send User to Google Maps, or open up App -->
<form class="center" action="//maps.google.com/maps" method="get" target="new">
	<input type="hidden" name="daddr" value="1100 Hector St Conshohocken PA 19428">
	<input type="hidden" name="hl" value="en">
	<label for="saddr">Enter in <em>your address</em> to get door-to-door directions.</label>
	<p class="directions-submit clearfix">
		<input class="input" type="text" name="saddr" id="saddr" placeholder="Enter Your Address">
		<input class="submit" type="submit" value="GO">
	</p>
</form>

<hr>

<!-- Google Map (multiple) -->
<h3 class="hdr3 red btm-margin-sm">Multiple Locations</h3>
<div id="gmap-multiple" class="gmap"></div>


<!-- GOOGLE MAPS API - (include in footer of specific page) -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?<?php /* key=INSERT_KEY */?>"></script>