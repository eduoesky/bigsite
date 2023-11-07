document.getElementById("FVPTL18").addEventListener("submit", function (e) {
    const checkboxes18 = document.querySelectorAll('input[type="checkbox"]');
    const divErroqq = document.getElementById("divErroqq");
    let peloMenosUmaCheckboxMarcada18 = false;

    checkboxes18.forEach(checkbox => {
        if (checkbox.checked) {
            peloMenosUmaCheckboxMarcada18 = true;
        }
    });

    if (!peloMenosUmaCheckboxMarcada18) {
        divErroqq.textContent = "Marque ao menos 1 opção.";
        e.preventDefault();
    }
});