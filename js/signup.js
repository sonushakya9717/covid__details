'use strict'

const username = document.querySelector('#inputUserame');
const birth__date = document.querySelector('#inputbirthdate');
const phone_no = document.querySelector('#inputnumber');
const email__address = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputConfirmPassword = document.querySelector('inputConfirmPassword');

const register__button = document.querySelector('#register__btn');


register__button.addEventListener("click", function(e){


    e.preventDefault()

    let user__data = {
        username : username.value,
        birth__date : birth__date.value,
        phone_no : phone_no.value,
        email__address : email__address.value,
        password : inputPassword.value,
    };
    
    dataStorage(user__data)
    console.log('clicked succesfully')
});

const dataStorage =  function (user__data) {
    if (localStorage.getItem('userdetails')==null){
        let userdetails__array = [];
        userdetails__array.push(user__data);
        localStorage.setItem('userdetails', JSON.stringify(userdetails__array));
    }
    else {
        let userdetails__array = JSON.parse(localStorage.getItem('userdetails'));
        userdetails__array.push(user__data);
        localStorage.setItem('userdetails', JSON.stringify(userdetails__array));
    }
}
    
   



