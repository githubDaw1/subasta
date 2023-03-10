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

  $codigoUsuario = $_GET["idUsu"];

  // $lastId = $pujas->getLastId();
  //$codigo = intval($lastId[0]['codPuja']) + 1;

  //$pujadorFinal = intval($ultimaPuja[0]['codUsu']);

?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tus pujas</title>
  <link href="{{ secure_asset('img/logo.png') }}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/estilos.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/styles.css') }}" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="<?php echo '/portal?idUsu='. $codigoUsuario ."&pagina=1" ?>">Portal</a>
    <a href="<?php echo '/subasta' ?>" class="disabled">Subastas</a>
    <a href="<?php echo '/pujas?idUsu='. $codigoUsuario ?>">Mis pujas</a>

    <a href="#loginModal" data-target="#loginModal" class="disabled">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal" class="disabled">Registrarse</a>

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

    <section class="bloquePujas">

      <h2>Mis pujas</h2>

      <!--<p>
        Pujador: <?php //echo $users[intval($codigoUsuario - 1)]['nomUsu'] ." ". $users[intval($codigoUsuario - 1)]['apeUsu'] ?>
      </p>-->

      <?php

        for ($p = 0; $p < count($pu) - 1; $p++) {

          if ($users[intval($codigoUsuario - 1)]['codUsu'] == intval($codigoUsuario)) {

            if (intval($pu[$p]['codSubasta']) != intval($pu[intval($p + 1)]['codSubasta'])) {

              $bestPuja = $pujas->getBestPuja(intval($pu[$p]['codSubasta']), $codigoUsuario);

              echo "<div class='pujas'><ul><li>Subasta Nº ". $pu[$p]['codSubasta'] ."</li>";
              echo "<li>Tu mejor puja: ". $bestPuja[0]['valor'] ."</li>";

              $ganadores = $pujas->getPujaWin(intval($pu[$p]['codSubasta']));
              $codigoGanador = intval($ganadores[0]['codUsu']);

              //echo "<ul><li>Subasta Nº ". $ganadores[0]['codSubasta'] ."</li>";
              //echo "<li>". $users[$codigoGanador - 1]['nomUsu'] ." ". $users[$codigoGanador - 1]['apeUsu'] ."</li>";
              echo "<li>Puja ganadora: ". $ganadores[0]['valor'] ."</li></ul>";

              //echo "Código de la subasta: ". $pu[$p]['codSubasta'];

              echo "<button>
                <a href='/subasta?idUsu=". $codigoUsuario ."&idSub=". $pu[$p]['codSubasta'] ."'>Volver a subasta</a>
              </button></div>";

            } else {

              if (intval($p) == intval(count($pu) - 2)) {

                $bestPuja = $pujas->getBestPuja(intval($pu[$p]['codSubasta']), $codigoUsuario);

                echo "<div class='pujas'><ul><li>Subasta Nº ". $pu[$p]['codSubasta'] ."</li>";
                echo "<li>Tu mejor puja: ". $bestPuja[0]['valor'] ."</li>";

                $ganadores = $pujas->getPujaWin(intval($pu[$p]['codSubasta']));
                $codigoGanador = intval($ganadores[0]['codUsu']);

                //echo "<ul><li>Subasta Nº ". $ganadores[0]['codSubasta'] ."</li>";
                //echo "<li>". $users[$codigoGanador - 1]['nomUsu'] ." ". $users[$codigoGanador - 1]['apeUsu'] ."</li>";
                echo "<li>Puja ganadora: ". $ganadores[0]['valor'] ."</li></ul>";

                //echo "Código de la subasta: ". $pu[$p]['codSubasta'];

                echo "<button>
                  <a href='/subasta?idUsu=". $codigoUsuario ."&idSub=". $pu[$p]['codSubasta'] ."'>Volver a subasta</a>
                </button></div>";
              }
            }

            //$idSub = intval($pu[$p]['codSubasta']);

            /* if (intval($pu[$p]['codSubasta']) != intval($pu[($p + 1)]['codSubasta'])) { echo "<hr/>"; } */
          }
        }

        //echo "<hr/><br/><br/>";

        /*for ($g = 0; $g < intval($pu[(count($pu) - 1)]['codSubasta']); $g++) {

          $ganadores = $pujas->getPujaWin($g + 1);
          $codigoGanador = intval($ganadores[0]['codUsu']);
          //$valorFinal = number_format(floatval($ganadores[0]['valor']), 2, '.', '');

          echo "<ul><li>Subasta Nº ". $ganadores[0]['codSubasta'] ."</li>";
          //echo "<li>". $users[$codigoGanador - 1]['nomUsu'] ." ". $users[$codigoGanador - 1]['apeUsu'] ."</li>";
          echo "<li>Puja ganadora: ". $ganadores[0]['valor'] ."</li></ul>";

          echo "<br/><br/>";
        }*/

      ?>

    </section>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <!--
  <form action="" method="GET" enctype="multipart/form-data">

    @csrf

    <div class="row">

      <div class="col-25">
        <label for="inicial">Valor inicial</label>
      </div>

      <div class="col-75">
        <input type="number" name="inicial" id="inicial" value="<?php //echo $pujaInicial ?>" readonly>
      </div>

    </div>

    <div class="row">

      <div class="col-25">
        <label for="actual">Última puja de la subasta</label>
      </div>

      <div class="col-75">
        <input type="number" name="actual" id="actual" min="<?php //echo ($pujaActual + 1) ?>" value="<?php //echo ($pujaActual + 1) ?>">
      </div>

    </div>

    <div class="row">
      <input type="hidden" name="fecha1" id="fecha1" value="<?php //echo $inicio; ?>" readonly>
    </div>

    <div class="row">
      <input type="hidden" name="fecha2" id="fecha2" value="<?php //echo $fin; ?>" readonly>
    </div>

    <div class="row">
      <input type="submit" name="submit" id="submit" value="Pujar">
    </div>

  </form>

  <p id="tictac">Tiempo: </p>
  -->

  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/pujar.js') }}" defer></script>
  <script src="{{ secure_asset('js/script.js') }}" defer></script>

</body>

</html>
