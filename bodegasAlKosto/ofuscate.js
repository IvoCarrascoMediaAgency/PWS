/*
pedido_store : Variable del tipo objeto que se encargara de 
registrar que productos y en que cantidad han sido seleccionados
en el pedido
*/
const pedido_store = {
  /*PROPIEDAD : TIPO LISTA DE OBJETOS*/
  items:{

  
  'I1':{
    //NOMBRE DEL ITEM
    name:'Pasta polar power fresh 60ml',
    //PRECIO BASE DEL ITEM
    description: 'Qto x3 $1.33 | Cja x12 $10.66',
    price:0.44,
  
   
    //CANTIDAD ESCOGIDA DEL ITEM
    qty:0,
    //FUENTE DE LA IMAGEN

   

    img:'pasta-dental-polar.png',
  },

  'I2':{
    name:'Jolly Surtido Tripack 100g',
    description: 'Qto x3 $3.02 | Cja x12 $12.08',
    price:1.01,
    qty:0,
    img:'jobon-jolly.png',
  },
  'I3':{
    name:'Aceite Criollo 1Lt',
    description: 'Qto x3 $3.70 | Cja x15 $18.11',
    price:1.26,
 
    qty:0,
    img:'aceite-criollo-1lt.png',
  },
  'I4':{
    name:'Leche Entera Ordeño 1Lt funda',
    description: 'Qto x3 $1.85 | Cja x12 $7.38',
    price:0.62,
   
    qty:0,
    img:'leche-ordeño.png',
  },
  



  
    // 'I5':{
    //   //NOMBRE DEL ITEM
    //   name:'Cola personal',
    //   //PRECIO BASE DEL ITEM
    //   price:0.60,
    //   //CANTIDAD ESCOGIDA DEL ITEM
    //   qty:0,
    //   //FUENTE DE LA IMAGEN
    //   img:'colapersonal.png',
    // },
    // 'I6':{
    //   name:'Cola 1lt',
    //   price:1.00,
    //   qty:0,
    //   img:'colalitro.png',
    // },
    // 'I7':{
    //   name:'Cola Familiar',
    //   price:2.00,
    //   qty:0,
    //   img:'colafamiliar.png',
    // },
    // 'I8':{
    //   name:'Agua Mineral',
    //   price:0.75,
    //   qty:0,
    //   img:'aguamineral.png',
    // },


    // prueba
    
  
    // 'I9':{
    //   //NOMBRE DEL ITEM
    //   name:'Cola personal',
    //   //PRECIO BASE DEL ITEM
    //   price:0.60,
    //   //CANTIDAD ESCOGIDA DEL ITEM
    //   qty:0,
    //   //FUENTE DE LA IMAGEN
    //   img:'colapersonal.png',
    // },
    // 'I10':{
    //   name:'Cola 1lt',
    //   price:1.00,
    //   qty:0,
    //   img:'colalitro.png',
    // },
    // 'I11':{
    //   name:'Cola Familiar',
    //   price:2.00,
    //   qty:0,
    //   img:'colafamiliar.png',
    // },
    // 'I12':{
    //   name:'Agua Mineral',
    //   price:0.75,
    //   qty:0,
    //   img:'aguamineral.png',
    // },



    },
};


const newCancel = (target) => {

  //SE ELIMINAN LA CANTIDAD ASIGNADA A UN ITEM OBJETIVO (SE VUELVE 0)
  pedido_store.items[`${target}`].qty=0;
  document.getElementById(`${target}-qty`).value = pedido_store.items[`${target}`].qty;
  addItemToShoppingCart();
}

const newPlus = (target) => {
  //SE LE SUMA 1 A LA CANTIDAD DEL ITEM OBJETIVO
  pedido_store.items[`${target}`].qty++;
  document.getElementById(`${target}-qty`).value = pedido_store.items[`${target}`].qty;
  addItemToShoppingCart();
}

const newMinus = (target) => {
  //SE LE RESTA 1 A LA CANTIDAD DEL ITEM OBJETIVO MIENTRAS EL RESULTADO SEA MAYOR O IGUAL A 0
  //ASI SE EVITAN CANTIDADES NEGATIVAS
  if( pedido_store.items[`${target}`].qty-1 >= 0){
  pedido_store.items[`${target}`].qty--;
  document.getElementById(`${target}-qty`).value = pedido_store.items[`${target}`].qty;
  addItemToShoppingCart();
  }
}

