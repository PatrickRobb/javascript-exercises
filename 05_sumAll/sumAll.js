const sumAll = function(input1, input2) {
    let start = 0;
    let finish = 0;
    if (typeof(input1) === 'number' && typeof(input2) === 'number'){
        
        if (input1 > input2){
            start = input2; 
            finish = input1;
        }
        else {
            start = input1; 
            finish = input2;
        }
        if (start >= 0 && finish >= 0){
            let sum = 0;
            for (let i = start; i <= finish; i++){
                sum += i;
            }
            return sum;
        }
        else {return "ERROR";}
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
