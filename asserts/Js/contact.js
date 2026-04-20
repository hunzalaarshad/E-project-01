let alertBox = document.getElementById("alertBox");
let submit = document.getElementById("submit");

let fullName = document.getElementById("fullName");
let mail = document.getElementById("email");
let message = document.getElementById("message");

console.log("Hy")
let namePattern = /^[a-zA-Z\s]{3,30}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setMessage(msg) {
    alertBox.innerHTML = msg;
}

submit.addEventListener("click", function (e) {
    e.preventDefault();

    let isValid = true;

    let nameValue = fullName.value.trim();
    let emailValue = mail.value.trim();
    let messageValue = message.value.trim();

    if (nameValue.length <= 3) {
        setMessage("Name must be at least 3 characters.");
        isValid = false;
    } else if (nameValue.length >= 30) {
        setMessage("Name must be less than 30 characters");
        isValid = false;
    } else if (!namePattern.test(nameValue)) {
        setMessage("Only numbers are allowed.");
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        setMessage("Please enter a valid email address.");
        isValid = false;
    } else if (messageValue.length < 10) {
        setMessage("Message must be at least 10 characters.");
        isValid = false;
    } else if (messageValue.length > 200) {
        setMessage("Message must be less than 200 characters.");
        isValid = false;
    }
    if (isValid) {
        alertBox.classList.remove("succ");
        alertBox.classList.add("toggle", "succ");
        setMessage("Form submitted successfully!");
    } else {
        alertBox.classList.remove("succ");
        alertBox.classList.add("toggle", "err");
    }
    setTimeout(() => {
        alertBox.classList.remove("toggle", "err", "succ")
    }, 2000);
});
