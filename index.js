let username = document.getElementById('name');
let email = document.getElementById('email');
let messsage = document.getElementById('messsage');

function send(event) {
    let message = document.getElementById('message')
    db.collection("contact-list").add({
        name : username.value,
        email: email.value,
        message: message.value,
    })
    username.value = ''
    email.value = ''
    message.value = ''
}
