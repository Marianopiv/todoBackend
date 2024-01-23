const { Schema, model } = require('mongoose');

const TasksSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    pending:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
    }
}, {
    timestamps: true,
});
const Tasks = model('Tasks', TasksSchema);

module.exports = Tasks