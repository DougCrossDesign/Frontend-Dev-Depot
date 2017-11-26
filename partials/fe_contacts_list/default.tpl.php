
<?php ### Optional Header ### ?>
<?php if(true){ ?>
	<h2 class="hdr3 c1 btm-margin-sm">Contacts List</h2>
<?php } ?>

<div class="contacts-list btm-margin-xlg">
	<h2 class="center hdr2 upper btm-margin">Contacts</h2>
	<div class="contacts-list-hr"></div>
	<div class="contacts-list-desc entry-content center">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nunc a tellus consectetur tincidunt in eget risus. In lacinia nisl a luctus faucibus. Nam at varius sem. Morbi cursus sed ligula ac vestibulum. Duis ac egestas ante. Fusce non pharetra magna. Aenean tortor arcu, porttitor a nisi lacinia, tempor molestie orci.</p>
	</div>
</div>

<div class="contacts-list-bios">
	<ul class="col-space5 col-auto-md col-vsp-xlg clearfix">
		<?php for ($i=0; $i < 4; $i++) { // FRONTEND FOR EXAMPLE LOOP -- REPLACE ?>
			<!-- Contact -->
			<li class="col1-2 col eqheight clearfix">
				<div class="contacts-list-bios-img">
					<img src="http://placehold.it/350x350" alt="Persons Name" />
				</div>
				<div class="contacts-list-bios-cont">
					<div>
						<div class="contacts-list-bios-name">Name of person</div>
						<div class="contacts-list-bios-subt">Title of person</div>
						<div class="contacts-list-bios-cr">
							<div class="contacts-list-bios-c1">(800) 123-4567</div>
							<div class="contacts-list-bios-c2"><a href="mailto:info@email.com">info@email.com</a></div>
						</div>
					</div>
				</div>
			</li>
		<?php } ?>
	</ul>
</div>
