class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent_idx = Math.floor((index - 1) / 2);
            const parent_value = this.heap[parent_idx];

            if (value >= parent_value) break;

            this.heap[index] = parent_value;
            index = parent_idx;
        }
        this.heap[index] = value;
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min_value = this.heap[0];
        this.heap[0] = this.heap.pop();

        let index = 0;
        const len = this.heap.length;
        const value = this.heap[index];

        while (true) {
            const left_idx = 2 * index + 1;
            const right_idx = 2 * index + 2;
            let smaller_idx = left_idx;

            if (right_idx < len && this.heap[right_idx] < this.heap[left_idx]) {
                smaller_idx = right_idx;
            }

            if (smaller_idx >= len || this.heap[smaller_idx] >= value) break;

            this.heap[index] = this.heap[smaller_idx];
            index = smaller_idx;
        }
        this.heap[index] = value;
        return min_value;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const scov of scoville) {
    minHeap.push(scov);
  }

  let ans = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixed = first + second * 2;
    minHeap.push(mixed);
    ans += 1;
  }

  return minHeap.peek() >= K ? ans : -1;
}