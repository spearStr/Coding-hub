# 🔎 기둥과 보 설치

https://school.programmers.co.kr/learn/courses/30/lessons/60061

## 💡 아이디어

- 조건에 맞게 하는 엄청난 빡구현

## ✔ 문제풀이

- **Set을 잘 활용할 것** 의외로 JS는 Set으로 활용하면 좋은 것 같다..!
- canBuild함수를 만든다.
  - 기둥과 보의 설치 기준을 각각 잡는다.
  - true를 반환한다면 structures에 add를 한다.
- canRemove함수를 만든다.
  - canDelete 변수를 반환한다.
  - 이 때 다른 기둥과 보에 영향을 준다면 삭제할 수 없으므로 false로 바꿔준다.
- structures를 answer형식에 맞게 바꾸어주고 sort를 해준다.

## 🤕 어려웠던 점

- 처음에는 배열로 활용하려다 너무 어려웠다..
- 기둥과 보를 어떤 조건식으로 해야할지가 어려웠다.
