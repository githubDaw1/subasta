<?php

  use App\Models\Producto;
  use App\Models\Puja;
  use App\Models\Subasta;
  use App\Models\Usuario;

  date_default_timezone_set('Europe/Madrid');

?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Todas las tablas</title>
  <link href="{{ secure_asset('img/logo.png') }}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/estilos.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/styles.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/tablas.css') }}" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="/portal?idUsu=1&pagina=1">Portal</a>
    <a href="/subasta?id=Usu=1">Subastas</a>

    <a href="#loginModal" data-target="#loginModal" class="login disabled">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal" class="registro disabled">Registrarse</a>

    <a href="/">
      <button name="out" id="out">Log out</button>
    </a>

    <a href="javascript:void(0);" class="icon nav">
      <img src="{{ secure_asset('img/menu.svg') }}" alt="Menu">
    </a>

  </nav>

  <div class="fin-float"></div>

  <main>

    <section>

      <!-- Title: Hora Central Europea / Central European Time -->
      <div>
        <span class="fecha"></span>
        <span class="tiempo"></span>
        <span class="horario">CET</span>
      </div>

    </section>

    <div class="fin-float"></div>

    <?php
      $productos = new Producto();
      $products = $productos->getProductos();
      require_once("crud/productos.php");
    ?>

    <div class="fin-float"></div><hr/>

    <?php
      //echo asset('crud/subastas.php');
      $subastas = new Subasta();
      $sub = $subastas->getSubastas();
      require_once("crud/subastas.php");
    ?>

    <div class="fin-float"></div><hr/>

    <?php
      //echo asset('crud/pujas.php');
      $pujas = new Puja();
      $pu = $pujas->getPujas();
      require_once("crud/pujas.php");
    ?>

    <div class="fin-float"></div><hr/>

    <?php
      //echo asset('crud/usuarios.php');
      $usuario = new Usuario();
      $users = $usuario->getUsuarios();
      require_once("crud/usuarios.php");
    ?>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/tablas.js') }}" defer></script>
  <script src="{{ secure_asset('js/script.js') }}" defer></script>

</body>

</html>
