<div class="wrapper">
    <form action="" method="POST">
        <h1>Login</h1>
        
        <div class="input-box">
            <input type="text" placeholder="Primeiro nome" name="nome" required>
            <i class='bx bxs-user-circle'></i>
            <small class="error-message"></small>
        </div>
    
        <div class="input-box">
            <input type="text" placeholder="E-mail" name="email" required>
            <i class='bx bxs-envelope'></i>
            <small class="error-message"></small>
        </div> 

        <div class="input-box">
            <input type="password" placeholder="Senha" name="senha" required>
            <i class='bx bxs-lock-alt' ></i>
            <small class="error-message"></small>
        </div>

        <div class="remember-forgot">
            <label><input type="checkbox"> Lembrar-me</label>
        </div>

        <input type="submit" name="datas" class="btn" value="Enviar"></input>
            
        <div class="resgister-link">
            <p>Não possuí conta? <a href="forms-cadastro/cadastro.html">Cadastre-se</a></p>
        </div>
    </form>
</div>