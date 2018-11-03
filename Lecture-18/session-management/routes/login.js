const route = require('express').Router()
const { Users } = require('../db')


route.get('/', (req, res) => {
  res.render('login')
})

route.post('/', async (req, res) => {
  const user = await Users.findOne({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    return res.send('Wrong username')
  }

  if (user.password != req.body.password) {
    return res.send('Wrong password')
  }

  res.redirect('/profile')

})

module.exports = route
