const removeFromArray = function(array, ...theargs) {
    return array.filter(element => !theargs.includes(element));
};

/* THIS FOR LOOP DOES THE SAME AS THE FUNCTION ABOVE:

const removeFromArray = function(array, ...theargs) {
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!theargs.includes(array[i])) {
            result.push(array[i]);
        }
    }
    
    return result;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
