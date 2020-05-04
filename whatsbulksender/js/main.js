
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("container").style.top = "0";
  } else {
    document.getElementById("container").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('colormenu1');
      $('.menu').addClass('colormenu2');
     
	
		} else {
			$('header').removeClass('colormenu1');
      $('.menu').removeClass('colormenu2');
     
		}
	});
 
});



$('.menuwbs, .colormenu2,.q').on('click', function(){
  $('#nav').toggleClass('mostrarmenu2');
})

$('#nav').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
})


$('.mostrarmenu2').on('click', function(){
  $('#nav').removeClass('mostrarmenu2');
  // $('#nav').removeClass('mostrarmenu2');

})


function moverseA(reservar) {
  location.hash = "#" + reservar;
}


$('.menuwbs, .menumovil2').on('click', function(){ 
  $('.menuwbs').toggleClass('iconnone');
})

// $('.menu').scroll(function(){
//   $(this).scrollTop().addClass('colormenu3');
// })



// hay que verificar el metodo click
// $(document).ready(function(){
// $('.q').on('click',function(){
//   if( $(this).click()){
//     $('.menu').toggleClass();}
// });


// remover class delnavbar


// $('.menu-burger, .menu-items').on('click', function() {
//   $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
//   $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
// });




// $('.q').on('click', function(){$('.menu, .hamburger .hul').toggleClass().hide();});

// $('.hul').on('click', function(){$('.hul').hide();});




// $('.q').on('click', function(){
//   $('.menu, .hamburger, .hul').toggleClass('animenu');
  
// $('.menu').show(); $('.menu').hide(); $('.menu').show();

// if ('.menu, .hamburger, .hul' == "hide") {
//   document.getElementsByClassName("menu").scroll.display = "block";
// } else {
//   document.getElementsByClassName("menu").scroll.display = "none";
// }

// });




// $(document).ready(function(){
 
//   $(window).scroll(function(){
//     if( $(this).scrollTop() ){
     
//       $('.menu, .humburger, .hul').removeClass('animenu');
      
//     } 
//   });
 
// });


  // $(window).scroll(function(){
  // ($('.q').length).show();

  
 
    
  


// $(window).on('scroll', function(){$('.menu, .hamburger, .hul').show();});




// $('.menu .hamburger .hul').on('click', function(){$('.menu .hamburger .hul').hide();});




/*Main*/

