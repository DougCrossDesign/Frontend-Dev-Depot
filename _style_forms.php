
<?php include '__viewer/includes/head.php';?>
<?php include '__viewer/includes/head2.php';?>
<?php include '__viewer/includes/nav.php';?>

<div class="content">
	<div class="wrap-lg wrap-pad wrap-vpad style-guide bg-white comp-sdw">

		<!-- Forms -->
		<div class="btm-margin-lg">
			<h2 class="hdr">Default Forms -> forms.scss</h2>
			<form id="example1" action="#action" class="col-space2 col-auto-sm form-default clearfix">
				<ul>

					<li class="col col1-2 lbl-hint">
						<label for="form_fname">First Name</label>
						<input type="text" id="form_fname" name="form_fname" placeholder="First Name">
					</li>
					<li class="col col1-2 lbl-hint">
						<label for="form_lname">Last Name</label>
						<input type="text" id="form_lname" name="form_lname" placeholder="Last Name">
					</li>
					<li class="col lbl-hint">
						<label for="form_ex1">Example Full Width</label>
						<input type="text" id="form_ex1" name="form_ex1" placeholder="Example Full Width">
					</li>
					<li class="col lbl-hint">
						<label for="form_ex2">Required Field Example</label>
						<input type="text" id="form_ex2" name="form_ex2" placeholder="Required Field Example">
					</li>

					<li class="col lbl-hint col1-2">
						<label for="form_city">City</label>
						<input type="text" id="form_city" name="form_city" placeholder="City">
					</li>

					<li class="col lbl-hint col1-4">
						<label for="form_state">State Example</label>
						<select class="chosen-select" id="form_state" name="form_state" data-placeholder="Select a state...">
							<option value=""></option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
					</li>

					<li class="col lbl-hint col1-4">
						<label for="form_zip">Zip</label>
						<input type="text" id="form_zip" name="form_zip" placeholder="Zip">
					</li>

					<li class="col lbl-hint">
						<label for="form_comments">Comments</label>
						<textarea id="form_comments" name="form_comments" placeholder="Comments..."></textarea>
					</li>

					<li class="col">
						<hr>
					</li>

					<li class="col">
						<label for="">Upload a file</label>
						<input class="fileinput" type="file" id="form_upload_file1" name="form_upload_file1" data-fi-btn="Upload" data-fi-txtph="Upload File 1" />
						<br />
						<input class="fileinput" type="file" id="form_upload_file2" name="form_upload_file2" data-fi-btn="Upload" data-fi-txtph="Upload File 2" />
					</li>

					<li class="col">
						<hr>
					</li>

					<div class="col1-2 col">
						<label for="">Custom Radios</label>
						<label class="custom-chbx-lbl" for="form_cstm_radio4"><input class="custom-chbx" type="radio" id="form_cstm_radio4" name="form_cstm_radio2" data-chbx-ontxt="On" data-chbx-offtxt="Off"> Test Radio</label>
						<label class="custom-chbx-lbl" for="form_cstm_radio5"><input class="custom-chbx" type="radio" id="form_cstm_radio5" name="form_cstm_radio2" data-chbx-ontxt="On" data-chbx-offtxt="Off" checked="checked"> Another Radio</label>
						<label class="custom-chbx-lbl" for="form_cstm_radio6"><input class="custom-chbx" type="radio" id="form_cstm_radio6" name="form_cstm_radio2" data-chbx-ontxt="On" data-chbx-offtxt="Off"> Third Radio</label>
					</div>

					<li class="col1-2 col">
						<label for="">Custom Checkboxes</label>
						<label class="custom-chbx-lbl" for="form_cstm_chbx1"><input class="custom-chbx" type="checkbox" id="form_cstm_chbx1" name="form_cstm_chbx1" data-chbx-ontxt="On" data-chbx-offtxt="Off"> Test Checkbox</label>
						<label class="custom-chbx-lbl" for="form_cstm_chbx2"><input class="custom-chbx" type="checkbox" id="form_cstm_chbx2" name="form_cstm_chbx2" data-chbx-ontxt="On" data-chbx-offtxt="Off" checked="checked"> Another Checkbox</label>
					</li>

					<li class="col">
						<hr>
					</li>

					<div class="col1-2 col">
						<label for="">Custom Checkboxes</label>
						<label class="custom-chbx-lbl" for="form_cstm_chbx3"><input class="custom-chbx" type="checkbox" id="form_cstm_chbx3" name="form_cstm_chbx3"> Test Checkbox</label>
						<label class="custom-chbx-lbl" for="form_cstm_chbx4"><input class="custom-chbx" type="checkbox" id="form_cstm_chbx4" name="form_cstm_chbx4" checked="checked"> Another Checkbox</label>
					</div>

					<div class="col1-2 col">
						<label for="">Custom Radios (inline)</label>
						<label class="custom-chbx-lbl cstm-radio" for="form_cstm_radio1"><input class="custom-chbx" type="radio" id="form_cstm_radio1" name="form_cstm_radio1"> Test Radio</label>
						<label class="custom-chbx-lbl cstm-radio" for="form_cstm_radio2"><input class="custom-chbx" type="radio" id="form_cstm_radio2" name="form_cstm_radio1" checked="checked"> Another Radio</label>
						<label class="custom-chbx-lbl cstm-radio" for="form_cstm_radio3"><input class="custom-chbx" type="radio" id="form_cstm_radio3" name="form_cstm_radio1"> Third Radio</label>
					</div>

					<li class="col">
						<hr>
					</li>

					<li class="col1-2 col">
						<label for="">Radios</label>
						<div class="chbx-wrap">
							<label class="radio" for="form_yes2"><input type="radio" id="form_yes2" name="form_yn2"> Yes</label>
							<label class="radio" for="form_no2"><input type="radio" id="form_no2" name="form_yn2"> No</label>
						</div>
					</li>

					<li class="col1-2 col">
						<label for="">Checkboxes</label>
						<div class="chbx-wrap">
							<label class="chbx" for="form_chbx3"><input type="checkbox" id="form_chbx3" name="form_chbx3"> Tennis</label>
							<label class="chbx" for="form_chbx4"><input type="checkbox" id="form_chbx4" name="form_chbx4"> Golf</label>
						</div>
					</li>

					<li class="col">
						<hr>
					</li>

					<li class="col1-2 col">
						<label for="">Inline Radios</label>
						<div class="radio-wrap inline-radio">
							<label class="radio" for="form_yes3"><input type="radio" id="form_yes3" name="form_yn3"> Yes</label>
							<label class="radio" for="form_no3"><input type="radio" id="form_no3" name="form_yn3"> No</label>
						</div>
					</li>

					<li class="col1-2 col">
						<label for="">Inline Checkboxes</label>
						<div class="chbx-wrap inline-chbx">
							<label class="chbx" for="form_chbx5"><input type="checkbox" id="form_chbx5" name="form_chbx5"> Tennis</label>
							<label class="chbx" for="form_chbx6"><input type="checkbox" id="form_chbx6" name="form_chbx6"> Golf</label>
						</div>
					</li>

					<li class="col">
						<hr>
					</li>

					<li class="side-label col col1-2">
						<label for="">Side Label - Radios</label>
						<div class="radio-wrap lbl-block">
							<label class="radio" for="form_yes"><input type="radio" id="form_yes" name="form_yn"> Yes</label>
							<label class="radio" for="form_no"><input type="radio" id="form_no" name="form_yn"> No</label>
						</div>
					</li>

					<li class="side-label col col1-2">
						<label for="form_">Side Label - Checkboxes</label>
						<div class="chbx-wrap lbl-block">
							<label class="chbx" for="form_chbx1"><input type="checkbox" id="form_chbx1" name="form_chbx1"> Tennis</label>
							<label class="chbx" for="form_chbx2"><input type="checkbox" id="form_chbx2" name="form_chbx2"> Golf</label>
						</div>
					</li>

					<li class="col">
						<br>
						<button type="submit" class="submit" id="form_submit" name="form_submit">Submit</button>
					</li>

				</ul>
			</form>
		</div>
	</div>
 </div>
<?php include '__viewer/includes/footer.php';?>
<?php include '__viewer/includes/footer_close.php';?>
