const { request, APIError } = require('../request')

/**
 * Ger the current user's account invoices
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoice List object
 */
async function getInvoices(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/invoices`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account invoice
 * @param {String} id Workspace ID
 * @param {String} invoiceID Invoice ID
 * @returns {Promise<Object>} Invoice object
 */
async function getInvoice(id, invoiceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/invoices/` + invoiceID).then(response => {
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