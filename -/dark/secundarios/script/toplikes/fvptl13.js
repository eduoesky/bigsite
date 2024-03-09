document.getElementById("FVPTL13").addEventListener("submit", function (e) {
    const checkboxes13 = document.querySelectorAll('input[type="checkbox"]');
    const divErrol = document.getElementById("divErrol");
    let peloMenosUmaCheckboxMarcada13 = false;

    checkboxes13.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada13 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada13) {
        divErrol.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});