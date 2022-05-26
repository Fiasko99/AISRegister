const { db } = require('../sequelize')

module.exports = async () => {
    const payrolls = []
    const contracts = 80
    const dates = ['01', '08', '15', '22', '29']
    for (let contractId = 1; contractId <= contracts; contractId++) {
        for (const date of dates) {
            const payroll = { pay_date: '2022-05-' + date, amount: 3000, contract_id: contractId.toString() }
            payrolls.push(payroll)
        }
    }
    for (const payroll of payrolls) {
        await db.Payrolls.create({ ...payroll })
    }
};