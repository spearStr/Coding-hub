class minHeap {
    constructor() {
        this.heap = []
    }
    
    heappush(value) {
        this.heap.push(value)
        let index = this.heap.length - 1
        
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2)
            const parentValue = this.heap[parentIdx]
            
            if (value[0] >= parentValue[0]) break;
            
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }
    
    heappop() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        
        const minValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        
        let index = 0
        const value = this.heap[index]
        const len = this.heap.length
        
        while (true) {
            const leftIdx = 2 * index + 1
            const rightIdx = 2 * index + 2
            let smallerIdx = leftIdx
            
            if (rightIdx < len && this.heap[rightIdx][0] < this.heap[leftIdx][0]) {
                smallerIdx = rightIdx
            }
            
            if (smallerIdx >= len || this.heap[smallerIdx][0] >= value[0]) break;
            
            [this.heap[index], this.heap[smallerIdx]] = [this.heap[smallerIdx], this.heap[index]];
            index = smallerIdx;
            
        }
        return minValue
        
    }
    
    size() {
        return this.heap.length
    }
}

function dijkstra(startNode, n, graph) {
    const distance = Array(n + 1).fill(Infinity)
    const heapq = new minHeap()
    
    distance[startNode] = 0
    heapq.heappush([0, startNode])
    
    while (heapq.size() > 0) {
        const [currCost, currNode] = heapq.heappop();

        if (currCost > distance[currNode]) continue;

        for (const [nextNode, weight] of graph[currNode]) {
            const newCost = currCost + weight;
            if (newCost < distance[nextNode]) {
                distance[nextNode] = newCost;
                heapq.heappush([newCost, nextNode]);
            }
        }
    }
    return distance
}

function solution(n, s, a, b, fares) {
    const graph = Array(n + 1).fill(null).map(() => Array(0).fill([]))
    
    for (const fare of fares) {
        const [start, end, fee] = fare
        graph[start].push([end, fee])
        graph[end].push([start, fee])
    }
    
    const distFromS = dijkstra(s, n, graph);
    const distFromA = dijkstra(a, n, graph);
    const distFromB = dijkstra(b, n, graph);

    let answer = Infinity;
    // 합승도달지점을 m으로 두고 찾기
    for (let m = 1; m <= n; m++) {
        answer = Math.min(answer, distFromS[m] + distFromA[m] + distFromB[m]);
    }

    return answer;
}