function solution(absolutes, signs) {
    // 1. return 해야하는 answer 생성
    //결과값이 숫자형이기 때문에 일단 숫자로 변수 정의
    let answer = 0;

    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === false) {
            answer -= absolutes[i];
            //아래는 값을 음수로 할당하고 싶을 때
            // answer = -1 * absolutes[i];
            // answer = -Math.abs(absolutes[i]);
            // console.log(answer);
            // console.log("---------c");
            console.log(answer);
            console.log("---------a");
        } else {
            answer += absolutes[i];
            console.log(answer);
            console.log("----------b");
        }
    }

    
    //2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
    //2-1.두 배열은 크기가 같음.
    // for (let i = 0; i < absolutes.length; i++){
    //     //부호(+, -)에 따른 처리
    //     if(signs[i] === true) {
    //         //값이 true인 경우 (양수)
    //         answer = answer + absolutes[i];
    //     } else (signs[i] === false) {
    //         //값이 false인 경우 (음수)
    //         answer = answer - absolutes[i];
    //     }
    // }
    //3. 출력
    return answer;
    
}