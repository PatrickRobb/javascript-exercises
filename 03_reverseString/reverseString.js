const reverseString = function(text) {
    let reverse = ''
    for (let i = text.length -1; i >= 0; i--){
        reverse += text.charAt(i);
    }
    console.log(reverse);
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
