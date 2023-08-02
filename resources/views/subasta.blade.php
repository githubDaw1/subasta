<?php

  use App\Models\Producto;
  use App\Models\Subasta;
  use App\Models\Puja;
  use App\Models\Usuario;

  $productos = new Producto();
  $products = $productos->getProductos();

  $subastas = new Subasta();
  $sub = $subastas->getSubastas();

  $pujas = new Puja();
  $pu = $pujas->getPujas();

  $usuario = new Usuario();
  $users = $usuario->getUsuarios();

  $codigoSubasta = $_GET["idSub"];
  $codigoUsuario = $_GET["idUsu"];

  $lastId = $pujas->getLastId();
  $codigo = intval($lastId[0]['codPuja']) + 1;

  $ultimaPuja = $pujas->getPujaWin($codigoSubasta);
  $valorFinal = number_format(floatval($ultimaPuja[0]['valor']), 2, '.', '');

  $pujadorFinal = intval($ultimaPuja[0]['codUsu']);

?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<<<<<<< HEAD
  <title>Sala Nº <?php echo intval($codigoSubasta); ?></title>
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="icons/icomoon.min.css" rel="stylesheet">
  <link href="css/estilos.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
=======
  <title>Sala Nº <?php echo intval($codigoSubasta);; ?></title>
  <link href="{{ secure_asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/estilos.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/styles.css') }}" rel="stylesheet">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
</head>

<body>

  <header>
<<<<<<< HEAD
    <img src="img/cabecera.webp" alt="Logo de Subasta total">
=======
    <img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
<<<<<<< HEAD
    <a href="/portal?idUsu=<?php echo $codigoUsuario ?>&pagina=1">Portal</a>
    <a href="/subasta?idSub=<?php echo $codigoSubasta ?>&idUsu=<?php echo $codigoUsuario ?>">Subastas</a>
    <a href="/pujas?idUsu=<?php echo $codigoUsuario ?>">Mis pujas</a>
=======
    <a href="<?php echo '/portal?idUsu='. $codigoUsuario ."&pagina=1" ?>">Portal</a>
    <a href="<?php echo '/subasta?idSub='. $codigoSubasta .'&idUsu='. $codigoUsuario; ?>">Subastas</a>
    <a href="<?php echo '/pujas?idUsu='. $codigoUsuario ?>">Mis pujas</a>
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

    <a href="#loginModal" data-target="#loginModal" class="login disabled">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal" class="registro disabled">Registrarse</a>

    <a href="/">
      <button name="out" id="out">Log out</button>
    </a>

    <a href="javascript:void(0);" class="icon nav">
<<<<<<< HEAD
      <img src="img/menu.svg" alt="Menu">
=======
      <img src="{{ secure_asset('img/menu.svg') }}" alt="Menu">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
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

      <h2>Pujar - Producto Nº <?php echo intval($codigoSubasta); ?></h2>

      <!--<ul>

        <li>
          <a href="/subasta">Busqueda</a>
        </li>

        <li>
          <a href="/resultados">Resultados</a>
        </li>

        <li>

          <a href="/guardar" class="guardar">
            Guardar
            <span>Busqueda</span>
            <img src="{{ secure_asset('img/logoAcceso.png') }}" srcset="{{ secure_asset('img/logoAcceso.svg') }}" alt="Sesion activa" />
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
            <img src="{{ secure_asset('img/productos/imagen'. $codigoSubasta .'.jpg') }}" alt="<?php echo $products[$i]['nomProd']; ?>">
          </li>

          <li>
            <h3>Producto: <?php echo $products[$i]['nomProd']; ?></h3>
          </li>

          <li>
            <h4>Materiales: <?php echo $products[$i]['material']; ?></h4>
          </li>

          <li>
            <p>Anchura del producto: <?php echo $products[$i]['anchura']; ?></p>
          </li>

          <li>
            <p>Altura del producto: <?php echo $products[$i]['altura']; ?></p>
          </li>

          <li>
            <p>Fecha inicial: <?php echo $sub[$i]['fechaInic']; ?></p>
          </li>

          <li>
            <p>Fecha fin: <?php echo $sub[$i]['fechaFin']; ?></p>
          </li>

          <li>
            <p>Precio inicial: <?php echo ($sub[$i]['precIni']); ?></p>
          </li>

        </ul>

        <button>
          <a href="/portal?idUsu=<?php echo $codigoUsuario; ?>&pagina=1" class="atras">Volver atrás</a>
        </button>

      </div>

      <form method="GET" class="pujaForm">

