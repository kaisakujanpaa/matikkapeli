'use strict' 

let rand_num1 = 0
let rand_num2 = 0

let right = 0
let wrong = 0


const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10)
    rand_num2 = getRandomIntNumberRange(1, 10)
    document.querySelector("#num1").innerHTML = rand_num1
    document.querySelector("#num2").innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    document.getElementById("right").innerHTML = right
    document.getElementById("wrong").innerHTML = wrong
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        right = right + 1
    }
    else {
        alert('Incorrect!') 
        wrong = wrong + 1
    }

    document.getElementById("right").innerHTML = right
    document.getElementById("wrong").innerHTML = wrong

    randomizeNumbers()
    document.querySelector('input').value=''
})