const sumAll = function(num1, num2) {
let sum = 0;
let initial, final;
if ((Math.sign(num1) === -1) || (Math.sign(num2) === -1) || //check if positive
    (Number.isInteger(num1) === false) || (Number.isInteger(num2) === false)){ //check if integer
    return "ERROR";
}
if (num1 > num2) {
    initial = num2;
    final = num1;
}
else{
    initial = num1;
    final = num2;
}
for (let i = initial; i <= final; i ++){ //ends when num1 = num2, included
        sum += i; //adds i in every interaction of the loop
}
return sum;

};

// Do not edit below this line
module.exports = sumAll;
