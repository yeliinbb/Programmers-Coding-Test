function solution(arr) {
    var answer = 0;
    //배열 객체의 평균값 구하기 -> 객체를 모두 더하고 객체의 수로 나눠준다.
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    answer = answer / arr.length ;
    return answer;
}