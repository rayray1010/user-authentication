const express = require('express')
const ephbs = require('express-handlebars')
const app = express()
const routes = require('./routes/index')
require('./config/mongoose')

//setting express config
app.engine('hbs', ephbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('web server is running on http://localhost:3000/')
})
