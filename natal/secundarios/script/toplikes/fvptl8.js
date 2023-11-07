document.getElementById("FVPTL8").addEventListener("submit", function (e) {
    const checkboxes8 = document.querySelectorAll('input[type="checkbox"]');
    const divErrog = document.getElementById("divErrog");
    let peloMenosUmaCheckboxMarcada8 = false;

    checkboxes8.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada8 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada8) {
        divErrog.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});