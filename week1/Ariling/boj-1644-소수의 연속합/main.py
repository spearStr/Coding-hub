import sys
input = sys.stdin.readline

N = int(input())
# 에라토스테네스의 체... 일단 소수를 구해야 하기 때문 <- 이건 return만 좀 도움을 구함
def prime_numbers(N):
    arr = [i for i in range(N+1)] # 0부터 배열 선언 (인덱싱을 편하게 하기 위함)
    end = int(N**(1/2))
    for i in range(2, end+1):
        if arr[i] == 0:
            continue
        for j in range(i*i, N+1, i):
            arr[j] = 0
    # 0이 아닌 것들만 반환하기
    return [i for i in arr[2:] if arr[i]]
prime_arr = prime_numbers(N)

cnt = 0
start = 0
while start < len(prime_arr):
    idx = start
    total = 0
    while total <= N and idx < len(prime_arr):
        total += prime_arr[idx]
        if total == N:
            cnt += 1
            break
        else:
            idx += 1
    start += 1
print(cnt)