<section class="subastas">

  <h1>Tabla Subastas</h1>

  <div class="formulario">

    <form method="POST">

      <input type="number" name="codSub" value="<?php echo intval(count($sub)) + 1; ?>" disabled>
      <input type="date" name="fechaIni">
      <input type="date" name="fechaFin">
      <input type="number" name="participantes" min="1">

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

  $subastas = new Subasta();

  $codSub = $_POST['codSub'];
  $fechaIni = $_POST['fechaIni'];
  $fechaFin = $_POST['fechaFin'];
  $invitados = $_POST['participantes'];

  if (isset($_REQUEST['btnSub'])) {

    switch ($_REQUEST['btnSub']) {

      case "Add sub":

        // echo "You pressed Button 1<br>";

        if (!empty($_POST['codSub']) && !empty($_POST['fechaIni']) && !empty($_POST['fechaFin']) && !empty($_POST['participantes'])) {
          $sub = $subastas->addSubastas($codSub, $fechaIni, $fechaFin, $invitados);
        }

      break;

      case "Edit sub":

        // print "You pressed Button 2<br>";

        if (!empty($_POST['codSub']) && !empty($_POST['fechaIni']) && !empty($_POST['fechaFin'])) {

          //echo "Clave del producto: ". $clave ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $materia;
          //$_POST['nombre'] = $sub[intval($clave) - 1][$nomUsu];

          for ($s = 0; $s < count($sub); $s++) {

            if (intval($sub[$s]['codSubasta']) == intval($_POST['codSub'])) {

              /* print "Id: ". $_POST['codSub']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              print "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $_POST['secreto']. "<br>Fecha: ". $_POST['fecha'];
                
              echo "<br><br>Id: ". $_POST['codSub']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              echo "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $sub[$s]['password']. "<br>Fecha: ". $_POST['fecha'];*/

              $sub = $subastas->updateSubastas($_POST['codSub'], $_POST['fechaIni'], $_POST['fechaFin'], $_POST['participantes']);
            }
          }
        }

      break;

      case "Delete sub":

        // print "You pressed Button 3<br>";

        if (!empty($_POST['codSub'])) {

          // echo "Clave del producto: ". $clave ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $materia;

          for ($s = 0; $s < count($sub); $s++) {

            if (intval($sub[$s]['codSubasta']) == intval($_POST['codSub'])) {
              $sub = $subastas->deleteSubastas($_POST['codSub']);
            }
          }
        }

      break;
    }
  }

?>