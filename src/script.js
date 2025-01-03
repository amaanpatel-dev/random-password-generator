document.addEventListener("DOMContentLoaded", () => {
    const passwordBox = document.getElementById("password");
    const genrateBtn = document.getElementById("generate-btn")
    const copyBtn = document.getElementById("copy-btn")
    const length = 9;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUYWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "@#$%&*!"

    const allChars = upperCase + lowerCase + number + symbol

    function createPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password += number[Math.floor(Math.random() * number.length)]
        password += symbol[Math.floor(Math.random() * symbol.length)]

        while(length > password.length){
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password
    }

    function copyPassword() {
        passwordBox.select()
        document.execCommand("copy")
    }

    genrateBtn.addEventListener("click", createPassword)
    copyBtn.addEventListener("click", copyPassword)
})