const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const TodoList = require('./models/todolist')
const cors = require('cors')

let port = process.env.PORT || 8080

mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('connect to mongodb atles successfully.')
    })
    .catch((err) => {
        console.log(err)
    })



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get('/api/todolist', (req, res) => {
    TodoList.find({})
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            res.status(400).send({
                success: false,
                error: err.meddage
            })
        })
})

app.post('/api/todolist', (req, res) => {

    let { name, done, date } = req.body

    const newTodoList = new TodoList({
        name, done, date
    })

    newTodoList.save()
        .then((data) => {
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err) => {
            res.status(400).send({
                success: false,
                error: err.meddage
            })
        })

})


app.delete('/api/todolist/:_id', (req, res) => {

    let { _id } = req.params
    console.log(_id)

    TodoList.findOneAndDelete({ _id })
        .then(() => {
            res.status(200).send('todo list for deleted.')
        })
        .catch((err) => {
            res.status(403).send(err.message)
        })
})


app.listen(port, () => {
    console.log(`server is running on port ${port}.`)
})











