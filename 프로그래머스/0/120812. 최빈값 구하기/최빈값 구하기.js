function solution(array) {

    let frequency = {}
    for(const num of array){
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    let maxFreq = 0;
    let modes = [];
    
    for (const key in frequency ){
        if(frequency[key] > maxFreq){
        maxFreq = frequency[key]    
        modes = [Number(key)]
        } else if(frequency[key] === maxFreq){
            modes.push(Number(key))
        }
    }
    
    if(modes.length > 1){
        return -1
    }
    
    return modes[0];
}