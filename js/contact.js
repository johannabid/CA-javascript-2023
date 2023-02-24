
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

if  (checkLength(name.value) === true) {
    nameError.style.display = "none";
}
 else {
    nameError.style.display = "block";
 }

// name validation
//  if (name.value.trim().length > 0) {
//     nameError.style.display = "none";
//  } else {
//     nameError.style.display = "block";
//  }

//  // subject validation
//  if (subject.value.trim().length > 9) {
//     subjectError.style.display = "none";
//  } else {
//     subjectError.style.display = "block";
//  }

// // email validation
//  if (email.value.trim().length > 0) {
//     emailError.style.display = "none";
//  } else {
//     emailError.style.display = "block";
//  }

// // address validation
//  if (address.value.trim().length > 24) {
//     addressError.style.display = "none";
//  } else {
//     addressError.style.display = "block";
//  }

}

function checkLength (value) {
    if (value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", validateForm);

form.onsubmit = function () {

    event.preventDefault();

    console.log(event);

    const name = document.querySelector("#name");

    console.log (name.value);
};
