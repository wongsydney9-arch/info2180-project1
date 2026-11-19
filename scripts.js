document.addEventListener("DOMContentLoaded", () =>{
    const button = document.querySelector('.newsletter .btn');
    button.addEventListener('click', message);
})

function message(event){
    event.preventDefault();
    const email = document.getElementById('email');
    const message = document.querySelector('.message');
    if(email.checkValidity()){
        message.innerHTML = 'Thank you! Your email address ' + email.value + ' has been added to our mailing list!';
    } else {
        message.innerHTML = 'Please enter valid email address.'
    }
}