const express = require('express');

const projectController = require('../Controllers/projectController');
const router = express.Router();

router.get('/:id', projectController.getProject);

router.get('/', projectController.getProjects);

router.post('/', projectController.createProject);

router.put('/', projectController.updateProject);

router.delete('/:id', projectController.deleteProject);

module.exports = router;