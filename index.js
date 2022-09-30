const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",    "s","t","u","v","w","x","y","z", "0", "1", "2", "3","4", "5", "6", "7", "8", "9","~","`","!",       "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?","/"];

let generateEl = document.getElementById("generate-el")
let firstCase = document.getElementById("first-case")
let secondCase = document.getElementById("second-case")
let inputEl = document.getElementById("input-el")
let textEl = document.getElementById("text-el")
let randomN = 0



function randomPassword() {
    let password = inputEl.value
    let password1 = ""
    let password2 = ""
    
    for (let i = 0; i < password ; i++) {
        randomN = Math.floor( Math.random() * characters.length )
         
        password1 += characters[randomN]
    };
    
    for (let i = 0; i < password ; i++) {
        randomN = Math.floor( Math.random() * characters.length )
         
        password2 += characters[randomN]
    };
    
    firstCase.value = password1
    secondCase.value = password2 
}

function generate() {
    let password = inputEl.value
    
    if (password === null || password === '') {
        textEl.textContent = "Hint: Please enter a value!"
    }else if (password >= 8 && password <= 15 ) {
        randomPassword()
        textEl.textContent = ""
        
    }else {
        textEl.textContent = "Hint: Password should be between 8 and 15 numbers!"              
    }
    inputEl.value = ""      
}

function copy1() {
    if (!firstCase.value) {
        alert("No text to copy!")
    }else {
        let copyText = document.getElementById("first-case")
        copyText.select()
        copyText.setSelectionRange(0,999)
        document.execCommand("copy")
        alert("Selected text copied: " + copyText.value)
    }
}

function copy2() {
    if (!secondCase.value) {
        alert("No text to copy!")
    }else {
        let copyText = document.getElementById("second-case")
        copyText.select()
        copyText.setSelectionRange(0,999)
        document.execCommand("copy")
        alert("Selected text copied: " + copyText.value)   
    }
}