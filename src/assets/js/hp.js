(function ($) {

	"use strict";

  //elimino la animacion de inicio cuando cargó la página
  $(window).on('load',function(){
    $('.loader-wrapper').remove();
  });

  //Mofica el Header
	scrollNavBar();

	//Objeto scrollReveal para animaciones
	window.sr = new scrollReveal();

	//Contador animado scrollReveal
 	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}

	//header cambia de color on scroll
	$(window).on('scroll', function() {
		scrollNavBar();
	});
	//funcion que pone el header como fijo y de color blanco (scrollreveal)
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'block');
				$(".header-area .light-logo").css('display', 'none');
			}else{
				$(".header-area").removeClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'none');
				$(".header-area .light-logo").css('display', 'block');
			}
		}
	}

})(window.jQuery);
