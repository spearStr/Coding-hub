function solution(scoville, K) {
  var count = 0;
  const heap = new MinHeap();
  scoville.forEach((value) => heap.heappush(value));

  while (heap.size() > 1 && heap.getMin() < K) {
    let first = heap.heappop();
    let second = heap.heappop();
    heap.heappush(first + second * 2);
    count++;
  }

  return heap.getMin() < K ? -1 : count;
}

class MinHeap {
  constructor() {
    // 완전이진트리구조 관계 설명에 적합한 1-based indexing
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0; // 부모 노드의 인덱스 계산

    // 부모보다 값이 작으면 부모와 교환하며 위로 이동
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop(); // 마지막 요소를 루트로 이동

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    // 왼쪽 또는 오른쪽 자식 중 더 작은 값과 교환하며 아래로 이동
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}
