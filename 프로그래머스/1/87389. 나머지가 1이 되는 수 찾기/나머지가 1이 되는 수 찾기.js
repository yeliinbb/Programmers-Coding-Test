function solution(n) {
    var answer = 0;
    let arr =[];
    //n % x === 1; => 자연수 x return
    for (let x = 1; x < n; x++) {
        if(n % x === 1) {
            arr.push(x);
    }
        answer = arr[0];
    }
    return answer;
}