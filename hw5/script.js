"use strict"
// Задание 1
let chessTable = {
    tagSymbol: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    chessWhite: ['&#9817;', '&#9816;', '&#9815;', '&#9814;', '&#9813;', '&#9812;'],
    chessBlack: ['&#9823;', '&#9822;', '&#9821;', '&#9820;', '&#9819;', '&#9818;'],
    getChess() {
        let cub, z = 0, c = 0, count = 0, chessElem;
        document.body.insertAdjacentHTML("afterend", '<div class="container" id="div"></div>')
        let container = document.querySelector('.container')
        container.style.cssText = 'display: flex; flex-wrap: wrap; width: 900px; margin-bottom: 50px;'
        //рисуем доску
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (i === 0 || j === 0) {
                    div.insertAdjacentHTML("beforeend", '<div class="one-row"></div>')
                } else {
                    div.insertAdjacentHTML("beforeend", '<div class="block"></div>')
                    cub = document.querySelectorAll('.block')     //стилизуем сами квадраты доски
                    if (z === 0) {
                        cub[c++].style.cssText = 'width: 100px; height: 100px; border: 1px solid black; box-sizing: border-box; text-align: center;'
                        z++
                    } else {
                        cub[c++].style.cssText = 'width: 100px; height: 100px; border: 1px solid black; box-sizing: border-box; background-color: black; text-align: center;'
                        z = 0
                    }
                    count++
                    if (count > 7) {
                        if (z === 0) {
                            z = 1

                        } else z = 0
                        count = 0
                    }
                }
            }
        }
        //вставляем и стилизуем верхние буквы
        cub = document.querySelectorAll('.one-row')
        for (let key = 0; key < 9; key++) {
            if (key > 0) cub[key].textContent = this.tagSymbol[key - 1]
            cub[key].style.cssText = 'width: 100px; height: 100px; box-sizing: border-box; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 10px'
        }
        //вставляем и стилизуем цифры слева
        for (let key = 9; key < 17; key++) {
            cub[key].style.cssText = 'width: 100px; height: 100px; box-sizing: border-box; display: flex; justify-content: flex-end; align-items: center; padding-right: 10px;'
            cub[key].textContent = key - 8
        }
        //расставляем фигурки на доске
        cub = document.querySelectorAll('.block')
        for (let key in cub) {
            switch (Number(key)) {
                case 0:
                case 7:
                    chessElem = this.chessWhite[3]
                    break
                case 1:
                case 6:
                    chessElem = this.chessWhite[1]
                    break
                case 2:
                case 5:
                    chessElem = this.chessWhite[2]
                    break
                case 3:
                    chessElem = this.chessWhite[5]
                    break
                case 4:
                    chessElem = this.chessWhite[4]
                    break
                case 56:
                case 63:
                    chessElem = this.chessBlack[3]
                    break
                case 57:
                case 62:
                    chessElem = this.chessBlack[1]
                    break
                case 58:
                case 61:
                    chessElem = this.chessBlack[2]
                    break
                case 59:
                    chessElem = this.chessBlack[5]
                    break
                case 60:
                    chessElem = this.chessBlack[4]
                    break
            }
            //верхние фигурки
            if (key >= 0 && key < 8) {
                if (key % 2 === 0) {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_black">' + chessElem + '</div>')
                } else {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_white">' + chessElem + '</div>')
                }
            }
            if (key > 7 && key < 16) {
                if (key % 2 === 0) {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_white">' + this.chessWhite[0] + '</div>')
                } else {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_black">' + this.chessWhite[0] + '</div>')
                }
            }
            // нижние фигурки
            if (key > 55 && key < 64) {
                if (key % 2 === 0) {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_white">' + chessElem + '</div>')
                } else {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_black">' + chessElem + '</div>')
                }
            }
            if (key > 47 && key < 56) {
                if (key % 2 === 0) {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_black">' + this.chessBlack[0] + '</div>')
                } else {
                    cub[key].insertAdjacentHTML("beforeend", '<div class="chess_white">' + this.chessBlack[0] + '</div>')
                }
            }

        }
        //стилизуем фигурки в зависимости от класса
        let chess = document.getElementsByClassName('chess_white')
        for (let i = 0; i < chess.length; i++) {
            chess[i].style.cssText = 'color: white; font-size: 64px; height: 100%; width: 64px; margin: 0 auto;'
        }
        chess = document.getElementsByClassName('chess_black')
        for (let i = 0; i < chess.length; i++) {
            chess[i].style.cssText = 'font-size: 64px; height: 100%; width: 64px; margin: 0 auto;'
        }
    }
}

chessTable.getChess()


//Задание 3
let cart = {
    cartArr: [
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
    ],
    cartBlock: document.querySelector('#cart'),
    getCount() {
        return this.cartArr.reduce((first, second) => first + second.count, 0)
    },
    getSum() {
        return this.cartArr.reduce((first, second) => first + second.price * second.count, 0)
    },
    render() {
        if (this.cartArr.length === 0) {
            this.cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text">Корзина пуста</p>')
        } else {
            this.cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text">В корзине: ' + this.getCount() + ' товаров на сумму ' + this.getSum() + ' рублей</p>')
        }
        this.cartBlock.style.cssText = 'width: 500px; border: 1px solid black; padding: 24px;'
    }
}
cart.render()

// Задание 4
let product = {
    catalogArr: [
        {
            name: 'Яблоко',
            price: 100,
            id: 4
        },
        {
            name: 'Jeans',
            color: 'blue',
            price: 130,
            id: 2
        },
        {
            name: 'Картошка',
            price: 100,
            id: 5
        },
        {
            name: 'Макарошка',
            price: 50,
            id: 3
        }
    ],
    catalog: document.querySelector('#catalog'),
    render() {
        let product
        this.catalog.style.cssText = 'width: 300px; border: 1px solid black; padding: 24px; margin-top: 20px;'
        for (let i = 0; i < this.catalogArr.length; i++) {
            this.catalog.insertAdjacentHTML("beforeend", `<div class="product"></div>`)
            product = document.querySelectorAll('.product')
            for (let j = 0; j < Object.keys(this.catalogArr[i]).length; j++) {
                product[i].insertAdjacentHTML("beforeend", `<p>${Object.keys(this.catalogArr[i])[j]}: ${Object.values(this.catalogArr[i])[j]}</p>`)
            }
        }
        for (let val of product) {
            val.style.cssText = 'width: 200px; border: 1px solid black; padding: 8px; margin: 0 auto 10px;'
        }
    }
}
product.render()


