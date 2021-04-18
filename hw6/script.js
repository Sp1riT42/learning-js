'use strict'

const gallery = {
    galleryArr: [
        {
            fullImg: 'img/jeans-full.jpg',
            minImg: 'img/jeans-min.jpg',
            alt1Img: 'img/jeans-alt1.jpg',
            alt2Img: 'img/jeans-alt2.jpg'
        },
        {
            fullImg: 'img/apple-full.jpg',
            minImg: 'img/apple-min.jpg',
            alt1Img: 'img/apple-alt1.jpg',
            alt2Img: 'img/apple-alt2.jpg'
        }
    ],
    srcObj: null,
    galleryPhoto: null,
    galleryBox: null,
    galleryOverlay: null,
    galleryCloseBtn: null,
    render() {

        if (event.target.tagName === 'IMG') {
            if (this.srcObj === null) {
                this.srcObj = Object.assign({}, this.galleryArr.find(item => item.minImg === event.target.getAttribute('src')))
                if (this.srcObj !== undefined) {
                    document.body.insertAdjacentHTML("beforeend", `<div class="gallery-overlay"></div>
                    <div class="gallery-close">X</div>
                    <div class="gallery-box">
                        <img class="gallery-photo" src="${this.srcObj.fullImg}">
                    </div>`)
                    this.galleryOverlay = document.querySelector('.gallery-overlay')
                    this.galleryCloseBtn = document.querySelector('.gallery-close')
                    this.galleryPhoto = document.querySelector('.gallery-photo')
                    this.galleryBox = document.querySelector('.gallery-box')
                    this.galleryBox.insertAdjacentHTML("beforeend", `<div class="gallery-left"><</div><div class="gallery-right">></div>`)
                    this.galleryBox.addEventListener('click', this.slide.bind(this))
                    this.galleryCloseBtn.addEventListener('click', this.galleryClose.bind(this))
                }
            } else {
                this.srcObj = Object.assign({}, this.galleryArr.find(item => item.minImg === event.target.getAttribute('src')))
                this.galleryPhoto.setAttribute('src', this.srcObj.fullImg)
                this.galleryOverlay.classList.toggle('hide')
                this.galleryBox.classList.toggle('hide')
                this.galleryCloseBtn.classList.toggle('hide')

            }
        }

    },
    slide() {
        if (event.target.getAttribute('class') === 'gallery-left') {
            console.log('left')
            for (let key in Object.values(this.srcObj)) {
                console.log(key)
                console.log(Object.keys(this.srcObj)[key])
                if (Object.values(this.srcObj)[0] === this.galleryPhoto.getAttribute('src')) {
                    this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[Object.values(this.srcObj).length - 1])
                    break
                } if (Object.values(this.srcObj)[key] === this.galleryPhoto.getAttribute('src')) {
                    if (Object.keys(this.srcObj)[key - 1] === 'minImg') {
                        this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[key - 2])
                        break
                    }
                    this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[key - 1])
                    break
                }
            }
        }

        if (event.target.getAttribute('class') === 'gallery-right') {
            for (let key in Object.values(this.srcObj)) {
                console.log(key)
                console.log(Object.keys(this.srcObj)[key])
                if (Object.values(this.srcObj)[Object.values(this.srcObj).length - 1] === this.galleryPhoto.getAttribute('src')) {
                    this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[0])
                    break
                } if (Object.values(this.srcObj)[key] === this.galleryPhoto.getAttribute('src')) {
                    if (Object.keys(this.srcObj)[+key + 1] === 'minImg') {
                        this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[+key + 2])
                        break
                    }
                    console.log(Object.values(this.srcObj)[+key])
                    console.log(Object.values(this.srcObj)[+key + 1])
                    this.galleryPhoto.setAttribute('src', Object.values(this.srcObj)[+key + 1])
                    break
                }
            }
            console.log('right')
        }
    },
    galleryClose() {
        this.galleryOverlay.classList.toggle('hide')
        this.galleryBox.classList.toggle('hide')
        this.galleryCloseBtn.classList.toggle('hide')
    }
}

