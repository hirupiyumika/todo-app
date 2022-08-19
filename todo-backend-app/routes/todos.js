const express = require('express');
const router = express.Router(); 
const { addTodo,getAllTodos,getPendingTodos,getDoneTodos,updateTodo,deleteTodo } = require('../controller/todos')

router.post('/todo', addTodo);
router.get('/all/todos', getAllTodos);
router.get('/pending/todos', getPendingTodos);
router.get('/done/todos', getDoneTodos);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;