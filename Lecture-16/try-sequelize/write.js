const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

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
    let p = await Person.create({
      name: 'Harry Potter',
      age: 18
    })
    console.log('==================')
    console.log(p)
    p.age = 20
    console.log('==================')
    console.log(p)
    p = await p.save()
    console.log('==================')
    console.log(p)


  } catch (err) {
    console.error(err)
  }
}

task()
