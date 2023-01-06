let input = document.getElementById("input")
let button = document.getElementById("btn")
let result = document.getElementById("result")

function isPalindrome() {
    let val = input.value
    val = val.toString()
    let fval = val.split("").reverse().join("")
    
    if (val === fval) {
        result.innerText = "Entered letter is palindrome"
        result.classList.replace("hidden", "text-green-500")
        setTimeout(() => {
            result.classList.replace("text-green-500", "hidden")
        }, 3000)
    } else{
        result.innerText = "Entered letter is NOT palindrome"
        result.classList.replace("hidden", "text-red-500")
        setTimeout(() => {
            result.classList.replace("text-red-500", "hidden")
        }, 3000)
    }
}

button.addEventListener("click", isPalindrome)