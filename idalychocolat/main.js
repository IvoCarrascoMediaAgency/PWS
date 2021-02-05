

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


$('.eti1').on('click', function(){
    $('.eti1').addClass('select tripimg');
    $('.eti2').removeClass('select tripimg');
    $('.eti3').removeClass('select tripimg');
    $('.eti4').removeClass('select tripimg');

  })

  
$('.eti2').on('click', function(){
    $('.eti2').addClass('select tripimg');
    $('.eti1').removeClass('select tripimg');
    $('.eti3').removeClass('select tripimg');
    $('.eti4').removeClass('select tripimg');

  })

  $('.eti3').on('click', function(){
    $('.eti3').addClass('select tripimg');
    $('.eti1').removeClass('select tripimg');
    $('.eti2').removeClass('select tripimg');
    $('.eti4').removeClass('select tripimg');

  })

  $('.eti4').on('click', function(){
    $('.eti4').addClass('select tripimg');
    $('.eti1').removeClass('select tripimg');
    $('.eti2').removeClass('select tripimg');
    $('.eti3').removeClass('select tripimg');

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
  
  
    setTimeout(function() {
        $(".unowhat").fadeIn(1000);
    },8500);
  

  


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
    }, 2000);
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
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 2000
});

// esconder formulario
$('.sumitb').on('click', function(){
  $('#cajaform').addClass('escondercaja');
})
  


// abrir cerrar 

function abrir(){
  document.getElementById("modal").style.display="grid";
}

function cerrar(){
  document.getElementById("modal").style.display="none";
}

function abrirms(){
  document.getElementsByClassName("modalservicio").style.display="grid";
}


// owl carusel

$('.owl-carousel').owlCarousel({
  // stagePadding: 10,

  loop:true,
  margin:10,
  nav:true,

  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      // 1000:{
      //     items:4
      // }
  }
})
