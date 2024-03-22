const {response} = require('express')

const Tarea = require('../models/tareas')

const tareaGet = async(req, res = response) => {
    try{
        const tareas = await Tarea.find();
        res.render('index', { tareas })
    }catch(error){
        res.status(500).json({ error : 'Error al obtener las tareas'});
    }
}

const tareaPost = async (req, res = response) => {
    try{
        const body = req.body;

        if(!body.titulo){
            return res.status(400).json({ msg: 'El campo titulo es obligatorio'})
        }

        if(!body.descripcion){
            return res.status(400).json({ msg: 'El campo descripcion es obligatorio'})
        }

        const nuevaTarea = new Tarea(body);
        await nuevaTarea.save();
        res.status(200).json({ msg: 'La tarea ha sido creada exitosamente.' });
    }catch(error){
        res.status(500).json({ error: 'Error al crear la tarea'});
    }
}

const tareaPut = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;

        if (!titulo) {
            return res.status(400).json({ msg: 'El campo titulo es obligatorio'});
        }

        if (!descripcion) {
            return res.status(400).json({ msg: 'El campo descripcion es obligatorio'});
        }

        const tareaModificada = await Tarea.findByIdAndUpdate(id, { titulo, descripcion }, { new: true });
        res.status(200).json({msg: 'La tarea ha sido modificada exitosamente.'});
    } catch (error) {
        res.status(500).json({ error: 'Error al modificar la tarea'});
    }
}



const tareaDelete = async(req, res = response) => {
    try{
        const {id} = req.params;
        await Tarea.findByIdAndDelete(id);
        res.status(200).json({ msg: 'La tarea ha sido eliminada exitosamente'});
    }catch(error){
        res.status(500).json({ error : 'Error al eliminar la tarea'})
    }
}

module.exports = ({
    tareaGet,
    tareaPost,
    tareaPut,
    tareaDelete
})
    