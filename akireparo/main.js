$('.menu').on('click', function(){
    $('#nav').toggleClass('mostrarmenu2');
  })
  
  $('#nav,hul,menu').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
  })
  
  
  $('.mostrarmenu2').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
  })
  
  
  
  
  $('.eti1').on('click', function(){
      $('.datos1').addClass('show');
      $('.datos2').removeClass('show');
      $('.datos3').removeClass('show');
      $('.datos4').removeClass('show');
  
    })
    
    $('.eti2').on('click', function(){
      $('.datos2').addClass('show');
      $('.datos1').removeClass('show');
      $('.datos3').removeClass('show');
      $('.datos4').removeClass('show');
    })
  
    $('.eti3').on('click', function(){
      $('.datos3').addClass('show');
      $('.datos1').removeClass('show');
      $('.datos2').removeClass('show');
      $('.datos4').removeClass('show');
    })
  
    $('.eti4').on('click', function(){
      $('.datos4').addClass('show');
      $('.datos1').removeClass('show');
      $('.datos3').removeClass('show');
      $('.datos3').removeClass('show');
    })
  
  
  $('.eti1,.Quito').on('click', function(){
      $('.eti1,.Quito').addClass('select tripimg');
      $('.eti2,.Cumbaya').removeClass('select tripimg');
      $('.eti3,.Valle-de-los-chillos').removeClass('select tripimg');
      $('.Tumbaco').removeClass('select tripimg');

      $('.eti4,.Pichincha').removeClass('select tripimg');
      
  
    })
  
    
  $('.eti2,.Cumbaya').on('click', function(){
      

      $('.eti2,.Cumbaya').addClass('select tripimg');
      $('.eti1,.Quito').removeClass('select tripimg');
      $('.eti3,.Valle-de-los-chillos').removeClass('select tripimg');
      $('.eti4,.Pichincha').removeClass('select tripimg');
      $('.Tumbaco').removeClass('select tripimg');
  
    })
  
    $('.eti3,.Valle-de-los-chillos').on('click', function(){
    

      $('.eti3,.Valle-de-los-chillos').addClass('select tripimg');
      $('.eti1,.Quito').removeClass('select tripimg');
      $('.eti2,.Cumbaya').removeClass('select tripimg');
      $('.eti4,.Pichincha').removeClass('select tripimg');
      $('.Tumbaco').removeClass('select tripimg');
  
    })
  
    $('.eti4,.Pichincha').on('click', function(){
    

      $('.eti4,.Pichincha').addClass('select tripimg');
      $('.eti1,.Quito').removeClass('select tripimg');
      $('.eti2,.Cumbaya').removeClass('select tripimg');
      $('.Tumbaco').removeClass('select tripimg');
      $('.eti3,.Valle-de-los-chillos').removeClass('select tripimg');
  
    })
   

    $('.Tumbaco').on('click', function(){
    
      $('.Tumbaco').addClass('select tripimg');
      $('.eti4,.Pichincha').removeClass('select tripimg');
      $('.eti1,.Quito').removeClass('select tripimg');
      $('.eti2,.Cumbaya').removeClass('select tripimg');
      $('.eti3,.Valle-de-los-chillos').removeClass('select tripimg');
  
    })


    $('.eti4,.Pichincha').on('click', function(){
    

      $('.eti4,.Pichincha').addClass('select tripimg');
      $('.eti1,.Quito').removeClass('select tripimg');
      $('.eti2,.Cumbaya').removeClass('select tripimg');
      $('.eti3,.Valle-de-los-chillos').removeClass('select tripimg');
  
    })
  
    
  
  //   Whatsapp Chat
  
  
  
  $('.cardnegocio').on('click', function(){
      $('#cardmenu').addClass('mostrarcardmenu');
    })
    
    $('#cardmenu').on('click', function(){
      $('#cardmenu').removeClass('mostrarcardmenu');
    })
    
    
    $('.cardmenu').on('click', function(){
      $('#cardmenu').removeClass('mostrarcardmenu');
      // $('#cardmenu').removeClass('cardmenu');
    
    })
    
    // mostrar despues de 2 segundos el mensaje a whatsapp falso
    
    
      setTimeout(function() {$(".unowhat").fadeIn(1000);},8500);
    
  
    
      // 




  
  // new slider
  
  //almacenar slider en una variable
  var slider = $('#slider');
  //almacenar botones
  var siguiente = $('#btn-next');
  var anterior = $('#btn-prev');
  
  //mover ultima imagen al primer lugar
  $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
  //mostrar la primera imagen con un margen de -100%
  slider.css('margin-left', '-'+100+'%');
  
  function moverD() {
      slider.animate({
          marginLeft:'-'+200+'%'
      } ,700, function(){
          $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
          slider.css('margin-left', '-'+100+'%');
      });
  }
  
  function moverI() {
      slider.animate({
          marginLeft:0
      } ,700, function(){
          $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
          slider.css('margin-left', '-'+100+'%');
      });
  }
  
  function autoplay() {
      interval = setInterval(function(){
          moverD();
      }, 4000);
  }
  siguiente.on('click',function() {
      moverD();
      clearInterval(interval);
      autoplay();
  });
  
  anterior.on('click',function() {
      moverI();
      clearInterval(interval);
      autoplay();
  });
  
  
  autoplay();



  
  // smooth sroll navbar 
  // const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  //     speed: 2000
  // });
  
  // esconder formulario
  $('.sumitb').on('click', function(){
    $('#cajaform').addClass('escondercaja');
  })
    

//  contador de clientes


$('.num').counterUp({delay:1,time:200});


// new menu


$(".submenuar").click(function(){ 
  $(this).children("ul").slideToggle(); 
  $(".sub3,.sub4").children("ul").slideUp();
  
  var Grupo = $(this).parent();
  var posicion = $(this).index();
  Grupo.children().each(function (index) {
   if (index != posicion)
    $(this).children("ul").slideUp("slow");
  });
 })
 
  $("ul").click(function(p){ 
  p.stopPropagation(); 
 });


 $(".sub3").click(function(){
  $(".sub4").children("ul").slideUp();
  $(".sub3").children("ul").slideToggle();

  })

  $(".sub4").click(function(){
      $(".sub3").children("ul").slideUp();
      $(".sub4").children("ul").slideToggle();

  })


  // menu interactivo

  
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menuar").style.top = "0";
  } else {
    document.getElementById("menuar").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.menuar').addClass('colormenu1');
      // $('.menu').addClass('colormenu2');
     
	
		} else {
			$('.menua').removeClass('colormenu1');
      // $('.menu').removeClass('colormenu2');
     
		}
	});
 
});


