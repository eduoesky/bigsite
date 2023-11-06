document.getElementById("FVPTL14").addEventListener("submit", function (e) {
    const checkboxes14 = document.querySelectorAll('input[type="checkbox"]');
    const divErrom = document.getElementById("divErrom");
    let peloMenosUmaCheckboxMarcada14 = false;

    checkboxes14.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada14 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada14) {
        divErrom.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});