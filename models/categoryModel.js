const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 15,
        minLength: 2
    },
}, {timestamps: true})


module.exports = mongoose.model('Category', categorySchema);