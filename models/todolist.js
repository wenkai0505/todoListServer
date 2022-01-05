const mongoose = require('mongoose')


const TodoListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const TodoList = mongoose.model('TodoList', TodoListSchema)
module.exports = TodoList