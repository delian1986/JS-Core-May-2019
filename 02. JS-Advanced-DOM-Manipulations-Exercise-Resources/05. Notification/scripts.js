function notify(message) {
    let notifyContainer = document.getElementById("notification");
    notifyContainer.innerHTML = message;
    notifyContainer.style.display = 'block';

    setTimeout(() => {
        notifyContainer.style.display = 'none';
    }, 2000);
}