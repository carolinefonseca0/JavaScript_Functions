console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function add(x,y){
    return x + y
}
let answer = add(2,3)
console.log (answer)

// let response = prompt("Give me a number")

// alert(response)


function printOdds(n) {
    for (let i = 1; i <= n; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}

let response = prompt("What number would you like to go up to?")
let log = printOdds(response)
console.log(log)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if(age > 16) {
        console.log(`Congrats ${userName} you are old enough to drive!`)
    }
    else if(age == 16) {
        console.log(`Congrats, ${userName} you just turned 16 and can drive!`)
    }
    else {
        console.log(`Sorry ${userName} you are a child and cannot drive.`)
    }
}

let uName = prompt('what is your name?')
let uAge = prompt("What is your age?")

checkAge(uName, uAge)
