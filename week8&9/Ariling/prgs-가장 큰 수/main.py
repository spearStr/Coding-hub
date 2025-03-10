def solution(numbers):
    # 이거 그때... 문자열로 어떻게 했던 것 같은데
    str_arr = []
    for number in numbers:
        str_arr.append(str(number))
    answer = str(int(''.join(sorted(str_arr, key=lambda x : x * 3, reverse=True))))
    return answer