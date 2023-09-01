const inputPassword = document.getElementById("input-password");
const errorMassage = document.getElementById("error-massage");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const password = inputPassword.value;

    if (password.length >= 7){
        errorMassage.textContent = password;
        errorMassage.style.color = "pink";
    } else {
        errorMassage.textContent = "password terlalu pendek";
        errorMassage.style.color = "red";
    }
});
