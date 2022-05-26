const Router = require("express").Router;
const TeacherController = require('../controllers/teacher');
const { body } = require('express-validator');
const roleMiddleware = require("../middlewares/role");
const tokenMiddleware = require("../middlewares/token");

const router = new Router()

router.post('/registration',
    body('login').isLength({min: 3, max: 32}),
    body('password').isLength({min: 3, max: 32}),
    body('firstname').notEmpty(),
    body('name').notEmpty(),
    body('lastname').notEmpty(),
    body('work_phone').notEmpty(),
    tokenMiddleware,
    roleMiddleware(['administrator']),
    TeacherController.registration
);
router.post('/login', 
    body('login').isLength({min: 3, max: 32}),
    body('password').isLength({min: 3, max: 32}),
    TeacherController.logIn);
router.get('/refresh', TeacherController.refresh);
router.get('/logout', TeacherController.logout);

module.exports = router