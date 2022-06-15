// calculator.js
exports.add=function(x,y){
    return x+y;
};
exports.subtract=function(x,y){
    return x-y;
};
exports.mul=function(x,y){
    return x*y;
};
exports.div=function(x,y){
    return x/y;
};
// App.js
var calc = require('./calculator');
var a = 10, b = 5;
console.log("Addition :" + calc.add(a, b));
console.log("Subtraction :" + calc.sub(a, b));
console.log("Multiplication :" + calc.mul(a, b));
console.log("Division :" + calc.div(a, b));