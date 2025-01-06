const [n, ...input] = require('fs')
.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((v) => v.split(" ").map((w, i) => {
    if (i===0) return w;
    else return parseInt(w);
}));

arr.sort((a,b) => a[1] === b[1] ?
a[2] === b[2] ?
a[3] === b[3] ?
b[0] > a[0] ? -1: 1
: b[3]-a[3]
: a[2] - b[2]
: b[1] - a[1]);

arr.map((v) => console.log(v[0]));