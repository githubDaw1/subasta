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
  $codigoUsuario = $_GET["codUsu"];

  $lastId = $pujas->getLastId();
  $codigo = intval($lastId[0]['codPuja']) + 1;

  $ultimaPuja = $pujas->getPujaWin($codigoSubasta);
  $valorFinal = number_format(floatval($ultimaPuja[0]['valor']), 2, '.', '');

  $pujadorFinal = intval($ultimaPuja[0]['codUsu']);

?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de Subastas</title>
  <link href="{{ asset('img/logo.png') }}" type="image/x-icon" rel="icon">
  <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="{{ asset('/') }}" class="active">Inicio</a>
    <a href="{{ asset('/portal') }}">Portal</a>
    <a href="{{ asset('/subasta') }}">Subastas</a>

    <a href="#loginModal" data-target="#loginModal" class="disabled">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal" class="disabled">Registrarse</a>

    <a href="{{ asset('/') }}">
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

      <?php

        for ($i = 0; $i < count($products); $i++) {

          $puWin= $pujas->getPujaWin($codigoSubasta);

          if (intval($codigoSubasta) == intval($products[$i]['codProd'])) {

      ?>

      <div class="subasta">

        <ul>

          <li>
            <img src="{{ asset('img/productos/imagen'. $codigoSubasta .'.jpg') }}" alt="<?php echo $products[$i]['nomProd']; ?>">
          </li>

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
          <a href="{{ asset('/portal?codUsu='. $codigoUsuario) }}" class="atras">Volver atrás</a>
        </button>

        <form method="GET" class="pujaForm">

          <input type="number" min="<?php echo $codigoSubasta ?>" max="<?php echo $codigoSubasta ?>" value="<?php echo $codigoSubasta ?>" class="indice" name="indice" style="display: none">

          <input type="number" min="<?php echo $codigoUsuario ?>" max="<?php echo $codigoUsuario ?>" value="<?php echo $codigoUsuario ?>" class="codUsu" name="codUsu" style="display: none">

          <input type="number" min="<?php echo $puWin[0]['valor']; ?>" value="<?php echo $puWin[0]['valor']; ?>" class="valorPuja" name="puja">

          <button class="pujar" name="pujar" value="Crear puja">Pujar</button>

          <?php

            if (isset($_GET['pujar'])) {

              $valor = $_GET['puja'];

              //date_default_timezone_set('Europe/Madrid');

              $fecha = date("Y-m-d");

              echo "<br/>Id: ". $codigo;
              echo "<br/>Valor insertado: ". $valor;
              echo "<br/>Fecha: ". $fecha;
              echo "<br/>Id_Usuario: ". $codigoUsuario;
              echo "<br/>Id_Subasta: ". $codigoSubasta;
              echo "<br/>Valor de la última puja: ". $valorFinal;

              if ($pujadorFinal == intval($codigoUsuario)) {
                echo '<script>
                  alert("La puja ganadora te pertenece, espera una puja mayor de otra persona");
                </script>';
              } else {

                if ($valor > $valorFinal) {

                  $pujas->addPujas($codigo, $valor, $fecha, $codigoUsuario, $codigoSubasta);

                  header("Location: /subasta?indice=$codigoSubasta&codUsu=$codigoUsuario&puja=$valor");
                  exit();
                }
              }
            }

          ?>

        </form>

        <div class="fin-float"></div><br/>

        <p>
          Vas ganando porque la última puja te pertenece.<br/>
          Última puja: <?php echo $valorFinal; ?>
        </p>

      </div>

      <?php
          }
        }
      ?>

    </section>

    <section class="paginacion">

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

    <div class="fin-float"></div><hr>

    <section class="grafica">

      <h1>Representación gráfica</h2>

      <div>
        <canvas id="myChart"></canvas>
      </div>

    </section>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>
  <script src="{{ asset('js/script.js') }}" defer></script>

  <?php
    echo '<script>grafica('. $codigoSubasta .')</script>';
  ?>

</body>

</html>
