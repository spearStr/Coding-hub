import math
def solution(enroll, referral, seller, amount):
    answer = []
    referral_tree = {}
    cash_dict = {}
    for i in range(len(referral)):
        # 다단계 형식 담기 -> 이진 트리 형태는 보기에 나왔다시피 맞지 않음
        if referral[i] == "-":
            referral_tree[enroll[i]] = "center"
        else:
            referral_tree[enroll[i]] = referral[i]
        cash_dict[enroll[i]] = 0
    for i in range(len(seller)):
        seller_name = seller[i]
        cash_amount = 100 * amount[i]
        while seller_name != "center":
            # 더 나눌 돈이 없다면 굳이 상위로 올라갈 필요가 없다.
            if cash_amount == 0:
                break
            # 상위에게 넘길 돈, 소숫점은 버리므로 math.floor를 활용한다.
            districute_cash = math.floor(cash_amount * 0.1)
            cash_dict[seller_name] += (cash_amount - districute_cash)
            cash_amount = districute_cash
            seller_name = referral_tree[seller_name]
    for i in range(len(enroll)):
        cash = cash_dict[enroll[i]]
        answer.append(cash)
    return answer
print(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]))

