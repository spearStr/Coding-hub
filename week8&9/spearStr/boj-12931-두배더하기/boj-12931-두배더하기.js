const fs = require('fs')
const [firstLine, input] = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(firstLine)
const numbers = input.split(' ').map(Number)

let answer = 0
let maxMulti = 0
for (let number of numbers) {
    let multi = 0
    while (number > 0) {
        if (number % 2 !== 0) {
            number -= 1
            answer += 1
        } else {
            number /= 2
            multi += 1
        }
    }

    maxMulti = Math.max(maxMulti, multi)
}

answer += maxMulti
console.log(answer)