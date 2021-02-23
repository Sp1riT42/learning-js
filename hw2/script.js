"use strict"

//1. Дан код:
/* var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);      // 5
d = (2 + b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3 */
//Почему код даёт именно такие результаты?
/*
 В этом коде использутеся постфиксное и префиксное написание оператора инкремента. В каждом случае инкремент увеличивает значение переменной на единицу, но в случае с постфиксным написанием возвращает значение до увеличения на единицу.
*/

//2. Чему будет равен x в примере ниже?
/* var a = 2;
var x = 1 + (a *= 2); */
// x равно 5

// Задание номер 3

let a = -5, b = 70

if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else {
    console.log(a + b)
}

// Задание 4

let a1 = 5

switch (a1) {
    case 0:
        console.log(a1++)
    case 1:
        console.log(a1++)
    case 2:
        console.log(a1++)
    case 3:
        console.log(a1++)
    case 4:
        console.log(a1++)
    case 5:
        console.log(a1++)
    case 6:
        console.log(a1++)
    case 7:
        console.log(a1++)
    case 8:
        console.log(a1++)
    case 9:
        console.log(a1++)
    case 10:
        console.log(a1++)
    case 11:
        console.log(a1++)
    case 12:
        console.log(a1++)
    case 13:
        console.log(a1++)
    case 14:
        console.log(a1++)
    case 15:
        console.log(a1++)
        break
    default:
        console.log("Введите число от 0 до 15")
}

// Задание номер 5
let getSum = function (a, b) {
    return a + b
}

let getDel = function (a, b) {
    return a / b
}

let getPro = function (a, b) {
    return a * b
}

let getDif = function (a, b) {
    return a - b
}

/* console.log(getSum(2, 2))
console.log(getDel(2, 2))
console.log(getPro(2, 2))
console.log(getDif(2, 2)) */

// Задание номер 6

let mathOperation = function (arg1, arg2, operation) {
    switch (operation) {
        case getSum:
            return getSum(arg1, arg2)
        case getDel:
            return getDel(arg1, arg2)
        case getPro:
            return getPro(arg1, arg2)
        case getDif:
            return getDif(arg1, arg2)
    }
}

console.log(mathOperation(2, 2, getSum))
console.log(mathOperation(2, 2, getDel))
console.log(mathOperation(2, 2, getPro))
console.log(mathOperation(2, 2, getDif))

// Задание номер 7

/*
null >= 0 // true, т.к. исходя из спецификации если null < 0 принимает значение false, то null >= 0 принимает значение true
null > 0 // false т.к. null преобразуется к 0
null == 0 // false т.к. == рассматривает null особо.

Null это "пустое" или "неизвестное" знаяение, в то время как 0 - конкретное число.
*/

// Задание 8

let power = function (val, pow) {
    if (pow === 0) {
        return 1
    } else if (pow > 0) {
        return power(val, --pow) * val
    } else if (pow < 0) {
        return power(val, ++pow) / val
    }
}

console.log(power(0, 2))