<?php
  require_once("Models/Producto.php");
  $productos = new Producto();
  $products = $productos->getProductos();
  require_once("Views/productos.php");
?>