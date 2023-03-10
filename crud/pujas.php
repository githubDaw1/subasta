<?php
  date_default_timezone_set('Europe/Madrid');
?>

<section class="pujas">

  <h1>Tabla Pujas</h1>

  <div class="formulario">

    <form method="GET">

      <input type="number" name="codigo" value="<?php echo intval(count($pu)) + 1; ?>" required>
      <input type="number" name="valor" required>
      <input type="date" name="fecha">
      <input type="number" name="codUsu" required disabled>
      <input type="number" name="codSub" min="1" required disabled>

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

  if (isset($_REQUEST['btnPu'])) {

    $codPuja = $_GET['codigo'];
    $valor = $_GET['valor'];
    $fecha = $_GET['fecha'];
    $codUsu = $_GET['codUsu'];
    $codSub = $_GET['codSub'];

    switch ($_REQUEST['btnPu']) {

      case "Add puja":

        // echo "You pressed Button 1<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['valor']) && !empty($_GET['fecha']) &&
            !empty($_GET['codUsu']) && !empty($_GET['codSub'])) {
          $pujas->addPujas($codPuja, $valor, $fecha, $codUsu, $codSub);
        }

      break;

      case "Edit puja":

        // echo "You pressed Button 2<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['valor']) && !empty($_GET['fecha']) &&
            !empty($_GET['codUsu']) && !empty($_GET['codSub'])) {

          //echo "Clave del producto: ". $codPuja ."<br>Nombre del producto: ". $nombre ."<br>Material: ". $materia;
          //$_GET['nombre'] = $pujas[intval($codPuja) - 1][$nomUsu];

          for ($p = 0; $p < count($pu); $p++) {

            if (intval($pu[$p]['codPuja']) == intval($_GET['codigo'])) {

              // print "Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomUsuario']. "<br>Apellidos: ". $_GET['apeUsuario'];
              // print "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $_GET['secreto']. "<br>Fecha: ". $_GET['fecha'];

              // echo "<br><br>Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nomUsuario']. "<br>Apellidos: ". $_GET['apeUsuario'];
              // echo "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $pu[$p]['password']. "<br>Fecha: ". $_GET['fecha'];*/

              $pujas->updatePujas($_GET['codigo'], $_GET['valor'], $_GET['fecha'], $_GET['codUsu'], $_GET['codSub']);
            }
          }
        }

      break;

      case "Delete pu":

        // print "You pressed Button 3<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['valor']) && !empty($_GET['fecha']) &&
            !empty($_GET['codUsu']) && !empty($_GET['codSub'])) {

          // echo "Clave del producto: ". $codPuja ."<br>Nombre  del producto: ". $nombre ."<br>Material: ". $materia;

          for ($p = 0; $p < count($pu); $p++) {

            if (intval($pu[$p]['codPuja']) == intval($_GET['codigo'])) {
              $pujas->deletePujas($_GET['codigo']);
            }
          }
        }

      break;
    }
  }

?>
