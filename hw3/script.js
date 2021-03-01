"use strict"
// Задание 1
let i = 1
newLoop: while (true) {
    ++i
    let x = 1
    if (i > 100) break
    while (x <= 100) {
        ++x;
        if (x < i) {
            if ((i % x) === 0) {
                continue newLoop
            }
        }
    }
    console.log(i)
}

// Задание 2
let cartArr = [
    ['Яблоко', 100, 4],
    ['Молоко', 130, 2],
    ['Макарошка', 100, 5],
    ['Картошка', 50, 3]
]

let countBasketPrice = function (arr) {
    let sumCart = 0;
    for (let key of arr) {
        sumCart += key[1] * key[2]
    }
    return sumCart
}
console.log("Сумма покупок в корзине: " + countBasketPrice(cartArr))

// Задание 3
for (let i = 0; i < 10; console.log(i++)) { }

// Задание 4
let dot = '', innerCount = 0

while (innerCount < 20) {
    dot += 'x'
    console.log(dot)
    innerCount++
}

