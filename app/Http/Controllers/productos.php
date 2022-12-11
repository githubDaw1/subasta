<?php
  require_once("Models/Modelo.php");
  $productos = new Modelo();
  $products = $productos->getProductos();
  require_once("Views/productos.php");
?>