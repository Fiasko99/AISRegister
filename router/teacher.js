const Router = require("express").Router;
const TeacherController = require('../controllers/teacher');
const roleMiddleware = require('../middlewares/role')

const router = new Router()

router.get('/all', roleMiddleware(['administrator']), TeacherController.getAll);
router.get('/shedule', roleMiddleware(['administrator', 'teacher']), TeacherController.getShedule);
router.get('/courses', roleMiddleware(['administrator', 'teacher']), TeacherController.getCourses);

module.exports = router