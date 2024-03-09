document.getElementById("FVPTL3").addEventListener("submit", function (e) {
    const checkboxes3 = document.querySelectorAll('input[type="checkbox"]');
    const divErrobb = document.getElementById("divErrobb");
    let peloMenosUmaCheckboxMarcada3 = false;

    checkboxes3.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada3 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada3) {
        divErrobb.textContent = "Marque al menos 1 opción.";
        e.preventDefault();
    }
});