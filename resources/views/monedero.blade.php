<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comprobar monedero</title>
  <link href="{{ asset('css/monedero.css') }}" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

  <?php

    $subQuery = "SELECT COUNT(*) from subasta WHERE precIni > 0"; // Consulta de subastas
    $subResult = mysqli_query($conexion, $subQuery); // Resultado de subastas

    while ($row = mysqli_fetch_array($subResult)) {
      $totalSubastas = $row;
    }

    echo "Subastas existentes: ". $totalSubastas[0] ."<br/><br/>";

    $usuQuery = "SELECT codUsu, nomUsu, apeUsu from usuario WHERE permiso < 1";
    $usuResult = mysqli_query($conexion, $usuQuery);

    while ($row = mysqli_fetch_array($usuResult)) {
      $compradores[] = $row;
    }

    $reservas = 50000;

    $puQuery = "SELECT MAX(valor) AS 'maxValue', codUsu, codSubasta from puja GROUP BY codSubasta ORDER BY codSubasta DESC"; // Consulta de pujas
    $puResult = mysqli_query($conexion, $puQuery); // Resultado de pujas

    while ($row = mysqli_fetch_array($puResult)) {
      $pujas[] = $row;
    }

    $p = (count($pujas) - 1);

    while ($p >= 0) {

      echo "Valor maximo: ". $pujas[$p]['maxValue'] ."<br/>";
      echo "Codigo del usuario: ". $pujas[$p]['codUsu'] ."<br/>";
      echo "Codigo de subasta: ". $pujas[$p]['codSubasta'] ."<br/><br/>";

      for ($c = 0; $c < count($compradores); $c++) {

        if ($pujas[$p]['codUsu'] == $compradores[$c]['codUsu']) {
          $gastos[$c] += intval($pujas[$p]['maxValue']);
        }
      }

      $p--;
    }
  ?>

  <h3>Usuarios</h3>

  <?php

    for ($c = 0; $c < count($compradores); $c++) {
      echo "Nombre: ". $compradores[$c]['nomUsu']. "<br/>Apellidos: ". $compradores[$c]['apeUsu'] ."<br/><br/>";
    }

    /*echo "<pre>";
    print_r($compradores);
    echo "</pre>";*/
  ?>

  <h3>Gastos totales</h3>

  <?php

    for ($g = 0; $g < count($gastos); $g++) {
      echo "Gastos: ". $gastos[$g] ."<br/>";
    }

    /*echo "<pre>";
    print_r($gastos);
    echo "</pre>";*/

    for ($g = 0; $g < count($gastos); $g++) {

      if (($reservas - $gastos[$g]) > 0) {
        echo "<br/>Le queda a ". $compradores[$g]['nomUsu'] ." ". $compradores[$g]['apeUsu'] ." -> ". ($reservas - $gastos[$g]);
      } else {
        echo "<br/>Se ha reiniciado tu monedero. Ahora le queda a ". $compradores[$g]['nomUsu'] ." ". $compradores[$g]['apeUsu'] ." -> $reservas";
      }
    }

  ?>

  <div class="dragDrop">
    <img src="../img/billetes.jfif" alt="Billetes">
    <img src="../img/carteraVacia.jfif" alt="Cartera Vac??a">
    <div class="spinner-border text-secondary" id="load" role="status" aria-hidden="true"></div>
  </div>

  <div class="secundario">
    <img src="img/carteraVacia.jfif" alt="Cartera Vac??a">
  </div>


  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="{{ asset('js/monedero.js') }}" defer></script>

</body>

</html>
