const express = require('express');
const fs = require('fs');
const app = express();

/**
 * Активируем мидлвары
 */
app.use(express.json()); // Даем знать приложению, что работаем с json'ом
app.use('/', express.static('./public')); // запросы в корень нашего сайт отдают содержимое public

const cartLog = (req, res, next) => {
  console.log(req.method)
  // console.log(res)
  //console.log(next)
  let product = req.body.product_name
  //if (req.method === 'PUT') {
  //  product = 
  // }
  fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
    const logObj = { action: req.method, product: product, time: new Date() }
    const stats = JSON.parse(data)
    stats.push(logObj)
    fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => {
      //res.send('{"result": 1}');
    })
  })
  next()
}


/**
 * API Каталога
 */
app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

/**
 * API Корзины
 */
app.get('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

app.use(cartLog)
// Добавление нового товара в корзине
app.post('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      // добавляем новый товар
      cart.contents.push(req.body);
      // cartLog('add new', req.body.product_name, new Date())
      // пишем обратно
      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});

// Изменяем количество товара
app.put('/api/cart/:id', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      // ищем товар по id
      const find = cart.contents.find(el => el.id_product === +req.params.id);
      // cartLog('add quantity', find.product_name, new Date())
      // изменяем количество
      ++find.quantity //+= req.body.quantity;
      // пишем обратно
      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  });
});
app.delete('/api/cart', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      // парсим текущую корзину
      const cart = JSON.parse(data);
      //console.log(cart)
      const find = cart.contents.find(el => el.id_product === req.body.id_product);
      console.log(find)
      //  cartLog('delete', find.product_name, new Date())
      if (find && find.quantity > 1) {
        --find.quantity
      } else {
        cart.contents.splice(cart.contents.indexOf(req.body), 1)
      }

      fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  })
})
// const cartLog = (act, prod, tm) => {
//   fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
//     const logObj = { action: act, product: prod, time: tm }
//     const stats = JSON.parse(data)
//     stats.push(logObj)
//     fs.writeFile('./server/db/stats.json', JSON.stringify(stats), (err) => {
//       //res.send('{"result": 1}');
//     })
//   })
// }
/**
 * Запуск сервера
 * @type {string|number}
 */
// const port = process.env.PORT || 3000;
const port = 8888; // чтобы не смущало process.env.PORT (если не стартует на 3000, то меняем на другой 8080 или 8888)
app.listen(port, () => {
  console.log(`Listening ${port} port`);
  //console.log(process.env)
});