/*CON ESTA FUNCION GENERAMOS EL CONTROLADOR GRAFICO DE CADA ITEM
EN FUNCION DE CUANTOS ITEMS TENGAMOS EN NUESTRA VARIABLE GLOBAL*/
const ItemCreator = (itemList) => {

  let IM = ``;

  console.log("ItemCreator -> IM", IM)
  Object.entries(itemList).forEach(([key,item],ind) => {
    IM = IM + 
    `<div class="col-12 col-md-6 itemprodusto">

    <div class="modal-container">
    <img class="item-image" src="${item.img}">
    </div>
      <div class="item shadow mb-4">
        <h3 class="item-title" id="">${item.name}</h3>
        <p class="item-description" id="">${item.description}</p>
        
        <div class="item-details">
          <h4 class="item-price">$${item.price.toFixed(2)}</h4>
          <div class="item_cantidadt">
            <button id="${key}-m" class="minus" ></button>
            <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${key}-qty">
            <button id="${key}-p" class="plus"></button>
          </div>                       
        </div>
      </div>
    </div>`;
  });

  return IM;
}

document.getElementById('item-menu').innerHTML =ItemCreator(pedido_store.items);

Object.entries(pedido_store.items).forEach(([key,item],ind) => {
  document.getElementById(`${key}-m`).addEventListener("click",() => {
    newMinus(key);
  });
  document.getElementById(`${key}-p`).addEventListener("click",() => {
    newPlus(key);
  });
});

/*
setTimeout(function() {
  $(".unowhat").fadeIn(1000);
},8500);
*/
/*const escucharclic = document.querySelectorAll('.plus');

escucharclic.forEach((clickplus) => {

  clickplus.addEventListener('click', addToCartClicked);

  
});*/

 
const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
 
);



function addToCartClicked(event) {

  /*const button = event.target;
  const item = button.closest('.item');
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;
  const itemCantidad = item.querySelector('.item_cantidad').value;
  const itemtotal = item.querySelector('.item_total');*/

  //addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad, itemtotal);
}

//FUNCION PARA GENERAR LOS ITEMS QUE SE ESTEN SOLICITANDO EN EL CARRITO
//SI Y SOLO SI ESTOS TIENEN UNA CANTIDAD SOLICITADA MAYOR A 0
const ItemCheckout = (itemList) => {

  let cart_content = '';
  let productoslist="";
  let productocategory="";

  var productoslistcategorya=document.querySelector('.fantasma');
  var pushlistadeproducots=document.querySelector('.fantasma');


  Object.entries(itemList).forEach(([key,item],ind) => {
  if(item.qty > 0){
  cart_content = cart_content + 
  `<div class="row3 shoppingCartItem">
    <span>
        <div class="shopping-cart-item" >
            <img class="imgpedido" src=${item.img} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0  " id="itemtitulowa">${item.name}</h6>
        </div>
    </span>
    <span>
    <p class="item-price mb-0 shoppingCartItemPrice itempricewa" >$${item.price}</p>
    </span>
    <div class="item_cantidadt">
      <button id="${key}-m-s" class="minus" ></button>
      <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${key}-qty">
      <button id="${key}-p-s" class="plus"></button>
    </div>
    <span class="xcerrar">
      <p class="item-total mb-0 shoppingCartItemTotal itemtotal" >$${(item.qty*item.price).toFixed(2)}</p>
      <button class="btn btn-danger buttonDelete" type="button" id="${key}-c"><span class="icon-bin"></span> </button>
    </span>
  </div>`

  productoslist += item.qty+"%20"+"*x*"+"%20"+"*|*"+"%20"+item.name+"%20"+"*|*"+"%20"+"precio"+"%20"+"$"+ item.price+"%20"+"*|*"+"%20"+"*total:*"+"%20"+"$"+(item.qty*item.price).toFixed(2)+"\n"+"%0A";

  
  // productoslist=productoslist+shoppingCartItemCantidad+"%20"+"*x*"+" | "+shopintitle+" | "+"precio"+"%20"+shoppingCartItemPrice+" | "+"total:"+"%20"+"%0A"
    }

    // productocategory ='*Fast Food*';
 
    // ${productocategory}+%0A+
  });

  productoslistcategorya.innerHTML=`${productoslist}`;
 
 

  return cart_content;
}

