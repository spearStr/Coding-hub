# 🔎 BOJ-2470 두 용액
## 💡 아이디어
- 투 포인터를 활용해서 최솟값 구하기
## ✔ 문제풀이
- 주어진 일차원 배열을 먼저 오름차순으로 정렬
- 투 포인터 `left`와 `right`를 배열 인덱스 양쪽 끝값을 두고 `sum`의 값에 따라 `left`값과 `right`값을 조절
    ```
    while (left < right) {
        let sum = liquid[left] + liquid[right];

        if (Math.abs(sum) < Math.abs(temp)) {
            temp = sum;
            temp_left = liquid[left];
            temp_right = liquid[right];
        }

        if (sum < 0) {
            left += 1;
        } else if (sum > 0) {
            right -= 1;
        } else {
            break;
        }
    }
    ```
    - 이전 값보다 `sum`의 절댓값이 작은 경우에만 투 포인터값을 저장함
    - 또한 `sum`이 `0`일 때는 바로 종료, `음수`일때는 `left`를 증가, `양수`일 때는 `right`를 감소시킴