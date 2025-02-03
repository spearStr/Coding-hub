# 🔎 징검다리

https://school.programmers.co.kr/learn/courses/30/lessons/43236

## 💡 아이디어

- 이분탐색을 활용하여 각 거리의 차이를 계산하고 answer값을 갱신한다.

## ✔ 문제풀이

- rocks를 오름차순 정렬한다. 그리고 rocks 끝에 distance를 추가한다.
- left, right은 0, distance로 초기화한다.
- 다음과 같은 loop를 돌면서 값을 갱신한다.
  - result, dis_diff(거리 차이), break_pnt(돌 위치 저장), remove_cnt의 변수를 할당한다.
  - rocks 배열의 for문을 돈다.(그 변수는 rock이라고 설정)
    - 거리의 차이를 구한다. rock - break_pnt
    - 만약 mid가 거리차이보다 크다면 최대값보다 크다는 것이므로 remove_cnt를 올린다.
    - 반대의 경우에는 break_pnt에 rock을 할당하고 만약 result가 거리차이보다 크다면 result에 dis_diff를 할당한다.
  - 만약 remove_cnt가 n보다 크다면 조건에 맞지 않으므로 right에 mid-1을 한다.
  - 조건에 해당하는 경우 answer 값에 mid로 넣고 left에는 mid+1을 한다.

## 🤕 어려웠던 점

- mid를 뭘로 할지, 어떻게 answer을 갱신할지가 어려웠다. left, right 갱신보다 답을 구하는 과정이 헷갈렸다.
