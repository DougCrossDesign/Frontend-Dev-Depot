<div class="modal hidden" id="signup-modal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
				<h3 class="modal-title">Please Sign Up - Example Modal</h3>
			</div> <!-- /.modal-header -->
			<div class="modal-body">
				<p>Your verification form goes here, or whatever you like. Example input below.</p>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>
				<div class="col-wrap input-group">
					<input type="text" placeholder="First Name" class="col col1-2">
					<input type="text" placeholder="Last Name" class="col col1-2">
				</div>
				<div class="col-wrap input-group">
					<input type="email" placeholder="Email Address" class="col">
				</div>
			</div> <!-- /.modal-body -->
			<div class="modal-footer">
				<button id="nothanks" class="close btn btn-notify" data-dismiss="modal" aria-hidden="true">Don't Show Me This Again</button>
				<button id="subscribe" class="close btn btn-primary" data-dismiss="modal" aria-hidden="true">Subscribe</button>
			</div> <!-- /.modal-footer -->
		</div> <!-- /.modal-content -->
	</div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->



<!-- Erase Cookie Button (for demo only) -->
<button id="erase-cookie" class="btn btn-notify">Erase Cookie</button>
<script>
(function() {
	var eraseCookieBtn = document.getElementById('erase-cookie');
	if(eraseCookieBtn) {
		eraseCookieBtn.addEventListener('click', function() {
			cookieHelper.eraseCookie('warning');
		}, false);
	}
})();
</script>
