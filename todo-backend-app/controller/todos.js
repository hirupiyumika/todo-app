const { Todo, validate } = require('../models/todo')

const addTodo = async (req, res, next) => {
    const { error } = validate(req.body);

    if (error) return res.status(404).send(error.details[0].message);
    try {
        todo = new Todo({
            task: req.body.task,
            status: req.body.status
        })
        await todo.save()
        res.send({
            _id: todo._id,
            task: todo.task,
            status: todo.status
        })
    } catch (error) {
        res.status(400).send('"Invalid data provided."');
    }
}

const getAllTodos = async (req, res, next) => {
    try {
        const todo = await Todo
            .find({}, { updatedAt: 0, createdAt: 0, __v: 0 })
            .sort('-createdAt');
        res.send(todo)
    } catch (ex) {
        next(ex)
    }
}

const getPendingTodos = async (req, res, next) => {
    try {
        const todo = await Todo
            .find({}, { updatedAt: 0, createdAt: 0, __v: 0 })
            .where('status').equals('pending')
            .sort('-createdAt');
        res.send(todo)
    } catch (ex) {
        next(ex)
    }
}

const getDoneTodos = async (req, res, next) => {
    try {
        const todo = await Todo
            .find({}, { updatedAt: 0, createdAt: 0, __v: 0 })
            .where('status').equals('done')
            .sort('-createdAt');
        res.send(todo)
    } catch (ex) {
        next(ex)
    }
}

const updateTodo = async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,
            {
                task: req.body.task,
                status: req.body.status
            }
            , { new: true });

        if (!todo) return res.status(404).send('The task with the given ID was not found.');

        res.send({
            _id: todo._id,
            task: todo.task,
            status: todo.status
        })
    } catch (ex) {
        next(ex)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        if (!todo) return res.status(404).send('The todo with the given ID was not found');
        res.send({
            _id: todo._id,
            task: todo.task,
            status: todo.status
        })
    } catch (ex) {
        next(ex)
    }
}

const deleteAllTodos = async (req, res, next) => {
    try {
        const todo = await Todo.deleteMany({});;
        res.send(todo)
    } catch (ex) {
        next(ex)
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    getPendingTodos,
    getDoneTodos,
    updateTodo,
    deleteTodo,
    deleteAllTodos
};