if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')  
} else {
  module.exports = require('./dev')
}

// Note: Heroku sets the NODE_ENV as 'production' automatically for you.
