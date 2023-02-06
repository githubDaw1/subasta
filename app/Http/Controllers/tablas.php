<?php
  require_once("Models/Usuario.php");
  require_once("Models/Subasta.php");
  require_once("Models/Producto.php");
  require_once("Models/Puja.php");
  
  $productos = new Producto();
  $products = $productos->getProductos();

  $subastas = new Subasta();
  $sub = $subastas->getSubastas();

  $usuarios = new Usuario();
  $users = $usuarios->getUsuarios();

  $pujas = new Puja();
  $pu = $pujas->getPujas();

  require_once("Views/tablas.php");
?>