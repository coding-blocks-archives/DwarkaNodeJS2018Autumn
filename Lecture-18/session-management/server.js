const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/login', (req, res) => {
  res.render('login')
})
// app.post('/login')

app.get('/signup', (req, res) => {
  res.render('signup')
})
// app.post('/signup')


app.listen(4444, () => {
  console.log('Started on http://localhost:4444')
})
