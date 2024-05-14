function solution(x) {
    //x를 배열로 변경 -> 각 자리수를 배열요소로 저장
    const arr = x.toString().split("");
    const numArr = arr.map((n) => Number(n));
    // console.log(numArr);
    let sum = numArr.reduce((pre, cur)=> {
        return pre + cur;
    }, 0)
    // console.log(sum);
    
    return (x % sum === 0) ? true : false;
}