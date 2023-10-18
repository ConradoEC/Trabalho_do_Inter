<?php session_start() ?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulário</title>
        <link rel="stylesheet" href="style.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>

    <body>
        <?php
            include_once("./forms-cadastro/conexao.php");

            if(!isset($_SESSION['login']))
            {
                if(isset($_POST['datas']))
                {
                    $name = $_POST['nome'];
                    $password = $_POST['senha'];
                    $email = $_POST['email'];

                    $sql = "SELECT * FROM cadastro_intermedic WHERE nome = '$name' AND senha = '$password' AND email = '$email'";
                    mysqli_query($logins, $sql);
                    $obj = mysqli_fetch_object(mysqli_query($logins, $sql));
                    if($obj->nome != '')
                    {
                        $_SESSION['login'] = true;  
                        header('Location: index.php');
                    }
                    else
                    {  
                        header('Location: index.php?indice=algoEstaErrado');
                    }
                };

                include('login.php');
            }
            else
            {
                if(isset($_GET['logout']))
                {
                    unset($_SESSION['login']);
                    session_destroy();
                    header('Location: index.php');
                }

                include('login.html');
            }
        ?>
        <script src="script.js"></script>
    </body>
</html>