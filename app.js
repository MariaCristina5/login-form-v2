//General
const mainFormContainer = document.getElementById("mainFormContainer");
const popUpContainer = document.getElementById("popUpContainer");
const forgotPassContainer = document.getElementById("forgotPassContainer");
const signUpBtn = document.getElementById("signUpButton");
const personalBtn = document.getElementById("personalButton");
const teamBtn = document.getElementById("teamButton");
const forgotBtn = document.getElementById("forgotButton")

//Notification
const toastContainer = document.getElementById('toastContainer');

//-------------General Events--------------------------
signUpBtn.addEventListener("click", ()=> {
    popUpContainer.style.display = "flex";
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

forgotBtn.addEventListener("click", () => {
    forgotPassContainer.style.display = "flex";
    mainFormContainer.style.display = "none";
})

//Notification (creating div container) and the Event
signUpBtn.addEventListener("click", () =>{
    createNotification();
})

function createNotification () {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    toastContainer.appendChild(notif)
    notif.innerText = 'This challenge is crazy!';

    setTimeout(() => {
        notif.remove();
    }, 4000);
}
//---------------------------------------------