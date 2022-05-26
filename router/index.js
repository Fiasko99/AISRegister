const Router = require('express').Router;
const authRouter = require('./auth')
const pupilRouter = require('./pupil')
const teacherRouter = require('./teacher')
const attendanceRouter = require('./attendance')
const payrollRouter = require('./payroll')
const tokenMiddleware = require('../middlewares/token');

const router = new Router();

router.use('/auth', authRouter)
router.use('/pupils', tokenMiddleware, pupilRouter)
router.use('/teachers', tokenMiddleware, teacherRouter)
router.use('/attendances', tokenMiddleware, attendanceRouter)
router.use('/payrolls', tokenMiddleware, payrollRouter)

module.exports = router