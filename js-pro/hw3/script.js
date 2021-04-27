const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise
let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject(error);
                } else {
                    resolve(xhr.response);
                }
            }
        };
        xhr.send();
    })
};

class GoodList {
    constructor(container = '.goods-list', cart) {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.cart = cart
        this.fetchGoods().then((data) => {
            this.goods = data;
            this.render();
            document.querySelector(container).addEventListener('click', this.addToCart.bind(this))
        });
    }

    fetchGoods() {
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            });
    }

    sumGoods() {
        return this.goods.reduce((accum, item) => accum + item.price, 0)
    }
    addToCart() {
        if (event.target.className === 'goods-item__button') {
            const idElem = +event.target.closest('div').dataset.id
            for (let i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id_product === idElem) {
                    const idxGoods = this.cart.goods.findIndex(item => item.id_product === idElem)
                    this.cart.allProducts = []
                    if (idxGoods === -1) {
                        this.goods[i].quantity = 1
                        this.cart.goods.push(this.goods[i])
                    } else {
                        this.cart.goods[idxGoods].quantity += 1
                    }
                    document.querySelector(this.cart.container).innerHTML = ''
                    this.cart.render()
                }
            }

        }
    }

    render() {
        const block = document.querySelector(this.container);
        for (const good of this.goods) {
            const productObject = new GoodItem(good);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
        block.insertAdjacentHTML('afterend', `<h2>Общая стоимость товаров: ${this.sumGoods()}</h2>`)
    }
}

class GoodItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id}" >
                    <div class="goods-item__img">
                        <img class="goods-item__photo" src="" alt="">&#9746;
                    </div>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="goods-item__button" type="button">Добавить</button>
                </div>`
    }
}

class Cart {
    constructor(container = '.cart') {
        this.container = container
        this.goods = []
        this.allProducts = [];
        this.getProductList().then((data) => {
            this.goods = data.contents;
            this.render();
            document.querySelector(container).addEventListener('click', this.removeFromCart.bind(this))
            document.querySelector('.cart').addEventListener('click', this.removeFromCartAll.bind(this))
        });
    }
    sumGoods() {
        const sumResult = this.goods.reduce((accum, item) => accum + item.price * item.quantity, 0)
        const renderResult = sumResult > 0 ? `Общая стоимость корзины: ${sumResult}` : 'Корзина пуста'
        return renderResult
    }
    getProductList() {
        return fetch(`${API}/getBasket.json`)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            });
    }

    removeFromCart() {
        if (event.target.className === 'goods-item__button') {
            const idElem = +event.target.closest('div').dataset.id
            for (let i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id_product === idElem) {
                    this.goods.splice(i, 1)
                    this.allProducts = []
                    document.querySelector(this.container).innerHTML = ''
                    this.render()
                    break
                }
            }

        }
    }
    removeFromCartAll() {
        if (event.target.classList.contains('goods-item__button-all-clear')) {
            document.querySelector(this.container).innerHTML = ''
            this.goods = []
            this.allProducts = []
            this.render()
        }
    }
    render() {
        const block = document.querySelector(this.container);
        block.insertAdjacentHTML('afterbegin', '<div class="cart__product"></div>');
        const product = document.querySelector('.cart__product');
        for (const good of this.goods) {
            const productObject = new CartItem(good);
            this.allProducts.push(productObject);
            product.insertAdjacentHTML('afterbegin', productObject.render());
        }
        block.insertAdjacentHTML('beforeend', `<h2>${this.sumGoods()}</h2><button class="goods-item__button goods-item__button-all-clear" type="button">Очистить корзину</button>`);
    }
}

class CartItem extends GoodItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        super(product)
        this.quantity = product.quantity;
    }
    render() {
        return `<div class="goods-item" data-id="${this.id}">
                    <div class="goods-item__img">
                        <img class="goods-item__photo" src="" alt="">&#9746;
                    </div>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <p>${this.quantity}</p>
                    <button class="goods-item__button" type="button">Удалить</button>
                </div>`
    }
}


const cart = new Cart();
const pl = new GoodList(undefined, cart);
console.log(pl)
console.log(cart)