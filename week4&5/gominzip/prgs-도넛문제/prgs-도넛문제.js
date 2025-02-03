function solution(edges) {
  var answer = [0, 0, 0, 0];
  const graph = {};

  for (let [n1, n2] of edges) {
    if (!graph[n1]) graph[n1] = {in: 0, out: 0};
    if (!graph[n2]) graph[n2] = {in: 0, out: 0};

    graph[n1].out += 1;
    graph[n2].in += 1;
  }

  for (let n in graph) {
    if (!graph[n].in && graph[n].out >= 2) answer[0] = Number(n);
    else if (!graph[n].out) answer[2]++;
    else if (graph[n].in >= 2 && graph[n].out == 2) answer[3]++;
  }

  answer[1] = graph[answer[0]].out - answer[2] - answer[3];
  return answer;
}
