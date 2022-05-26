const Router = require("express").Router;
const AttendanceController = require('../controllers/attendance');
const roleMiddleware = require('../middlewares/role')
const groupAffiliationMiddleware = require('../middlewares/group-affiliation')
const pupilAffiliationMiddleware = require('../middlewares/pupil-affiliation')
const existMonth = require('../middlewares/exist-month')

const router = new Router()

router.get('/group/:monthName/:groupId', 
    roleMiddleware(['administrator', 'teacher']), 
    existMonth,
    groupAffiliationMiddleware,
    AttendanceController.getByGroupId);

router.get('/pupil/:pupilId/:monthName', 
    roleMiddleware(['administrator', 'teacher']), 
    existMonth,
    pupilAffiliationMiddleware,
    AttendanceController.getByPupilId);

module.exports = router