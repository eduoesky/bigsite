document.getElementById("formularioyoutube").addEventListener("submit", function (event) {
    var campoEmailYT = document.getElementById("campoEmailYT").value;
    var campoTextoYT = document.getElementById("campoTextoYT").value;

    var divErroYT = document.getElementById("divErroYT");
    divErroYT.textContent = "";

    if (campoEmailYT.length < 15 || (!campoEmailYT.toLowerCase().endsWith("@gmail.com") && campoEmailYT !== "")) {
        divErroYT.textContent = "Invalid email";
        event.preventDefault();
    }

    if (
        campoEmailYT.length < 15 ||
        campoEmailYT.toLowerCase().endsWith("@gmail.com") ||
        campoEmailYT === "oeskky@gmail.com" ||
        campoEmailYT === "oesamaeduardakynlia@gmail.com"
    ) {
        divErroYT.textContent = "Invalid email";
        event.preventDefault();
    }

    if (campoTextoYT.length < 10) {
        divErroYT.textContent = "Short suggestion";
        event.preventDefault();
    }


    if (divErroYT.textContent !== "") {
        event.preventDefault();
    }
});

document.getElementById("formularioshorts").addEventListener("submit", function (event) {
    var campoEmailSH = document.getElementById("campoEmailSH").value;
    var campoTextoSH = document.getElementById("campoTextoSH").value;

    var divErroSH = document.getElementById("divErroSH");
    divErroSH.textContent = "";

    if (campoEmailSH.length < 15 || (!campoEmailSH.toLowerCase().endsWith("@gmail.com") && campoEmailSH !== "")) {
        divErroSH.textContent = "Invalid email";
        event.preventDefault();
    }

    if (
        campoEmailSH.length < 15 ||
        campoEmailSH.toLowerCase().endsWith("@gmail.com") ||
        campoEmailSH === "oeskky@gmail.com" ||
        campoEmailSH === "oesamaeduardakynlia@gmail.com"
    ) {
        divErroSH.textContent = "Invalid email";
        event.preventDefault();
    }

    if (campoTextoSH.length < 10) {
        divErroSH.textContent = "Short suggestion";
        event.preventDefault();
    }

    if (divErroSH.textContent !== "") {
        event.preventDefault();
    }
});

document.getElementById("formularioinstagram").addEventListener("submit", function (event) {
    var campoEmailIG = document.getElementById("campoEmailIG").value;
    var campoSG = document.getElementById("campoSG").value;
    var campoTextoIG = document.getElementById("campoTextoIG").value;

    var divErroIG = document.getElementById("divErroIG");
    divErroIG.textContent = "";

    var emailValido = campoEmailIG.trim().toLowerCase().endsWith("@gmail.com");
    if (!emailValido) {
        divErroIG.textContent = "Invalid email";
        event.preventDefault();
    }

    if (
        campoEmailIG.length < 15 ||
        campoEmailIG.toLowerCase().endsWith("@gmail.com") ||
        campoEmailIG === "oeskky@gmail.com" ||
        campoEmailIG === "oesamaeduardakynlia@gmail.com"
    ) {
        divErroIG.textContent = "Invalid email";
        event.preventDefault();
    }

    if (campoTextoIG.length < 3 || campoTextoIG.length > 15 || campoTextoIG.includes(".") || campoTextoIG.match(/^[\d_.]/)) {
        divErroIG.textContent = "Invalid Pou nick";
        event.preventDefault();
    }

    if (campoSG.length <= 10 || !/^[a-zA-Z]/.test(campoSG)) {
        divErroIG.textContent = "Short suggestion";
        event.preventDefault();
    }
});