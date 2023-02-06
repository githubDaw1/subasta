<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Filtrado de categorias</title>
</head>

<body>

  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">

    <select name="categoria" id="categoria">
      <option></option>
      <option value="Multiherramientas">Multiherramientas</option>
      <option value="Mueble Autotransformable">Mueble Autotransformable</option>
      <option value="Super coches">Super coches</option>
      <option value="Dispositivo cambiante">Dispositivo cambiante</option>
      <option value="Piedras preciosas">Piedras preciosas</option>
    </select>
    
    <button name="submit" id="submit">Bucar producto</button>

  </form>

  <?php

    $category = $_POST['categoria'];

    $conexion = mysqli_connect("localhost", "root", "", "subasta");
    $consulta = "SELECT * FROM producto";
    $resultado = mysqli_query($conexion, $consulta);

    while ($row = mysqli_fetch_array($resultado)) { $products[] = $row; }

    if (isset($_POST['submit'])) {

      if (!empty($category)) {

        for ($i = 0; $i < count($products); $i++) {
      
          if (strcmp($products[$i]['categoria'], $category) == 0) {
        
            echo "<pre>";
            print_r($products[$i]);
            echo "</pre>";

            break;
          }
        }
      }
    }

  ?>

  <form action="<?php echo "subasta.php?codigo=". intval($products[$i]['codSubasta']); ?>" method="POST">
    <button name="subasta" id="subasta">Buscar subasta</button>
  </form>

</body>

</html>