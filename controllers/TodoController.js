`use strict`

const response = require('../res'),
    connection = require('../conn'),
    uuid = require('uuid')

exports.getTodos = (req, res) => {
    
    connection.query("SELECT * FROM todos", function(err, rows, fields) {
        if (err) {
            console.log(err)
        } else {
            response.success(rows, res)
        }
    })

}

exports.addTodo = (req, res) => {
           
    let body = {
        id: uuid.v4(),
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
    }
    connection.query(`INSERT INTO todos SET ?`, body, (err, results, fields) => {
        if (err) return response.error(err, res)
        response.success({ message: 'success' }, res)
    })

}

exports.updateTodo = (req, res) => {
           
    let body = [
        req.body.title,
        req.body.description,
        req.body.date,
        new Date(),
        req.body.id
    ]        
        
    connection.query(`UPDATE todos SET title = ?, description = ?, date = ?, updated_at = ? WHERE id = ?`, body, (err, results, fields) => {
        if (err) return response.error(err, res)
        response.success({ message: 'success' }, res)
    })

}

exports.deleteTodo = (req, res) => {    
        
    connection.query(`DELETE FROM todos WHERE id = "${req.params.id}"`, (err, results, fields) => {
        if (err) return response.error(err, res)
        response.success({ message: 'success' }, res)
    })

}
