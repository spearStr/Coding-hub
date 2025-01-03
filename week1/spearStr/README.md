# 🔎 BOJ-1644 소수의 연속합
## 💡 아이디어
- 에라토스테네스의 체로 소수 구하기
- 투 포인터를 활용해서 연속합 구하기
## ✔ 문제풀이
- 에라토스테네스의 체를 통해 `n`보다 같거나 작은수까지 소수 배열을 구함
- 투 포인터를 활용
    - 소수배열의 0번째 인덱스부터 탐색하여 하나씩 더해가기
    - 연속합이 `n`보다 같거나 작을때는 점점더해가고 `n`보다 클때는 가장 왼쪽의 인덱스의 소수를 연속합에서 빼기
    ```
    let sum = primeArray[right];
    while (primeArray[right] <= n) {
        if (sum === n) {
            cnt += 1;
            right += 1;
            sum += primeArray[right];
        } else if (sum < n) {
            right += 1;
            sum += primeArray[right];
        } else {
            sum -= primeArray[left];
            left += 1;
        }
    }
    ```
## 🤕 어려웠던 점
- 에라토스테네스의 체가 떠올랐지만 이게 무엇이었는지 기억이 나지 않아서 찾아보았다.

---

# 🔎 BOJ-1926 그림
## 💡 아이디어
- DFS로 탐색
## ✔ 문제풀이
- 2차원 배열 `paper`를 전체 탐색
    - `paper[i][j]`값이 `1`이고 방문한 적이 없는(`visit[i][j]`값이 `false`) 경우에만 `DFS` 탐색
## 🤕 어려웠던 점
- 아직 파이썬 문법이 남아있어서 혼동이 온다.
    ```
    console.log(ans.length === 0 ? 0 : Math.max(...ans));
    ```
    - Math.max()를 이용할 때 전개 연산자로 ans배열을 풀어줘야 한다.

---

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

---

# 🔎 BOJ-10825 국영수
## 💡 아이디어
- 객체를 만들어서 정렬로 비교
## ✔ 문제풀이
- 주어진 입력값을 이름과 각 과목의 점수값을 갖고있는 객체들을 저장하는 배열로 저장
- 조건에 맞게 정렬 후 출력
## 🤕 어려웠던 점
- 처음 제출 결과 때 소요시간이 `4000ms`가 나와서 당황했다.
    - 기존코드
        ```
        score.forEach((student) => {
            console.log(student.name);
        });
        ```
    - 수정코드
        ```
        console.log(score.map((student) => student.name).join('\n'));
        ```
- 개선 후에 결과는 400ms로 줄었다. 무려 10배의 차이를 줄인 것인데 `console.log`를 할때 앞으로는 `join`을 활용해서 한번에 출력할 수 있도록 하는 것으로 해야겠다.
![image](https://github.com/user-attachments/assets/b8c1f30b-8d25-4794-8724-92f4d2991655)

---

# 🔎 PRGS-이진 변환 반복하기
## 💡 아이디어
- 문제의 요구사항대로 해결하기
## ✔ 문제풀이
- `0`의 개수를 세고 `1`로 된 문자열 생성
- 새로운 문자열의 길이를 이진법으로 변환
- 위의 두과정 반복
## 🤕 어려웠던 점

---

# 🔎 PRGS-풍선 터뜨리기기
## 💡 아이디어
- 하나의 수를 기준으로 왼쪽과 오른쪽에 있는 수들은 전부 기준값보다 작을 때의 수는 끝까지 남을 수 없다.
## ✔ 문제풀이
- `left_min`배열과 `right_min`배열을 통해 기준수의 왼쪽배열과 오른쪽 배열의 최솟값을 구한다.
    - 이는 최솟값을 계속 갱신하면 된다.
- 주어진 배열 `a`와 `left_min`, `right_min`을 비교하여 조건에 맞는 수들을 찾는다.
## 🤕 어려웠던 점
- 어떤 방법으로 풀어야할지 고민을 정말 많이 한 문제였다. O(n)으로 해결할 수 있는 방법을 모색하다가 풀 수 있었는데 생각하는 과정이 너무 오래 걸렸다.

---

