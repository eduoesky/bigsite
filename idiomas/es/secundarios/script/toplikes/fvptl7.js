document.getElementById("FVPTL7").addEventListener("submit", function (e) {
    const checkboxes7 = document.querySelectorAll('input[type="checkbox"]');
    const divErroff = document.getElementById("divErroff");
    let peloMenosUmaCheckboxMarcada7 = false;

    checkboxes7.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada7 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada7) {
        divErroff.textContent = "Marque al menos 1 opción.";
        e.preventDefault();
    }
});