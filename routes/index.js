const HomeController = require ("../controllers/Home")
const tasksRoute = require("./tasks");
const studentsRoute = require("./students");
const router = require('express').Router();

router.get('/', HomeController.home)
router.use('/tasks', tasksRoute)
router.use('/students', studentsRoute);

module.exports = router;
