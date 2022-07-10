const { request, APIError } = require('../request');

async function getAccountInvoices() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/invoices`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getInvoiceData(invoiceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/invoices/` + invoiceID).then(response => {
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