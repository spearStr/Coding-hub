class Node {
  constructor(value = "") {
    this.value = value;
    this.end = false;
    this.child = {};
    this.childLength = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let cur_node = this.root;
    for (const char of string) {
      const length = cur_node.childLength[string.length];
      if (!cur_node.child[char]) {
        cur_node.child[char] = new Node(cur_node.value + char);
      }
      cur_node.childLength[string.length] = length ? length + 1 : 1;
      cur_node = cur_node.child[char];
    }
    cur_node.end = true;
  }
  search(string) {
    let cur_node = this.root;
    for (const char of string) {
      if (char === "?") break;
      if (cur_node.child[char]) {
        cur_node = cur_node.child[char];
      } else {
        return 0;
      }
    }
    return cur_node.childLength[string.length] || 0;
  }
}

function solution(words, queries) {
  // ?는 무조건 한 글자가 되는 것
  // 뭔가 트리형태인가..? 효율성이면 그냥 빡구현은 아닐 것 같은데
  // 맞네 트리에.. 트리에를 할 줄 몰라서 그렇지
  var answer = Array(queries.length).fill(0);
  const frontTrie = new Trie();
  const backTrie = new Trie();
  const check = {};
  const newWords = words.filter((word) => {
    if (check[word]) {
      return false;
    }
    check[word] = true;
    return true;
  });

  for (const word of newWords) {
    const reverse = word.split("").reverse().join("");
    frontTrie.insert(word);
    backTrie.insert(reverse);
  }
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    if (query[0] !== "?") {
      answer[i] += frontTrie.search(query);
    } else {
      answer[i] += backTrie.search(query.split("").reverse().join(""));
    }
  }
  return answer;
}
