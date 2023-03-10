<?php
  use App\Models\Producto;
  use App\Models\Subasta;

  $codigo = $_GET['idUsu'];
  $numPagina = $_GET['pagina'];
?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de Subastas</title>
  <link href="{{ asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="<?php echo '/portal?idUsu='. $codigo ."&pagina=1" ?>">Portal</a>
    <a href="/subasta" class="disabled">Subastas</a>
    <a href="<?php echo '/pujas?idUsu='. $codigo ?>">Mis pujas</a>

    <a href="#loginModal" data-target="#loginModal" class="login disabled">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal" class="registro disabled">Registrarse</a>

    <a href="/">
      <button name="out" id="out">Log out</button>
    </a>

    <a href="javascript:void(0);" class="icon nav">
      <img src="{{ asset('img/menu.svg') }}" alt="Menu">
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

    <section class="subastas">

      <h2>Buscar subastas</h2>

      <?php

        $productos = new Producto();
        $products = $productos->getProductos();

        $subastas = new Subasta();
        $sub = $subastas->getSubastas();

        /*$pujas = new Puja();
        $pu = $pujas->getPujas();*/

        $indicePagina = intval(count($products)) * intval($numPagina - 1);

        for ($i = $indicePagina; $i < count($products); $i++) {
      ?>

      <div class="productos">

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

          <!--<li>
            <p>Categoría del producto: <?php // echo $products[$i]['categoria'] ?></p>
          </li>-->

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
          <a href="<?php echo '/subasta?idSub='. ($i + 1) .'&idUsu=' .$codigo ?>">Ir a subasta</a>
        </button>

      </div>

        <?php
          }
        ?>

    </section>

    <section class="paginacion">

      <ul>

        <li>
          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=1" class="current">1</a>
        </li>

        <li>
          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=2">2</a>
        </li>

        <li>
          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=3">3</a>
        </li>

        <li>
          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=4">4</a>
        </li>

        <li>
          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=5">5</a>
        </li>
        <li>

          <a href="/portal?idUsu=<?php echo $codigo ?>&pagina=6">
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

  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="{{ asset('js/reloj.js') }}" defer></script>
  <script src="{{ asset('js/script.js') }}" defer></script>

</body>

</html>
