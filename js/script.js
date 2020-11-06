document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  
  if (document.getElementById("nome-do-usuario").value != "" && document.getElementById("email-do-usuario").value != ""){
    alert("Prontinho! Você receberá as novidades por E-mail.")
  }
  else{
    alert("Por favor, preencha os campos Nome e E-mail.")
  }
}



