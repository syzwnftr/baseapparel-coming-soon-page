const emailAddress = document.querySelector('.emailAddress');
const errorMsg = document.querySelector('.error-msg');
const btn = document.querySelector('.btn');

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', (e) => {
    if (!emailAddress.value.match(validRegex)) {
        emailAddress.style.borderColor = 'var(--softRed)';
        emailAddress.classList.add('error-icon');
        errorMsg.style.display = 'block';
    } else {
        emailAddress.style.borderColor = 'var(--desRed)';
        emailAddress.classList.remove('error-icon');
        errorMsg.style.display = 'none';
    }  

    e.preventDefault()
});


emailAddress.oninput = () => {
    emailAddress.style.borderColor = 'var(--desRed)';
    emailAddress.classList.remove('error-icon')
    errorMsg.style.display = 'none';
    
}

const reset = () => {
    emailAddress.value = '';
}

reset();