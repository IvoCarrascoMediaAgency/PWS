

$('.menu, .colormenu2,.q').on('click', function(){
    $('#nav').addClass('mostrarmenu2');
  })
  
  $('#nav').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
  })
  
  
  $('.mostrarmenu2').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    // $('#nav').removeClass('mostrarmenu2');
  
  })
  
  $('.ytp-chrome-top').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    // $('#nav').removeClass('mostrarmenu2');
  
  })
  
  // mostrar despues de 2 segundos el mensaje a whatsapp falso
  
  
    setTimeout(function() {
        $(".unowhat").fadeIn(1000);
    },8500);
  