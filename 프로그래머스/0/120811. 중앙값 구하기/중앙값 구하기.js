function solution(array) {
    var answer = 0;
    const newArr = array.sort(function(a,b){
        return a-b;
    })
    const middleIndex = (array.length -1)/2

    answer = newArr[middleIndex]

    return answer;
}