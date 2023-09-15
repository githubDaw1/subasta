<?php
  date_default_timezone_set('Europe/Madrid');
?>

<section class="productos">

  <h1>Tabla Productos</h1>

  <div class="formulario">

    <form method="GET" enctype="multipart/form-data">

      <input type="number" name="codigo" value="<?php echo htmlspecialchars(intval(count($products)) + 1); ?>" required>
      <input type="text" name="nombre" required>
      <input type="text" name="material" required>
      <input type="number" name="anchura" min="0" required>
      <input type="number" name="altura" min="0" required>
      <input type="number" name="codSub" value="<?php echo htmlspecialchars(intval(count($products)) + 1); ?>" required>

      <div class="fin-float"></div>

      <button name="btnProd" value="Add product">Añadir producto</button>
      <button name="btnProd" value="Edit product">Editar producto</button>
      <button name="btnProd" value="Delete product">Borrar producto</button>

    </form>

  </div>

  <!-- Tabla productos --->
  <div class="tabla">

    <table>

      <thead>

        <tr>
          <th>Código producto</th>
          <th>Nombre producto</th>
          <th>Material</th>
          <th>Anchura</th>
          <th>Altura</th>
          <th>Código subasta</th>
        </tr>

      </thead>

      <tbody>

        <?php
        for ($p = 0; $p < count($products); $p++) {
        ?>

          <tr>
            <td><?php echo htmlspecialchars($products[$p]['codProd']); ?></td>
            <td><?php echo htmlspecialchars($products[$p]['nomProd']); ?></td>
            <td><?php echo htmlspecialchars($products[$p]['material']); ?></td>
            <td><?php echo htmlspecialchars($products[$p]['anchura']); ?></td>
            <td><?php echo htmlspecialchars($products[$p]['altura']); ?></td>
            <td><?php echo htmlspecialchars($products[$p]['codSubasta']); ?></td>

          </tr>

        <?php
        }
        ?>

      </tbody>

    </table>

  </div>

</section>

<?php

  if (isset($_REQUEST['btnProd'])) {

    $codigo = $_GET['codigo'];
    $nombre = $_GET['nombre'];
    $material = $_GET['material'];
    $anchura = $_GET['anchura'];
    $altura = $_GET['altura'];
    $codSub = $_GET['codSub'];

    switch ($_REQUEST['btnProd']) {

      case "Add product":

        echo "You pressed Button 1<br>";
        //echo "Nombre: " . $_GET['nomProd'] . "<br>Material: " . $_GET['material'];

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['material']) &&
            !empty($_GET['anchura']) && !empty($_GET['altura']) && !empty($_GET['codSub'])) {
          $productos->addProductos($codigo, $nombre, $material, $anchura, $altura, $codSub);
        }

      break;

      case "Edit product":

        //print "You pressed Button 2<br>";
        /*echo "Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomProd']. "<br>Apellidos: ". $_GET['material'];
        echo "<br>Correo: ". $_GET['anchura']. "<br>Contraseña: ". $_GET['altura'];*/

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['material']) &&
            !empty($_GET['anchura']) && !empty($_GET['altura'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $material;W
          //$_GET['nombre'] = $products[intval($clave) - 1][$nombre];

          for ($u = 0; $u < count($products); $u++) {

            if (intval($products[$p]['codProd']) == intval($_GET['codigo'])) {

              /* print "Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomProd']. "<br>Apellidos: ". $_GET['material'];
                print "<br>Correo: ". $_GET['anchura']. "<br>Contraseña: ". $_GET['altura']. "<br>Fecha: ". $_GET['fecha'];

                echo "<br><br>Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomProd']. "<br>Apellidos: ". $_GET['material'];
                echo "<br>Correo: ". $_GET['anchura']. "<br>Contraseña: ". products[$p]['password']. "<br>Fecha: ". $_GET['fecha'];*/

              $productos->updateProductos($codigo, $nombre, $material, $anchura, $altura, $codSub);
            }
          }
        }

      break;

      case "Delete product":

        /*print "You pressed Button 3<br>";
        echo "Id: ". $_GET['codigo'] ."<br>Nombre: ". $_GET['nomProd']. "<br>Apellidos: ". $_GET['material'];*/

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['material']) &&
            !empty($_GET['anchura']) && !empty($_GET['altura'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $material;

          for ($u = 0; $u < count($products); $u++) {

            if (intval($products[$p]['codProd']) == intval($_GET['codigo'])) {
              $productos->deleteProductos($codigo);
            }
          }
        }

      break;
    }
  }

?>
