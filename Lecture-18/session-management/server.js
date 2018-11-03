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

app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))

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
