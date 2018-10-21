const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const Op = Sequelize.Op

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/test.db'
})

const Person = db.define('person', {
  name: {
    type: DT.STRING(30),
    allowNull: false,
  },
  age: {
    type: DT.INTEGER,
    defaultValue: 18
  }
})

async function task() {
  try {
    await db.sync()
    let people = await Person.findAll({
      where: {
        [Op.or]: {
          [Op.and]: {/* .. */},
          [Op.and]: { /* ... */}
        }
      }
    })
    console.log(people.length)

  } catch (err) {
    console.error(err)
  }
}

task()
