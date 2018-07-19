const passport = require('passport')

module.exports = (app) => {
  app.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

  app.get('/auth/google/callback', 
    passport.authenticate('google')) //, { failureRedirect: '/login' }),
    // function(req, res) {
    //   res.redirect('/')
    // }
    // )

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
    // res.send(`user ${JSON.stringify(req.user)}`)
  })

  app.get('/api/logout', (req, res) => {
    req.logout()  // method added by passport
    res.send(req.user)  // should be null now
    // req.session = null  // session added by cookie-session
  }) 
}
