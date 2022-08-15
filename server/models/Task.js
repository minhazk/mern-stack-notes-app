const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    subTasks: {
        type: [subTaskSchema],
    },
});

module.exports = mongoose.model('Task', taskSchema);
