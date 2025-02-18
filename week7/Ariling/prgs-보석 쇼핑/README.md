# 🔎 보석 쇼핑

https://school.programmers.co.kr/learn/courses/30/lessons/67258

## 💡 아이디어

- set자료형을 활용하여 보석 갯수를 구한 뒤 dict자료형을 활용하여 최소 길이를 구한다.

## ✔ 문제풀이

- 보석 종류를 구한다. new Set()을 활용한다.
- dict과 gems_cnt(상수)를 만든다.
- for문을 돌면서 다음과 같이 한다.
  - 만약 {}에 없는 것이라면 만들어주고 gems_cnt를 더한다.
  - 0번 index를 제외하고는 ed를 증가시킨다.
  - 만약 st-1에 해당하는 gems가 1보다 크다면 st-1에 해당하는 gems가 1이하 일때까지 st를 증가시킨다.
  - gems_cnt가 보석 종류 갯수와 같고 구간 길이가 정답보다 짧을 시에 업데이트를 한다.

## 🤕 어려웠던 점

- 원래는 Object.keys(gems_dict).length로 했는데 시간초과가 나길래 뭐가 문제지라고 생각하였다.
  - 그냥 상수로 cnt를 했더니 통과되었다.
