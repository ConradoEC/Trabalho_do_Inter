<?php
    include_once("./forms-cadastro/conexao.php");
    // if(!isset($_SESSION['login']))
    // {
        if(isset($_POST['datas']))
        {
            session_start();
            $name = $_POST['nome'];
            $password = $_POST['senha'];
            $email = $_POST['email'];

            $sql = "SELECT * FROM cadastro_intermedic WHERE nome = '$name' AND senha = '$password' AND email = '$email'";
            mysqli_query($conexao, $sql);
            $obj = mysqli_fetch_object(mysqli_query($conexao, $sql));
            if($obj->id != '')
            {
                // $_SESSION['login'] = true;
                // setcookie('nome', $name, time() + 3600);
                // setcookie('senha', $password, time() + 3600);
                // setcookie('email', $email, time() + 3600);
                header('Location: https://conradoec.github.io/Trabalho_do_Inter?id=' . $obj->id . '&lastName=' . $obj->sobrenome . '&WasBorn=' . $obj->dataNascimento);
            }
            else
            {  
                header('Location: login.html?indice=algoEstaErrado');
            }
        };
    // }
?>