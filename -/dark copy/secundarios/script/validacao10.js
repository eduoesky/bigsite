document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const divErro = document.getElementById("divErro");
    let peloMenosUmaCheckboxMarcada = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada) {
        divErro.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});