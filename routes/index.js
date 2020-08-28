`use strict`

const express = require('express'),
  router = express.Router()
  todo = require('../controllers/TodoController')

// TODO
router.get('/', todo.getTodos);
router.post('/add-todo', todo.addTodo);
router.patch('/update-todo', todo.updateTodo);
router.delete('/delete-todo/:id', todo.deleteTodo);

// 404 NOT FOUND
router.get('/*', function(req, res, next) {
  res.json({ message: "Route not found!" })
});

module.exports = router;