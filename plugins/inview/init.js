$(function(){
	
	// Init - inView
	// $('.anim-el').inView({ moveYN: false });
	// $('#welcome-line1').inView({ bonusDist: 0, vertVelocity: 0.7, vertProperty: 'bottom', vertMax:900 });
	// $('#welcome-line2').inView({ bonusDist: 0, vertVelocity: 0.7, vertProperty: 'top', vertMax:900 });
	// $('#personal-plane').inView({ hrzVelocity: 1.5, hrzProperty: 'left' });
	// $('#specialty-tractor').inView({ hrzVelocity: 0.1, hrzProperty: 'right' });
	// $('#healthcare-ambulance').inView({ hrzVelocity: 0.7, hrzProperty: 'left', hrzMax:320 });

	$('#move-item1').inView({
		hrzVelocity: 1.0, 
		hrzProperty: 'right', 
		vertVelocity: 1.0, 
		vertProperty: 'top', 
		vertNeg: false, 
		// bonusDist: 100,
		vertMax:420
	});
	$('#move-item2').inView({ 
		hrzVelocity: 0.5, 
		hrzProperty: 'right', 
		vertVelocity: 0.7, 
		vertProperty: 'top', 
		vertNeg: false, 
		// bonusDist: 100,
		vertMax:420 
	});
	$('#move-item3').inView({
		hrzVelocity: 0.2, 
		hrzProperty: 'left', 
		vertVelocity: 0.6, 
		vertProperty: 'top', 
		vertNeg: false, 
		// bonusDist: 0,
		vertMax:420
	});
	$('#move-item4').inView({ 
		hrzVelocity: 0.5, 
		hrzProperty: 'left', 
		vertVelocity: 0.7, 
		vertProperty: 'top', 
		vertNeg: false, 
		// bonusDist: 0,
		vertMax:420 
	});

});