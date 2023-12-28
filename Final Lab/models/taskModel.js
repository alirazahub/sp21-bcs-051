import mongoose from 'mongoose'
const taskScheme = mongoose.Schema({
    title:String,
    description:String,
    dueDate:Date,
    status:String,
})

const Task = mongoose.model('Task', taskScheme);
export default Task;