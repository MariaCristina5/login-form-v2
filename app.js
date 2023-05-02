//Regex code for validation
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//General
const mainFormContainer = document.getElementById("mainFormContainer");
const popUpContainer = document.getElementById("popUpContainer");
const forgotPassContainer = document.getElementById("forgotPassContainer");
const signUpBtn = document.getElementById("signUpButton");
const personalBtn = document.getElementById("personalButton");
const teamBtn = document.getElementById("teamButton");
const forgotBtn = document.getElementById("forgotButton")

//Error messages
const mailErr = document.querySelector(".email-error");
const passErr = document.querySelector(".password-error");
const usernameErr = document.querySelector(".username-error");
const fullnameErr = document.querySelector(".fullname-error")
const mailRegErr = document.querySelector(".emailreg-error");
const passRegErr = document.querySelector(".passreg-error");
const confirmErr = document.querySelector(".confirm-error");
const retypeMailErr = document.querySelector(".retype-email-error");



//-------------General Events--------------------------

signUpBtn.addEventListener("click", ()=> {
    popUpContainer.style.display = "flex";
    mainFormContainer.style.display = "none";
})

forgotBtn.addEventListener("click", () => {
    forgotPassContainer.style.display = "flex";
    mainFormContainer.style.display = "none";
})

personalBtn.addEventListener("click", () => {
    teamBtn.classList.remove("active");
    personalBtn.classList.add("active");
})

teamBtn.addEventListener("click", () => {
    personalBtn.classList.remove("active");
    teamBtn.classList.add("active");
})

// -------------Validations-------------------------

function validateEmail(){
    const emailEl = document.getElementById('email').value;
    if(emailEl.length == 0){
        mailErr.innerHTML = "Mail required";
        return false;
    }
    if(!emailEl.match(emailRegex)){
        mailErr.innerHTML = "Invalid mail address";
        return false;
    }
        mailErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}

function validatePass() {
    const passwordEl = document.getElementById("password").value;
    if(passwordEl.length == 0){
        passErr.innerHTML = "Password required";
        return false;
    }
    if(passwordEl.length < 6){
        passErr.innerHTML = "Password too short";
        return false;
    }
        passErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}

function validateUsername() {
    const usernameEl = document.getElementById("username").value;
    if (usernameEl.length == 0) {
        usernameErr.innerHTML = "Username required";
        return false;
    }
    if (usernameEl.length < 6){
        usernameErr.innerHTML = "Username too short";
        return false;
    }
    usernameErr.innerHTML =  `<i class="fa-regular fa-circle-check"></i>`;
    return true;
}

function validateEmailReg(){
    const emailRegEl = document.getElementById('email-register').value;
    if(emailRegEl.length == 0){
        mailRegErr.innerHTML = "Mail required";
        return false;
    }
    if(!emailRegEl.match(emailRegex)){
        mailRegErr.innerHTML = "Invalid mail address";
        return false;
    }
        mailRegErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}

function validateName() {
    const fullnameEl = document.getElementById("fullname").value;
    if(fullnameEl.length == 0){
        fullnameErr.innerHTML = "Name is required";
        return false;
    }
    fullnameErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    return true;
}

function validatePassReg() {
    const passRegEl = document.getElementById("password-register").value;
    if(passRegEl.length == 0){
        passRegErr.innerHTML = "Password required";
        return false;
    }
    if(passRegEl.length < 6){
        passRegErr.innerHTML = "Password too short";
        return false;
    }
        passRegErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}

function validateConfirm() {
    const confirmEl = document.getElementById("confirm").value;
    const passRegEl = document.getElementById("password-register").value;
    if(confirmEl.length == 0){
        confirmErr.innerHTML = "Password required";
        return false;
    }
    if(confirmEl.length < 6){
        confirmErr.innerHTML = "Password too short";
        return false;
    }
    if (passRegEl !== confirmEl){
        confirmErr.innerHTML = "Password doesn't match"
        return false;
    }
        confirmErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}

function validateRetypeMail(){
    const retypeMailEl = document.getElementById('retype-email').value;
    if(retypeMailEl.length == 0){
        retypeMailErr.innerHTML = "Mail required";
        return false;
    }
    if(!retypeMailEl.match(emailRegex)){
        retypeMailErr.innerHTML = "Invalid mail address";
        return false;
    }
        retypeMailErr.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}