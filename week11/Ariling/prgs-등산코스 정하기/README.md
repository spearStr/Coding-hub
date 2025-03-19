# 🔎 등산코스 정하기

https://school.programmers.co.kr/learn/courses/30/lessons/118669

## 💡 아이디어

- BFS 활용하는 그래프 문제

## ✔ 문제풀이

- info라는 딕셔너리를 만들고 summit과 gate에 해당하는 번호들을 넣어준다.
- graph와 visited를 만든다.
- bfs함수는 다음과 같다.
  - minV가 time보다 작으면 넘긴다.
  - graph[from]을 순환하며 정상일 때, 다른 게이트일때, 그러지 않을때를 다 고려한다.
- gate마다 bfs를 돈다.

## 🤕 어려웠던 점

- 처음에 DFS로 하려다 시간초과가 나왔다. BFS로 하고 heap방식으로 안 해도 괜찮다는 것을 알게되었다.
