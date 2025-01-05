# 🔎 프로그래머스 - 이진 변환 반복하기
## 💡 아이디어
이진법 계산 방법을 까먹어서 큰일날 뻔 했다... 2로 나누면서 나머지를 거꾸로 나열하면 됨.
## ✔ 문제풀이
☺️ 1차 시도 : 통과
### 참고 : Array.reverse()
[링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
<details>
<summary>코드</summary>
<div markdown="1">

```
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

</div>
</details>

## 🤕 어려웠던 점
- 문제 의미가 진짜 헷갈렸다. 