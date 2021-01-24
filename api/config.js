const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/expiration-date',
  port: process.env.PORT || 1001,
  rootPath: __dirname,
}

module.exports = config
