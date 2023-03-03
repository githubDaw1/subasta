<?php

  namespace App\Models;

  class Producto {

    private $con;

    protected $fillable = [];

    protected $table = 'producto';

    //protected $hidden = ['password'];

    public function __construct() {
      $this->con = mysqli_connect('localhost', 'root' , '', 'subasta');
    }

    // Otener todos los productos
    public function getProductos() {

      $selectProducts = mysqli_query($this->con, "SELECT * FROM producto ORDER BY 1");

      while ($row = mysqli_fetch_array($selectProducts)) { $productos[] = $row; }

      return $productos;
    }

    // Obtener el último producto
    public function getLastId() {

      $lastId = mysqli_query($this->con, "SELECT * FROM producto ORDER BY codProd DESC LIMIT 1");

      while ($row = mysqli_fetch_array($lastId)) { $id[] = $row; }

      return $id;
    }

    // Añadir un producto
    public function addProductos($codigo, $nombre, $material, $anchura, $altura, $codSubasta) {

      mysqli_query($this->con, "INSERT INTO producto(codProd, nomProd, material, anchura, altura, codSubasta) VALUES (codProd=$codigo, nomProd=$nombre, material=$material, anchura=$anchura, altura=$altura, codSubasta=$codSubasta)");

      /*while ($row = mysqli_fetch_array($insertProductos)) { $productos[] = $row; }

      return $productos;*/
    }

    // Eliminar un producto
    public function deleteProductos($codigo) {

      mysqli_query($this->con, "DELETE FROM producto WHERE codProd=$codigo");

      /*while ($row = mysqli_fetch_array($deleteProductos)) { $productos[] = $row; }

      return $productos;*/
    }

    // Actualizar un producto
    public function updateProductos($codigo, $nombre, $material, $anchura, $altura) {

      mysqli_query($this->con, "UPDATE producto SET nomProd=$nombre, material=$material, anchura=$anchura, altura=$altura WHERE codProd=$codigo");

      /*while ($row = mysqli_fetch_array($updateProductos)) { $productos[] = $row; }

      return $productos;*/
    }
  }

?>
