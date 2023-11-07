document.getElementById("FVPTL9").addEventListener("submit", function (e) {
    const checkboxes9 = document.querySelectorAll('input[type="checkbox"]');
    const divErroh = document.getElementById("divErroh");
    let peloMenosUmaCheckboxMarcada9 = false;

    checkboxes9.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada9 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada9) {
        divErroh.textContent = "Marque al menos 1 opción.";
        e.preventDefault();
    }
});