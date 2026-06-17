let random = Math.random()
console.log(random)

let a = prompt("Enter first number")
let op = prompt("opration")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}

if (random > 0.1) {
    console.log(`The result is ${a} ${op} ${b}`)
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)


}

else {
    
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${op}`)}`) 

}