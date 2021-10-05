const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const { firstName, email, password } = req.body
  Login.findOne({ email, password })
    .then((data) => {
      if (data !== null) {
        console.log(data)
        res.render('index', { data })
      } else res.render('index', { warning: 'please try again!' })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/')
module.exports = router
