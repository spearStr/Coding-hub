function solution(board, skill) {
  var answer = 0;
  // 각 칸의 값들을 한꺼번에 저장해두기
  const arr = Array(board.length + 1)
    .fill()
    .map(() => Array(board[0].length + 1).fill(0));
  for (const [type, r1, c1, r2, c2, degree] of skill) {
    // 내구도 낮추냐 높이냐를 type으로 결정한다.
    const degrees = type === 1 ? -degree : degree;
    // 누적 범위를 구할 때 다음과 같이 한다
    arr[r1][c1] += degrees;
    arr[r1][c2 + 1] -= degrees;
    arr[r2 + 1][c1] -= degrees;
    arr[r2 + 1][c2 + 1] += degrees;
  }
  // 2차원 배열은 이런식으로 누적을 해줘야 한다고 한다...
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      arr[i][j] += arr[i][j - 1];
    }
  }
  for (let j = 0; j < board.length; j++) {
    for (let i = 1; i < board[0].length; i++) {
      arr[i][j] += arr[i - 1][j];
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += arr[i][j];
      if (board[i][j] > 0) answer++;
    }
  }
  return answer;
}
