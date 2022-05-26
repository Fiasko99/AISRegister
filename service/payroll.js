const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class ContractService {
    
    async getAllByContractId(contractId, monthName) {
        const payrolls = await db.Payrolls.findAll({
            where: { contract_id: contractId },
            raw: true
        })
        return payrolls
    }
}

module.exports = new ContractService();