let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`

let reg1 = new RegExp(/'/ig)
let reg2 = new RegExp(/'(?=[A-Z])|'$|'(?=\s)/gm)

console.log(text.replace(reg1, "\""))
console.log(text.replace(reg2, "\""))

class Form {
    constructor() {
        this.name
        this.phone
        this.email
        this.container
        this._init()
        this.container.addEventListener('submit', this.validation.bind(this))
    }
    _init() {
        this.name = document.querySelector('#name')
        this.phone = document.querySelector('#phone')
        this.email = document.querySelector('#email')
        this.container = document.querySelector('#form')
    }
    validation() {
        event.preventDefault();
        const regEmail = new RegExp(/^[a-zA-Z.-]+@[a-zA-Z]+\.[a-zA-Z]+$/ig)
        const regPhone = new RegExp(/\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/ig)
        const regName = new RegExp(/[^a-zA-Zа-яА-ЯёЁ]/ig)
        const errName = document.querySelector('.form__name-err')
        const errPhone = document.querySelector('.form__phone-err')
        const errEmail = document.querySelector('.form__email-err')
        if (this.name.value.length !== 0 && !regName.test(this.name.value)) {
            this.name.className = 'form__name'
            errName.className = 'form__name-err hide'
        } else {
            this.name.className = 'form__name err'
            errName.className = 'form__name-err'
        }
        if (this.phone.value.length !== 0 && regPhone.test(this.phone.value)) {
            this.phone.className = 'form__phone'
            errPhone.className = 'form__phone-err hide'
        } else {
            this.phone.className = 'form__phone err'
            errPhone.className = 'form__phone-err'
        }
        if (this.email.value.length !== 0 && regEmail.test(this.email.value)) {
            this.email.className = 'form__email'
            errEmail.className = 'form__email-err hide'
        } else {
            this.email.className = 'form__email err'
            errEmail.className = 'form__email-err'
        }
    }
}

let form = new Form()