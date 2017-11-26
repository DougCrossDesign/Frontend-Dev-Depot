$(function(){
	$('.time').timepicker({
		'minTime': '10:00am',
		'maxTime': '6:00pm',
		'disableTimeRanges': [
			['12:30pm', '1;00pm']
		],
		'appendTo': function(e) {
			return e.parent();
		},
		'timeFormat': 'g:ia'
	});
	$('.time').on('change', function() {
		console.log($(this).val());
	});
});
