<?php
    $servidor = "85.10.205.173";
    $usuario = "grupo_a_2ds" ;
    $senha = "site_de_medicina";
    $dbname = "inter_2ds";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);
    if (!$conexao){
        die("Houve um erro: " .mysqli_connect_error());
    }
?>