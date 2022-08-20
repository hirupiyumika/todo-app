const express = require('express');
const router = express.Router(); 
const { addTodo,getAllTodos,getPendingTodos,getDoneTodos,updateTodo,deleteTodo,deleteAllTodos } = require('../controller/todos')

router.post('/todo', addTodo);
router.get('/all/todos', getAllTodos);
router.get('/pending/todos', getPendingTodos);
router.get('/complete/todos', getDoneTodos);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);
router.delete('/all/todos', deleteAllTodos);

module.exports = router;