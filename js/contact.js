
const form = document.querySelector("#contactForm");      

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm (){
    event.preventDefault();

if  (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
}
 else {
    nameError.style.display = "block";
 }

 if  (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
}
 else {
    subjectError.style.display = "block";
 }
 
 if  (validateEmail(email.value) === true) {
    emailError.style.display = "none";
}
 else {
    emailError.style.display = "block";
 }

 if  (checkLength(address.value, 24) === true) {
    addressError.style.display = "none";
}
 else {
    addressError.style.display = "block";
 }
}
function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail (email) {
    const emailCriteria = /\S+@\S+\.\S+/;
    const patternMatches = emailCriteria.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);

form.onsubmit = function () {

    event.preventDefault();

    console.log(event);

    const name = document.querySelector("#name");

    console.log (name.value);
};

