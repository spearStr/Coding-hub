# 프로그래머스 - 이진 변환 반복하기

## JS
☺️ 1차 시도 - 통과
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