function addItemToShoppingCart(/*itemTitle, itemPrice, itemImage, itemCantidad, itemtotal*/) {



  document.getElementById('cart_list').innerHTML = ItemCheckout(pedido_store.items);
  let cart_amt =0;
  Object.entries(pedido_store.items).forEach(([key,item],ind) => {

  if(item.qty > 0){
    document.getElementById(`${key}-m-s`).addEventListener("click",() => {
      newMinus(key);
    });
    document.getElementById(`${key}-p-s`).addEventListener("click",() => {
      newPlus(key);
    });
    document.getElementById(`${key}-c`).addEventListener("click",() => {
      newCancel(key);
    });
    cart_amt += item.qty;
  }
});
   if(cart_amt > 0){
    document.getElementById('cart_amt').innerHTML = `${cart_amt}`;
    setTimeout(function() {
    $(".unowhat").fadeIn(200);
    },200);
   }
   else{
    setTimeout(function() {
    $(".unowhat").fadeOut(200);
    },200);
   }
   






  
/*
  const multptotal=0;
  const totalppush = document.querySelector('.itemtotal')
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

  for (let i = 0; i < elementsTitle.length; i++) { 
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemCantidad'
        
      );
     

      elementQuantity.value++;
      updateShoppingCartTotal();
      //return;

      
 
    }

  }


  
  const shoppingCartRow = document.createElement('div');

  const shoppingCartContent= `
  <div class="row3 shoppingCartItem" id="shop1">
        <span>
        <div class="shopping-cart-item" >
                <img class="imgpedido" src=${itemImage} class="shopping-cart-image  ">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0  " id="itemtitulowa">${itemTitle}</h6>
                </div>
        </span>
        <span>
                <p class="item-price mb-0 shoppingCartItemPrice itempricewa" >${itemPrice}</p>
        </span>
      

        <div class="item_cantidadt">
   
        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
        <input class="quantity item_cantidad  shoppingCartItemCantidad " type="number" name="" min="0" value="${itemCantidad}" id="preciod">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
      </div>


   

            <span class="xcerrar">
                <p class="item-total mb-0 shoppingCartItemTotal itemtotal" >${itemCantidad* Number(itemPrice.replace('$',''))}</p>
                <button id="btn-shop" class="btn btn-danger buttonDelete" type="button"> x </button>
            </span>


    </div>`;




  shoppingCartRow.innerHTML = shoppingCartContent;

  shoppingCartItemsContainer.append(shoppingCartRow);
  shoppingCartRow 

    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
    
    

  shoppingCartRow
    .querySelector('.shoppingCartItemCantidad')
    .addEventListener('change', quantityChanged);



  
  */
  updateShoppingCartTotal(pedido_store.items);
}



  // function ertd(){

  // var leteryu = document
  //   .getElementById('cardnegocioid')
  //   .innerHTML =  shoppingCartItemsContainer.childElementCount;

  // }

  function ertd(){

    // var leteryu = 
        // document.getElementById('cardnegocioid').innerHTML =  shoppingCartItemsContainer.childElementCount;
    
    
     
    
        var leteryu2 = document.getElementById('cardnegocioid');
        leteryu2.style.animation = 'example 0.1s linear ';
     
      }
    
        
      $('.plus').on('click', function(){
        $('.cardnegocioid').addClass('animation cambiocolorc');
      
      })

           
      $('.minus').on('click', function(){
        $('.cardnegocioid').removeClass('animation cambiocolorc');
      
      })
    


  

