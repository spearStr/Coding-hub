
import sys
input = sys.stdin.readline
# L*L 크기의 트램펄린, 예산 심의 통과를 기다리기... 별똥별을 최대한 많이 튕겨내기
# N, M, L, K :  N, M은 배열로 보고.. L은 변의 길이 K는 별똥별 갯수
# 이건 힌트를 봤습니다!
N, M, L, K = map(int, input().split())
points = []
bounce = 0
for _ in range(K):
    r, c = map(int, input().split())
    points.append((r, c))
for pointA in points:
    for pointB in points:
        count = 0
        for pointC in points:
            if pointA[0] <= pointC[0] and pointC[0] <= pointA[0] + L and pointB[1] <= pointC[1] and pointC[1] <= pointB[1] + L:
                count += 1
            if count > bounce:
                bounce = count
print(K - bounce)