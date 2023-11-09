document.getElementById("FVPTL17").addEventListener("submit", function (e) {
    const checkboxes17 = document.querySelectorAll('input[type="checkbox"]');
    const divErrop = document.getElementById("divErrop");
    let peloMenosUmaCheckboxMarcada17 = false;

    checkboxes17.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada17 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada17) {
        divErrop.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});