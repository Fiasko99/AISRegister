const groupPupilService = require('../service/group-pupil')
const contractService = require('../service/contract')
const pupilService = require('../service/pupil')
const payrollService = require('../service/payroll')
const ApiError = require('../exceptions/api-error');

class AttendanceController {

    async getByGroupId(req, res, next) {
        try {
            const { groupId, monthName } = req.params
            const pupilsIds = await groupPupilService.getPupilsIdsByGroupId(groupId) 
            const contracts = await Promise.all(pupilsIds.map(async pupilId => {
                const contract = await contractService.getByPupilId(pupilId, groupId)
                const payrolls = await payrollService.getAllByContractId(contract.id, monthName)
                const pupil = await pupilService.getById(pupilId)
                return { ...pupil, payrolls }
            }))           
            res.send(contracts)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new AttendanceController();