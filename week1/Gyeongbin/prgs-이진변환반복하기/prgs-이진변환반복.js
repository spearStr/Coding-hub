function solution(s) {
    let [cnt, delZero] = [0, 0];
    let temp = s;

    const CalBinary = (num) => {
        let result = []
        while (num !== 0) {
            result.push(String(num%2)); // 나머지 배열에 push
            num = Math.floor(num/2);
        }
        return result.reverse().join("");
    }

    while(temp != 1){
        let afterDelCnt = temp.split("").filter(v => v === '1').length
        delZero = delZero + (temp.length - afterDelCnt);

        // 이진연산
        temp = CalBinary(afterDelCnt);
        cnt ++;
    }
    return [cnt, delZero];
}

s = "110010101001";
console.log(solution(s));