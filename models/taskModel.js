const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 5
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        required: true,
        ref: 'Category'
    }
}, {timestamps: true})


module.exports = mongoose.model('Task', taskSchema);