const express = require('express')
const ephbs = require('express-handlebars')
const routes = require('./routes/index')
const cookieParser = require('cookie-parser')
const app = express()
require('./config/mongoose')

//setting express config
app.engine('hbs', ephbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('123456789'))
app.use(routes)

app.listen(3000, () => {
  console.log('web server is running on http://localhost:3000/')
})
