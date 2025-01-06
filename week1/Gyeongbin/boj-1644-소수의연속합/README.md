# 🔎 백준 1644 - 소수의 연속합
## 💡 아이디어
- 에라토스테네스의 체
## ✔ 문제풀이
😡 1차 시도 : 시간 초과 <br />
☺️ 2차 시도 : 에라토스테네스의 체 이용 <br />

### 1. 소수 구하는 방법(에라토스테네스의 체)
또 이걸 까맣게 잊어버리고 반복문을 돌려버림... 다시는 잊지 말 것
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

### 2. reduce sum() 연산
매번 쓰는데 자꾸 까먹어서 제대로 정리
```
ReadonlyArray.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T

const sum = array.reduce((prev, cur) => { return prev+cur }, 0);
```
## 🤕 어려웠던 점