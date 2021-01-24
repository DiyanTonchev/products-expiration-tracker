const mongoose = require('mongoose')

const { Schema } = mongoose
// const messages = require('./../utilities/messages')

const productSchema = new Schema({
  name: {
    type: String,
    // required: messages.validator.propertyIsRequired
  },
  manufacturer: {
    type: String,
  },
  expirationDate: {
    type: Date,
  },
})

module.exports = mongoose.model('Product', productSchema)
