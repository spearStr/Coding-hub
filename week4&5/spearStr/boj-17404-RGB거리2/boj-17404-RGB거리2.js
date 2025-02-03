const fs = require('fs')
const [firstLine, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(firstLine)
const rgb = input.map((line) => line.trim().split(' ').map(Number))

let answer = Infinity

for (let firstColor = 0; firstColor < 3; firstColor++) {
    const dp = Array(n).fill(null).map(() => Array(3).fill(Infinity));

    dp[0][firstColor] = rgb[0][firstColor];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i][1];
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2];
    }

    for (let lastColor = 0; lastColor < 3; lastColor++) {
        if (lastColor !== firstColor) {
            answer = Math.min(answer, dp[n - 1][lastColor]);
        }
    }
}

console.log(answer);