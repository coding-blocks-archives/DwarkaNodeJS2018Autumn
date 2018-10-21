const express = require('express')
const Todo = require('./db').Todo

const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
  const todos = await Todo.findAll({
    order: [
      ['priority', 'DESC']
    ]
  })
  res.render('index', {todos})
})

app.post('/', async (req, res) => {
  await Todo.create({
    task: req.body.task,
    priority: req.body.priority || undefined
  })

  res.redirect('/')
})


app.listen(2456, () => {
  console.log('Started on http://localhost:2456')
})
