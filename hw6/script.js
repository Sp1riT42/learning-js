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
    init() {
        product.catalog.addEventListener('click', this.render.bind(this))
        cart.cartBlock.addEventListener('click', this.render.bind(this))
    },
    render() {
        if (event.target.tagName === 'IMG') {
            if (this.srcObj === null) {
                console.log(event.target.getAttribute('src'))
                console.log(this.galleryArr.find(item => item.minImg === event.target.getAttribute('src')))
                this.srcObj = Object.assign({}, this.galleryArr.find(item => item.minImg === event.target.getAttribute('src')))
                if (this.srcObj !== undefined) {
                    document.body.insertAdjacentHTML("beforeend", `<div class="gallery-overlay"></div>`)
                    document.body.insertAdjacentHTML("beforeend", `<div class="gallery-close">X</div>`)
                    document.body.insertAdjacentHTML("beforeend", `<div class="gallery-box"><img class="gallery-photo" src="${this.srcObj.fullImg}"></div>`)
                    this.galleryOverlay = document.querySelector('.gallery-overlay')
                    this.galleryCloseBtn = document.querySelector('.gallery-close')
                    this.galleryPhoto = document.querySelector('.gallery-photo')
                    this.galleryBox = document.querySelector('.gallery-box')
                    this.galleryBox.insertAdjacentHTML("beforeend", `<div class="gallery-left"><</div>`)
                    this.galleryBox.insertAdjacentHTML("beforeend", `<div class="gallery-right">></div>`)
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
            for (let key in this.cartArr) {
                cartBlockBox.insertAdjacentHTML("beforeend", `<div class="goods"></div>`)
                let goods = document.querySelectorAll('.goods')
                goods[key].insertAdjacentHTML("beforeend", `<div class="img__box"><img class="photo" src="${this.cartArr[key].src}"></div>`)
                goods[key].insertAdjacentHTML("beforeend", `<p>Название товара: ${this.cartArr[key].name}</p>`)
                goods[key].insertAdjacentHTML("beforeend", `<p>Цена за единицу: ${this.cartArr[key].price}</p>`)
                goods[key].insertAdjacentHTML("beforeend", `<p>Количество: ${this.cartArr[key].count}</p>`)

            }
            this.cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text">В корзине позиций товаров: ' + this.getCount() + 'шт. на сумму ' + this.getSum() + ' рублей</p>')
        }
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
    render() {
        let product
        this.catalog.style.cssText = 'display: flex; border: 1px solid black; padding: 24px; margin: 20px;'
        for (let i = 0; i < this.catalogArr.length; i++) {
            this.catalog.insertAdjacentHTML("beforeend", `<div class="product"></div>`)
            product = document.querySelectorAll('.product')
            product[i].insertAdjacentHTML("beforeend", `<a class="button__buy" id="${this.catalogArr[i].id}" href="#">Купить</a>`)
            let buttonBuy = document.querySelectorAll('.button__buy')
            buttonBuy[i].addEventListener('click', this.addCart.bind(this))
            for (let j = 0; j < Object.keys(this.catalogArr[i]).length; j++) {
                if (Object.keys(this.catalogArr[i])[j] === 'id') continue
                if (Object.keys(this.catalogArr[i])[j] === 'src') {
                    product[i].insertAdjacentHTML("afterbegin", `<div class="img__box"><img class="photo" src="${this.catalogArr[i].src}"></div>`)
                    continue
                }
                product[i].insertAdjacentHTML("beforeend", `<p>${Object.keys(this.catalogArr[i])[j]}: ${Object.values(this.catalogArr[i])[j]}</p>`)
            }
        }
        for (let val of product) {
            val.style.cssText = 'border: 1px solid black; padding: 8px; margin: 0 auto 10px;'
        }
        gallery.init()
    },
    addCart() {
        let targetObj = this.catalogArr.find(item => item.id === Number(event.target.id))
        if (cart.cartArr.find(item => item.id === Number(event.target.id))) {
            cart.cartArr.find(item => item.id === targetObj.id).count += targetObj.count
            cart.render()
            return
        }
        cart.cartArr.push(Object.assign({}, this.catalogArr.find(item => item.id === Number(event.target.id))))
        cart.render()
    }
}
product.render()

