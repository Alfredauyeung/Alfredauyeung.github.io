		setInterval(animateMyShit, 4000);

		function animateMyShit () {
    		$('#image1').fadeToggle(3000);
    		$('#image2').fadeToggle(3000);	
		}

		$(function(){
			$('#slides').slidesjs({
			});
		});