<<<<<<< HEAD
        <input type="number" min="<?php echo $codigoSubasta; ?>" max="<?php echo $codigoSubasta; ?>" value="<?php echo $codigoSubasta; ?>" class="idSub" name="idSub">

        <input type="number" min="<?php echo $codigoUsuario; ?>" max="<?php echo $codigoUsuario; ?>" value="<?php echo $codigoUsuario; ?>" class="idUsu" name="idUsu">
=======
        <input type="number" min="<?php echo $codigoSubasta ?>" max="<?php echo $codigoSubasta ?>" value="<?php echo $codigoSubasta ?>" class="idSub" name="idSub">

        <input type="number" min="<?php echo $codigoUsuario ?>" max="<?php echo $codigoUsuario ?>" value="<?php echo $codigoUsuario ?>" class="idUsu" name="idUsu">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

        <input type="number" min="<?php echo $puWin[0]['valor']; ?>" value="<?php echo $puWin[0]['valor']; ?>" class="valorPuja" name="puja">

        <button class="pujar" name="pujar" value="Crear puja">Pujar</button>

      </form>

      <?php

        if (isset($_GET['pujar'])) {

          $valor = $_GET['puja'];
          //date_default_timezone_set('Europe/Madrid');

          $fecha = date("Y-m-d");

<<<<<<< HEAD
          /*echo "<br/>Id: ". $codigo;
          echo "<br/>Valor insertado: $valor";
          echo "<br/>Fecha: $fecha";
          echo "<br/>Id_Usuario: ". $codigoUsuario;
          echo "<br/>Id_Subasta: ". $codigoSubasta;
          echo "<br/>Valor de la última puja: ". $valorFinal;*/
=======
          //echo "<br/>Id: ". $codigo;
          echo "<br/>Valor insertado: ". $valor;
          echo "<br/>Fecha: ". $fecha;
          //echo "<br/>Id_Usuario: ". $codigoUsuario;
          //echo "<br/>Id_Subasta: ". $codigoSubasta;
          //echo "<br/>Valor de la última puja: ". $valorFinal;
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

          if ($pujadorFinal == intval($codigoUsuario)) {
            echo '<script>alert("La puja ganadora te pertenece, espera una puja mayor de otra persona");</script>';
          } else {

            if (number_format(floatval($valor), 2, '.', '') > $valorFinal) {

              $pujas->addPujas($codigo, $valor, $fecha, $codigoUsuario, $codigoSubasta);

<<<<<<< HEAD
              header("Location: https://subasta-production.up.railway.app/subasta?idSub=$codigoSubasta&idUsu=$codigoUsuario&puja=$valor");
=======
              header("Location: /subasta?idSub=$codigoSubasta&idUsu=$codigoUsuario&puja=$valor");
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
              exit();
            }
          }
        }

      ?>

      <p>Puja más alta: <?php echo $valorFinal; ?></p><br/><br/><br/>

      <!--<p class="ganador"></p>-->

      </div>

      <?php
          }
        }
      ?>

    </section>

    <div class="fin-float"></div><hr/>

    <section class="grafica">

      <h1>Representación gráfica</h2>

      <div>
        <canvas id="myChart" width="600" height="600"></canvas>
      </div>

    </section>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

<<<<<<< HEAD
  <script src="js/app.js" defer></script>
  <script src="js/script.js" defer></script>
=======
  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/script.js') }}" defer></script>
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

  <?php

    for ($p = 0; $p < count($pu); $p++) {

      if (intval($pu[$p]["codSubasta"]) == intval($codigoSubasta)) {

        $fechas[$p] = $pu[$p]["fecha"];
        $valores[$p] = $pu[$p]["valor"];
      }
    }

    echo '<noscript type="text/javascript">grafica('. $codigoSubasta .', '. json_encode($fechas) .', '. json_encode($valores) .'</noscript>';

  ?>

</body>

</html>
