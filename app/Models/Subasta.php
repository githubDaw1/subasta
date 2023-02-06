<?php

  namespace App\Models;

  class Subasta {

    private $con;

    protected $fillable = [];

    protected $table = 'subasta';

    //protected $hidden = ['password'];

    public function __construct() {
      $this->con = mysqli_connect('localhost', 'root' , '', 'subasta');
    }

    // Obtener todos las subastas
    public function getSubastas() {

      $selectSubastas = mysqli_query($this->con, "SELECT * FROM subasta");

      while ($row = mysqli_fetch_array($selectSubastas)) { $subastas[] = $row; }

      return $subastas;
    }

    // Añadir una subasta
    public function addSubastas($fechaIni, $fechaFin, $participantes) {

      $insertSubastas = mysqli_query($this->con, "INSERT INTO subasta(fechaInic, fechaFin, particTotales) VALUES (fechaInic=$fechaIni, fechaFin=$fechaFin, particTotales=$participantes)");

      while ($row = mysqli_fetch_array($insertSubastas)) { $subastas[] = $row; }

      return $subastas;
    }

    // Eliminar una subasta
    public function deleteSubastas($indice) {

      $deleteSubastas = mysqli_query($this->con, "DELETE FROM subasta WHERE codSubasta=$indice");

      while ($row = mysqli_fetch_array($deleteSubastas)) { $subastas[] = $row; }

      return $subastas;
    }

    // Actualizar una subasta
    public function updateSubastas($indice, $fechaIni, $fechaFin, $participantes) {

      $updateSubastas = mysqli_query($this->con, "UPDATE subasta SET fechaInic=$fechaIni, fechaFin=$fechaFin, particTotales=$participantes WHERE codSubasta=$indice");

      while ($row = mysqli_fetch_array($updateSubastas)) { $subastas[] = $row; }

      return $subastas;
    }
  }

?>
