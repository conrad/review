const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')  // load schema whenever booted up
require('./services/passport')  // configure passport

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days in ms
    keys: [keys.cookieKey]  // Used to sign or encrypt the cookies
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)  // Call function of authRoutes with app object.
require('./routes/basicRoutes')(app)


const PORT = process.env.PORT || 5000 // Heroku injects this environmental variable.
app.listen(PORT)


