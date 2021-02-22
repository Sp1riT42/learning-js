"use strict"

let Tf, Tc

let fahrenheit = function (Tc) {
    Tf = (9 / 5) * Tc + 32
    return parseInt(Tf) + " градус по Фаренгейту"
}
Tc = 232.8
alert(Tc + " - градусов цельсия = " + fahrenheit(Tc))

let name, admin
name = 'Василий'
admin = name
console.log(admin)

let number1 = 1000, number2 = "108", sumResult

sumResult = number1 + number2
console.log(sumResult)

/*
async - при асинхронной загрузке скриптов быстрее выполнится тот, что быстрее загрузится, порядок их записи в документе не важен. Скрипт может выполнится до загрузки страницы

defer - скрипты выполняются в порядке их записи в документе хоть и загружаются параллельно. Сработают только после полной загрузки документа, до DOMContentLoaded.
*/
