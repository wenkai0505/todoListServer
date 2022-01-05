const mongoose = require('mongoose')
const nodemon = require('nodemon')


const TodoListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    month: {
        type: Number,
        default: (new Date()).getMonth() + 1
    },
    date: {
        type: Number,
        default: (new Date()).getDate()
    },


})


const TodoList = mongoose.model('TodoList', TodoListSchema)
module.exports = TodoList