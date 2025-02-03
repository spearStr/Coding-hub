function solution(edges) {
  // 정점 스타트를 찍고 -> 이거는 자기한테 오는게 아무것도 없을 때 가능
  // 도넛 모양을 만들어주고...? 간선만큼 했을 때 돌아올 수 있는 거를 말하는건가? n개의 정점과 n개의 간선
  // 그냥 한 방향으로 가는게 막대 그래프이고.. n개의 정점과 n-1개의 간선이 있는거
  // 8자 모양 그래프... 크기가 n이면 2n+1개의 정점과 2n+2개의 간선이 있는거
  // 이거는 또 node가 얼마나 있는지 확인이 불가능하겠네?
  var answer = [0, 0, 0, 0];
  // 들어오는거 나가는거를 담기 0번이 출발 1번이 도착
  let graphInfo = {};
  for (const [s, e] of edges) {
    if (!graphInfo[e]) graphInfo[e] = [0, 0];
    if (!graphInfo[s]) graphInfo[s] = [0, 0];
    graphInfo[s][0] += 1;
    graphInfo[e][1] += 1;
  }
  for (const key in graphInfo) {
    const [put, outPut] = graphInfo[key];
    // 도착이 없고 출발이 2이상인 노드가 시작 정점
    if (put >= 2 && outPut === 0) {
      answer[0] = parseInt(key);
    }
    // 출발이 없고 도착만 있는 경우 막대 그래프로 보기
    if (put === 0 && outPut >= 1) {
      answer[2]++;
    }
    // 8자의 경우 가운데를 생각하면 최소 들어오고 나가야하는게 2개 이상씩이어야 함
    if (put >= 2 && outPut >= 2) {
      answer[3]++;
    }
  }
  // 도넛은 시작 생성에서 출발하는 간선의 갯수에서 막대와 8자 그래프 갯수를 뺀다.
  answer[1] = graphInfo[answer[0]][0] - answer[2] - answer[3];
  return answer;
}

console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ])
);
