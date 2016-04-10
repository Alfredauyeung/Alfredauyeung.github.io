// $(document).ready(function(){
// 	$('#doge1').mousedown(function(){
// 		$('#doge1').hide();
// 	})
// 	$('#doge1').mouseup(function(){
// 		$('#doge1').show();
// 	});
// });
$('#doge1').on('mousedown', function() {
	$(this).hide();
});
$('#doge2').on('mouseup', function() {
	$(this).show();
});

