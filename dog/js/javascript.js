$('#belly').click(function() {					/*change the face of doge*/
    $(this)
    .find('.doge')
    .toggle();
});

$('#owlHead').click(function() {				/*rotation of owl head coming in and out of hole*/											
	$(this)
	.rotate({
		angle:0,
		animateTo:180,
		duration: 1500
	});
	setTimeout(function() {
		$('#owlHead')
		.fadeOut()
		.rotate({
			angle:180,
			animateTo:360,
			duration: 3500
			})
	}, 2000);
	setTimeout(function() {
		$('#owlHead').fadeIn();
	}, 4000)
})