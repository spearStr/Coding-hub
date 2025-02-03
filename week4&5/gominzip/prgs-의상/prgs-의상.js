function solution(clothes) {
  var answer = 1;
  const clothes_dic = {};
  clothes.forEach(([name, type]) => {
    if (clothes_dic[type]) clothes_dic[type].push(name);
    else clothes_dic[type] = [name];
  });

  for (let type in clothes_dic) {
    answer *= clothes_dic[type].length + 1;
  }

  return answer - 1;
}
