function solution(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1))
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 30.1MB)
// 테스트 2 〉	통과 (0.09ms, 30.2MB)
// 테스트 3 〉	통과 (0.30ms, 30.3MB)
// 테스트 4 〉	통과 (0.13ms, 30.3MB)
// 테스트 5 〉	통과 (0.14ms, 30.3MB)
// 테스트 6 〉	통과 (0.22ms, 30.4MB)
// 테스트 7 〉	통과 (0.19ms, 30.3MB)
// 테스트 8 〉	통과 (0.11ms, 30.1MB)
// 테스트 9 〉	통과 (0.19ms, 30.4MB)
// 테스트 10 〉	통과 (0.08ms, 30MB)
// 테스트 11 〉	통과 (0.16ms, 30.4MB)
// 테스트 12 〉	통과 (0.30ms, 30MB)
// 테스트 13 〉	통과 (0.20ms, 30.2MB)
// 테스트 14 〉	통과 (0.20ms, 30.5MB)
