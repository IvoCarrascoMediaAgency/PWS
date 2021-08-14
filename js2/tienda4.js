/*
pedido_store : Variable del tipo objeto que se encargara de 
registrar que productos y en que cantidad han sido seleccionados
en el pedido
*/
const pedido_store = {
    /*PROPIEDAD : TIPO LISTA DE OBJETOS*/
    categories:{
      //CATEGORIAS DE PRODUCTOS A OFERTAR
      'C1':{
      items:{

        'I1':{
            name:'GRATIS 7 días',
                  price:0.00,
            qty:0,
            img:'img/whatsapp-marketing-gratis.webp',

            detalles:'<ul class="features"><li><i></i> Licencia GRATIS</li><li><i class="fas fa-stop-circle"></i> Mensajes y campañas ilimitadas</li><li><i "></i> Mensajes personalizados</li><li><i "></i> Cuentas de WhatsApp ilimitadas</li><li><i "></i> Chatbot/autorespuestas</li><li></i> Módulo de reportes</li><li><i "></i> Extractor de Grupos</li><li class="disabled-option"> <span class="">Filtro de Números</span></li><li><span class="">Instalación Gratuita</span></li><li><span class="">Importar contactos desde chats</span></li><li><span class="">Programar envíos</span></li></ul>',
            },
        
        'I2':{
            name:'Licencia Mensual',
                       price:19.99,
            qty:0,
            img:'img/whatsapp-masivo-precios-mensual.webp',
            detalles:'<ul class="features"><li><i></i> Licencia 1 mes</li><li><i class="fas fa-stop-circle"></i> Mensajes y campañas ilimitadas</li><li><i "></i> Mensajes personalizados</li><li><i "></i> Cuentas de WhatsApp ilimitadas</li><li><i "></i> Chatbot/autorespuestas</li><li></i> Módulo de reportes</li><li><i "></i> Extractor de Grupos</li><li class="disabled-option"><i "></i> <span class="">Filtro de Números</span></li><li><span class="">Instalación Gratuita</span></li><li><span class="">Importar contactos desde chats</span></li><li><span class="">Programar envíos</span></li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul>',
            },
  
        'I3':{
            name:'Licencia Trimestral',
           
            price:59.99,
            qty:0,
            img:'img/whatsapp-masivo-precios-3-meses.webp',
            detalles:'<ul class="features"><li><i></i> Licencia 3 mes</li><li><i class="fas fa-stop-circle"></i> Mensajes y campañas ilimitadas</li><li><i "></i> Mensajes personalizados</li><li><i "></i> Cuentas de WhatsApp ilimitadas</li><li><i "></i> Chatbot/autorespuestas</li><li></i> Módulo de reportes</li><li><i "></i> Extractor de Grupos</li><li class="disabled-option"><i "></i> <span class="">Filtro de Números</span></li><li><span class="">Instalación Gratuita</span></li><li><span class="">Importar contactos desde chats</span></li><li><span class="">Programar envíos</span></li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li></ul>',
            },
        'I4':{
            name:'Licencia Semestral',
           
            price:119.99,
            qty:0,
            img:'img/whatsapp-masivo-precios-6-meses.webp',
            detalles:'<ul class="features"><li><i></i> Licencia 6 meses</li><li><i class="fas fa-stop-circle"></i> Mensajes y campañas ilimitadas</li><li><i "></i> Mensajes personalizados</li><li><i "></i> Cuentas de WhatsApp ilimitadas</li><li><i "></i> Chatbot/autorespuestas</li><li></i> Módulo de reportes</li><li><i "></i> Extractor de Grupos</li><li class="disabled-option"><i "></i> <span class="">Filtro de Números</span></li><li><span class="">Instalación Gratuita</span></li><li><span class="">Importar contactos desde chats</span></li><li><span class="">Programar envíos</span></li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li><li><span class="masc">WhatsApp Ecomerce</span></li><li><span class="masc">Chat Multiagente Web</span></li></ul>',
            },
        'I5':{
        //NOMBRE DEL ITEM
        name:'Licencia Anual',
        //PRECIO BASE DEL ITEM
       
        price:239.99,
        //CANTIDAD ESCOGIDA DEL ITEM
        qty:0,
        //FUENTE DE LA IMAGEN
        img:'img/whatsapp-marketing-precios.webp',
        detalles:'<ul class="features"><li><i></i> Licencia 6 meses</li><li><i class="fas fa-stop-circle"></i> Mensajes y campañas ilimitadas</li><li><i "></i> Mensajes personalizados</li><li><i "></i> Cuentas de WhatsApp ilimitadas</li><li><i "></i> Chatbot/autorespuestas</li><li></i> Módulo de reportes</li><li><i "></i> Extractor de Grupos</li><li class="disabled-option"><i "></i> <span class="">Filtro de Números</span></li><li><span class="">Instalación Gratuita</span></li><li><span class="">Importar contactos desde chats</span></li><li><span class="">Programar envíos</span></li><li> <span class="masc">Soporte 24/7</span></li><li><span class="masc">Actualizaciones GRATIS</span></li><li><span class="masc">Capacitación Personalizada</span></li><li><span class="masc">WhatsApp Ecomerce</span></li><li><span class="masc">Chat Multiagente Web</span></li><li><span class="masc">Extensión Chrome</span></li><li><span class="masc">Envío Masivo a Bases de Datos</span></li></ul>',
        },
        
        
       
        
      },
        /*NOMBRE CATEGORIA*/
        namec:'Servicio Destacado:',
      },
      // 'C2':{
      //    items:{
          
      //     'I1':{
      //       //NOMBRE DEL ITEM
      //       name:'Mascara Led con Cuello 7 Colores',
      //       //PRECIO BASE DEL ITEM
      //       price:123.20,
      //       //CANTIDAD ESCOGIDA DEL ITEM
      //       qty:0,
      //       //FUENTE DE LA IMAGEN
      //       img:'equipo1.jpg',
      //       },
      //       'I2':{
      //       name:'LUPA CON PEDESTAL',
      //       price:127.00,
      //       qty:0,
      //       img:'equipo2.jpg',
      //       },
      //       'I3':{
      //       name:'EQUIPO 4 EN 1 MICRO GALVÁNICA',
      //       price:343.00,
      //       qty:0,
      //       img:'equipo3.jpg',
      //       },
      //       'I4':{
      //       name:'PRESOTERAPIA',
      //       price:518.00,
      //       qty:0,
      //       img:'equipo4.jpg',
      //       },
      //   },
      //   namec:'Equipos',
      // },
      // 'C3':{
      //   items:{
         
      //     'I1':{
      //       //NOMBRE DEL ITEM
      //       name:'CAMILLA FACIAL Y CORPORAL MÁS TABURETE',
      //       //PRECIO BASE DEL ITEM
      //       price:275.00,
      //       //CANTIDAD ESCOGIDA DEL ITEM
      //       qty:0,
      //       //FUENTE DE LA IMAGEN
      //       img:'mobiliario1.jpg',
      //       },
      //       'I2':{
      //       name:'CAMILLA FACIAL Y CORPORAL',
      //       price:350.00,
      //       qty:0,
      //       img:'mobiliario2.jpg',
      //       },
      //       'I3':{
      //       name:'MESA 3 NIVELES BLANCA CON CAJÓN',
      //       price:80.00,
      //       qty:0,
      //       img:'mobiliario3.jpg',
      //       },
      //       'I4':{
      //       name:'MESA DE 2 NIVELES CON CAJÓN',
      //       price:120.00,
      //       qty:0,
      //       img:'mobiliario4.jpg',
      //       },
      //   },
      //   namec:'Mobiliario',
      // }
    },
    // items:{
    // 'I1':{
    //   //NOMBRE DEL ITEM
    //   name:'Papas Fritas',
    //   //PRECIO BASE DEL ITEM
    //   price:1.99,
    //   //CANTIDAD ESCOGIDA DEL ITEM
    //   qty:0,
    //   //FUENTE DE LA IMAGEN
    //   img:'papas.png',
    // },
    // 'I2':{
    //   name:'Hamburguesa',
    //   price:2.99,
    //   qty:0,
    //   img:'hamburguesa.png',
    // },
    // 'I3':{
    //   name:'Pizza',
    //   price:1.99,
    //   qty:0,
    //   img:'pizza.png',
    // },
    // 'I4':{
    //   name:'Alitas BBQ',
    //   price:5.99,
    //   qty:0,
    //   img:'alitas.png',
    //   },
    // },
    //DATOS A CONTROLAR DEL USUARIO
    user_data:{
      user_name:{
        //VALOR ACTUAL EN EL CAMPO
        value:'',
        //ERROR A DESPLEGAR EN CASO DE NO RELLENAR CAMPO
        error:'Ingresa tu nombre completo',
      },
      user_phone:{
        value:'',
        error:'Ingresa un número de WhatsApp',
      },
      user_dir:{
        value:'',
        error:'Ingresa tu dirección con con referencia',
      },
      user_zone:{
        value:'',
        error:'Selecciona el sector',
      },
      user_mail:{
        value:'',
        error:'Ingresa tu email',
      }
    }
  };
  //CONTROLADORES DEL DIALOGO/MODAL
  var dialog = document.getElementById('myFirstDialog');    
  /*document.getElementById('show').onclick = function() {    
      //MOSTRAR DIALOGO
      dialog.show();    
  };*/    
  /*  document.getElementById('hide').onclick = function() {    
        //OCULTAR DIALOGO
        dialog.close();    
  };*/
  let menu_sections = '';    
  const categories = document.getElementById('menu-sections');
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    menu_sections = menu_sections + `<div class="section-item"><a href="#${key}a">${item.namec}</a></div>`;
  });
  categories.innerHTML = menu_sections;
  
  /*
  PARA LOS METODOS DE ALTERACION DE CANTIDAD ELEGIDA DE UNO U OTRO ITEM
  USAREMOS EL ID DE LA CATEGORIA Y EL ID DEL ITEM SELECCIONADO PARA CONTROLAR LAS CANTIDADES
  */
  const newCancel = (target,catg_id) => {
    //SE ELIMINAN LA CANTIDAD ASIGNADA A UN ITEM OBJETIVO (SE VUELVE 0)
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']=0;
    console.log(pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']);
    document.getElementById(`${catg_id}-${target}-qty`).value = pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
  }
  
  const newPlus = (target,catg_id) => {
    //SE LE SUMA 1 A LA CANTIDAD DEL ITEM OBJETIVO
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']++;
    document.getElementById(`${catg_id}-${target}-qty`).value =  pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
  }
  
  const newMinus = (target,catg_id) => {
    //SE LE RESTA 1 A LA CANTIDAD DEL ITEM OBJETIVO MIENTRAS EL RESULTADO SEA MAYOR O IGUAL A 0
    //ASI SE DEBEN EVITAR CANTIDADES NEGATIVAS
    if( pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']-1 >= 0){
    pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty']--;
    document.getElementById(`${catg_id}-${target}-qty`).value =  pedido_store.categories[`${catg_id}`]['items'][`${target}`]['qty'];
    addItemToShoppingCart();
    }
  }
  /*CON ESTA FUNCION GENERAMOS EL CONTROLADOR GRAFICO DE CADA ITEM
  EN FUNCION DE CUANTOS ITEMS TENGAMOS EN NUESTRA VARIABLE GLOBAL*/
  const ItemCreator = (itemList,catg_id) => {
  
    let IM = ``;
  
    Object.entries(itemList).forEach(([key,item],ind) => {
      IM = IM + 
      `<div class="item-card">
  
        <div class="item shadow mb-4">
          
          <div class="modal-container">
     
           <img class="item-image" src="${item.img}">
          </div>
          <div class="containerpro">

          <h4 class="item-price">$${item.price}</h4>
          <h3 class="item-title" id="">${item.name}</h3>
          <div class="item-details">
          <p class="item-price">${item.detalles}</p>
         
            
            <div class="item_cantidadg">
            <div class="item_cantidadt">
              <button id="${catg_id}-${key}-m" class="minus" ></button>
              <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${catg_id}-${key}-qty">
              <button id="${catg_id}-${key}-p" class="plus"></button>
            </div>    
            </div>                     
          </div>
          </div>
        </div>
      </div>`;
    });
  
    return IM;
  }
  //RECORREMOS CADA CATEGORIA
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    //GENERAMOS UN MENU CONTENEDOR POR CATEGORIA
    let container = document.createElement("section");
    container.id = `menu-container-${key}`;
    container.classList.add("item-menu");
  
    container.innerHTML = `<p class="pcategory" id=${key+"a"}>${item.namec}</p>`;//new added
  
  
  
  
    //GENERAMOS EL CONTENEDOR DE LOS PRODUCTOS DE LA CATEGORIA
    let menu_sec = document.createElement("div");
    menu_sec.id=key;
    menu_sec.classList.add("row");
    menu_sec.classList.add("owl-carousel");
    //GENERAMOS NUESTROS PRODUCTOS
    let menu_sec_items = ItemCreator(item.items,key);
    //ASIGNAMOS ETIQUETAS AL DIV OBJETIVO 
    menu_sec.innerHTML = menu_sec_items;
    //INSERTAMOS EN EL CONTENEDOR POR CATEGORIA LOS PRODUCTOS GENERADOS
    container.appendChild(menu_sec);
    //INSERTAMOS EN EL SLIDER NUESTRO CONTENEDOR DE LA CATEGORIA
    document.getElementById('slides-container').appendChild(container);
  });
  
  Object.entries(pedido_store.categories).forEach(([key,item],ind) => {
    Object.entries(item.items).forEach(([_key,_item],_ind)=> {
      document.getElementById(`${key}-${_key}-m`).addEventListener("click",() => {
        newMinus(_key,key);
      });
      document.getElementById(`${key}-${_key}-p`).addEventListener("click",() => {
        newPlus(_key,key);
      });
    });
  });
  
  Object.entries(pedido_store.user_data).forEach(([key,item],ind) => {
    document.getElementById(`${key}`).addEventListener("change",(ev) => {
      pedido_store.user_data[`${key}`] = ev.target.value;
    });
  });
  //CONTROLADOR DE EVENTO EN CASO DE SUBMIT
  
  document.getElementById(`gform`).addEventListener("submit",(ev) => {
      ev.preventDefault();
      let errors ='';
      //RECORREMOS CADA VALOR DEL OBJETO CONTROLADOR DE LA DATA DEL FORMULARIO
      Object.entries(pedido_store.user_data).forEach(([key,item],ind) => {
        //SI EL CAMPO PRESENTA VALOR '' Y EL MISMO TIENE UN ERROR A MOSTRAR
        //CARGAREMOS EN NUESTRO MODAL/DIALOGO EL MENSAJE DE ERROR DE DICHO CAMPO
        if( (item.value === '' || item.value==="*") && item.error !== ''){
         errors += `<h4>${item.error}</h4>`;
        }
      });
      if(errors !== ''){
        document.getElementById(`order-msg`).innerHTML = errors;
       
        //dialog.show();
        $(".orderDialog").fadeIn(1000);
        setTimeout(function() {
          $(".orderDialog").fadeOut(1000);
          //dialog.close();
        },2000);
      }
  });


  
   
  const comprarButton = document.querySelector('.comprarButton');
  comprarButton.addEventListener('click', comprarButtonClicked);
  
  const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
   
  );
  
  
  /*
  function addToCartClicked(event) {
  
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;
    const itemCantidad = item.querySelector('.item_cantidad').value;
    const itemtotal = item.querySelector('.item_total');
  
    //addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad, itemtotal);
  }
  */
  
  //FUNCION PARA GENERAR LOS ITEMS QUE SE ESTEN SOLICITANDO EN EL CARRITO
  //SI Y SOLO SI ESTOS TIENEN UNA CANTIDAD SOLICITADA MAYOR A 0
  const ItemCheckout = (itemList) => {
    let productoslist="";
    let productoslist2="";
    let productocategory="";
    let cart_content = '';
  
    var productoslistcategorya=document.getElementById('fantasma');
    var productoslistcategorya2=document.getElementById('entry.1625517509');
    var pushlistadeproducots=document.querySelector('.pedidocli');
  
    Object.entries(itemList).forEach(([key,_item],_ind) =>{
      let cart_catg = '';
      Object.entries(_item.items).forEach(([_key,item],ind) => {
        if(cart_catg === '' && item.qty > 0){
          cart_catg = `<h4>${_item.namec}</h4>`;
          cart_content = cart_content + cart_catg;
          
        }
      });
  
      Object.entries(_item.items).forEach(([_key,item],ind) => {
      if(item.qty > 0){
      cart_content = cart_content + 
      `<div class=" shoppingCartItem">
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
          <button id="${key}-${_key}-m-s" class="minus" ></button>
          <input class="quantity item_cantidad " type="number" name="" min="0" value=${item.qty}  id="${key}-${_key}-qty">
          <button id="${key}-${_key}-p-s" class="plus"></button>
        </div>
        <span class="xcerrar">
          <p class="item-total mb-0 shoppingCartItemTotal itemtotal" >$${Number.parseFloat(item.qty*item.price).toFixed(2)}</p>
  
          <button class="btn btn-danger buttonDelete" type="button" id="${key}-${_key}-c"><span class="icon-bin"></span> </button>
        
        </span>
      </div>`
  
      productoslist += item.qty+"%20"+"*x*"+"%20"+"*|*"+"%20"+item.name+"%20"+"*|*"+"%20"+"precio"+"%20"+"$"+ item.price+"%20"+"*|*"+"%20"+"*total:*"+"%20"+"$"+(item.qty*item.price).toFixed(2)+"\n"+"%0A";
        
      productoslist2 += item.qty+" "+"x"+" "+"|"+" "+item.name+"\n";
      
  
        }
      });
    });
    productoslistcategorya.innerHTML=`${productoslist}`;
    productoslistcategorya2.innerHTML=`${productoslist2}`;
    return cart_content;
  }
  
  function addItemToShoppingCart(/*itemTitle, itemPrice, itemImage, itemCantidad, itemtotal*/) {
  
    document.getElementById('cart_list').innerHTML = ItemCheckout(pedido_store.categories);
    let cart_amt =0;
    Object.entries(pedido_store.categories).forEach(([key,item],ind) =>{
      Object.entries(item.items).forEach(([_key,_item],_ind) => {
      if(_item.qty > 0){
        document.getElementById(`${key}-${_key}-m-s`).addEventListener("click",() => {
          newMinus(_key,key);
        });
        document.getElementById(`${key}-${_key}-p-s`).addEventListener("click",() => {
          newPlus(_key,key);
        });
        document.getElementById(`${key}-${_key}-c`).addEventListener("click",() => {
          newCancel(_key,key);
        });
        cart_amt += _item.qty;
      }
      });
    });
     if(cart_amt > 0){
      document.getElementById('cart_amt').innerHTML = `${cart_amt}`;
      setTimeout(function() {
      $(".unowhat").fadeIn(1000);
      },500);
     }
     else{
      setTimeout(function() {
      $(".unowhat").fadeOut(1000);
      },500);
  }
   
    updateShoppingCartTotal(pedido_store.categories);
  }


  
  
  
    function ertd(){
  
    var leteryu = document
      .getElementById('cardnegocioid')
      .innerHTML =  shoppingCartItemsContainer.childElementCount;
  
    }
  
  
    
  
  function updateShoppingCartTotal(itemList) {
  
    let cartTotal = 0;
    Object.entries(itemList).forEach(([key,item],ind) => {
      //cartTotal += item.price*item.qty;
      Object.entries(item.items).forEach(([_key,_item],_ind)=> {
        cartTotal += _item.price*_item.qty;
      });
    });
  
    
    document.querySelector('.shoppingCartTotal').innerHTML=`$${Number.parseFloat(cartTotal).toFixed(2)}`;
  
  
    
    let cartTotal3 = cartTotal;
  
  
    var qqq=document.querySelector('.shoppingCartTotal2').innerHTML=`$${cartTotal3.toFixed(2)}`;
    // console.log("updateShoppingCartTotal -> qqq", qqq)
  
    
    var qwey=qqq;
  
    document.getElementById('entry.985986529').innerHTML=qwey;
  
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal3.toFixed(2)}`;
  
  
    let cartTotal4 = cartTotal;
  
  
    var selectoptionq=document.getElementById('entry.686290451');
    
    
    selectoptionq.addEventListener('change', function(){
      
      var recepoptionq=selectoptionq.value;
    
       document.querySelector('.deliverysub2').innerHTML=`$${Number(recepoptionq).toFixed(2)}`;
    
      cartTotal4=cartTotal + Number(recepoptionq);
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal4.toFixed(2)}`;
    
    });  // bubtotal ,bubtotal 2 y cambio 
  
  
  
  
  
  
  
    var def=document.querySelector('.monto');
  
    def.addEventListener('keyup', function(){
  
      var recepoptionc=def.value;
  
       document.querySelector('.monto').innerHTML=`$${Number(recepoptionc).toFixed(2)}`;
  
       var wert=document.getElementById('totalwa3').textContent;
  
       var total4a= Number(wert.replace('$',''));
  
    var  cartTotal4a= recepoptionc - total4a ;
  
    // var totalfp = Number(
    //   totalf.replace('$', ''));
    
      document.getElementById('entry.580204725').innerHTML=`$${cartTotal4a.toFixed(2)}`;
  
    
      if(recepoptionc===''){
  
        document.getElementById('entry.580204725').innerHTML=`$0,00`;
      }
  });
  
  
  
  
  
  // 
  
  let cartTotal2 = cartTotal;
  
  
  var selectoption=document.getElementById('entry.686290451');
  
  
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
    
    var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
  
    var qxx=eee;
      
    document.getElementById('entry.802449909').innerHTML=qxx;
  
  
  });
  
  
  var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
  
  var qxx=eee;
    
  document.getElementById('entry.802449909').innerHTML=qxx;
  
  // 
  
  
  
  // 
  
  var quitardelivery2 = document.querySelector(".deliveryoperr");
  
  
  
  quitardelivery2.onclick = function(){
  
    document.querySelector('.deliverysub2').innerHTML=`$${Number(0).toFixed(2)}`;
  
    cartTotal2=cartTotal+ Number(0);
  
  
    document.querySelector('.shoppingCartcambio').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
    
  
    document.querySelector('.deliverysub').innerHTML=`$${Number(0).toFixed(2)}`;
  
    cartTotal2=cartTotal+ Number(0);
  
   
  
    
  
    var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
  }
  
  
  
  
  
  // document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
  
  
    var eee=document.querySelector('.shoppingCartTotaldelivery').innerHTML=`$${cartTotal2.toFixed(2)}`;
    
  
  
  
  }
  
  
  
  
  
  function removeShoppingCartItem(event) {
    /*const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();*/
    updateShoppingCartTotal(pedido_store.categories);
   
  }
  
  function quantityChanged(event) {
    /*const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;*/
    updateShoppingCartTotal(pedido_store.categories); 
  }
  
  
  
  function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
   
  
  }
  
  
  
  
  $(".ordernumber").val(function(){
    return document.getElementById('intro').innerHTML=Math.floor(Math.random() * 999) + 1000
  
  })
  
  
  
  
  
  
  function goToPage(){
    
  
    var orden = document.querySelector('.ordernumber').value;  
  
    // var email = document.getElementById('entry.1156212193').value;
    // var whatsapp = document.getElementById('entry.1632691641').value;
  
    // var delivery = document.getElementById('entry.686290451').value;
  
    // var direccion = document.getElementById('entry.150273747').value;
    
    // var nombre = document.getElementById('entry.2030044025').value;
  
    var totalf = document.getElementById('totalwa').textContent;
  
  
    var data1 = document.getElementsByName('entry.2030044025');
  
  
    for (var i = 0, length = data1.length; i < length; i++) {
      if (data1[i]) {
     
        var nombre = (data1[i].value+"%0A");
    
     
    
      }
    
      if (nombre=== undefined) {
        nombre = '';
        
    
    }
  
    if (nombre=== "%0A") {
      nombre = '';
      
  
  }
    }
  
    var data2 = document.getElementsByName('entry.1156212193');
  
  
    for (var i = 0, length = data2.length; i < length; i++) {
      if (data2[i]) {
     
        var email = (data2[i].value+"%0A");
    
     
    
      }
    
      if (email=== undefined) {
        email = '';
        
    
    }
  
    if (email=== "%0A") {
      email = '';
      
  
  }
    }
  
    var data3 = document.getElementsByName('entry.1632691641');
  
  
    for (var i = 0, length = data3.length; i < length; i++) {
      if (data3[i]) {
     
        var whatsapp = (data3[i].value+"%0A");
    
     
    
      }
    
      if (whatsapp=== undefined) {
        whatsapp = '';
        
    
    }
  
    if (whatsapp=== "%0A") {
      whatsapp = '';
      
  
  }
    }
  
  
    var data4 = document.getElementsByName('entry.686290451');
  
  
    for (var i = 0, length = data4.length; i < length; i++) {
      if (data4[i]) {
     
        var delivery = (data4[i].value);
    
     
    
      }
    
      if (delivery=== undefined) {
        delivery = '';
        
    
    }
  
    if (delivery=== "%0A") {
      delivery = '';
      
  
  }
  
  
    }
  
  
  //   var data5 = document.getElementsByName('entry.803987817');
  
  
  //   for (var i = 0, length = data5.length; i < length; i++) {
  //     if (data5[i]) {
     
  //       var direccion = ("*Dirección:*"+"%20"+data5[i].value+"%0A");
    
     
    
  //     }
    
  //     if (direccion=== undefined) {
  //       direccion = '';
        
    
  //   }
  
  //   if (direccion=== "%0A") {
  //     direccion = '';
      
  
  // }
  
  
  //   }
  
  
  
    var totalfp = Number(
      totalf.replace('$', '')
    );
    
    // if(  totalfp <= 10|| /^\s+$/.test(totalfp) )  {
    //   return (document.getElementById("demo").innerHTML =
    //   "Tu pedido mínimo debe ser de $10.00")
  
    
  //     document.getElementById("demo").innerHTML =
  //      "Aún no haz selecionado prodcutos"
  
  //         $('.demo').addClass('showmsg');
  
  
  //         setTimeout(function() {
  //           $(".showmsg").fadeOut(1500);
  //           },500);
          
    
  // }
  
  
  var dia = document.getElementById('entry.1164560529').value;
    
  var hora = document.getElementById('entry.404593967').value;
  
  
  
    
  var reservad = document.getElementsByName('entry.1067299390');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
  
  
        var geolocal="%0A"+document.getElementById('entry.1441018699').textContent;
  
  
      var direccion = document.getElementById('entry.803987817').value;
      //docs.google.com/forms/d/e/1FAIpQLSclWHdimbOn2b18CPRaSz5RVoeLA-pxJudums5VtjnYhuVSRg/viewform?usp=pp_url&entry.1441018699=geolocalizacion&entry.2092178738=direccionmaps
     
  
      var dmap="%0A"+document.querySelector(".address").textContent;
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value+"%20"+direccion+dmap+geolocal);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
  
      // if(geolocal==="%0A                            "){
      //   geolocal = '';
  
      // }
      // if(dmap="%0A                            "){
      //   dmap = '';
  
      // }
  
      // if(direccion="%0A                            "){
      //   direccion = '';
  
      // }
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal=== "%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  var reservad = document.getElementsByName('entry.398428276');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
      var dia = document.getElementById('entry.1164560529').value;
    
  var hora = document.getElementById('entry.404593967').value;
  
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value+"%0A" +dia+"%20"+hora);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal==="%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  var reservad = document.getElementsByName('entry.1612018657');
      
      
  for (var i = 0, length = reservad.length; i < length; i++) {
    if (reservad[i].checked===true) {
  
      
  
  
      var opcionlocal = ("Opción de entrega"+"%0A"+reservad[i].value);
      // return  (document.getElementById("").innerHTML =
      //   "Ingresa tu número de cédula");
    
    }
  
    if ( opcionlocal=== undefined) {
      opcionlocal = '';
    
  }
  
  if (opcionlocal==="%0A") {
    opcionlocal = '';
    
  }
  
  }
  
  
  
  
  
  
  
  
  
  var radios = document.getElementsByName('entry.696366128');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="💳*Forma de pago:* %20"+ (radios[i].value);
  
   
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.1405646315');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*💳Forma de pago:* %20"+ (radios[i].value);
  
      var cambio="%0ACambio:%20"+ document.getElementById('entry.580204725').textContent;
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (cambio=== undefined) {
    cambio = '';
    
  
  }
  
  
  if (cambio=== "%0A") {
    cambio = '';
    
  
  }
  
  
  
  
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.1179942020');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*💳Forma de pago:* %20"+ (radios[i].value)+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+"%0A"+"*Haz una captura y envíanos por aquí* 👇";
   
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  var radios = document.getElementsByName('entry.2095367105');
  
  
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
   
      var retornapagos ="*💳Forma de pago:* %20"+ (radios[i].value);
  
   
  
    }
  
    if (retornapagos=== undefined) {
      retornapagos = '';
      
  
  }
  
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
  
  // cedula para facturar
  // var facturafc = document.getElementsByClassName('facf');
  
  
  // $('div.myClass');
  
  // $('.eti4').on('click', function(){
  //   $('.datos4').addClass('show btnpagos');
  //   $('.datos1').removeClass('show btnpagos');
  //   $('.datos2').removeClass('show btnpagos');
  //   $('.datos3').removeClass('show btnpagos');
  // })
  
  // var wert="";
  
  // var wsd=document.getElementById('entry.709227128');
  
  
   
  //     if (document.getElementById("entry.709227128").checked = true) {
     
  //       var retornafc = wsd.value;
    
    
  //     }
    
  //     if (retornafc=== undefined) {
  //       retornafc = '';
        
  //     }
  
      var fact = document.getElementsByName('entry.709227128');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value+"%0A");
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
  
      }
  
      var fact = document.getElementsByName('entry.2016983664');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value+"%0A");
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
  
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
      }
  
      var fact = document.getElementsByName('entry.1758756268');
  
  
      for (var i = 0, length = fact.length; i < length; i++) {
        if (fact[i].checked) {
       
          var mostrarfac = (fact[i].value+"%0A");
      
       
      
        }
      
        if (mostrarfac=== undefined) {
          mostrarfac = '';
          
      
      }
  
  
      if (retornapagos=== "%0A") {
        retornapagos = '';
        
      
      }
      }
  
  
  
  
  
      
  var mostrarcedula=document.getElementById('entry.2420597').value+"%0A";
  
  
  
  
  
  
  
  var factm= document.getElementsByName('entry.2420597');
  
  
  for (var i = 0, length = factm.length; i < length; i++) {
    if (factm[i].checked) {
   
      var mostrarcedula = (factm[i].value+"%0A");
  
   
  
    }
  
    if (mostrarcedula=== undefined) {
      mostrarcedula = '';
      
  
  }
  if (retornapagos=== "%0A") {
    retornapagos = '';
    
  
  }
  }
  
    
  
  var mostrarpedidof=document.querySelector('.fantasma').textContent;
  
  // if( mostrarpedidof === ''|| /^\s+$/.test(totalfp) )  {
  //   document.getElementById("demo").innerHTML =
  //   "Aún no haz selecionado productos "
  
  // }
    
  // var mostrarpedidof2=document.querySelector('.ter').textContent;
  // if(mostrarpedidof2 == null || mostrarpedidof2 .length == 0 || /^\s+$/.test(mostrarpedidof2 )) {
  //   alert("Aún no seleccionas productos 😅");
  
  // }
  
  if(mostrarpedidof == null || mostrarpedidof .length == 0 || /^\s+$/.test(mostrarpedidof )) {
    alert("Aún no seleccionas productos 😅");
    return false;
  }

  if(nombre == null || nombre .length == 0 || /^\s+$/.test(nombre )) {
    alert("Llena el campo con tus nombres completos 😅");
    return false;
  }
    
  if(email == null || email .length == 0 || /^\s+$/.test(email )) {
    alert("Ingresa tu mejor correo electrónico 😅");
    return false;
  }
    
  if(whatsapp == null || whatsapp .length == 0 || /^\s+$/.test(whatsapp )) {
    alert("Ingresa tu número de WhatsApp 😅");
    return false;
  }
    
  
  // if(totalfp<= 10 || /^\s+$/.test(totalfp)) {
  //   alert("tu pedido minimó debe ser de $100");
  //   return false;
  // }
  
    // if(  totalfp <= 10|| /^\s+$/.test(totalfp) )  {
      // return (document.getElementById("demo").innerHTML =
      // "Tu pedido mínimo debe ser de $10.00")
    
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ','');
  //   var  mapi = 'https://maps.google.com/?q='+zx;
  
  //   // mapi.innerHTML=`${mapi}`;
  
  //   document.getElementById('entry.1441018699').innerHTML=mapi;
  
  // $("#latitude").change(function() {
  //   //Si el checkbox está seleccionado
  //   if($(this).is(":change")) {
      
  //     document.getElementById('entry.1441018699').innerHTML=mapi;
  
  //   }
  //   else {
  //     alert("El checkbox no está seleccionado");
  //   }
  
   
  
    
  //   });
    
    
  
  
  
  
  
  // var mapi="";
  
  // var insertmapgs=document.getElementById("entry.1441018699");
  
  
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ',''); 
  // // "-0.0897748,-78.4149483"
  
  
  // mapi = 'https://maps.google.com/?q='+zx;
  
  
  //     insertmapgs.innerHTML=`${mapi}`;
    
  
  
  
  
  
  // var billete= document.getElementById('entry.580204725').textContent;
  
  
  // for (var i = 0, length = billete.length; i < length; i++) {
  //   if (billete[i].checked) {
   
  //     var cambio = (billete[i].value+"%0A");
  
   
  
  //   }
  
  //   if (cambio=== undefined) {
  //     cambio = '';
      
  
  // }
  // if (cambio=== "%0A") {
  //   cambio = '';
    
  
  // }
  // }
  
  // var myWindow = window.open ("https://midominio.com/"+"Demo Ecommerce BurgerKings" + "%20" + "%0A"+"✅  _Pedido confirmado_" + "Orden N°"+orden + "%0A"+"_________________________" + "%0A"+"%0A"+
  //  "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Email*" +"%0A" + email +  "%20" + "%0A"+"%0A"+"*Costo Delivery*"+"%0A" + delivery + "%20" +"%0A"+ "%0A"+"*Dirección con referencia*"+"%0A" +direccion+"%0A"+totalf+ pedidof+ "%0A"+"%0A"+
  //   "%0A"+"%0A"+ "%0A" +"_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como  para recibir 15 minutos antes el link de Zoom. Empezamos puntual 😉👍");
  
  
  
  // var myWindow = window.open("https://midominio.com/"+"*Demo Ecommerce FastFood*" + "%20" + "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"%0A"+"*Tu pedido es:*"+ "%0A"+ "%0A"+mostrarpedidof+ "%0A"+ "%0A"+"*Total:*"+ "%20"+totalfp+ "%0A"+"_________________________"+ "%0A"+"%0A"+
  //  "*Nombre:*" +"%20"+ nombre+"%0A"+"*Email:*" +"%20" + email+"%0A"+"*Costo Delivery:*"+"%20" + delivery+"%0A"+"*Dirección con referencia:*"+"%20" +direccion+"%0A" +"_________________________"  + "%0A"+"%0A"+"*Forma de pago:*"+"%0A"+ retornapagos+"%0A"+"%0A"+"*Total:*"+ "%20"+totalfp+"%0A"+"%0A"+ "_Para ver más demos ingresa al siguiente link:_"+"%0A");
  
  
  
  // }
  
  
  
  
  // var whatsapp_number ="&text=*Demo WhatsApp Ecommerce*" + "%0A"+"*WhatBulkSender - WhatsEcom - 2020*"+ "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+"%20"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"*Tu pedido es:*"+ "%0A"+mostrarpedidof+ "%0A"+"Subotal:"+"%20"+ `$${totalfp.toFixed(2)}`+ "%0A"+"Delivery:"+"%20"+"$"+(Number(delivery)).toFixed(2)+ "%0A" +"*Total:*"+ "%20"+ "$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+ "%0A"+"_________________________"+ "%0A"+'*🙂Datos del Cliente:*'+ "%0A"+mostrarfac+"%20"+mostrarcedula+nombre+email+whatsapp+"%20"+"_________________________" +"%0A"+"*📍Datos de entrega:*"+"%0A"+opcionlocal+"%0A" +"_________________________"  + "%0A"+ retornapagos+ "%0A"  +"*Subtotal:*"+ "%20"+"$"+ totalfp.toFixed(2)+"%0A"+"*Delivery:*"+"%20"+"$"+`${(Number(delivery)).toFixed(2) }`+"%0A"+"*Total:*"+ "%20"+"$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+"%0A"+"*Orden N°:*"+ "%20"+orden;
    
  
  
  var whatsapp_number ="&text=*Orden exitosa*" + "%0A"+"*WhatsBulkSender-2021*"+ "%0A"+"✅ *Detalle de la orden:*"+"%0A"+"_Orden N°_"+"%20"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+mostrarpedidof+ "%0A"+"*Total:*"+ "%20"+ "$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+ "%0A"+"_________________________"+ "%0A"+'*🙂Datos del Cliente:*'+ "%0A"+mostrarfac+"%20"+mostrarcedula+nombre+email+whatsapp+"%20"+"_________________________" +"%0A"+ retornapagos+cambio+"%0A"+"*Total:*"+ "%20"+"$"+`${(Number(delivery) + Number(totalfp.toFixed(2))).toFixed(2)}`+"%0A"+"%0A"+"*Orden N°:*"+ "%20"+orden;
    
    
    
    
     var md = new MobileDetect(window.navigator.userAgent);
     if (md.mobile()) {
     
  
    //   if (mostrarpedidof===''){
  
     
     
    //     document.getElementById("demo").innerHTML =
    //        "Aún no haz selecionado prodcutos"
  
    //       $('.demo').addClass('showmsg');
  
  
    //       setTimeout(function() {
    //         $(".showmsg").fadeOut(1500);
    //         },500);
          
        
        
  
  
    //     // return (document.getElementById("demo").innerHTML =
    //     //   "Aún no haz selecionado prodcutos")
    //   }
    //  else{
      window.open(document.getElementById("enviarwa").href = "https://api.whatsapp.com/send?phone=593996517199" + whatsapp_number);
    //  }
        
      
  
    
       
  
      
     
  
     } else {
     
       window.open(document.getElementById("enviarwa").href = "https://web.whatsapp.com/send?phone=593996517199" + whatsapp_number);
  
      
  
  
     }
  
  
   
  
     
  }
  
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
  
  
  // stylos input
  
  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  
  $(document).ready(function(){
    var altura =$('.row-centered').offset().top;
    $(window).on('scroll', function(){
      if ($(window).scrollTop()>= altura){
        $('.row-centered').addClass('row-centered2');
      } else{
        $('.row-centered').removeClass('row-centered2');
      }
    })
  });
  
  $('.plus').on('click', function(){
    $('#cardnegocioid').addClass('mostrarcart');
  
  })
  
  var wer=document.querySelector('.separatescrol').textContent;
  
  function sdf(){
  
  
  if(wer=""){
  
    $('.psinproductos').addClass('msinproductos');
  }
  
  
  }
  
  // $('#cardnegocioid').on('click', function(){
  //   $('#nav').addClass('mostrarmenu2');
  //   $('#cardnegocioid').addClass('chaoboton');
  // })
  
  
  
  
  
  $('#cardnegocioid').on('click', function(){
    $('#nav').addClass('mostrarmenu2');
   
    $('#cardnegocioid').addClass('chaoboton');
  })

  
  $('.continuar,.but34').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    $('.hul2').addClass('mostrarmenu3');
    
  })
  

   $('.seguirc,.cerrardata').on('click', function(){
    $('#nav').removeClass('mostrarmenu2');
    $('.hul2').removeClass('mostrarmenu3');
    $('#cardnegocioid').removeClass('chaoboton');
  })

  const images = document.querySelectorAll('.item-image'); 

  const titles = document.querySelectorAll('.item-title'); 
  const price = document.querySelectorAll('.item-price');

  const cantidad = document.querySelectorAll('.item_cantidadg');

