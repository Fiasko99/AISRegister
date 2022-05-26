const Router = require("express").Router;
const PupilController = require('../controllers/pupil');
const roleMiddleware = require('../middlewares/role')
const groupAffiliationMiddleware = require('../middlewares/group-affiliation')
const pupilAffiliationMiddleware = require('../middlewares/pupil-affiliation')

const router = new Router()

router.get('/all', roleMiddleware(['administrator']), PupilController.getAll);
router.get('/group/:groupId', 
    roleMiddleware(['administrator', 'teacher']), 
    groupAffiliationMiddleware,
    PupilController.getByGroupId)
router.get('/pupil/:pupilId', 
    roleMiddleware(['administrator', 'teacher']), 
    pupilAffiliationMiddleware,
    PupilController.getPupilById)

module.exports = router