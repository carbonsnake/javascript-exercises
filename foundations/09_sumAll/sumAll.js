const sumAll = function(num1, num2) {
    const nums = num1 && num2;
    const num1Decimal = num1.toString().indexOf(".");
    const num2Decimal = num2.toString().indexOf(".");

    if ( // check if num1 & num2 are positive integers
        typeof(nums) === "number" && 
        num1 >= 0 && 
        num2 >= 0 && 
        num1Decimal === -1 && 
        num2Decimal === -1
    ) { 
        const num = [num1, num2].sort();
        let ints = [];
        while (num[0] <= num[1]) {
            ints.push(num[0]++)
        }
        return ints.reduce((sum, current) => sum + current)
    } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
    // // positive whole numbers above (& excluding) 0 
    // if (num1 >= 0 && num2 >= 0 && (num1 / num1 === 1) && (num2 / num2 === 1)) {
    //     // num in any order - put in arr, then sort
    //     const num = [num1, num2].sort();
    //     // large numbers - data type?
    //     // dont reduce string of num to num
    //     // find every integer between & including them - loop through, increment, and reduce?
    //     let ints = [];
    //     let small = num[0];
    //     const big = num[1];

    //     while (small <= big) {
    //         ints.push(small++);
    //         //small++;
    //     }
    //     //return ints
    //     return typeof(num)
    //     return ints.reduce((sum, current) => sum + current)
    // } else {return "ERROR"}