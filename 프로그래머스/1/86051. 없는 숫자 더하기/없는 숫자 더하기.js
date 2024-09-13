function solution(numbers) {
    var answer = -1;
    // 0부터 9까지의 숫자의 합 - numbers 배열의 원소의 합
    let sum = '';
    const initialValue = 0;
    sum = numbers.reduce((acc, value) => acc + value, initialValue);
    // console.log(sum);
    answer = 45 - sum;
    return answer;
}