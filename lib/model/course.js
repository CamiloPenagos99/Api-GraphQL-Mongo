
var mongoose = require('mongoose');
var schema = mongoose.Schema;

const curso = new schema({
    tutor: String,
    descripcion: String,
    valoracion: Number,
    tema: String,
    students: Array,
    dept: String
})
     
module.exports = mongoose.model("curso",curso);