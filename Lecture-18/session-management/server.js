const express = require('express')
const app = express()
const {
  Users, db
} = require('./db')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/login', (req, res) => {
  res.render('login')
})
app.post('/login', async (req, res) => {
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

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  const user = await Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  console.log(user)
  res.redirect('/login')
})

app.get('/profile', (req, res) => {
  res.send('Hi There!')
})


db.sync()
  .then(() => {
    app.listen(4444, () => {
      console.log('Started on http://localhost:4444')
    })
  })
  .catch(console.error)
