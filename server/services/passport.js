const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

// Creates token/cookie to send to browser. (Going to use cookies here.)
passport.serializeUser((user, done) => {
  done(null, user.id)  // NOT the profile.id / googleId!
})

// For interpreting token/cookie from browser.
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/auth/google/callback', // Where user is redirected with permission code, which server will then send back to Google.
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then(existingUser => {
        if (!existingUser) {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user))
        } else {
          done(null, existingUser)
        }

      })

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));
