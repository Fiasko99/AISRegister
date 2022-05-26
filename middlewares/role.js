const ApiError = require('../exceptions/api-error');

module.exports = (accessRoles) => {
    return function (req, res, next) {
        try {
            if (!accessRoles.includes(req.user.role)) {
                return next(ApiError.AccessDenied());
            }
    
            next();
        } catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    };
}