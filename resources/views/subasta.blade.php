<?php
  use App\Models\Producto;
  use App\Models\Subasta;
  use App\Models\Puja;

  $productos = new Producto();
  $products = $productos->getProductos();

  $subastas = new Subasta();
  $sub = $subastas->getSubastas();

  $pujas = new Puja();
  $pu = $pujas->getPujas();

  $codigoSubasta = $_GET["indice"];
?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de Subastas</title>
  <link href="{{ asset('img/logo.png') }}" type="image/x-icon" rel="icon">
  <link href="{{ asset('css/login.css') }}" rel="stylesheet">
  <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="{{ asset('/') }}" class="active">Inicio</a>
    <a href="{{ asset('/subasta') }}">Subastas</a>
    <a href="{{ asset('/puja') }}">Pujas</a>
    <a href="{{ asset('/login') }}">Iniciar sesion</a>
    <a href="{{ asset('/registro') }}">Registrarse</a>

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
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

    <section>

      <h2>Pujar - Producto Nº <?php echo intval($codigoSubasta) ?></h2>

      <!--<ul>

        <li>
          <a href="{{ asset('/subasta') }}">Busqueda</a>
        </li>

        <li>
          <a href="{{ asset('/resultados') }}">Resultados</a>
        </li>

        <li>

          <a href="{{ asset('/guardar') }}" class="guardar">
            Guardar
            <span>Busqueda</span>
            <img src="{{ asset('img/logoAcceso.png') }}" srcset="{{ asset('img/logoAcceso.svg') }}" alt="Sesion activa" />
          </a>

        </li>

      </ul>-->

    </section>

    <section>

      <?php

        for ($i = 0; $i < count($products) - 1; $i++) {

          if (intval($codigoSubasta) == $products[$i]['codProd']) {
      ?>

      <div class="subasta">

        <ul>

          <li>
            <h3>Producto: <?php echo $products[$i]['nomProd'] ?></h3>
          </li>

          <li>
            <h4>Materiales: <?php echo $products[$i]['material'] ?></h4>
          </li>

          <li>
            <p>Anchura del producto: <?php echo $products[$i]['anchura'] ?></p>
          </li>

          <li>
            <p>Altura del producto: <?php echo $products[$i]['altura'] ?></p>
          </li>

          <li>
            <p>Fecha inicial: <?php echo $sub[$i]['fechaInic'] ?></p>
          </li>

          <li>
            <p>Fecha fin: <?php echo $sub[$i]['fechaFin'] ?></p>
          </li>

          <li>
            <p>Precio inicial: <?php echo $sub[$i]['precIni'] ?></p>
          </li>

        </ul>

        <button>
          <a href="{{ asset('/portal') }}" class="atras">Volver atrás</a>
        </button>

      </div>

        <?php
            }
          }
        ?>

    </section>

    <section>

      <ul>

        <li>
          <span class="fuera">Está usted en la página de resultados número</span>
          <span class="current">1</span>
        </li>

        <li>
          <a href="{{ asset('/user') }}">2</a>
        </li>

        <li>

          <a href="{{ asset('/user') }}">
            <abbr title="Página">Pág.</abbr> siguiente
          </a>

        </li>

      </ul>

    </section>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="{{ asset('js/reloj.js') }}" defer></script>
  <script src="{{ asset('js/script.js') }}" defer></script>
  <script src="{{ asset('js/nav.js') }}" defer></script>

</body>

</html>
