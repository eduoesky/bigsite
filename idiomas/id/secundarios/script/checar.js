const checkbox = document.getElementById('outro');
const textareaContainer = document.getElementById('textareaContainer');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        textareaContainer.style.display = 'block';
    } else {
        textareaContainer.style.display = 'none';
    }
});