function updateShoppingCartTotal(itemList) {

  let cartTotal = 0;
  // let productoslist=""
  // var pushlistadeproducots=document.querySelector('.fantasma');
 
  Object.entries(itemList).forEach(([key,item],ind) => {
    cartTotal += item.price*item.qty;

    // productoslist +=item.name+"|"+ item.price +"|"+ item.qty+"|"+item.qty*item.price+"\n";


   
  //  productoslist=productoslist+shoppingCartItemCantidad+"%20"+"*x*"+" | "+shopintitle+" | "+"precio"+"%20"+shoppingCartItemPrice+" | "+"total:"+"%20"+"%0A"
  });

  /*let total = 0;
  let productoslist=""
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  var pushlistadeproducots=document.querySelector('.fantasma');


  shoppingCartItems.forEach((shoppingCartItem) => {

    const shopintitle=shoppingCartItem.querySelector(
      '.shoppingCartItemTitle'
    ).textContent;



    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
   
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );

    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemCantidad'
    );
  
    const shoppingCartItemCantidad = Number(
        shoppingCartItemQuantityElement.value
      );
      //console.log(shoppingCartItemCantidad)

     const shoppingCartItemQuantity = Number(
       shoppingCartItemQuantityElement.value
     );
    total = total + shoppingCartItemPrice * shoppingCartItemCantidad;
    

    productoslist=productoslist+shoppingCartItemCantidad+"%20"+"*x*"+" | "+shopintitle+" | "+"precio"+"%20"+shoppingCartItemPrice+" | "+"total:"+"%20"+"%0A";
  
   
  });
  shoppingCartTotal.innerHTML =`$${total.toFixed(2)}`;
  pushlistadeproducots.innerHTML=`${productoslist}`;
  ertd();
  */

//  pushlistadeproducots.innerHTML=`${productoslist}`;

  document.querySelector('.shoppingCartTotal').innerHTML=`$${cartTotal.toFixed(2)}`;



  let cartTotal3 = cartTotal;




  document.querySelector('.shoppingCartTotal2').innerHTML=`$${cartTotal3.toFixed(2)}`;


// 

  let cartTotal4 = cartTotal;


  var selectoptionq=document.getElementById('entry.4');
  
  
  selectoptionq.addEventListener('change', function(){
    
    var recepoptionq=selectoptionq.value;
  
     document.querySelector('.deliverysub2').innerHTML=`$${Number(recepoptionq).toFixed(2)}`;
  
    cartTotal4=cartTotal + Number(recepoptionq);

  
  //   document.querySelector(' .shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;

  //   $('entry.4').val(function(){return value="";});


  //   quitar delivery

  // var quitardelivery3 = document.querySelector(".deliveryoperr");

  
 
  
  // quitardelivery3.onclick = function(){


 

    

  //     document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;

  //     cartTotal4=cartTotal+ Number(0);

     

  //     document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
  // }
  

  document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
 

  
  });



//    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;



  // let cartTotal4 = cartTotal;

  
  // var selectoptionq=document.getElementById('entry.4');
  
  
  // selectoptionq.addEventListener('change', function(){
    
  //   var recepoptionq=selectoptionq.value;
  
    
  
  
  //    document.querySelector('.deliverysub').innerHTML=`$${Number(recepoptionq).toFixed(2)}`;
  
  //   cartTotal4=cartTotal + Number(recepoptionq);

  
  //   document.querySelector(' .shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
  
  // });
  
  // document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
  
  // var selectoptionw=document.getElementById('ope1bq');
  
  
  // selectoptionw.addEventListener('click', function(){
 
    
  //   var recepoption2q=selectoptionw.value;
    
  
  //   cartTotal4=cartTotal4 - Number(recepoption2q) ;

  
  //   document.querySelector('.shoppingCartcambio ').innerHTML=`$${cartTotal4.toFixed(2)}`;
  
  
  //   
   
    
  // });
// 






  // cac.addEventListener('input', function(){
 
    
  //   var recepoption3=cac.value;



    
  
  //   cartTotal5=cartTotal5 - Number(recepoption3) ;
  
   
  
  //   document.querySelector('#resultadocambio').innerHTML=`$${cartTotal5.toFixed(2)}`;
  
 

  
    var def=document.querySelector('.monto');

    def.addEventListener('keyup', function(){
  
      var recepoptionc=def.value;
     
      
    
    
       document.querySelector('.monto').innerHTML=`$${Number(recepoptionc).toFixed(2)}`;


    
       var wert=document.getElementById('totalwa3').textContent;


       var total4a= Number(wert.replace('$',''));



       
    



    var  cartTotal4a= recepoptionc - total4a;
    console.log("updateShoppingCartTotal -> cartTotal4a", cartTotal4a)
     
        
    // var totalfp = Number(
    //   totalf.replace('$', ''));
    
      document.querySelector('#resultadocambio').innerHTML=`$${cartTotal4a.toFixed(2)}`;
    
    });
    

  

    
 
  
    
  // });










  // document.querySelector('.deliverysub').innerHTML=`$${delivery.toFixed(2)}`;


  // var delivery = document.getElementById('entry.4').value;
  // console.log("delivery", delivery)
  
  // var totald = document.getElementById('totalwa').value;
  // console.log("totald", totald)
    
  // var totalmasdelivery = Number(delivery) + Number(cartTotal);
  // console.log("updateShoppingCartTotal -> totalmasdelivery", totalmasdelivery)
  
  // document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${totalmasdelivery.toFixed(2)}`;

// iterar netre la opcio de costo delivery
// var selectoption=document.getElementById('entry.4').value;

//   document.querySelector('.deliverysub').innerHTML=`$${selectoption.toFixed(2)}`;


let cartTotal2 = cartTotal;


var selectoption=document.getElementById('entry.4');


selectoption.addEventListener('change', function(){
  
  var recepoption=selectoption.value;

  


   document.querySelector('.deliverysub').innerHTML=`$${Number(recepoption).toFixed(2)}`;

  cartTotal2=cartTotal + Number(recepoption);





  var quitardelivery = document.querySelector(".deliveryoper");

  
 
  
  quitardelivery.onclick = function(){

      document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;

      cartTotal2=cartTotal+ Number(0);
  
      document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;

 

    

      document.querySelector('.deliverysub').innerHTML=`$${Number(0).toFixed(2)}`;

      cartTotal2=cartTotal+ Number(0);

     

      document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  }
  

  document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
 


});

var quitardelivery2 = document.querySelector(".deliveryoperr");

quitardelivery2.onclick = function(){

  document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;

  cartTotal2=cartTotal+ Number(0);


  document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;

  

  document.querySelector('.deliverysub').innerHTML=`$${Number(0).toFixed(2)}`;

  cartTotal2=cartTotal+ Number(0);

 

  document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
}


document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;




  //  $('entry.4').val(function(){return value="";});
//   document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;




//   var selectoptionb=document.getElementById('ope1b');


//   selectoptionb.addEventListener('click', function(){

  
//     var recepoption2=selectoption.value;
  

//     cartTotal2=cartTotal2 - Number(recepoption2) ;


//     document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;


//     $('entry.4').val(function(){return value="";});

 
  
//   });



// document.getElementById('entry.4').value="";
// document.getElementById('entry.4').value="";

  // const selectdelivery = document.querySelectorAll('.selectb').value;
  // console.log("updateShoppingCartTotal -> selectdelivery", selectdelivery)
  // selectdelivery.forEach((shoppingCartItem) => {





  //   const shoppingCartItemPriceElement = shoppingCartItem.getElementById(
  //     'entry.4'
  //   );
   
  //   const shoppingCartItemPrice = Number(
  //     shoppingCartItemPriceElement.value
  //   );

  
  //   cartTotal2 = cartTotal2 + shoppingCartItemPrice ;
  //   console.log("updateShoppingCartTotal ->  cartTotal2",  cartTotal2)
  
   
  // });




  ertd();
}



