const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const serverConfig = require('./config')
const routes = require('./routes')
const cors = require('cors')

const expressApp = express()

// MongoDB Connection
mongoose.connect(
  serverConfig.mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!')
      throw error
    }

    console.log('MongoDB up and running!')
  },
)

expressApp.use(bodyParser.urlencoded({ extended: true }))
expressApp.use(bodyParser.json())
expressApp.use(express.static(path.join(serverConfig.rootPath, '/public')))
expressApp.use(cors())

expressApp.use(routes)

expressApp.listen(serverConfig.port, () => {
  console.log(`App is running on port ${serverConfig.port}!`)
})
