const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/userAuthentication')
const db = mongoose.connection
db.on('error', () => {
  console.log('db error!')
})

db.once('open', () => {
  console.log('db activated!')
})

module.exports = db
