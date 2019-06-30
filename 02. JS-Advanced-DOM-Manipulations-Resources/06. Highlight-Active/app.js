function focus() {
    let sections = document.getElementsByTagName('input');
    for (const div of sections) {
        div.onblur = ()=>{
            div.parentElement.classList.remove('focused');
        }

        div.onfocus=()=>{
            div.parentElement.classList.add('focused');
        }
    }
}