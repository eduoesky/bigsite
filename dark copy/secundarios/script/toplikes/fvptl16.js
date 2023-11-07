document.getElementById("FVPTL16").addEventListener("submit", function (e) {
    const checkboxes16 = document.querySelectorAll('input[type="checkbox"]');
    const divErroo = document.getElementById("divErroo");
    let peloMenosUmaCheckboxMarcada16 = false;

    checkboxes16.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada16 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada16) {
        divErroo.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});