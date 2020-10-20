$(document).ready(function(){


    $('body').scrollspy({target: ".navbar"})

    
    AOS.init();
    console.log("HOLA")
    var altura = $('header').offset().top;

    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
	});
});

function menuOpen(){
    $('header').toggleClass("open");
    $('body').toggleClass("openMenu");
}