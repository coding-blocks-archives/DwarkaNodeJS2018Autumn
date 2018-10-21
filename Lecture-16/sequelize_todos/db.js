const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize({
  storage: __dirname + '/todos.db',
  dialect: 'sqlite'
})

const Todo = db.define('todo', {
  task: {
    type: DT.STRING,
    allowNull: false
  },
  priority: {
    type: DT.INTEGER,
    defaultValue: 0
  }
})

db.sync()

module.exports = {
  Todo
}
