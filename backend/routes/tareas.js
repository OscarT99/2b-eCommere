const {Router} = require('express')

const route = Router();

const { tareaGet, tareaPost, tareaPut, tareaDelete} = require('../controllers/tareas')

route.get('/tarea',tareaGet);

route.post('/tarea',tareaPost);

route.put('/tarea/:id',tareaPut);

route.delete('/tarea/:id',tareaDelete);

module.exports = route