const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 }
];

const renderGoodsItem = (title = 'name', price = 'неизвестна') => `
<div class="goods-item">
    <div class="goods-item__img">
        <img class="goods-item__photo" src="" alt="">&#9746;
    </div>
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="goods-item__button" type="button">Добавить</button>
</div>`;

const renderGoodsList = (list = []) => document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join(' ');

renderGoodsList(goods);