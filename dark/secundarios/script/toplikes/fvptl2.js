document.getElementById("FVPTL2").addEventListener("submit", function (e) {
    const checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
    const divErroa = document.getElementById("divErroa");
    let peloMenosUmaCheckboxMarcada2 = false;

    checkboxes2.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada2 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada2) {
        divErroa.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});