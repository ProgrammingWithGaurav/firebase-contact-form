let username = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let alertMessage = document.getElementById('alert');

function send() {
    if (username.value !== '' && email.value !== '' && message.value !== '') {
        db.collection("contact-list").add({
            name: username.value,
            email: email.value,
            message: message.value,
        })
        username.value = ''
        email.value = ''
        message.value = ''
    }
    else {
        alertMessage.classList.remove('hidden');
        setTimeout(()=>{
            alertMessage.classList.add('hidden');
        },3000)
    }
}
