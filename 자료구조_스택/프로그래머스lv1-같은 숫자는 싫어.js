// 스프레드 연산자는 시간초과로 통과하지 못한다.
function solution(arr) {
  return arr.reduce((result, x) => {
    return result[result.length - 1] === x ? result : [...result, x]
  }, [])
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 30.3MB)
// 테스트 2 〉	통과 (0.07ms, 30.1MB)
// 테스트 3 〉	통과 (0.08ms, 30.1MB)
// 테스트 4 〉	통과 (0.06ms, 30.2MB)
// 테스트 5 〉	통과 (0.07ms, 29.9MB)
// 테스트 6 〉	통과 (0.11ms, 30MB)
// 테스트 7 〉	통과 (0.07ms, 30MB)
// 테스트 8 〉	통과 (0.07ms, 30.2MB)
// 테스트 9 〉	통과 (0.08ms, 30MB)
// 테스트 10 〉	통과 (0.13ms, 30.1MB)
// 테스트 11 〉	통과 (0.07ms, 30.1MB)
// 테스트 12 〉	통과 (0.14ms, 30.1MB)
// 테스트 13 〉	통과 (0.08ms, 30.3MB)
// 테스트 14 〉	통과 (0.10ms, 30.1MB)
// 테스트 15 〉	통과 (0.11ms, 30.2MB)
// 테스트 16 〉	통과 (0.10ms, 30.2MB)
// 테스트 17 〉	통과 (0.06ms, 30.2MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// 시간복잡도를 줄이기 위해 push메서드를 사용해서 바로 배열을 리턴하자.
function solution(arr) {
  const stack = []

  for (const x of arr) {
    if (stack[stack.length - 1] === x) {
      continue
    }
    stack.push(x)
  }

  return stack
}
// 정확성 테스트
// 테스트 1 〉 통과 (0.04ms, 33.4MB)
// 테스트 2 〉 통과 (0.14ms, 33.7MB)
// 테스트 3 〉 통과 (0.14ms, 33.5MB)
// 테스트 4 〉 통과 (0.13ms, 33.5MB)
// 테스트 5 〉 통과 (0.13ms, 33.4MB)
// 테스트 6 〉 통과 (0.13ms, 33.5MB)
// 테스트 7 〉 통과 (0.13ms, 33.5MB)
// 테스트 8 〉 통과 (0.13ms, 33.4MB)
// 테스트 9 〉 통과 (0.13ms, 33.7MB)
// 테스트 10 〉 통과 (0.14ms, 33.5MB)
// 테스트 11 〉 통과 (0.13ms, 33.6MB)
// 테스트 12 〉 통과 (0.13ms, 33.5MB)
// 테스트 13 〉 통과 (0.20ms, 33.5MB)
// 테스트 14 〉 통과 (0.13ms, 33.5MB)
// 테스트 15 〉 통과 (0.13ms, 33.5MB)
// 테스트 16 〉 통과 (0.13ms, 33.6MB)
// 테스트 17 〉 통과 (0.04ms, 33.4MB)
// 효율성 테스트
// 테스트 1 〉 통과 (30.77ms, 91.6MB)
// 테스트 2 〉 통과 (30.90ms, 91.4MB)
// 테스트 3 〉 통과 (27.71ms, 90.6MB)
// 테스트 4 〉 통과 (31.43ms, 91.4MB)
