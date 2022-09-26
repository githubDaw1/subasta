<?php
  error_reporting(E_ERROR);
  ini_set("display-errors", 0);
?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Subasta</title>
</head>

<body>

  <?php

    $codigo = $_GET['codigo'];

    $conexion = mysqli_connect("localhost", "root", "", "subasta");
    $consulta = "SELECT * FROM subasta WHERE precIni > 0";
    $resultado = mysqli_query($conexion, $consulta);

    while ($row = mysqli_fetch_array($resultado)) { $subastas[] = $row; }

    for ($i = 0; $i < count($subastas); $i++) {
      
      if ($subastas[$i]['codSubasta'] == $codigo) {
        
        echo "<pre>";
        print_r($subastas[$i]);
        echo "</pre>";

        break;
      }
    }

  ?>

  <form action="<?php echo "puja.php?numSub=". intval($subastas[$i]['codSubasta']); ?>" method="POST">
    <button name="puja" id="puja">Buscar pujas</button>
  </form>

</body>

</html>