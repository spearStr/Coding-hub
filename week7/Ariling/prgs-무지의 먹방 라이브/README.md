# 🔎 무지의 먹방 라이브

https://school.programmers.co.kr/learn/courses/30/lessons/42891

## 💡 아이디어

- 첫 번째 방법 : 최대 사이클을 구해서 빼준 다음에 filter를 돌려 나머지 배열들로 구한다.
- 두 번째 방법 : 이분탐색을 활용한다. 범위가 아무리 봐도 dp아니면 이분탐색이기 때문

## ✔ 문제풀이

- 기존 food_times 배열에서 index를 추가하여 새로운 배열을 만든다. (이 때 map활용)
- reduce를 활용하여 sum을 구한 다음 k번째 보다 sum이 작다면 -1을 return한다.
- left, right으로 이분탐색을 활용하여 최대사이클을 구한다.
  - > 이 때 right을 ...스프레드 연산자로 max를 구하지 말고 for문으로 구해야 한다!<br/>
    > ...스프레드를 활용하면 메모리 초과가 발생하기 때문이다 -> 알고 싶지 않았다..
- mid값과 기존의 food_times를 활용하여 total_eat을 구하고 k와 비교하여 left와 right의 값을 조정한다.
- remainK를 구한다음에 최대 사이클인 right과 map으로 만든 배열을 비교하여 빼준다.
- right보다 큰 값들만 있는 배열을 filter을 활용하여 만든다. 이 때 정렬을 해 줄 것!
  - remainK % remain_arr.length로 접근하여 구한다.

## 🤕 어려웠던 점

- 이분탐색으로 사이클을 하는 방법이 어려웠다.
- 이분탐색을 생각하는게 어렵다기보다는 어떻게 left, right을 조정할지, 그 뒤에 어떻게 처리할지가 더 어려웠던 것 같다.
