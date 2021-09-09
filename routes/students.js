const router = require('express').Router();
const StudentsController = require('../controllers/students');

router.get('/', StudentsController.getStudents);

module.exports = router;