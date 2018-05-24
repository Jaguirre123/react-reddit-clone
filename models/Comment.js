var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
    votes: Number
}, {
    timestamp: true
})

module.exports = commentSchema;