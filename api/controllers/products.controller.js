const Product = require('../models/product')

const getAll = (req, res) => {
  Product
    .find({})
    .limit(100)
    .sort('-expirationDate')
    .then(products => {
      res.json(products)
    })
    .catch(err => res.status(500).send(err))
}

const registerProduct = (req, res) => {
  const data = {
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    expirationDate: req.body.expirationDate
  }

  Product
    .create(data)
    .then(products => {
      res.json(products)
    })
    .catch(error => {
      data.error = error
      console.error(error)
    })
}

module.exports = {
  getAll,
  registerProduct
}
