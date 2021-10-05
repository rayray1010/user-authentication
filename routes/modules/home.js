const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  let firstName = ''
  let isLogin = false
  if (req.signedCookies.firstName) {
    firstName = req.signedCookies.firstName
    isLogin = true
  }
  res.render('index', { firstName, isLogin })
})
router.get('/:message', (req, res) => {
  let isWrong = true
  let firstName = ''
  let isLogin = false
  res.render('index', { firstName, isLogin, isWrong })
})

router.post('/login', (req, res) => {
  const { firstName, email, password } = req.body
  Login.findOne({ email, password })
    .then((data) => {
      if (data !== null) {
        res.cookie('firstName', data.firstName, {
          path: '/',
          signed: true,
          maxAge: 600000,
        }) //set cookie
        res.redirect('/')
      } else res.redirect(301, '/error')
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/logout', (req, res) => {
  res.clearCookie('firstName', { path: '/' })
  return res.redirect('/')
})

router.post('/')
module.exports = router
