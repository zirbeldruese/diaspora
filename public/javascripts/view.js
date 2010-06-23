$(document).ready(function(){  
	$('a').hover(function(){
	  $(this).fadeTo(60, 0.5);
	}, function(){
	  $(this).fadeTo(80, 1);
	});

	$('ul.nav li').hover(function(){
	  $(this).fadeTo(60, 0.5);
	}, function(){
	  $(this).fadeTo(80, 1);
	});

	$('#status_message_message').click(function() {
		$(this).val("")
	});
	
	
	$(".button").click(function() {
		$('button[type=submit] .default').click(function() {
			$('#status_message_message').delay(2000).val("");
		})
	});
	
	
	

});//end document ready