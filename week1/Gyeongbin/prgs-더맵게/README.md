# 🔎 프로그래머스 - 더맵게
## 💡 아이디어
- 기존에 풀었던 문제라 heapq 생성 대신에 그냥은 안될까? 해서 도전~!
## ✔ 문제풀이
### 😡 1차 시도: heapq 클래스 생성 없이 도전 | 83.9/100
- 정확도 100 효율성 0
> [shift](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)와 [unshift](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
> 첫번째 요소를 삭제, 추가 하는 메서드로 시간복잡도가 O(n)
> 참고로 push, pop은 시간복잡도 O(1)이다!

<details>
<summary>코드</summary>
<div markdown="1">

```
function solution(scoville, K) {
    const calScoville = (fir, sec) => {
        return fir + sec * 2;
    }
    const makeAllCalculates = (scoville, K) => {
        if(scoville.length === 2 && calScoville(scoville[0], scoville[1]) < K){
            return -1
        } else {
            let fir = scoville.shift()
            let sec = scoville.shift()
            scoville.push(calScoville(fir, sec));
            scoville.sort((a,b) => a-b);
            if (scoville[0] < K){
                const recur = makeAllCalculates(scoville, K)
                return recur === -1 ? -1 : recur + 1;
            } else {
                return 1;
            }
        }
    }
    let sortedScov = scoville.sort((a,b) => a-b);
    if(sortedScov[0] < K){
        return makeAllCalculates(sortedScov, K);
    } else {
        return 0;
    }
}
```

</div>
</details>

## 🤕 어려웠던 점
- class 만들기 싫다... 
