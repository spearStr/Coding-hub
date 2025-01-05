const findPeices = (arr, isChecked, paints, len, height, width) => {
    const x = width;
    const y = height;

    const condiX = arr[y][x+1] === "1" && isChecked.findIndex(v => v[0] === y && v[1] === x+1)!=-1;
    const condiY = arr[y+1][x] === "1" && isChecked.findIndex(v => v[0] === y+1 && v[1] === x)!=-1;
    if (condiX && condiY){
        isChecked.push([y, x+1]);
        isChecked.push([y+1, x]);
        paints[len] = paints[len] + 2;
        findPeices(arr, isChecked, paints, len, y, x+1);
        findPeices(arr, isChecked, paints, len, y+1, x);
    } else if(condiX){
        isChecked.push([y, x+1]);
        paints[len] = paints[len] + 1;
        findPeices(arr, isChecked, paints, len, y, x+1);
    } else if(condiY){
        isChecked.push([y+1, x]);
        paints[len] = paints[len] + 1;
        findPeices(arr, isChecked, paints, len, y+1, x);
    }
}

const [n, ...input] = require('fs').readFileSync('/dev/stdin')
.toString().trim().split('\n');
const [h, w] = n.split(' ');
const arr = input.map((v) => v.split(' '));

const allPeicesNum = arr.map((v) => v.filter(k => k==="1").length).reduce((prev, cur) => {
    return prev + cur;
}, 0); // 전체 1의 갯수

let isChecked = []; // 이미 방문한 index
let paints = [];

let height = 0;

while(1){
    let index = arr[height].findIndex(v => v === "1");
    console.log(`현재 index : ${height}`);
    console.log(`현재 index에 따른 isChecked : ${isChecked}`);
    console.log(`----------------------------------------------`);
    if(isChecked.length === allPeicesNum) break;
    else if (index === -1){
        height++;
    }
    else if (isChecked.findIndex(v => v[0] === height && v[1] === index) !== -1) {
        continue; 
    } else {
        isChecked.push([height, index]);
        paints.push(1);
        const len = paints.length
        findPeices(arr, isChecked, paints, len, height, index);
    }
}

if(paints.length === 0){
    console.log(0);
    console.log(0);
} else {
    console.log(paints);
}