# 🔎 BOJ-9205 맥주 마시면서 걸어가기
## 💡 아이디어
- 50m당 맥주 한병이고 맥주 한박스는 20병이므로 1000m당 편의점에 가야함
    - 즉, 맥주와 관련된 서사가 많았지만, 맨해튼 거리로 1000이내에 있는지를 판단하면 되는 문제
- 결국 dfs문제
## ✔ 문제풀이
- `happySign`이라는 변수를 두어 출발지부터 목적지까지 도착할 수 있으면 `happy`를 출력하고 아니면 `sad`를 출력

## 🤕 어려웠던 점
- 입력값 받는게 조금 귀찮은 문제입니다.