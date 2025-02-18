class Node {
  constructor(data = "") {
    this.data = data;
    this.children = new Map();
    this.includesWords = [];
  }
}

class Trie {
  constructor() {
    this.head = new Node();
  }

  // 문자열을 트리에 추가
  insert(string) {
    let curr_node = this.head;
    for (const char of string) {
      if (!curr_node.children.has(char)) {
        curr_node.children.set(char, new Node(curr_node.data + char));
      }
      curr_node = curr_node.children.get(char);
      curr_node.includesWords.push(string);
    }
  }

  // 자동완성을 위해 필요한 최소 입력길이 계산
  find_min_depth(string) {
    let curr_node = this.head;
    let depth = 0;
    for (const char of string) {
      curr_node = curr_node.children.get(char);
      depth++;
      if (curr_node.includesWords.length === 1) return depth;
    }
    return depth;
  }
}

function solution(words) {
  var answer = 0;
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));
  words.forEach((word) => (answer += trie.find_min_depth(word)));
  return answer;
}
