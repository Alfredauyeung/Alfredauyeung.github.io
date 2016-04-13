// $(document).ready(function (){
// 	$('#tail').rotate({ endDeg: 90, duration: .5 });
// }
// $(document).ready(function (){
// 	setInterval(function(){
// 		$('#belly').animate({
// 			marginTop: "50px"
// 		}, 1000)
// 		$('#belly').animate({
// 			marginTop: "-=50px"
// 		}, 1000)
// 	}, 2000);
// })

$("#belly").click(function() {					/*change the face of doge*/
    $(this).find('.doge').toggle();
});

$('#card').on('click', function() {
	$(this).css({"border-color": "red",
					"border-width": "1px",
					"border-style": "solid"

	});
})

// $(document).ready(function (){
// 	$('#tail').rotate({
		
// 			angle: 0,
// 			center: ["0%", "30%"],
// 			animateTo: 180
// 		});
// 	})
	

