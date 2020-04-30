const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    longurl: !String,
    short: !String
})

module.exports = mongoose.model('url', urlSchema)