function removeShoppingCartItem(event) {
  /*const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();*/
  updateShoppingCartTotal(pedido_store.items);
 
}

function quantityChanged(event) {
  /*const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;*/
  updateShoppingCartTotal(pedido_store.items); 
 
}


function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
 

}



$("#ordernumber").val(function(){
  return Math.floor(Math.random() * 999) + 1000
})


$("#boton").on("click",function(event){
  event.preventDefault();

});



// animacion formas de pago 

$('.eti1').on('click', function(){
  $('.datos1').addClass('show btnpagos');
 
  $('.datos2').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');

})


$('.eti2').on('click', function(){
  $('.datos2').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');
})

$('.eti3').on('click', function(){
  $('.datos3').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos2').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');
})

$('.eti4').on('click', function(){
  $('.datos4').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos2').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
})

// stylos input

$('.btn-plus, .btn-minus').on('click', function(e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})




// card scroll
    $(document).ready(function() {
      var $window = $(window);
      var div2 = $('.cardnegocio');
      var div1 = $('.row');
      var div1_top = div1.offset().top;
      var div1_height = div1.height();
      var div1_bottom = div1_top + div1_height;
      console.log(div1_bottom);
      $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        var viewport_height = $(window).height();
        var scrollTop_bottom = scrollTop ;
        div2.toggleClass('hide', scrollTop_bottom > div1_bottom );
  });
});


