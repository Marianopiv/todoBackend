const express = require('express');
const { getAllTasks,saveTask, deleteTask, updateTask } = require('../controllers/tasks.controller');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Marianopiv:panchohotdog@todocluster.emikahh.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
const router = express.Router()
router.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

router.get('/tasks', getAllTasks)
router.post('/tasks',saveTask)
router.delete('/tasks/:_id',deleteTask)
router.put('/tasks/:_id',updateTask)

module.exports = { router }