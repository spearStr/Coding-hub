class TrieNode {
    constructor() {
        this.child = {};
        this.childLength = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (const char of word) {
            const length = node.childLength[word.length];
            
            if (!node.child[char]) node.child[char] = new TrieNode();
            
            node.childLength[word.length] = length ? length + 1 : 1
            node = node.child[char]
        }
    }
    
    query(word) {
        let node = this.root;
        for (const char of word) {
            if (char === "?") break
            
            if (node.child[char]) node = node.child[char]
            else return 0
        }
        return node.childLength[word.length] || 0
    }
}

function solution(words, queries) {
    const answer = [];
    const forwardTrie = new Trie()
    const backwardTrie = new Trie()

    for (const word of words) {
        forwardTrie.insert(word);
        backwardTrie.insert(word.split("").reverse().join(""));
    }

    for (const query of queries) {
        if (query[0] === '?') {
            answer.push(backwardTrie.query(query.split("").reverse().join("")));
        } else {
            answer.push(forwardTrie.query(query));
        }
    }

    return answer;
}