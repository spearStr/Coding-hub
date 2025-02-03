function solution(board, skill) {
  var answer = 0;

  const prefix = new Array(board.length + 1).fill(null).map(() => new Array(board[0].length + 1).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const x = type === 1 ? -1 : 1;
    prefix[r1][c1] += x * degree;
    prefix[r1][c2 + 1] += -x * degree;
    prefix[r2 + 1][c1] += -x * degree;
    prefix[r2 + 1][c2 + 1] += x * degree;
  }

  for (let r = 0; r < prefix.length; r++) {
    for (let c = 1; c < prefix[0].length; c++) {
      prefix[r][c] += prefix[r][c - 1];
    }
  }

  for (let c = 0; c < prefix[0].length; c++) {
    for (let r = 1; r < prefix.length; r++) {
      prefix[r][c] += prefix[r - 1][c];
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      board[r][c] += prefix[r][c];
      if (board[r][c] > 0) answer++;
    }
  }

  return answer;
}
