<?php
  error_reporting(E_ERROR);
  ini_set("display-errors", 0);
?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comprobar monedero</title>
</head>

<body>

  <form action="" method="POST">

    <label for="dinero">Introduzca su dinero</label>
    <input type="number" name="dinero">

    <button>Transferencia</button>

  </form>
  
  <?php

    $restante = $_POST['dinero'];

    $conexion = mysqli_connect("localhost", "root", "", "subasta");
    $consulta = "SELECT * FROM monedero";
    $resultado = mysqli_query($conexion, $consulta);

    while ($row = mysqli_fetch_array($resultado)) { $billetes[] = $row; }

    /*for ($i = 0; $i < count($billetes); $i++) {
      echo "<pre>";
      print_r($billetes[$i]);
      echo "</pre>";
    }*/

    if ($restante !== NULL) {
      
      for ($i = 0; $i < count($billetes); $i++) {

        $valorFinal = $restante + $billetes[$i]["gananTot"] - $billetes[$i]["perdTotal"];
  
        if ($valorFinal <= 0) {
          echo "Resetenado tu monedero, sin tocar tu cuenta<br/>";
        } else {
          echo "El rey de las subastas<br/>";
        }
      }
    }

  ?>

</body>

</html>