const router = require('express').Router();
const TasksController = require('../controllers/tasks')

router.get('/', TasksController.getTasks);

module.exports = router;