const containerimage = document.querySelector('.container-img');


const imageContainer =document.querySelector('.img-show');

const copy = document.querySelector('.copy');

const closeModal = document.querySelector('.bx.bx-x');

  images.forEach(image =>{
    image.addEventListener('click',()=>{
addImage(image.getAttribute('src'),image.getAttribute('alt'));


   
    })

  })

titles.forEach(titlesf =>{
  titlesf.addEventListener('click',()=>{


  })
})

 
const addImage = (srcImage, altImage)=>{
  containerimage.classList.toggle('move');
  imageContainer.classList.toggle('show');
  imageContainer.src = srcImage;
  copy.innerHTML = altImage;

  
 
}

// const addTitle = (titlef)=>{
//   containerimage.classList.toggle('move');
//   imageContainer.classList.toggle('show');

//   titles.innerHTML = ;

  
 
// }


closeModal.addEventListener('click', ()=>{

  containerimage.classList.toggle('move');
  imageContainer.classList.toggle('show');
})


  // $('.seguirc').on('click', function(){$('.derechafinal').addClass('mostrarmenu2');$('#cardnegocioid').addClass('chaoboton');})

  // $('.continuar').on('click', function(){
    
  //   $('#cardnegocioid').removeClass('mostrarcart');
  // })
  
  // $('#cardnegocioid', function(){
  //   $('#nav').addClass('mostrarmenu2');
  // se auto ejecuta })
  
  // $('.seguirc ,.continuar').on('click', function(){
  //   $('#nav').removeClass('mostrarmenu2');
  //   $('#cardnegocioid').removeClass('chaoboton');
  // })
  
  
  // $('.mostrarmenu2').on('click', function(){
  //   $('#nav').removeClass('mostrarmenu2');
  //   // $('#nav').removeClass('mostrarmenu2');
  //   $('#cardnegocioid').removeClass('chaoboton');
  
  // })
  
  function limpiarformas(){
  
    document.getElementById("entry.1405646315").checked = false;
  
   
  
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.2095367105").checked = false;
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
   
   
  }
  
  function limpiarformase(){
  
    document.getElementById("entry.696366128").checked = false;
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.2095367105").checked = false;
   
  }
  
  function limpiarformaspl(){
  
    document.getElementById("entry.1405646315").checked = false;
    document.getElementById("entry.696366128").checked = false;
    document.getElementById("entry.2095367105").checked = false;
  
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
   
  }
  
  function limpiarformaspy(){
  
    document.getElementById("entry.1405646315").checked = false;
    document.getElementById("entry.1179942020").checked = false;
    document.getElementById("entry.696366128").checked = false;
    var fdg=document.getElementById('entry.1280846489').value='';
    
    document.getElementById('entry.580204725').textContent='';
   
  }
  
  
  // limpiar factura
  
  
  function limpiarfac(){
  
    document.getElementById("entry.2016983664").checked = false;
    document.getElementById("entry.1758756268").checked = false;
   
   
  }
  function limpiarfac(){
  
    document.getElementById("entry.2016983664").checked = false;
    document.getElementById("entry.1758756268").checked = false;
   
   
  }
  
  
  function limpiarconsu(){
    
  
    document.getElementById('entry.2420597').value = '';
    document.getElementById("entry.709227128").checked = false;
    document.getElementById("entry.1758756268").checked = false;
  
  }
  
  
  
  function limpiarcliente(){
  
    document.getElementById('entry.2420597').value = '';
    document.getElementById("entry.709227128").checked = false;
  
    document.getElementById("entry.2016983664").checked = false;
  
    $('.datosfacturacion').addClass('datoschao');
  }
  
  
  
  
  function linpiarreserdomi(){
   
    document.getElementById('entry.1441018699').textContent='';
    
  
    document.getElementById("entry.1067299390").checked = false;
    document.getElementById('entry.686290451').value = '0';
    document.getElementById('entry.803987817').value = '';
  
    document.getElementById("entry.398428276").checked = false;
    document.getElementById('entry.1164560529').value = '0';
    document.getElementById('entry.404593967').value = '';
  
   
  
   limpiaringd();
   limpiaringdmap();
   
   document.getElementById("entry.2092178738").textContent='';
    // linpiarreservar();
    // linpiardelivery();
  //  document.querySelector('#totalwa p').textContent='0.00';
  
  }
  
  
  function linpiarreservar(){
  
    document.getElementById("entry.398428276").checked = false;
    document.getElementById("entry.1612018657").checked = false;
  
    document.getElementById('entry.1164560529').value = '0';
    document.getElementById('entry.404593967').value = '';
  
  
  }
  
  function linpiardelivery(){
  
  
  
    document.getElementById("entry.696366128").checked = false;
  
    document.getElementById("entry.1405646315").checked = false;
    
    document.getElementById("entry.1179942020").checked = false;
    
    document.getElementById("entry.2095367105").checked = false;
  
  
    limpiaringd();
  
    limpiaringdmap();
    document.getElementById("entry.1067299390").checked = false;
    
  document.getElementById("entry.1612018657").checked = false;
  
    document.getElementById('entry.686290451').value = '0';
    document.getElementById('entry.803987817').value = '';
    // document.querySelector('#latitude').textContent='';
    // document.querySelector('#address').textContent='';
    document.getElementById('entry.1441018699').textContent='';
    document.getElementById('entry.2092178738').textContent='';
    document.getElementById("entry.1441018699").textContent = '';
  
    document.getElementById('entry.1280846489').value='';
  
  document.getElementById('entry.580204725').textContent='';
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  
  function limpiaringd(){
  
  
    document.getElementById("entry.2092178738").checked = false;
  
  
  }
  
  function limpiaringdmap(){
  
  
    document.getElementById("entry.150273747").checked = false;
  
  
  }
  
  
  
  
  $('.consumidorsinfac').on('click', function(){
    
  
    $('.datafac').removeClass('showinputcedula');
  
  
    $('.datosfacturacion').removeClass('datoschao');
    $('#cedulafac')('showinputcedula');
    
  
  
  })
  
  $('.faccedula').on('click', function(){
    
    $('.datafac').addClass('showinputcedula');
    $('.datosfacturacion').removeClass('datoschao');
  
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
  
  $('.mapalocor').on('click', function(){
    
  
    $('.direcreg').addClass('showpocion');
  
    $('.mapcanvas').removeClass('showcanvas');
    $('.googlemaps').removeClass('googledisplay');
  
  })
  
  
  
  $('.mapalocor2').on('click', function(){
    
  
    $('.direcreg').removeClass('showpocion');
  
    $('.mapcanvas').addClass('showcanvas');
  
    $('.googlemaps').addClass('googledisplay');
  
  
  })
  
  
  
  var map;
  
  function initialize() {
  
    var mapOptions = {
        center: new google.maps.LatLng(-0.1769941, -78.478394,17),
        zoom: 17
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
    // Create the DIV to hold the control and call the constructor passing in this DIV
    var geolocationDiv = document.createElement('div');
    var geolocationControl = new GeolocationControl(geolocationDiv, map);
  
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(geolocationDiv);
  
    // map.addListener("click", (event) => {
    //   addMarker(event.latLng);
    // });
  
    // addMarker(mapOptions);
  
  
  }
  
  function GeolocationControl(controlDiv, map) {
  
    // Set CSS for the control button
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#25d366';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '1px';
    controlUI.style.borderColor = 'white';
    controlUI.style.height = '40px';
    controlUI.style.borderRadius = '5px';
    controlUI.style.zIndex = '1000';
    controlUI.style.width= '200px';
    controlUI.style.marginTop = '50px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to center map on your location';
    controlDiv.appendChild(controlUI);
  
    // Set CSS for the control text
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '13px';
    controlText.style.color = 'white';
    controlText.style.paddingLeft = '10px';
    controlText.style.paddingRight = '10px';
    controlText.style.marginTop = '8px';
    controlUI.style.zIndex = '1000';
    controlText.innerHTML = 'Pulsa aquí para seleccionar tu ubicación';
    controlUI.appendChild(controlText);
  
    // Setup the click event listeners to geolocate user
    google.maps.event.addDomListener(controlUI, 'click', geolocate);
  }
  
  
  
  
  // var qw= document.getElementById('latitude').textContent;
  
  
  // var qa=qw.replace('(','');
  // var az=qa.replace(')','');
  // var zx=az.replace(' ','');
  //   var  mapi = 'https://maps.google.com/?q='+zx;
  
  //   // mapi.innerHTML=`${mapi}`;
  
  //   document.getElementById('entry.1441018699').innerHTML=mapi;
  
  // $("#latitude").change(function() {
  //   //Si el checkbox está seleccionado
  //   if($(this).is(":change")) {
      
  //     document.getElementById('entry.1441018699').innerHTML=mapi;
  
  //   }
  //   else {
  //     alert("El checkbox no está seleccionado");
  //   }
  
    
  //   });
  
  
  function geolocate() {
    
  
    if (navigator.geolocation) {
  
        navigator.geolocation.getCurrentPosition(function (position) {
  
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
            let post='';
  
  
  
  
      var latDiv =document.querySelector('#latitude').innerHTML=pos;
  
    
  var sw=document.getElementById('latitude').textContent;
   
  var qa=sw.replace('(','');
  var qw=qa.replace(')','');
  var qz=qw.replace(' ','');
  
  var latDiv2 =document.getElementById('entry.1441018699').innerHTML='https://maps.google.com/?q='+qz;
    
     
   
  
      var addrDiv =document.querySelector('.address');
  
  
  
      var geocoder=new google.maps.Geocoder;
  
  
  
          geocoder.geocode({'location': pos}, function(results, status){
                if (status === 'OK'){
                    if (results[0]){
                        addrDiv.innerHTML ='Tu dirección de entrega es: '+ results[0].formatted_address;
  
                        
  
                    } else {
                        addrDiv.innerHTML = 'No address could be retrieved.'
                    }
                } else {
                    addrDiv.innerHTML = "Geocoder failed due to " + status;
                }
  
              
                    
            });
  
          
  
  
            // Create a marker and center map on user location
            marker = new google.maps.Marker({
                position: pos,
                draggable: true,
                animation: google.maps.Animation.DROP,
                map: map
            });
  
            map.setCenter(pos);
  
            // function setMapOnAll(maker) {
            //   for (let i = 0; i < marker.length; i++) {
            //     marker[i].setMap();
            //   }
            // }
            
            // function clearMarkers() {
            
            //   $(".delyveryoper").click(function() {
            //       //Si el checkbox está seleccionado
            //       if($(this).is("clicked")) {
            //         setMapOnAll(null);
            //       }
            //       else {
            //         alert("El checkbox no está seleccionado");
            //       }
                
            //     });
  
               
             
            // }
  
            // clearMarkers();
  
  
  
  
        
        });
  
  
  
        
    }
  
   
  }
  
  initialize();
  
  
  var ws=document.getElementById('intro').textContent;
  
  
  document.getElementById('entry.1450118414').innerHTML=ws;
  
  
  $('.owl-carousel').owlCarousel({
    // stagePadding: 10,
  
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  })
  
  
  
  $('.modalv').on('click', function(){$('.modalv').addClass('nosvemos2')})

 
//   $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').addClass('energon');

//   $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').on('click', function(){
    

//     $('.plust').addClass('energont');
//     $('.minus').addClass('displaymq');
//     $('.quantity').addClass('displaymq');
  
  
//   })




// let pbtn = document.querySelector('.plus');


//  let ptbtn = document.querySelector('.plust');
//  let mbtn = document.querySelector('.minus');
//  let qbtn = document.querySelector('.quantity');

//   $('.plust').on('click', function(){
 

//     ptbtn.innerText='';

//     mbtn.style.display='inline-block'; 
//     qbtn.style.display='inline-block';

//     $('#C1-I1-p,#C1-I2-p,#C1-I3-p,#C1-I4-p,#C1-I5-p').removeClass('energon');
//     // $('#C2-I1-p,').removeClass('energon');
//    $('.plust').removeClass('energont');
     
//    $('.minus').removeClass('displaymq');
//    $('.quantity').removeClass('displaymq');
   
     
//      })


