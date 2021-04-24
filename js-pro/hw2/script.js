/*  Задание 1 - Набросок классов корзины корзины

class Cart {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.sumResult = null
        this.allProducts = [];
    }

    fetchGoods() { }
    sumGoods() { }
    addCountGood() { }
    deletGood() { }
    buyGoods() { }
    render() { }

}

class CartItem {
    constructor() {

    }
    render() { }
} */

// Задание 2
class GoodList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.sumResult = null
        this.allProducts = [];
        this.fetchGoods();
        this.sumGoods()
        this.render();
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    sumGoods() {
        this.goods.forEach(item => this.sumResult += item.price)
    }

    render() {
        console.log(this.sumResult)
        const block = document.querySelector(this.container);
        for (const good of this.goods) {
            const productObject = new GoodItem(good);
            // console.log(productObject);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
        block.insertAdjacentHTML('afterend', `<h2>Общая стоимость товаров: ${this.sumResult}</h2>`)
    }
}

class GoodItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="goods-item">
                    <div class="goods-item__img">
                        <img class="goods-item__photo" src="" alt="">&#9746;
                    </div>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="goods-item__button" type="button">Добавить</button>
                </div>`
    }
}
const pl = new GoodList();

/* 
Задание 3. 
*Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.
*/

class Hamburger {
    constructor() {
        this.size
        this.stuffing
        this.topping = []
        this.sizeAvalible = [
            { id: 'size1', price: 50, calories: 20 },
            { id: 'size2', price: 100, calories: 40 }
        ]
        this.stuffingAvalible = [
            { id: 'stuffing1', price: 10, calories: 20 },
            { id: 'stuffing2', price: 20, calories: 5 },
            { id: 'stuffing3', price: 15, calories: 10 }
        ]
        this.toppingAvalible = [
            { id: 'topping1', price: 15, calories: 0 },
            { id: 'topping2', price: 20, calories: 5 }
        ]
        this.container = document.querySelector('.hamburger')
        this.container.addEventListener('click', this.reload.bind(this))

        this.render()
    }
    getToppings() {   /* Получить список добавок */
        let toppingList = document.querySelectorAll('.hamburger__topping')
        this.topping = []
        for (let i = 0; i < toppingList.length; i++) {
            if (toppingList[i].checked) {
                for (let j = 0; j < this.toppingAvalible.length; j++) {
                    if (toppingList[i].id === this.toppingAvalible[j].id) {
                        this.topping.push(this.toppingAvalible[j])
                    }
                }
            }
        }
    }
    getSize() {              /* Узнать размер гамбургера */
        let sizeList = document.querySelectorAll('.hamburger__size')
        for (let i = 0; i < sizeList.length; i++) {
            if (sizeList[i].checked) {
                for (let j = 0; j < this.sizeAvalible.length; j++) {
                    if (sizeList[i].id === this.sizeAvalible[j].id) {
                        this.size = this.sizeAvalible[j]
                    }
                }
            }
        }
    }

    getStuffing() {
        /* Узнать начинку гамбургера */
        let stuffingList = document.querySelectorAll('.hamburger__stuffing')
        for (let i = 0; i < stuffingList.length; i++) {
            if (stuffingList[i].checked) {
                for (let j = 0; j < this.stuffingAvalible.length; j++) {
                    if (stuffingList[i].id === this.stuffingAvalible[j].id) {
                        this.stuffing = this.stuffingAvalible[j]
                    }
                }
            }
        }
    }
    calculatePrice() {       /* Узнать цену */
        let sum = this.size.price + this.stuffing.price
        for (let i = 0; i < this.topping.length; i++) {
            sum += this.topping[i].price
        }
        return sum

    }
    calculateCalories() {     /* Узнать калорийность */
        let sum = this.size.calories + this.stuffing.calories
        for (let i = 0; i < this.topping.length; i++) {
            sum += this.topping[i].calories
        }
        return sum
    }
    reload() {
        if (event.target.type === 'radio' || event.target.type === 'checkbox') {
            this.render()
        }
    }
    render() {
        this.getSize()
        this.getStuffing()
        this.getToppings()
        let price = document.querySelector('.hamburger__price')
        price.textContent = `Стоимость гамбургера ${this.calculatePrice()}. Калорийность ${this.calculateCalories()}`
    }
}

let myHamburger = new Hamburger()