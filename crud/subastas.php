<?php
  date_default_timezone_set('Europe/Madrid');
?>

<section class="subastas">

  <h1>Tabla Subastas</h1>

  <div class="formulario">

    <form method="GET">

      <input type="number" name="codigo" value="<?php echo intval(count($sub)) + 1; ?>" required>
      <input type="date" name="fechaIni">
      <input type="date" name="fechaFin">
      <input type="number" name="precIni" min="1" required>

      <div class="fin-float"></div>

      <button name="btnSub" value="Add sub">Añadir subasta</button>
      <button name="btnSub" value="Edit sub">Editar subasta</button>
      <button name="btnSub" value="Delete sub">Borrar subasta</button>

    </form>

  </div>

  <!-- Tabla subastas -->
  <div class="tabla">

    <table>

      <thead>

        <tr>
          <th>Código Subasta</th>
          <th>fecha inicial</th>
          <th>fecha fin</th>
          <th>precio inicial</th>
        </tr>

      </thead>

      <tbody>

        <?php
          for ($s = 0; $s < count($sub); $s++) {
        ?>

          <tr>
            <td><?php echo $sub[$s]['codSubasta']; ?></td>
            <td><?php echo $sub[$s]['fechaInic']; ?></td>
            <td><?php echo $sub[$s]['fechaFin']; ?></td>
            <td><?php echo $sub[$s]['precIni']; ?></td>
          </tr>

        <?php
          }
        ?>

      </tbody>

    </table>

  </div>

</section>

<?php

  if (isset($_REQUEST['btnSub'])) {

    $codSub = $_GET['codigo'];
    $fechaIni = $_GET['fechaIni'];
    $fechaFin = $_GET['fechaFin'];
    $invitados = $_GET['precIni'];

    switch ($_REQUEST['btnSub']) {

      case "Add sub":

        // echo "You pressed Button 1<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['fechaIni']) && !empty($_GET['fechaFin']) && !empty($_GET['precIni'])) {
          $subastas->addSubastas($codSub, $fechaIni, $fechaFin, $invitados);
        }

      break;

      case "Edit sub":

        // print "You pressed Button 2<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['fechaIni']) && !empty($_GET['fechaFin'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $materia;
          //$_GET['nombre'] = $sub[intval($clave) - 1][$nomUsu];

          for ($s = 0; $s < count($sub); $s++) {

            if (intval($sub[$s]['codSubasta']) == intval($_GET['codigo'])) {

              /* print "Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomUsuario']. "<br>Apellidos: ". $_GET['apeUsuario'];
              print "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $_GET['secreto']. "<br>Fecha: ". $_GET['fecha'];

              echo "<br><br>Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomUsuario']. "<br>Apellidos: ". $_GET['apeUsuario'];
              echo "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $sub[$s]['password']. "<br>Fecha: ". $_GET['fecha'];*/

              $subastas->updateSubastas($_GET['codigo'], $_GET['fechaIni'], $_GET['fechaFin'], $_GET['precIni']);
            }
          }
        }

      break;

      case "Delete sub":

        // print "You pressed Button 3<br>";

        if (!empty($_GET['codigo'])) {

          // echo "Clave del producto: ". $clave ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $materia;

          for ($s = 0; $s < count($sub); $s++) {

            if (intval($sub[$s]['codSubasta']) == intval($_GET['codigo'])) {
              $subastas->deleteSubastas($_GET['codigo']);
            }
          }
        }

      break;
    }
  }

?>
