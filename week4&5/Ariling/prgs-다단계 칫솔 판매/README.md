# 🔎 다단계 칫솔 판매

https://school.programmers.co.kr/learn/courses/30/lessons/77486

## 💡 아이디어

- dict자료형에 key는 enroll이름, value에는 추천인을 담아서 다단계로 올라가는 방식을 취한다.

## ✔ 문제풀이

- enroll, referral로 for문을 돌면서 아이디어에 나와있듯이 key-value를 넣는다.
  - "-"는 민호이므로 "center"라고 value에 넣어준다.
  - 또한 금액 관련 dict자료형을 만들고 key는 이름, value는 0을 담는다.
- seller를 for문을 돌면서 다음과 같이 처리한다.
  - 가격과 seller이름의 변수를 할당한다.
  - while문을 돌며 seller이름이 center, 금액이 0원이면 종료한다.
    - seller에 90%의 돈만큼을 금액 관련 dict에 넣는다. (기존 가격 - 10%에 해당하는 금액)
      - 이 때 10%는 소숫점은 버리므로 math.floor를 활용한다. (**Python은 import math를 할 것!**)
      - **10%의 돈이 0원이면 break를 걸고 종료한다.** -> 이게 없으면 중간에 시간초과가 난다.
    - 다음 seller(dict[key]의 value값 활용)와 금액을 업데이트한다.
  - 이름 순서대로 출력을 해야하므로 moneyMap[key]의 value값을 answer에 추가한다.

## 🤕 어려웠던 점

- dict자료형에 익숙하다면 딱히 어려운 부분은 없었다.
