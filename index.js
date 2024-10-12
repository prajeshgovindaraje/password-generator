
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let result1El = document.getElementById("result-text-1")
let result2El = document.getElementById("result-text-2")
let generateBtnEl = document.getElementById("generate-btn")
let symbolCheckBoxEl = document.getElementById("symbols-switch")
let numberCheckBoxEl = document.getElementById("numbers-switch")
let lengthInputEl = document.getElementById("length-input")

let hasSymbolsAllowed = false
let hasNumbersAllowed = false
let passwordLength = 0

console.log("lenn:"+characters.length)





generateBtnEl.addEventListener("click",function(){

    if(lengthInputEl.value > 20){
        lengthInputEl.value = ""
        alert("Max character length is 20")
    }
    else if(lengthInputEl.value == "" || lengthInputEl.value == "0" ){
        alert("Length field cannot be empty or 0")
        return

    }else{
        passwordLength = lengthInputEl.value
    }

    if(symbolCheckBoxEl.checked){
        hasSymbolsAllowed = true
        console.log("symbol checked")

    }else{
        hasSymbolsAllowed = false
    }

    if(numberCheckBoxEl.checked){
        hasNumbersAllowed = true

    }else{
        hasNumbersAllowed = false
    }

    console.log("pass: "+passwordLength)

    result1El.textContent = generatePassword()
    result2El.textContent = generatePassword()







})



result1El.addEventListener("click",function(){

    navigator.clipboard.writeText(result1El.textContent)
    alert("Text Copied: "+ result1El.textContent)

})

result2El.addEventListener("click",function(){

    navigator.clipboard.writeText(result2El.textContent)
    alert("Text Copied: "+ result2El.textContent)

})





function generatePassword(){



    let passwordString = ""
    let count = 0


        while(count < passwordLength){
            let index = Math.floor(Math.random() * characters.length)

        if(hasNumbersAllowed === false && /^[0-9]+$/.test(characters[index])){
            continue
        }else if(hasSymbolsAllowed === false && /^[^A-Za-z0-9]+$/.test(characters[index])){
            continue
        }else{

            console.log(characters[index])
            passwordString += characters[index]
            count++
        }
        


        }


        console.log("count: " + count)


    return passwordString


}