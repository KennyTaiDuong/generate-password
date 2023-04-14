const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
    "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstBox = document.getElementById("left-password-btn")
let secondBox = document.getElementById("right-password-btn")
let length = document.getElementById("password-length")

function generatePassword(num) {
    let password = ""
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * 91)
        password += characters[randomIndex]
    }
    return password
}

function displayPassword() {
    if (length.value === "") {
        length.value = 15
    }
    let firstPassword = generatePassword(length.value)
    let secondPassword = generatePassword(length.value)
    firstBox.textContent = firstPassword
    secondBox.textContent = secondPassword
}

function copyText(btn_id) {
    if (btn_id === "left-password-btn") {
        firstBox.addEventListener("click",
        navigator.clipboard.writeText(firstBox.textContent))
    } else if (btn_id === "right-password-btn") {
        secondBox.addEventListener("click",
        navigator.clipboard.writeText(secondBox.textContent))
    }
}