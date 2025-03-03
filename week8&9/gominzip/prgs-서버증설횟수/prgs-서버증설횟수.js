function solution(players, m, k) {
  let active = 0;
  const servers = [];
  let curr = 0;

  for (let time = 0; time < players.length; time++) {
    // 종료된 서버 있는지 검사
    while (servers.length && servers[curr]) {
      if (servers[curr] > time) break;
      curr++;
      active--;
    }

    // 서버 추가
    if (Math.floor(players[time] / m) > active) {
      const add = Math.floor(players[time] / m) - active;
      for (let i = 0; i < add; i++) {
        servers.push(time + k);
        active++;
      }
    }
  }

  return servers.length;
}
