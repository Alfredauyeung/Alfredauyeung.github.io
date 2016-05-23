$(document).ready(function() {
	$('.front')
			.animate({marginTop: "5px"}, 200)
			.animate({marginTop: "0px"}, 200);
})

setInterval(supApp, 270);
	function supApp () {
		$('.sup').show();
}