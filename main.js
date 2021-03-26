

$('#menu2').on('click', function(){
    $('#nav').toggleClass('mostrarmenu2');
  
  
  })
  
  $('#nav').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
  })
  
  
  $('.mostrarmenu2').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    // $('#nav').removeClass('mostrarmenu2');
  
  })
  
  
  //   $('#cerrar').on('click', function(){
  //     $('#modal').toggleClass('modal');
  
  
  //   })
  
  
  $('.deseop').on('click', function(){
    $('#modal').toggleClass('mostrarmenu22');
  
  
  })
  
  $('#cerrar').on('click', function(){
    $('#modal').removeClass('mostrarmenu22');
  
  
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
      $('.datos2').removeClass('show');
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
    
    $('#cerrarchat').on('click', function(){
      $('#cardmenu').toggleClass('mostrarcardmenu');
    })
    
    
    // $('.cardmenu').on('click', function(){
    //   $('#cardmenu').removeClass('mostrarcardmenu');
    //    $('#cardmenu').removeClass('cardmenu');
    
    // })
    
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
      }, 9000);
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
  
    
  function goToPage(){
    var nombre = document.getElementById('entry.1803556888').value;
    var nombrenegocio = document.getElementById('entry.706206433').value;
    var tipodenegocio = document.getElementById('entry.1773884649').value;
  
    var tipodeservicio = document.getElementById('entry.1973262934').value;
  
  
  
    var whatsapp = document.getElementById('entry.1046100591').value;
    var mail = document.getElementById('entry.1453028098').value;
  
    var horaprueba = document.getElementById('entry.631173237').value;
  
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
      return (document.getElementById("entry.1803556888").innerHTML =
      "Ingresa tu nombre completo")
    }
    if( nombrenegocio == null || nombrenegocio.length == 0 || /^\s+$/.test(nombrenegocio) ) {
       
      return (document.getElementById("entry.706206433").innerHTML =
      "Ingresa el nombre de tu negocio")
    }
    if( tipodenegocio == null || tipodenegocio.length == 0 || /^\s+$/.test(tipodenegocio) ) {
       
      return (document.getElementById("entry.1773884649").innerHTML =
      "Selecciona el tipo de negocio")
    }
  
    if( tipodeservicio == null || tipodeservicio.length == 0 || /^\s+$/.test(tipodeservicio) ) {
       
        return (document.getElementById("entry.1973262934").innerHTML =
        "Selecciona el tipo de servicio")
      }
    if( whatsapp == null || whatsapp.length == 0 || /^\s+$/.test(whatsapp) ) {
       
      return (document.getElementById("entry.1046100591").innerHTML =
      "Ingresa un número de WhatsApp")
    }
    if( mail == null || mail.length == 0 || /^\s+$/.test(mail) ) {
       
      return (document.getElementById("entry.1453028098").innerHTML =
      "Selecciona el día para la prueba")
    }
    if( horaprueba == null || horaprueba.length == 0 || /^\s+$/.test(horaprueba) ) {
       
      return (document.getElementById("entry.631173237").innerHTML =
      "Selecciona una hora")
    }
  
  var myWindow = window.open ("https://api.whatsapp.com/send?phone=593980687988&text="+"Hola! me interesa la promo" + "%20" + "*Página Web Ecommerce™ y Redes Sociales*" + "%0A"+"✅ _Registro confirmado_" + "%0A"+"_________________________" + "%0A"+"%0A"+ "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Nombre del Negocio*" +"%0A" + nombrenegocio +  "%20" + "%0A"+"%0A"+"*Tipo de Negocio*"+"%0A" + tipodenegocio + "%20"+ "%0A"+"%0A"+"*Tipo de servicio*"+"%0A"+tipodeservicio +"%0A"+ "%0A"+"*Día y hora para contacto*"+"%0A" +horaprueba+"%0A" + "%0A"+ "_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como *Páginas Web Ecommerce* para poder recibir toda la información 😉👍");
  
  
  //  window.location = "https://api.whatsapp.com/send?phone=593996517199&text="+ "*Hola me llamo:*" + "%0A" + nombre + "%20" +"%0A" + nombrenegocio +  "%20" + "%0A" + tipodenegocio + "%20" + "%0A";

  
  }
  
  
    
  //texterea
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:auto;');
    }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
    });
  

  
  
  //chatsend
  
  // function obtenerdatos(){
  // var nombre = document.getElementById('edad').value;
  
  
  
  // if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
  //   return (document.getElementById("edad").innerHTML =
  //   "Escribe un mensaje",document.getElementById("edad").style="color: #25d366;")
  // }
  
  // document.getElementById('edad').value = '';
  // document.getElementById('edad').style ="height 0";
  
  // var myWindow = "&text="+nombre;
  
  // var md = new MobileDetect(window.navigator.userAgent);
  //    if (md.mobile()) {
  
  //     window.open(document.getElementById("enviarwa2").href = "https://api.whatsapp.com/send?phone=593980687988" + myWindow);
  
  //   } else {
     
  //     window.open(document.getElementById("enviarwa2").href = "https://web.whatsapp.com/send?phone=593980687988" + myWindow);
  
     
  
  
  //   }
  
  // }
  

  $('.owl-carousel').owlCarousel({
    // stagePadding: 10,

  
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplaySpeed: 2500,
    autoplayHoverPause: false,
  
    // loop:true,
    // margin:10,
    // nav:true,

    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    // slideSpeed: 1000,
    // paginationSpeed: 1000,
  
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        // 1000:{
        //     items:4
        // }
    }
  })


  // document.oncontextmenu = function(){return false}
  
  $(document).ready(function(){
    var altura =$('.row-centered').offset().top;
    $(window).on('scroll', function(){
      if ($(window).scrollTop()>= altura){
        $('.row-centered').addClass('row-centered2');
      } else{
        $('.row-centered').removeClass('row-centered2');

        $(window).scroll(function() { return false; });

      }
    })
  });




  
  
  function obtenerdatos(){
    var nombre = document.getElementById('edad').value;
  
 
  
    $('#cerrarchat').on('click', function(){
   
        document.getElementById("whaterror").style="display: none";
      })

    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
        return (document.getElementById("whaterror").innerHTML =
        "¿Como podemos ayudarte? 😽👇",document.getElementById("whaterror").style=" color: #25d366; position: relative; padding: 15px;  margin: 0 26px 20px; border-radius: 15px; background-color: #fff; color: #4a4a4a; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%); transition: 0.5s ease-in-out;")
      }

   
  

  

      document.getElementById('edad').value = '';
      document.getElementById('edad').style ="height 0";

    var myWindow = "&text="+nombre;
  
    var md = new MobileDetect(window.navigator.userAgent);
       if (md.mobile()) {
  
        window.open(document.getElementById("enviarwa2").href = "https://api.whatsapp.com/send?phone=593980687988" + myWindow);
  
      } else {
       
        window.open(document.getElementById("enviarwa2").href = "https://web.whatsapp.com/send?phone=593980687988" + myWindow);
   
       
   
   
      }
   
  }



  
  function enviarwaf(){

  
    var md = new MobileDetect(window.navigator.userAgent);
       if (md.mobile()) {
  
        window.open(document.getElementById("enviarwaff").href = "https://api.whatsapp.com/send?phone=593980687988&text=%20Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n") ;
  
      } else {
       
        window.open(document.getElementById("enviarwaff").href = "https://web.whatsapp.com/send?phone=593980687988&text=%20Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n");
   
       
   
   
      }
   
  }


  




