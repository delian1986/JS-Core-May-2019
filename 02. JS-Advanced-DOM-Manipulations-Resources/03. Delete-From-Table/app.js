function deleteByEmail() {
    let inputText = document.getElementsByName('email')[0].value;
    if(inputText){
        let tableData = document.querySelectorAll('#customers td');
        let result = document.getElementById('result');
        
        for (const data of tableData) {
            if(data.innerHTML === inputText){
                data.parentNode.parentNode.removeChild(data.parentNode);
                result.innerHTML = 'Deleted.';
                return;
            }
        }

        result.innerHTML = 'Not found.';
    }
}