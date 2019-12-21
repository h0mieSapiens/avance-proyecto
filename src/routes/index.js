const express = require('express');
const router = express.Router();
const Task = require("../models/task");



router.get('/', async (req, res) => {
    const tasks = await Task.find();

    res.render('index.ejs', {
        tasks

    });
});

router.post('/add', async (req, res) => {

    const task = new Task(req.body);


    await task.save();


    res.redirect('/');


});

router.get('/Todo', (req, res) => {

    res.render('todo.html');
});
router.get('/turn/:id', async (req, res, next) => {
    let {
        id
    } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.render('edit', {
        task
    });
});

router.post('/edit/:id', async (req, res, next) => {
    const {
        id
    } = req.params;
    await Task.update({
        _id: id
    }, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const {
        id
    } = req.params;
    await Task.remove({
        id: id
    });
    res.redirect('/');


});


module.exports = router;
console.log("routes registered");