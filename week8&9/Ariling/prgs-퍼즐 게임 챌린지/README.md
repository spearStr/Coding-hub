# 🔎 퍼즐 게임 챌린지

https://school.programmers.co.kr/learn/courses/30/lessons/340212

## 💡 아이디어

- 이분 탐색을 활용한다.

## ✔ 문제풀이

- left와 right을 구해준다.
  > 이 때 js는 무조건 forEach를 활용하던지 for문을 활용해서 구해야지, 스프레드를 활용해서 하면 절대 통과가 안 된다!!!!!
- diffs[0]번에 clear_time의 값을 증가시키고 times배열의 for문을 돈다.
- mid를 가지고 clear_time의 값을 증가시킨다.
- 뒤의 clear_time에 따라서 right과 left의 값을 변경한다. 마지막은 left를 반환한다.

## 🤕 어려웠던 점

- js가 통과 안되는게 역시나 **스프레드 부분**이었다... 스프레드를 그냥 쓰면 위험하다는 것을 다시 한 번 상기시켜주었다.
