const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

router.use((req, res, next) => {
  let product = req.body.product_name
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
    const logObj = { action: req.method, product: product, time: new Date() }
    const stats = JSON.parse(data)
    stats.push(logObj)
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => { })
  })
  next()
})

router.use('/:id', (req, res, next) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data1) => {
    const cart = JSON.parse(data1)
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    let product = find.product_name
    fs.readFile('./server/db/stats.json', 'utf-8', (err, data2) => {
      const logObj = { action: req.method, product: product, time: new Date() }
      const stats = JSON.parse(data2)
      stats.push(logObj)
      fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => { })
    })
    fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => { })
  })
  next()
})

router.post('/', (req, res) => {
  handler(req, res, 'add', './server/db/userCart.json');
});
// localhost:3000/api/cart/123 // req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' // req.query
router.put('/:id', (req, res) => {
  handler(req, res, 'change', './server/db/userCart.json');
});
router.delete('/', (req, res) => {
  handler(req, res, 'delete', './server/db/userCart.json');
});

module.exports = router;
