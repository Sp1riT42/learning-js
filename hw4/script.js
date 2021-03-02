'use strict'
// Задание 1
let obj = {}
let numberToObj = (number) => {
    if (number > 999 || number < 0) {
        console.log('это число не входит в диапазон 0-999')
        return obj
    } else {
        number = number.toString().padStart(3, 0)
        obj.единицы = +number[2]
        obj.десятки = +number[1]
        obj.сотни = +number[0]
        return obj
    }
}
console.log(numberToObj(999))

// Задание 2
let cartArr = [
    {
        name: 'Яблоко',
        price: 100,
        count: 4
    },
    {
        name: 'Молоко',
        price: 130,
        count: 2
    },
    {
        name: 'Картошка',
        price: 100,
        count: 5
    },
    {
        name: 'Макарошка',
        price: 50,
        count: 3
    }
]

let countBasketPrice = (arr) => {
    return arr.reduce((first, second) => first + second.price * second.count, 0)
}
console.log("Сумма покупок в корзине: " + countBasketPrice(cartArr))

// Задание 3
/*
Сущность "Продукт" является объектом с указанными свойствами, например название товара, стоимость и другие параметры, которые идентичны как для корзины, так и для каталога и имеет ряд методов (например расчет стоимости товара в зависимости от выбранного количства или расчет цены со скидкой), которые можно использовать в зависимотсти от контекста. Одни в каталоге, другие в корзине.
*/