// calculo delivery +total



// var delivery = document.getElementById('entry.4').value;
// console.log("delivery", delivery)

// var totald = document.getElementById('totalwa').textContent;
// console.log("totald", totald)
  
// var totalmasdelivery = Number(delivery) + Number(totald);

// var mostrartotalapagar=totalmasdelivery.value;

// console.log("mostrartotalapagar", mostrartotalapagar)

// end calculo

function resetfac(){
  console.log("resetfac -> resetfac", resetfac)

  document.getElementById('cedulafac').value = '';


}

function resetfacanddatacliente(){

  document.getElementById('cedulafac').value = '';
  document.getElementById('entry.1').value = '';document.getElementById('entry.2').value = '';document.getElementById('entry.3').value = '';

}


function linpiarreserdomi(){



  linpiarreservar();
  linpiardelivery();
//  document.querySelector('#totalwa p').textContent='0.00';
}


function linpiarreservar(){


  document.getElementById('dia').value = '0';
  document.getElementById('hora').value = '';


}

function linpiardelivery(){


  document.getElementById('entry.4').value = '0';
  document.getElementById('entry.5').value = '';

  document.getElementById('cambioefect').value='';

document.querySelector('#resultadocambio').textContent='';


//   document.querySelector('#totalwa').textContent='0';
//  document.querySelector('#totalwa p').textContent='0.00';



  // $("input[type=radio]:checked + label:before").removeAttr("checked");
 

}





function limpiarformas2(){

  var fdg=document.getElementById('cambioefect').value='';
  
document.querySelector('#resultadocambio').textContent='';



}





function goToPage(){
  




  
  var orden = document.getElementById('ordernumber').value;  

    var email = document.getElementById('entry.2').value;
    var whatsapp = document.getElementById('entry.3').value;
    var delivery = document.getElementById('entry.4').value;
    var direccion = document.getElementById('entry.5').value;
   
    
  
    var totalf = document.getElementById('totalwa').textContent;
  
  
    var totalfp = Number(
      totalf.replace('$', ''));
      
      var nombre = document.getElementById('entry.1').value;



      
  //   );if( totalfp <= 10|| /^\s+$/.test(totalfp) )  {
  //     return (document.getElementById("demo").innerHTML =
  //     "Tu pedido es menor $10.00");
    
  // }


  
   

  var dia = document.getElementById('dia').value;

  var hora = document.getElementById('hora').value;


 
  var reservad = document.getElementsByName('opentrega');
  
  
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
   
      var opcionlocal = ("*Opción de entrega*"+"%0A"+reservad[i].value+"%0A" +`${dia}`+"%20"+hora);


      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
   
    
    }

      
    
    
  
   
  }

// .......



  var facturafc = document.getElementsByName('datosfc');
  
  
  for (var i = 0, length = facturafc.length; i < length; i++) {
    if (facturafc[i].checked) {
   
      var retornafc = (facturafc[i].value);
  
   
  
    }
  }

  // var wervaloption=document.getElementsByName('openentrega').value;
 

 



  
  var radios = document.getElementsByName('ok2');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos = ("*Forma de pago:*"+"%0A"+radios[i].value);
     


      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número deliverysub cédula");
   
    
    }

    // x no fue declarada antes
// if ( radios === 'undefined') { 

//   retornapagos=value="";
// }

  
   
  }
  // else{
  //  value="nohaynada";
  // }

  
  
    
  var facturafc = document.getElementsByName('datosfc');
  
  
  for (var i = 0, length = facturafc.length; i < length; i++) {
    if (facturafc[i].checked) {
   
      var retornafc = (facturafc[i].value);
  
   
  
    }
  }

  var mostrarcedula=document.getElementById('cedulafac').value;
 
