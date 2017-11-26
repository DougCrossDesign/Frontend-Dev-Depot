$(function(){
	$('.date').pikaday({
		firstDay: 1,
		//minDate: new Date(),
		format: 'MM/DD/YYYY'
	});
	$('.date').on('change', function() {
		console.log($(this).val());
	});
});
