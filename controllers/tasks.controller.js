const Tasks = require("../models/tasks")

const getAllTasks = async (req, res) => {
    try {
        const response = await Tasks.find({})
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Error getting tasks" })
    }
}

const saveTask = async (req, res) => {
    console.log(req.body, "esto viene por body")
    try {
        const newTask = new Tasks({ ...req.body, pending: true })
        await newTask.save()
        return res.status(200).json({ msg: "Se guardo satisfactoriamente" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Hubo un error al guardar" })
    }
}


const deleteTask = async (req, res) => {
    const taskId = req.params.taskId
    try {
        const response = await Tasks.findByIdAndDelete(taskId)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ msg: "error al eliminar" })
    }
}

const updateTask = async (req, res) => {
    
    const updateTask = req.body
    try {
        const response = await Tasks.findOneAndUpdate( req.params,updateTask,{upsert:true})
        if (!response) {
            return res.status(404).json({ msg: "Task not found" });
        }

        return res.status(200).json(response);

    } catch (error) {
        console.log(error,"esto es el error")
        return res.status(500).json({ msg: "Error updating task" })
    }
}

module.exports = { deleteTask, getAllTasks, saveTask,updateTask }