// var mostrarcedulaf ="N° de cédula:"+ mostrarcedula;
  var mostrarpedidof=document.querySelector('.fantasma').textContent;


  // if(  mostrarcedula.length == 0 || /^\s+$/.test(mostrarcedula) ) {

  //   return  (document.getElementById("demo").innerHTML =
  //   "Ingresa tu número de cédula");


  // }
  var opentrega = document.getElementsByName('opentrega');
  
  
  for (var i = 0, length = opentrega.length; i < length; i++) {
    if (opentrega[i].checked) {
   
      var retornaop = (opentrega[i].value);
  
   
  
    }
  }

  // var opentrega=document.getElementById('opcione').value;
  // console.log("goToPage -> opentrega", opentrega)


  
  //   if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
       
  //     return  (document.getElementById("demo").innerHTML =
  //     "Ingresa tu nombre completo");
   
  
  //   } 

    //  if ( document.getElementById("demo").textContent =='Ingresa tu nombre completo'){
    //   setTimeout(function(){ document.getElementById("demo").textContent.close() }, 400);
    // }
  
    // setTimeout(function() {
    //   $(".demo").fadeOut(200);
    //   },200);
  
  
  
  
  //   if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
       
  //     return (document.getElementById("demo").innerHTML =
  //     "Ingresa tu email")
      
  //   }
     
    // if( delivery == null || delivery.length == 0 || /^\s+$/.test(delivery) ) {
       
    //   return (document.getElementById("demo").innerHTML =
    //   "Selecciona el sector")
      
    // }
     
  //   if( whatsapp == null || whatsapp.length == 0 || /^\s+$/.test(whatsapp) ) {
       
  //     return (document.getElementById("demo").innerHTML =
  //     "Ingresa un número de WhatsApp");
     
  //   }

    // if(whatsapp||direccion||email||nombre||totalfp == textContent){
      
    //   setTimeout(function() {
    //     $(".demo").fadeOut(200);
    //     },200);
    //  }
  
     
     
  //   if( direccion == null || direccion.length == 0 || /^\s+$/.test(direccion) ) {
       
  //     return (document.getElementById("demo").innerHTML =
  //     "Selecciona la opciòn delivery y llena tu dirección con referencia")
      
  //   }
     
  
    // setTimeout(function(){ document.getElementById("demo").close() }, 400);
  
    setTimeout(function() {
      $(".demo").fadeOut(200);
      },200);
  
  
var cambio =document.querySelector('#resultadocambio').textContent;




var cambiofinal= "Su cambio es de:%20" + cambio;
    
  
  // var myWindow = window.open ("https://midominio.com/"+"Demo Ecommerce BurgerKings" + "%20" + "%0A"+"✅  _Pedido confirmado_" + "Orden N°"+orden + "%0A"+"_________________________" + "%0A"+"%0A"+
  //  "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Email*" +"%0A" + email +  "%20" + "%0A"+"%0A"+"*Costo Delivery*"+"%0A" + delivery + "%20" +"%0A"+ "%0A"+"*Dirección con referencia*"+"%0A" +direccion+"%0A"+totalf+ pedidof+ "%0A"+"%0A"+
  //   "%0A"+"%0A"+ "%0A" +"_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como  para recibir 15 minutos antes el link de Zoom. Empezamos puntual 😉👍");
  
  // var whatsapp_number ="&text=*Demo WhatsApp Ecommerce*" + "%0A"+"*WhatBulkSender - WhatsEcom - 2020*"+ "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"%0A"+"*Tu pedido es:*"+ "%0A"+mostrarpedidof+ "%0A"+"Subotal:"+"%20"+"$"+totalfp+ "%0A"+"Delivery:"+"%20"+"$"+delivery+".00"+ "%0A" +"*Total:*"+ "%20"+"$"+`${Number(delivery) + totalfp}`+ "%0A"+"_________________________"+ "%0A"+"%0A"+'*Datos del Cliente:*'+ "%0A"+retornafc+ "%0A"+"%20"+mostrarcedula+"%0A"
  // +"*Nombre:*" +"%20"+ nombre+"%0A"+"*Email:*" +"%20" + email+"%0A"+"*Teléfono:*"+"%20"+ whatsapp+"%0A"+"_________________________"+ "%0A"+"%0A"+opcionlocal+"%0A"+"*Dirección con referencia:*"+"%20" +direccion+"%0A"+"%20"+"%0A" +"_________________________"  + "%0A"+ retornapagos+"%0A"+ "%0A"+"Subotal:"+"%20"+"$"+totalfp+ "%0A"+"Delivery:"+"%20"+"$"+delivery+".00"+ "%0A" +"*Total:*"+ "%20"+"$"+`${Number(delivery) + totalfp}`+"%0A"+"%0A"+"*Traking code:*"+ "%20"+orden+"%0A"+"%0A" +"_WhatsEcom/WhatsApp Ecommerce - Recibe ordenes  de compra 24/7 a tu WhatsApp_";
  
  var whatsapp_number ="&text=*Demo WhatsApp Ecommerce*" + "%0A"+"*WhatBulkSender - WhatsEcom - 2020*"+ "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"*Tu pedido es:*"+ "%0A"+mostrarpedidof+ "%0A"+"Subotal:"+"%20"+ `$${totalfp.toFixed(2)}`+ "%0A"+"Delivery:"+"%20"+"$"+delivery+".00"+ "%0A" +"*Total:*"+ "%20"+"$"+`${(Number(delivery) + totalfp).toFixed(2)}`+ "%0A"+"_________________________"+ "%0A"+'*Datos del Cliente:*'+ "%0A"+retornafc+ "%0A"+"%20"+mostrarcedula+"%0A"
