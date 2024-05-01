function solution(x, n) {
    var answer = []; //정수 x의 배수의 모음

    for(let i=1; i <= n; i++) {
        answer.push(x*i);
    }
    
    return answer;
}