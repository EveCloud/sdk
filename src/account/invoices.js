const { request, APIError } = require('../request');

async function getAccountInvoices(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account/invoices`, {
            params: params || {}
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getInvoiceData(invoiceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account/invoices/` + invoiceID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountInvoices,
    getInvoiceData
}