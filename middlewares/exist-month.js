const ApiError = require('../exceptions/api-error');
const monthService = require('../service/month');

module.exports = async function (req, res, next) {
    try {
        const { monthName } = req.params
        
        if (!monthName) {
            return next(ApiError.BadRequest('Параметр месяца отсутствует'));
        }

        const existMonth = await monthService.existMonth(monthName)

        if (!existMonth) {
            next(ApiError.BadRequest('Такого месяца не существует'))
        }

        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};