function solution(n)
{
    var answer = 0;
    const str = String(n); 
    const newArr = Array.from(str); //문자열 배열
    for (let i = 0; i < newArr.length; i++) {
        answer += parseInt(newArr[i]);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}