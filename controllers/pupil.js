const PupilService = require('../service/pupil')
const ApiError = require('../exceptions/api-error');
const groupPupilService = require('../service/group-pupil');
const pupilService = require('../service/pupil');
const pupilParentService = require('../service/pupil-parent');
const pupilMailService = require('../service/pupil-mail');

class PupilController {

    async getAll(req, res, next) {
        try {
            const pupils = await PupilService.getAll()
            res.send(pupils)
        } catch (e) {
            next(e);
        }
    }

    async getByGroupId(req, res, next) {
        try {
            const { groupId } = req.params
            const pupilsIds = await groupPupilService.getPupilsIdsByGroupId(groupId)
            const pupils = await pupilService.getByIds(pupilsIds)
            res.send(pupils)
        } catch (e) {
            next(e)
        }
    }

    async getPupilById(req, res, next) {
        try {
            const { pupilId } = req.params
            const pupil = await pupilService.getById(pupilId)
            const parents = await pupilParentService.getByPupilId(pupilId)
            const mails = await pupilMailService.getByPupilId(pupilId)

            pupil.parents = parents
            pupil.mails = mails

            res.send(pupil)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new PupilController();