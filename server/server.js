require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);
app.use(express.json());

const mongoose = require('mongoose');
const Task = require('./models/Task');
mongoose.connect(process.env.DATABASE_URL);

app.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/', async (req, res) => {
    const task = new Task({
        name: req.body.name,
        subTasks: req.body.subTasks,
    });
    await task.save();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
