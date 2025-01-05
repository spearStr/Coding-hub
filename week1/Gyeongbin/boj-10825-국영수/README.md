# 🔎 백준 10825 - 국영수
## 💡 아이디어

## ✔ 문제풀이
☺️ 1차 시도 - 통과 <br />
이게 되나? > 이게 되네식 문제 풀이....
### 1.input 방법
```
const [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
```

### 2.문자열 sort
```
arr.sort((x,y) => x > y ? 1: -1) // 오름차순
arr.sort((x,y) => x > y ? -1: 1) // 내림차순

```
## 🤕 어려웠던 점

