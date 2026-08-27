const repeatString = function(str, num) {
    let result = "";
    if (num >= 0) {
        
        for (let i = 0; i < num; i++) {
            result += str;
        }
    } else {return "ERROR"}
    return result
};
// Do not edit below this line
module.exports = repeatString;
