let firstName = document.getElementsByClassName('form-name')[0];
let lastName = document.getElementsByClassName('form-lastName')[0];
let email = document.getElementsByClassName('form-email')[0];
let password = document.getElementsByClassName('form-password')[0];
let claimBtn = document.getElementsByClassName('container__form-btn')[0];
let border = document.getElementsByClassName('container__form-input');
let error = document.getElementsByClassName('error__icon');
let p_alert = document.getElementsByClassName('alert')

function emailIsValid(mail) {
    return /\S+@\S+\.\S+/.test(mail);
}

function passwordIsValid(pass) {
    return /[a-zA-Z0-9]{6,12}/g.test(pass)
}

let removeErrors = () => {
    for (let i = 0; i < error.length; i++) {
        error[i].classList.remove('error__icon--active')
    }
    for (let i = 0; i < border.length; i++) {
        border[i].classList.remove('container__form-input--active')
    }
    for (let i = 0; i < p_alert.length; i++) {
        p_alert[i].classList.remove('fName-error', 'lName-error', 'email-error', 'pass-error')
    }
}

let addErrors = () => {
    if (firstName.value.length === 0) {
        border[0].classList.add('container__form-input--active');
        error[0].classList.add('error__icon--active');
        p_alert[0].classList.add('fName-error');
    } 

    if (lastName.value.length === 0) {
        border[1].classList.add('container__form-input--active');
        error[1].classList.add('error__icon--active');
        p_alert[1].classList.add('lName-error');

    }
    if (emailIsValid(email.value)) {

    } else {
        border[2].classList.add('container__form-input--active');
        error[2].classList.add('error__icon--active');
        p_alert[2].classList.add('email-error');
    }

    if (passwordIsValid(password.value)) {

    } else {
        border[3].classList.add('container__form-input--active');
        error[3].classList.add('error__icon--active');
        p_alert[3].classList.add('pass-error');
    }
}



claimBtn.addEventListener('click', () => {
    addErrors()
    setTimeout(() => {
        removeErrors()
    }, 3000)
})