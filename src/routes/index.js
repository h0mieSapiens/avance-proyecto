const express = require('express');
const router = express.Router();
const Task = require("../models/task");



router.get('/', (req, res) => {

    res.render('index.ejs');
});

router.post('/add', async (req, res) => {
   
    const task=new Task(req.body);
    await task.save();

    res.send("recivido");


});

router.get('/Todo', (req, res) => {

    res.render('todo.html');
});

module.exports = router;
console.log("routes registered");