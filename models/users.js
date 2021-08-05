const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    token: String,
    login: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: Number
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel