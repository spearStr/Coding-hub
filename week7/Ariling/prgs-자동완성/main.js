class Node {
  constructor(value = "", numOfWords = 0) {
    this.value = value;
    this.numOfWords = numOfWords;
    this.child = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let cur_node = this.root;
    for (const char of string) {
      if (!cur_node.child.has(char)) {
        cur_node.child.set(char, new Node(cur_node.value + char));
      }
      cur_node = cur_node.child.get(char);
      cur_node.numOfWords += 1;
    }
  }
  min_len(string) {
    let cur_node = this.root;
    let len = 0;
    for (const char of string) {
      cur_node = cur_node.child.get(char);
      len++;
      if (cur_node.numOfWords === 1) return len;
    }
    return len;
  }
}

function solution(words) {
  const trie = new Trie();
  words.forEach((el) => trie.insert(el));
  return words.map((el) => trie.min_len(el)).reduce((a, b) => a + b);
  // // 트리를 가지고 해야하는건 숙명인걸까..?
  // const check_words = {};
  // var answer = 0;
  // // 이걸 dict으로 다 넣으면 미친 새끼겠지..?
  // // 아니 w에 같고 wa wo에 갈라지고 war wor이런식으로 가야하는걸 어떡해 ㅋㅋㅋ -> 4문제정도가 스택오버플로우가 나옴
  // const search_words = {};
  // // 1개 인 것부터 하면 되니깐.. 그 전체임에도 여러개면 그냥 그걸 넣어야하는거고.. 쩔수지
  // for (const word of words) {
  //   for (let i = 0; i < word.length; i++) {
  //     let name = word.slice(0, i + 1);
  //     if (!search_words[name]) search_words[name] = [];
  //     search_words[name].push(word);
  //   }
  //   check_words[word] = false;
  // }
  // const key_arr = Object.keys(search_words).sort((a, b) => {
  //   if (a.length === b.length) {
  //     return a.localeCompare(b);
  //   }
  //   return a.length - b.length;
  // });
  // // 그 보석도둑꺼 참고하기 -> 전부 체크 되었으면 굳이 확인할 필요가 없기 때문
  // let check_cnt = 0;
  // for (const search of key_arr) {
  //   if (
  //     search_words[search].length === 1 &&
  //     !check_words[search_words[search][0]]
  //   ) {
  //     check_words[search_words[search][0]] = true;
  //     answer += search.length;
  //     check_cnt++;
  //   } else if (check_words.hasOwnProperty(search) && !check_words[search]) {
  //     check_words[search] = true;
  //     answer += search.length;
  //     check_cnt++;
  //   }
  //   if (check_cnt === words.length) break;
  // }
  // return answer;
}

console.log(solution(["word", "war", "warrior", "world"]));
