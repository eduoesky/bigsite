document.getElementById("FVPTL19").addEventListener("submit", function (e) {
    const checkboxes19 = document.querySelectorAll('input[type="checkbox"]');
    const divError = document.getElementById("divError");
    let peloMenosUmaCheckboxMarcada19 = false;

    checkboxes19.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada19 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada19) {
        divError.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});