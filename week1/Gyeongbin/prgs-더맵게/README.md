# 프로그래머스 - 더맵게
## JS
### 😡 1차 시도: heapq 클래스 생성 없이 도전 | 83.9/100
정확도 100 효율성 0
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

