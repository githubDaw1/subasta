<?php
  require_once("Models/Modelo.php");
  
  $productos = new Modelo();
  $products = $productos->getProductos();

  $subastas = new Modelo();
  $sub = $subastas->getSubastas();

  require_once("Views/portal.php");
?>