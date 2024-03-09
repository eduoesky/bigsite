document.getElementById("FVPTL11").addEventListener("submit", function (e) {
    const checkboxes11 = document.querySelectorAll('input[type="checkbox"]');
    const divErroj = document.getElementById("divErroj");
    let peloMenosUmaCheckboxMarcada11 = false;

    checkboxes11.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada11 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada11) {
        divErroj.textContent = "Check at least 1 option.";
        e.preventDefault();
    }
});