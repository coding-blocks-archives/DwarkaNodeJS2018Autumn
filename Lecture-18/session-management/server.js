const express = require('express')
const session = require('express-session')
const app = express()
const {
  Users, db
} = require('./db')


app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(session({
  secret: 'some very very long string here. do not share'
}))

app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))

app.get('/profile', async (req, res) => {
  if (req.session.userId) {
    const user = await Users.findById(req.session.userId)
    return res.render('profile', {user})
  } else {
    res.redirect('/login')
  }
})


db.sync()
  .then(() => {
    app.listen(4444, () => {
      console.log('Started on http://localhost:4444')
    })
  })
  .catch(console.error)
