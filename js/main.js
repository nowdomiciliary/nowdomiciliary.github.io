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