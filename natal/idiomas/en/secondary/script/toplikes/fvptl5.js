document.getElementById("FVPTL5").addEventListener("submit", function (e) {
    const checkboxes5 = document.querySelectorAll('input[type="checkbox"]');
    const divErrod = document.getElementById("divErrod");
    let peloMenosUmaCheckboxMarcada5 = false;

    checkboxes5.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada5 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada5) {
        divErrod.textContent = "Check at least 1 option.";
        e.preventDefault();
    }
});