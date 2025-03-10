function solution(players, m, k) {
  var answer = 0;
  const q = [];
  plus_server = 0;
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (q.length > 0 && q[0][0] == i) {
      let [time, server] = q.shift();
      plus_server -= server;
    }
    if (player >= m) {
      needs = Math.floor(player / m);
      if (needs > plus_server) {
        answer += needs - plus_server;
        q.push([i + k, needs - plus_server]);
        plus_server += needs - plus_server;
      }
    }
  }
  return answer;
}
