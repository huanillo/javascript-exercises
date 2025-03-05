const removeFromArray = function(array, arg) {
    var position = arg - 1;
    array.splice(position, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
