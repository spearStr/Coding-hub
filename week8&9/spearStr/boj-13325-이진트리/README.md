# 🔎 BOJ-13325 이진트리
## 💡 아이디어
- 인덱싱 조절
## ✔ 문제풀이
- 포화 이진트리인 점을 이용하여 2로 나누면 부모노드로 갈 수 있게 `weights`배열과 `sums`배열에 0을 적절히 추가
- `weights`와 `sums`의 합을 옆 노드와 비교해서 작은쪽에 `gap`만큼 더해서 부모의 `sums`에 더해줌

## 🤕 어려웠던 점