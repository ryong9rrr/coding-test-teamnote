def is_harshad(number):
    _sum = sum(list(map(int, str(number))))
    return number % _sum == 0

def solution(x):
    return is_harshad(x)
"""
정확성  테스트
테스트 1 〉	통과 (0.02ms, 10.5MB)
테스트 2 〉	통과 (0.02ms, 10.5MB)
테스트 3 〉	통과 (0.02ms, 10.3MB)
테스트 4 〉	통과 (0.03ms, 10.3MB)
테스트 5 〉	통과 (0.03ms, 10.3MB)
테스트 6 〉	통과 (0.02ms, 10.4MB)
테스트 7 〉	통과 (0.02ms, 10.5MB)
테스트 8 〉	통과 (0.02ms, 10.3MB)
테스트 9 〉	통과 (0.02ms, 10.4MB)
테스트 10 〉	통과 (0.02ms, 10.4MB)
테스트 11 〉	통과 (0.02ms, 10.3MB)
테스트 12 〉	통과 (0.02ms, 10.3MB)
테스트 13 〉	통과 (0.02ms, 10.5MB)
테스트 14 〉	통과 (0.02ms, 10.4MB)
테스트 15 〉	통과 (0.02ms, 10.3MB)
테스트 16 〉	통과 (0.02ms, 10.4MB)
테스트 17 〉	통과 (0.02ms, 10.4MB)
"""