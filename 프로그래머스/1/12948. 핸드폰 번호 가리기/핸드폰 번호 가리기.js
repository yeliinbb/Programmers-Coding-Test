function solution(phone_number) {
    var answer = '';
    // 뒷 자리 4자리를 제외한 나머지에 *
    // 1. 앞자리, 뒷 4자리로 분리
    let front_number ='';
    let back_number ='';
    back_number = phone_number.slice(-4);
    const front_number_length = phone_number.length -4;

    // 2. 앞자리 문자열을 replace()로 *로 대체
    front_number = "*".repeat(front_number_length);
       
    // 3. 앞자리 문자열 + 뒷 4자리 -> answer
    answer = front_number + back_number;
    return answer;
}