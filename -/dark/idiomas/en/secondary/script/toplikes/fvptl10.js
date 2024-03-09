document.getElementById("FVPTL10").addEventListener("submit", function (e) {
    const checkboxes10 = document.querySelectorAll('input[type="checkbox"]');
    const divErroi = document.getElementById("divErroi");
    let peloMenosUmaCheckboxMarcada10 = false;

    checkboxes10.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada10 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada10) {
        divErroi.textContent = "Check at least 1 option.";
        e.preventDefault();
    }
});