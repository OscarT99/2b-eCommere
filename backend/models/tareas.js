const {Schema, model} = require('mongoose');

const tareaSchema = Schema({
    titulo : {type: String, required:[true,'La tarea es obligaotria']},
    descripcion : {type: String, required:[true,'La descripción es obligaotria']},
    estado : {type: Boolean, default: false}
});

module.exports = model('Tarea',tareaSchema)