document.getElementById("FVPTL12").addEventListener("submit", function (e) {
    const checkboxes12 = document.querySelectorAll('input[type="checkbox"]');
    const divErrok = document.getElementById("divErrok");
    let peloMenosUmaCheckboxMarcada12 = false;

    checkboxes12.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada12 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada12) {
        divErrok.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});