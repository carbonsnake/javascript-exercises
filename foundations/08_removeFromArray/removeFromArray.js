const removeFromArray = function(arr, ...args) {
    args.forEach(arg => {
        while (arr.includes(arg)) {
            let numIndex = arr.indexOf(arg);
            arr.splice(numIndex, 1)
        }
    });
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;