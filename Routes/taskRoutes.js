const express = require('express');

const taskController = require('../Controllers/taskController');
const router = express.Router();

router.get('/', taskController.getTasks);

router.post('/', taskController.createTask);

router.put('/', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;