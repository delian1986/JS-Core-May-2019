function addItem() {
    let inputFields = document.querySelectorAll('input');

    if (inputFields) {
        let menu = document.getElementById('menu');
        let option = document.createElement('option');

        option.text = inputFields[0].value;
        option.value = inputFields[1].value;

        menu.appendChild(option);

        inputFields[0].value = '';
        inputFields[1].value = '';
    }
}