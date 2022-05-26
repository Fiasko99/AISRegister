const Router = require("express").Router;
const PayrollController = require('../controllers/payroll');
const roleMiddleware = require('../middlewares/role')
const groupAffiliationMiddleware = require('../middlewares/group-affiliation')
const existMonth = require('../middlewares/exist-month')

const router = new Router()

router.get('/group/:monthName/:groupId', 
    roleMiddleware(['administrator', 'teacher']), 
    existMonth,
    groupAffiliationMiddleware,
    PayrollController.getByGroupId);

module.exports = router