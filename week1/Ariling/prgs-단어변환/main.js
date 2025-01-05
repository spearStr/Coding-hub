function solution(begin, target, words) {
  var answer = 0;
  var min_len = words.length + 1;
  function compare_possible(target, compare) {
    var diff = 0;
    for (let x = 0; x < target.length; x++) {
      if (target[x] !== compare[x]) {
        diff += 1;
      }
    }
    if (diff === 1) {
      return true;
    } else {
      return false;
    }
  }
  var check_arr = Array(words.length).fill(false);
  function find_word(origin, target, check, count) {
    if (!words.includes(target)) {
      return;
    }
    if (count >= min_len) {
      return;
    }
    if (origin === target && count < min_len) {
      answer = count;
      min_len = count;
      return;
    }
    for (let x = 0; x < words.length; x++) {
      if (compare_possible(origin, words[x]) && !check[x]) {
        check[x] = true;
        find_word(words[x], target, check, count + 1);
        check[x] = false;
      }
    }
  }
  find_word(begin, target, check_arr, 0);
  return answer;
}
