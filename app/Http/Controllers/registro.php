<?php
  require_once("Models/Modelo.php");
  $usuarios = new Modelo();
  $users = $usuarios->getUsuarios();
  require_once("Views/registro.php");
?>