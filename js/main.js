// var menu = document.getElementsByClassName("main_menu");
// var view_menu = document.getElementsByClassName("view_menu");
// var exit_menu = document.getElementsByClassName("exit_view");

// menu[0].addEventListener("click", function(){
// 	view_menu[0].style.display = "block";
// 	view_menu[0].style.transition = "top 4ss ease-in-out";
// });

// exit_menu[0].addEventListener("click" , function(){
// 	view_menu[0].style.display = "none";
// });

	

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


$(document).ready(function(){

	var p = $("section");
	var pp = p.offset();
	
	$("#main_update").click(function(){
		$("body, html").animate({
			scrollTop: 0
		}, 1000);
	});


	$("section a").click(function(event){
		event.preventDefault();
		var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	});
   

	$(".main_menu").click(function(){
		$(".view_menu").show(400, "swing");
	});

	$(".exit_view").click(function(){
		$(".view_menu").hide(400, "swing");
	});
});