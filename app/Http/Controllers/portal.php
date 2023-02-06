<?php

  require_once("Models/Producto.php");
  require_once("Models/Subasta.php");
  
  $productos = new Producto();
  $products = $productos->getProductos();

  $subastas = new Subasta();
  $sub = $subastas->getSubastas();

  require_once("Views/portal.php");
?>