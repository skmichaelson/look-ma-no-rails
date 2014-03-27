
$(document).ready(function() {
	console.log("Everything successfully loaded!");
	$('#about_me').on('click', function () {
		console.log('clicked on about_me')
	});
	
	$('#projects').on('click', function () {
		console.log('clicked on projects')
	});
	
	$('#contact').on('click', function () {
		console.log('clicked on contact')
	});
	
	$('.resume').on('click', function () {
		console.log('clicked on resume')
	});

});