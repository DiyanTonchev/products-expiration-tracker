const express = require('express')
const router = express.Router()
const ProductsController = require('./controllers/products.controller')

// router.route('/').get((req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// })

router.route('/product/register').post((req, res) => {
  ProductsController.registerProduct(req, res)
})

router.route('/products/').get((req, res) => {
  ProductsController.getAll(req, res)
})

module.exports = router