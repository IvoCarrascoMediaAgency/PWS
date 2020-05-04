<?php

    $destino="reservas@restaurantemamaclorinda.com";
    $dia = $_POST["dia"];
    $hora = $_POST["hora"];
    $comensales = $_POST["comensales"];
    $nombre = $_POST["Nombre"];
    $correo = $_POST["Correo"];
    $telefono = $_POST["WhatsApp"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Dia: " . $dia . "\nHora: " . $hora . "\nComensales: " . $comensales . "\nNombre: " . $nombre . "\nCorreo: " . $correo . "\nWhatsApp: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,"Contacto", $contenido);
   
    header("Location:https://restaurantemamaclorinda.com/gracias.html");
    ?>