+ nombre+"%0A"+ email+"%0A"+ whatsapp+"%0A"+"_________________________"+ "%0A"+opcionlocal+"%0A" +direccion+"%0A" +"_________________________"  + "%0A"+ retornapagos+ "%0A"  +"*Total:*"+ "%20"+"$"+`${(Number(delivery) + totalfp).toFixed(2)}`+"%0A"+cambiofinal+"%0A"+"*Orden N°:*"+ "%20"+orden;
  
  
  
   var md = new MobileDetect(window.navigator.userAgent);
   if (md.mobile()) {
   
     window.open(document.getElementById("enviarwa").href = "https://api.whatsapp.com/send?phone=593996490956" + whatsapp_number);

   

   } else {
   
     window.open(document.getElementById("enviarwa").href = "https://web.whatsapp.com/send?phone=593996490956" + whatsapp_number);

    


   }
   
  
  
  
  }

  document.querySelectorAll(".modal-container img").forEach(el => {
    el.addEventListener("click", function(ev) {
    
      ev.stopPropagation();
      this.parentNode.classList.add("active");
      $('.carda').addClass('nosvemos');
    });
    
  });




 
 
  
  document.querySelectorAll(".modal-container ").forEach(el => {
    el.addEventListener("click", function(ev) {
      this.classList.remove("active");
      $('.carda').removeClass('nosvemos');
    });
  });

  $('.modalv').on('click', function(){$('.modalv').addClass('nosvemos2')})


$('.faccedula').on('click', function(){
  
  $('.datafac').addClass('showinputcedula');
  $('.datosfacturacion').removeClass('datoschao');

})



$('.consumidorsinfac').on('click', function(){
  

  $('.datafac').removeClass('showinputcedula');


  $('.datosfacturacion').removeClass('datoschao');
  $('#cedulafac')('showinputcedula');
  


})

$('.clientefac').on('click', function(){

  
  $('.datafac').removeClass('showinputcedula');

  $('.datosfacturacion').addClass('datoschao');

})




$('.deliveryope').on('click', function(){
    
  $('.opedetalle').addClass('showpocion');
  $('.diahora').removeClass('verdiahora');

  $('.formasdepagos').removeClass('quitarformasdepago');

})



//   $('.deliveryoper , .deliveryoperr').on('click', function(){
  

//     $('.opedetalle').removeClass('showpocion');



//     // $('#cedulafac')('showinputcedula');


//   })

$('.deliveryoper').on('click', function(){
    
  $('.diahora').addClass('verdiahora');


  $('.diahora').addClass('verdiahora');

  $('.formasdepagos').addClass('quitarformasdepago');

  // $('.formasdepagos').remove('.formasdepagos');
 

  

})







$('.deliveryoper , .deliveryoperr').on('click', function(){
  

  $('.opedetalle').removeClass('showpocion');



  // $('#cedulafac')('showinputcedula');


})

$('.deliveryoperr').on('click', function(){
  

  $('.diahora').removeClass('verdiahora');

  $('.formasdepagos').removeClass('quitarformasdepago');

  // $('#cedulafac')('showinputcedula');


})











