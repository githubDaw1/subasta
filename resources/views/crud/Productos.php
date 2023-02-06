<section class="productos">

  <h1>Tabla Productos</h1>

  <div class="formulario">

    <form method="POST">

      <input type="number" name="codProd" value="<?php echo intval(count($products)) + 1; ?>" disabled>
      <input type="text" name="nomProd">
      <input type="text" name="material">
      <input type="number" name="anchura" min="0">
      <input type="number" name="altura" min="0">
      <input type="number" name="codSub" value="<?php echo intval(count($products)) + 1; ?>" disabled>

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
            <td><?php echo $products[$p]['codProd']; ?></td>
            <td><?php echo $products[$p]['nomProd']; ?></td>
            <td><?php echo $products[$p]['material']; ?></td>
            <td><?php echo $products[$p]['anchura']; ?></td>
            <td><?php echo $products[$p]['altura']; ?></td>
            <td><?php echo $products[$p]['codSubasta']; ?></td>

            <!--
              <td>
                <button name="editProd">Editar producto</button>
              </td>
              
              <td>
                <button name="delProd">Borrar producto</button>
              </td>
            -->

          </tr>

        <?php
          }
        ?>

      </tbody>

    </table>

  </div>

</section>

<?php

  $productos = new Producto();
  
  $codProd = $_POST['codProd'];
  $nomProd = $_POST['nomProd'];
  $material = $_POST['material'];
  $anchura = $_POST['anchura'];
  $altura = $_POST['altura'];
  $codSub = $_POST['codSub'];

  if (isset($_REQUEST['btnProd'])) {

    switch ($_REQUEST['btnProd']) {

      case "Add product":

        echo "You pressed Button 1<br>";
        //echo "Nombre: " . $_POST['nomProd'] . "<br>Material: " . $_POST['material'];

        if (!empty($_POST['codProd']) && !empty($_POST['nomProd']) && !empty($_POST['material']) &&
            !empty($_POST['anchura']) && !empty($_POST['altura']) && !empty($_POST['codSub'])) {
          $products = $productos->addProductos($codProd, $nomProd, $material, $anchura, $altura, $codSub);
        }

      break;

      case "Edit product":

        //print "You pressed Button 2<br>";
        /*echo "Id: ". $_POST['codProd']. "<br>Nombre: ". $_POST['nomProd']. "<br>Apellidos: ". $_POST['material'];
        echo "<br>Correo: ". $_POST['anchura']. "<br>Contraseña: ". $_POST['altura'];*/

        if (!empty($_POST['codProd']) && !empty($_POST['nomProd']) && !empty($_POST['material']) &&
            !empty($_POST['anchura']) && !empty($_POST['altura'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $material;W
          //$_POST['nombre'] = $products[intval($clave) - 1][$nomProd];

          for ($u = 0; $u < count($products); $u++) {

            if (intval($products[$p]['codProd']) == intval($_POST['codProd'])) {

              /* print "Id: ". $_POST['codProd']. "<br>Nombre: ". $_POST['nomProd']. "<br>Apellidos: ". $_POST['material'];
              print "<br>Correo: ". $_POST['anchura']. "<br>Contraseña: ". $_POST['altura']. "<br>Fecha: ". $_POST['fecha'];
              
              echo "<br><br>Id: ". $_POST['codProd']. "<br>Nombre: ". $_POST['nomProd']. "<br>Apellidos: ". $_POST['material'];
              echo "<br>Correo: ". $_POST['anchura']. "<br>Contraseña: ". products[$p]['password']. "<br>Fecha: ". $_POST['fecha'];*/

              $products = $productos->updateProductos($codProd, $nomProd, $material, $anchura, $altura, $codSub);
            }
          }
        }

      break;

      case "Delete product":

        /*print "You pressed Button 3<br>";
        echo "Id: ". $_POST['codProd'] ."<br>Nombre: ". $_POST['nomProd']. "<br>Apellidos: ". $_POST['material'];*/

        if (!empty($_POST['codProd']) && !empty($_POST['nomProd']) && !empty($_POST['material']) &&
            !empty($_POST['anchura']) && !empty($_POST['altura'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $material;

          for ($u = 0; $u < count($products); $u++) {

            if (intval($products[$p]['codProd']) == intval($_POST['codProd'])) {
              $products = $productos->deleteProductos($codProd);
            }
          }
        }

      break;
    }
  }

?>