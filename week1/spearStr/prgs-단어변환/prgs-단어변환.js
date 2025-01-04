function isTranslated(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            cnt += 1
        }
    }
    
    return cnt === 1;
}

function solution(begin, target, words) {
    const visit = {[begin] : 0}
    const words_candidate = [begin]
    
    while (words_candidate.length > 0) {
        const standard = words_candidate.shift()
        if (standard === target) break;
        
        for (const word of words) {
            if (isTranslated(standard, word) && !visit[word]) {
                visit[word] = visit[standard] + 1
                words_candidate.push(word)
            }
        }
    }
    
    return visit[target] ?? 0
}