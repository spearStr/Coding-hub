# 🔎 더 맵게

https://school.programmers.co.kr/learn/courses/30/lessons/42626

## 💡 아이디어

- heap을 활용하면 간단하다.

## ✔ 문제풀이

> **python**

- heap을 활용하여 가장 작은 수랑 그 다음으로 작은 수를 꺼낸 뒤 조건에 맞게 계산하고 다시 heap에 넣는다.
- heap[0]이 K보다 크거나 같으면 answer를 return하고 while문을 다 돌았음에도 K보다 작으면 -1를 return한다.

> **js**

#### **내가 JS를 싫어하는 이유 1**

- js는 놀랍게도 heap을 직접 구현해야 한다...
  - class를 만들고 constructor()로 생성자를 만든다.
  - size나 peek는 간단하게 할 수 있다.
  - push의 경우에는 값을 일단 넣어놓고 currentIndex로 이진트리방식(...)을 이용하여 넣는다..
  - pop은 도움을 구했다.. push하고 원리는 비슷하지만 개인적으로 push보다 좀 더 복잡한 느낌이었다.

## 🤕 어려웠던 점

- python은 없다 (그 말은..?)
- js는 heap push까지는 어떻게 했지만 pop은 도저히 할 줄 몰라서 그냥 참고자료를 보면서 작성하게 되었다.. 그냥 이걸 외우는게 더 편리할 것 같다. 물론 구현을 할 수 있음 하는게 베스트지만 원리를 알면서 하기에는 요즘 추세는 알고리즘보다는 구현 + 시간최적의 느낌이 강하기 때문이다.
  - https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EB%8D%94-%EB%A7%B5%EA%B2%8C
