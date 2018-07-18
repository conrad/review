const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  /** 
   * pass/describe all the properties you might have
   * - type is in CAPS, using the nodeJS Object for the type
   * - these can be freely added and removed.
   */
  googleId: String
})

// Have mongoose create the class
mongoose.model('users', userSchema)
