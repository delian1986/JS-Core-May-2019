function addItem() {
    let inputValue = document.getElementById('newText').value;

    if (inputValue.length>0){
        let newItem = document.createElement('li');
        let ul = document.getElementById('items');
        ul.appendChild(newItem);
        newItem.innerHTML = inputValue.trim();

        let a = document.createElement('a');
        newItem.appendChild(a);
        a.setAttribute('href','#');
        a.innerHTML = '[Delete]';
        a.addEventListener('click',removeItem);

        function removeItem(){
            let node = this.parentNode;
            ul.removeChild(node);
        }
    }
}