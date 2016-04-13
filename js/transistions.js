		setInterval(animateMyShit,  4000);

		function animateMyShit () {
    		$('#image1').fadeToggle(3000);
    		$('#image2').fadeToggle(3000);	
		}





	// $(document).ready(function() {
 //        var keys = [];
 //        var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 //        $(document).keydown(function(keyEvent) {
 //          keys.push(keyEvent.keyCode);
 //          if ( keys.length > code.length ) { keys.shift(); }
 //          if ( keys.toString() == code.toString() ) {
 //            window.open("http://www.aauyeung.com/secondlayer/");
 //          }
 //        });
 //      });
