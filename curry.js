// 科里化函数的含义：利用闭包的保存机制，传入参数时判断参数的个数，达到形参数量时才会执行，否则继续接受参数

function curry(func) {

}


function add1(a, b, c) {
    return a + b + c;
}
let testAdd = curry(add1);
console.log(testAdd(1)(2)(3));
console.log(testAdd(1, 2)(3));
console.log(testAdd(1)(2, 3));
console.log(testAdd(1, 2, 3));
