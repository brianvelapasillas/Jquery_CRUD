<?php
 
 include('conn.php');

  if (isset($_POST['id'])){
    
    $id = $_POST['id'];

    $sql = "DELETE FROM  suppliers WHERE id=$id";
    
    $resultado=mysqli_query($conn,$sql);
    if (!$resultado){
        die('Error en la consulta'.mysqli_error($conn));
    }

    echo "Proveedor eliminado  ";
} //if


?>