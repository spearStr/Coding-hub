const [n, input] = require('fs')
.readFileSync('/dev/stdin').toString().trim().split('\n');

const list = input.split(' ').map(v => Number(v)).sort((a, b) => a-b);
let left = 0;
let right = list.length - 1;

let sumMin;
let result = [];

while(left<right){
    let temp = list[left] + list[right];
    if(temp == 0){
        result = [list[left], list[right]];;
        break;
    } 

    if(Math.abs(temp) < sumMin){
        sumMin = Math.abs(temp);
        result = [list[left], list[right]];
    }
    
    if (temp < 0) {
        if(!sumMin) {
            sumMin = Math.abs(temp);
            result = [list[left], list[right]];
        };
        left++;
    } else {
        if(!sumMin) {
            sumMin = Math.abs(temp);
            result = [list[left], list[right]];
        };
        right--;
    }
}

console.log(result.join(" "));

