$(function(){


$('.btn-menu').on('click', function(){
	$('.menu ul').slideToggle();
});	

$('.slider').slick({
	dots: true,
	prevArrow: false,
	nextArrow: false,
	infinite: true,
});


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
	          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


});



