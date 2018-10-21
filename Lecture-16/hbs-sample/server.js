const express = require('express')

const app = express()

let tasks = []

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Awesome Page',
    tasks: tasks
  })
})

app.post('/', (req, res) => {
  tasks.push(req.body.task)
  res.redirect('/')
})


app.listen(7777, () => {
  console.log('Server started')
})
