function solution(n) {
    var answer = [];
    let arr = n.toString().split(""); //자연수 -> 문자열
    
    //arr의 인덱스 역순으로 answer의 배열 안에 넣어준다.
    for (let i = arr.length -1; i >= 0; i--) {
        answer.push(Number(arr[i]));
    }
    return answer;
}