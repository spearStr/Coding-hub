// n까지의 소수 구하기
const getPrime = (n) => {
    let allNums = [...Array(n+1)].fill(true);
    allNums[0] = false;
    allNums[1] = false;
    for (let i=2;i<n+1;i++){
        if(allNums[i] === true){
            let j = 2;
            while(i*j < n+1){
                allNums[i*j] = false;
                j++;
            }
        }
    }
    return allNums.map((v, i) => {if(v === true) return i}).filter((v) => v);
}

const getSumAfterSlice = (initVal, offset, arr) => {
    let temp = arr.slice(initVal, initVal+offset).reduce((prev, cur) => {
        return prev+cur;
    }, 0);
    return temp;
}

const n = Number(require('fs').readFileSync("/dev/stdin").toString().trim());

let primeArr = getPrime(n);
if (primeArr === null) console.log(0);
else {
    let result = 0;
    for (let ofs = 1; ofs<primeArr.length + 1; ofs++){
        if(getSumAfterSlice(0, ofs, primeArr) > n) break;
        for (let i=0;i<=primeArr.length - ofs ; i++) {
           let temp = getSumAfterSlice(i, ofs, primeArr)
           if (temp > n) break;
           else if(temp === n) {
                result++;
            }
        }
    }
    console.log(result);
}