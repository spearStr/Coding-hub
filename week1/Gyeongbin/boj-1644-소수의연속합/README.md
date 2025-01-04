# 백준 1644 - 소수의 연속합

## JS 풀이

😡 1트 - 시간 초과

1. 소수 구하는 방법 또 까먹어서 찾아봄. 제발 기억 좀 하자ㅏ
```
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

```

2. reduce sum() 연산
```
ReadonlyArray.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T

const sum = array.reduce((prev, cur) => { return prev+cur }, 0);
```