class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.lengthMap = new Map();
  }
}

class Trie {
  constructor() {
    this.head = new Node();
  }

  insert(string) {
    let curr_node = this.head;
    for (const char of string) {
      if (!curr_node.children.has(char)) {
        curr_node.children.set(char, new Node(curr_node.value + char));
      }
      curr_node = curr_node.children.get(char);
      if (!curr_node.lengthMap.has(string.length)) {
        curr_node.lengthMap.set(string.length, []);
      }
      curr_node.lengthMap.get(string.length).push(string);
    }
  }

  findQuery(query, curr_depth, curr_node = this.head) {
    let answer = 0;
    let curr_char = curr_depth < 0 ? "?" : query[curr_depth];
    let next_char = query[curr_depth + 1];

    // 종료 조건: 마지막 문자거나 이후 '?'가 이어지는 경우
    if (curr_depth + 1 === query.length || (curr_char !== "?" && next_char === "?")) {
      // 현재 노드에 포함된 노드 중 쿼리와 길이가 일치하는 단어 개수만 반환
      if (curr_node.lengthMap.has(query.length)) {
        return curr_node.lengthMap.get(query.length).length;
      } else {
        return 0;
      }
    }

    let next_nodes = [];

    // 다음으로 올 수 있는 단어 노드 구하기
    if (next_char === "?") {
      next_nodes = Array.from(curr_node.children.values());
    } else {
      let next_node = curr_node.children.get(next_char);
      if (next_node) next_nodes.push(next_node);
    }

    // 다음 단어 노드 탐색 시작
    for (const node of next_nodes) {
      answer += this.findQuery(query, curr_depth + 1, node);
    }

    return answer;
  }
}

function solution(words, queries) {
  var answer = [];

  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  for (const query of queries) {
    answer.push(trie.findQuery(query, -1));
  }

  return answer;
}
