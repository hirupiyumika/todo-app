const mongoose = require('mongoose')
const Joi = require('joi')


const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 5000
    },
    status:{
        type: String,
        lowercase: true,
        enum: ['pending', 'done'],
        default: 'pending',
        trim: true
    }
},{timestamps: true})

const Todo = mongoose.model('Todo', todoSchema)

function validateTodo(todo){
    const schema = Joi.object({
        task : Joi.string().min(1).max(5000).required(),
        status: Joi.string().valid('pending', 'done')
    })
    return schema.validate(todo);
}

exports.Todo = Todo;
exports.validate = validateTodo;