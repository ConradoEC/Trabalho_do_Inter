function mistake()
{
  const urlMistake = new URLSearchParams(window.location.search);
  const algoEstaErrado = urlMistake.get('indice')
  console.log(algoEstaErrado)

  if(algoEstaErrado == 'algoEstaErrado')
  {
    statusLogin.innerText = 'Algo está errado'
  }
}

window.onload = mistake()


// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form"); // Seleciona o primeiro formulário na página
//     const nome = document.querySelector('input[placeholder="Nome"]');
//     const email = document.querySelector('input[placeholder="E-mail"]');
//     const senha = document.querySelector('input[placeholder="Senha"]');
//     const senhaConfirmation = document.querySelector('input[placeholder="Confirmação de Senha"]'); // Adicionei a seleção da confirmação de senha
  
    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   checkInputs();
    // });
  
    // function checkInputs() {
    //   const nomeValue = nome.value;
    //   const emailValue = email.value;
    //   const senhaValue = senha.value;
    //   const senhaConfirmationValue = senhaConfirmation.value; 
  
    //   if (nomeValue === "") {
    //     setErrorFor(nome, "O nome de usuário é obrigatório.");
    //   } else {
    //     setSuccessFor(nome);
    //   }
  
    //   if (emailValue === "") {
    //     setErrorFor(email, "O E-mail é obrigatório.");
    //   } else if (!checkEmail(emailValue)) {
    //     setErrorFor(email, "Por favor, insira um E-mail válido.");
    //   } else {
    //     setSuccessFor(email);
    //   }
  
    //   if (senhaValue === "") {
    //     setErrorFor(senha, "A senha é obrigatória.");
    //   } else if (senhaValue.length < 7) {
    //     setErrorFor(senha, "A senha precisa ter pelo menos 7 caracteres.");
    //   } else {
    //     setSuccessFor(senha);
    //   }
  
    //   if (senhaConfirmationValue === "") {
    //     setErrorFor(senhaConfirmation, "A confirmação de senha é obrigatória.");
    //   } else if (senhaConfirmationValue !== senhaValue) {
    //     setErrorFor(senhaConfirmation, "As senhas não conferem.");
    //   } else {
    //     setSuccessFor(senhaConfirmation);
    //   }
  
    //   const formControls = form.querySelectorAll(".input-box");
  
    //   const formIsValid = [...formControls].every((formControl) => {
    //     return formControl.classList.contains("success");
    //   });
  
    //   if (formIsValid) {
    //     console.log("O formulário está 100% válido!");
    //   }
    // }
  
//     function setErrorFor(input, message) {
//       const formControl = input.parentElement;
//       const small = formControl.querySelector("small");
  
//       // Adiciona a mensagem de erro
//       small.innerText = message;
  
//       // Adiciona a classe de erro
//       formControl.classList.remove("success");
//       formControl.classList.add("error");
//     }
  
//     function setSuccessFor(input) {
//       const formControl = input.parentElement;
  
//       // Adicionar a classe de sucesso
//       formControl.classList.remove("error");
//       formControl.classList.add("success");
//     }
  
//     function checkEmail(email) {
//       return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
//     }
// });