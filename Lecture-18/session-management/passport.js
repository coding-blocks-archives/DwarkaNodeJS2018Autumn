const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const {
  Users
} = require('./db')

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function (userId, done) {
  try {
    const user = await Users.findById(userId)
    return done(null, user)
  } catch (e) {
    done(e)
  }
})


passport.use(new LocalStrategy(
  async function (username, password, done) {

    try {
      const user = await Users.findOne({
        where: {
          username: username
        }
      })

      if (!user) {
        done(null, false)
      }

      if (user.password != password) {
        done(null, false)
      }

      done(null, user)
    } catch (e) {
      done (e)
    }
  }
))
module.exports = passport
