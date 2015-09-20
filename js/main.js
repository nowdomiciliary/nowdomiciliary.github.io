$(document).ready(function() {	

    $("li:first").on("click", function(){
		if(!$(this).parent().hasClass("slideDown")){
			$(this).parent().addClass("slideDown");
		}else{
			$(this).parent().removeClass("slideDown");
		}

	});

	function submitmyform(){
    data=$('#form').serialize();
        $.ajax({
        url: "sendEmail.php",
        type:'POST',
        data:data,
        async:false,
        dataType:'html',
        success: function(msg){

            $('#response_goes_here').html(msg);

        }
    });

}

	// // Carosel Slider
	// var $slider = $('.slider'); // class or id of carousel slider
	// var $slide = 'img'; // could also use 'img' if you're not using a ul
	// var $transition_time = 1000; // 1 second
	// var $time_between_slides = 4000; // 4 seconds

	// function slides(){
	//   return $slider.find($slide);
	// }

	// slides().fadeOut();

	// // set active classes
	// slides().first().addClass('active');
	// slides().first().fadeIn($transition_time);

	// // auto scroll 
	// $interval = setInterval(
	//     function(){
	//       var $i = $slider.find($slide + '.active').index();
	    
	//       slides().eq($i).removeClass('active');
	//       slides().eq($i).fadeOut($transition_time);
	    
	//       if (slides().length == $i + 1) $i = -1; // loop to start
	    
	//       slides().eq($i + 1).fadeIn($transition_time);
	//       slides().eq($i + 1).addClass('active');
	//     }
	//     , $transition_time +  $time_between_slides 
	// );



	$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			
			},
			
			hoverEffect: function () {
			
				// Simple parallax effect
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	



});