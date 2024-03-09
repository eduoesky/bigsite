document.getElementById("FVPTL4").addEventListener("submit", function (e) {
    const checkboxes4 = document.querySelectorAll('input[type="checkbox"]');
    const divErroc = document.getElementById("divErroc");
    let peloMenosUmaCheckboxMarcada4 = false;

    checkboxes4.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada4 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada4) {
        divErroc.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});