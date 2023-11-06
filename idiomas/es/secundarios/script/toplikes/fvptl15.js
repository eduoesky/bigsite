document.getElementById("FVPTL15").addEventListener("submit", function (e) {
    const checkboxes15 = document.querySelectorAll('input[type="checkbox"]');
    const divErron = document.getElementById("divErron");
    let peloMenosUmaCheckboxMarcada15 = false;

    checkboxes15.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada15 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada15) {
        divErron.textContent = "Marque al menos 1 opción.";
        e.preventDefault();
    }
});