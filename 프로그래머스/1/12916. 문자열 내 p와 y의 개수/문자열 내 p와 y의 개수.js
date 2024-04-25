function solution(s){
    let answer = true;
    //1. 대문자/소문자로 통일
    s = s.toUpperCase();
    
    let num = 0;

    //2. for문을 통해서 문자열의 요소 하나하나씩을 비교
    //2-1. P, Y와 비교
    for (let i = 0; i < s.length; i++) {
        //여기에서 비교
        if(s[i] === "P") {
            num++;
            console.log(num);
            console.log("--------a");
        }
        if(s[i] === "Y") {
            num--;
            console.log(num);
            console.log("--------b");
        }
    }

    //3. 개수 체크(p와 y의 개수가 같은지를 체크)
    if(num === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}