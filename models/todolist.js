const mongoose = require('mongoose')


const TodoListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    },

})


const TodoList = mongoose.model('TodoList', TodoListSchema)
module.exports = TodoList