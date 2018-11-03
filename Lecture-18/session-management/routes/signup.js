const route = require('express').Router()
const { Users } = require('../db')

route.get('/', (req, res) => {
  res.render('signup')
})

route.post('/', async (req, res) => {
  const user = await Users.create({
    username: req.body.username || undefined,
    password: req.body.password || undefined,
    email: req.body.email
  })
  console.log(user)
  res.redirect('/login')
})

module.exports = route
