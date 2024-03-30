<?php
    header('Access-Control-Allow-Origin: *');

    include('conn.php');

    $sql = "select * from suppliers";
    
    $resultado=mysqli_query($conn,$sql);

    if (!$resultado){
        die('Error in the consultation'.mysqli_error($conn));
    }
   

    $json=array();
    while($row =mysqli_fetch_array($resultado)){
        $json[]=array(
            'id'=>$row['id'],
            'nombre'=>$row['nombre'],
            'ap'=>$row['ap'],
            'am'=>$row['am']
        );
    }

    $jsonString=json_encode($json);
    echo $jsonString;

 ?>