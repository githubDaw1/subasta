<?php
  require_once("Models/Usuario.php");
  require_once("Models/Subasta.php");
  require_once("Models/Producto.php");
  
  $productos = new Producto();
  $products = $productos->getProductos();

  $subastas = new Subasta();
  $sub = $subastas->getSubastas();

  require_once("Views/usuarios.php");
?>