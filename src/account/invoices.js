const { request, APIError } = require('../request')

/**
 * Ger the current user's account invoices
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Invoices
 * @returns {Promise<Object>} Invoice List object
 */
async function getInvoices() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/invoices`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account invoice
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Invoice_Details
 * @param {String} invoiceID Invoice ID
 * @returns {Promise<Object>} Invoice object
 */
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