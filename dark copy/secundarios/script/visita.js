const checkbox = document.getElementById("commensagem");
const divMensagens = document.getElementById("mensagens");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    divMensagens.style.display = "block";
  } else {
    divMensagens.style.display = "none";
  }
});

//aparecer as mensagens dps de clicar na checkbox :3