let cart = {
    cartArr: [
        {
            name: 'Яблоко',
            price: 100,
            count: 4,
            id: 1,
            src: gallery.galleryArr[1].minImg
        },
        {
            name: 'Молоко',
            price: 130,
            count: 2,
            src: gallery.galleryArr[0].minImg //'img/jeans-min.jpg'
        },
        {
            name: 'Картошка',
            price: 100,
            count: 5,
            id: 3,
            src: gallery.galleryArr[0].minImg
        },
        {
            name: 'Макарошка',
            price: 50,
            count: 3,
            id: 4,
            src: gallery.galleryArr[0].minImg
        }
    ],
    cartBlock: null,
    cartButton: null,
    goods: null,
    gallery,
    getCount() {
        return this.cartArr.length
    },
    getSum() {
        return this.cartArr.reduce((first, second) => first + second.price * second.count, 0)
    },
    init() {
        this.cartBlock = document.querySelector('#cart')
        this.cartButton = document.querySelector('.button__clear')
        this.cartButton.addEventListener('click', this.clearCart.bind(this))
        this.render()
    },
    render() {
        this.cartBlock.textContent = ''
        if (this.cartArr.length === 0) {
            this.cartBlock.textContent = 'Корзина пуста'
        } else {
            this.cartBlock.insertAdjacentHTML("beforeend", `<div class="goods-box"></div>`)
            let cartBlockBox = document.querySelector('.goods-box')
            for (let i = 0; i < this.cartArr.length; i++) {
                cartBlockBox.insertAdjacentHTML("beforeend", `<div class="goods">
                <div class="img__box">
                <img class="photo" src="${this.cartArr[i].src}">
                <p>Название товара: ${this.cartArr[i].name}</p>
                <p>Цена за единицу: ${this.cartArr[i].price}</p>
                <p>Количество: ${this.cartArr[i].count}</p>
                </div>
                </div>`)
            }
            this.cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text">В корзине позиций товаров: ' + this.getCount() + 'шт. на сумму ' + this.getSum() + ' рублей</p>')
        }
        this.cartBlock.addEventListener('click', this.gallery.render.bind(this.gallery))
    },
    clearCart() {
        this.cartArr = []
        this.render()
    }
}
cart.init()

let product = {
    catalogArr: [
        {
            name: 'Яблоко',
            price: 100,
            count: 4,
            id: 1,
            src: gallery.galleryArr[1].minImg //'img/apple-min.jpg'
        },
        {
            name: 'Jeans',
            price: 130,
            count: 2,
            id: 2,
            src: gallery.galleryArr[0].minImg //'img/jeans-min.jpg'
        },
        {
            name: 'Картошка',
            price: 100,
            count: 5,
            id: 3,
            src: gallery.galleryArr[0].minImg
        },
        {
            name: 'Макарошка',
            price: 50,
            count: 3,
            id: 4,
            src: gallery.galleryArr[0].minImg
        }
    ],
    catalog: document.querySelector('#catalog'),
    cart,
    gallery,
    render() {
        for (let i = 0; i < this.catalogArr.length; i++) {
            this.catalog.insertAdjacentHTML("beforeend", `<div class="product">
            <div class="img__box"><img class="photo" src="${this.catalogArr[i].src}"></div>
                <a class="button__buy" id="${this.catalogArr[i].id}" href="#">Купить</a>
                <p>Название товара: ${this.catalogArr[i].name}</p>
                <p>Цена за единицу: ${this.catalogArr[i].price}</p>
                <p>Количество: ${this.catalogArr[i].count}</p>
            </div>`)
        }
        catalog.addEventListener('click', this.addCart.bind(this))
        this.catalog.addEventListener('click', this.gallery.render.bind(this.gallery))
    },
    addCart() {
        if (event.target.className === "button__buy") {
            let targetObj = this.catalogArr.find(item => item.id === Number(event.target.id))
            if (cart.cartArr.find(item => item.id === Number(event.target.id))) {
                cart.cartArr.find(item => item.id === targetObj.id).count += targetObj.count
                cart.render()
                return
            }
            this.cart.cartArr.push(Object.assign({}, this.catalogArr.find(item => item.id === Number(event.target.id))))
            this.cart.render()
        }
    }
}
product.render()

