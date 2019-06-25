function toggle() {
    let extra = document.getElementById('extra');
    let button = document.querySelector('span');

    if(extra.style.display === 'block'){
        extra.style.display = 'none';
        button.innerText  = 'More';
    } else{
        extra.style.display = 'block';
        button.innerText  = 'Less';
    }
}