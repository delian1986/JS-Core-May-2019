function validate() {
    let inputField = document.getElementsById('email');
    inputField.addEventListener('blur',validateEmail);

    function validateEmail(e){
        console.log(e);
    }
}