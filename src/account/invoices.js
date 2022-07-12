const { request, APIError } = require('../request');

async function getInvoices() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/invoices`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getInvoice(invoiceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/invoices/` + invoiceID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getInvoices,
    getInvoice
}