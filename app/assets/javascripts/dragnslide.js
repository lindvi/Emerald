var isDown = false;
$(document).ready(function(){
	var startingX = $('#counter').html();
	var landingX = startingX;

	

	$('#drag').mousedown(function(eventData){
		startingX = $('#counter').html();
		isDown = true;

		$(window).mousemove(function(dragData){
			if(isDown){
				landingX = dragData.clientX;
				$("#counter").html(landingX-startingX);
			}
		});

	})
	.mouseup(function(eventData){
		isDown = false;
	});
});	
