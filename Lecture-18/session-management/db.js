const Sequelize = require('sequelize')


const db = new Sequelize({
  storage: __dirname + '/users.db',
  dialect: 'sqlite'
})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  }
})

module.exports = {
  Users,
  db
}
