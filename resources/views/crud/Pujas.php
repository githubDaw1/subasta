<section class="pujas">

  <h1>Tabla Pujas</h1>

  <div class="formulario">

    <form method="POST">

      <input type="number" name="codPuja" value="<?php echo intval(count($pu)) + 1; ?>" disabled>
      <input type="number" name="valor">
      <input type="date" name="fecha">
      <input type="number" name="codUsu">
      <input type="number" name="codSub" min="1">

      <div class="fin-float"></div>

      <button name="btnPu" value="Add puja">Añadir puja</button>
      <button name="btnPu" value="Edit puja">Editar puja</button>
      <button name="btnPu" value="Delete puja">Borrar puja</button>

    </form>

  </div>

  <!-- Tabla pujas -->
  <div class="tabla">

    <table>

      <thead>

        <tr>
          <th>Código puja</th>
          <th>valor</th>
          <th>fecha</th>
          <th>Código usuario</th>
          <th>Código subasta</th>
        </tr>

      </thead>

      <tbody>

        <?php
          for ($p = 0; $p < count($pu); $p++) {
        ?>

          <tr>
            <td><?php echo $pu[$p]['codPuja'] ?></td>
            <td><?php echo $pu[$p]['valor'] ?></td>
            <td><?php echo $pu[$p]['fecha'] ?></td>
            <td><?php echo $pu[$p]['codUsu'] ?></td>
            <td><?php echo $pu[$p]['codSubasta'] ?></td>
          </tr>

        <?php
          }
        ?>

      </tbody>

    </table>

  </div>

</section>

<?php

  $pujas = new Puja();

  $codPuja = $_POST['codPuja'];
  $valor = $_POST['valor'];
  $fecha = $_POST['fecha'];
  $codUsu = $_POST['codUsu'];
  $codSub = $_POST['codSub'];

  if (isset($_REQUEST['btnPu'])) {

    switch ($_REQUEST['btnPu']) {

      case "Add puja":

        // echo "You pressed Button 1<br>";

        if (!empty($_POST['codPuja']) && !empty($_POST['valor']) && !empty($_POST['fecha']) &&
            !empty($_POST['codUsu']) && !empty($_POST['codSub'])) {
          $pu = $pujas->addPujas($codPuja, $valor, $fecha, $codUsu, $codSub);
        }

      break;

      case "Edit puja":

        // echo "You pressed Button 2<br>";

        if (!empty($_POST['codPuja']) && !empty($_POST['valor']) && !empty($_POST['fecha']) &&
            !empty($_POST['codUsu']) && !empty($_POST['codSub'])) {

          //echo "Clave del producto: ". $codPuja ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $materia;
          //$_POST['nombre'] = $pujas[intval($codPuja) - 1][$nomUsu];

          for ($p = 0; $p < count($pu); $p++) {

            if (intval($pu[$p]['codPuja']) == intval($_POST['codPuja'])) {

              // print "Id: ". $_POST['codPuja']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              // print "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $_POST['secreto']. "<br>Fecha: ". $_POST['fecha'];
              
              // echo "<br><br>Id: ". $_POST['codPuja']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              // echo "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $pu[$p]['password']. "<br>Fecha: ". $_POST['fecha'];*/

              $pu = $pujas->updatePujas($_POST['codPuja'], $_POST['valor'], $_POST['fecha'], $_POST['codUsu'], $_POST['codSub']);
            }
          }
        }

      break;

      case "Delete pu":

        // print "You pressed Button 3<br>";

        if (!empty($_POST['codPuja']) && !empty($_POST['valor']) && !empty($_POST['fecha']) &&
            !empty($_POST['codUsu']) && !empty($_POST['codSub'])) {

          // echo "Clave del producto: ". $codPuja ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $materia;

          for ($p = 0; $p < count($pu); $p++) {

            if (intval($pu[$p]['codPuja']) == intval($_POST['codPuja'])) {
              $pu = $pujas->deletePujas($_POST['codPuja']);
            }
          }
        }

      break;
    }
  }

?>