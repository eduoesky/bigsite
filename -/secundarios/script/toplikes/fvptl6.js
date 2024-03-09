document.getElementById("FVPTL6").addEventListener("submit", function (e) {
    const checkboxes6 = document.querySelectorAll('input[type="checkbox"]');
    const divErroe = document.getElementById("divErroe");
    let peloMenosUmaCheckboxMarcada6 = false;

    checkboxes6.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada6 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada6) {
        divErroe.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});