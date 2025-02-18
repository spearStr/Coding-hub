# 🔎 자동완성

https://school.programmers.co.kr/learn/courses/30/lessons/17685

## 💡 아이디어

- 첫 번째 방법 : dict에 가능한 단어들을 전부 넣고 정렬을 한 다음에 check_cnt와 새로운 check배열을 활용하여 구한다. (81.8점에서 막혔다.. 메모리 초과문제로)
- 두 번째 방법 : Trie 자료구조를 활용한다.

## ✔ 문제풀이

- > 첫 번째는 주석으로 달아놓았다
- Trie자료구조는 다음과 같이 만든다.
  - 먼저 Node class를 만들어 value, numOfWords, child를 만든다. 이 때 child는 map자료구조형이다.
  - insert메서드 : 들어온 string을 for문으로 순회하면서 없으면 set을 하고 (value만 넣고 numOfWords는 안 넣어서 default값을 넣게 한다.) 그 뒤에는 get을 한 다음에 cur_node.numOfWords에 1을 더한다.
  - min_len메서드 : string을 for문으로 순회하면서 child의 get을 활용하여 len을 더하고 numOfWords가 1이면 len을 return한다.
- words를 forEach문으로 돌면서 insert를 하고 map문으로 min_len을 각각 구한다음에 이 값들을 reduce로 해서 구한다. 즉, map((el) => trie.min_len(el)).reduce((a, b) ... )이런 형태인 것!

## 🤕 어려웠던 점

- Trie자료구조가 어려웠다. 일단 Tree구조자체를 직접 만들어야 하는게 난감했다.
