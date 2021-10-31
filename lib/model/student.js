
var mongoose = require('mongoose');
var schema = mongoose.Schema;

const student = new schema({
    name: String,
    email: String,
})
     
module.exports = mongoose.model("student",student);