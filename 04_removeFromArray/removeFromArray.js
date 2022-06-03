const removeFromArray = function(...args) {
    if (args.length == 0) return [];
    let arr = args[0];
    for(let i = 1; i < args.length; i++){
        arr = arr.filter(value => value !== args[i]);
    }
    debugger;
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
