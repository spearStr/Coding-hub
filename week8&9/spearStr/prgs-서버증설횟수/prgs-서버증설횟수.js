function solution(players, m, k) {
    let answer = 0;
    const serverCnt = Array(players.length + 1).fill(0)
    const kQueue = []
    
    for (let i = 1; i < players.length + 1; i++) {
        const needServer = Math.floor(players[i - 1] / m)
        
        serverCnt[i] = serverCnt[i - 1]
        
        if (kQueue.length > 0 && kQueue[0][0] === i) {
            serverCnt[i] -= kQueue[0][1]
            kQueue.shift()
        }
        
        if (needServer > serverCnt[i]) {
            const openServer = needServer - serverCnt[i]
            answer += openServer
            serverCnt[i] = needServer
            kQueue.push([i + k, openServer])
        }
    }
    
    return answer;
}