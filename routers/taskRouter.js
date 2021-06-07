const express = require('express');
const {
    // route POST: /create 
    createTask,

    // route PUT: /update
    updateTask,

    // route DELETE: /delete
    deleteTask,

    // route PARAM:
    taskId,

    // route GET; /all
    allTasks
} = require('./../controllers/taskController')


const router = express.Router();


router.get('/all', allTasks);
router.post('/create', createTask);
router.put('/update/:taskId', updateTask);
router.delete('delete/:taskId', deleteTask);

router.param('taskId', taskId);

module.exports = router;