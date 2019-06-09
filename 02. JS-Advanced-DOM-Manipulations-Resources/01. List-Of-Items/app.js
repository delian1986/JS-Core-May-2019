function addItem() {
    let inputValue = document.getElementById('newItemText').value;
    if (inputValue.length > 0) {
        let ul = document.getElementById('items');

        let newListItem = document.createElement('li');
        ul.appendChild(newListItem);
        newListItem.innerHTML = inputValue;

        inputValue.value= '';
    }
}