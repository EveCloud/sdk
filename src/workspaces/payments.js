const { request, APIError } = require('../request')

/**
 * Get the workspace payment methods
 * @returns {Promise<Object>} Payment Method List object
 */
async function list(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/payment-methods`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get payment method details
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Payment Method object
 */
async function get(id, paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/payment-methods/${paymentID}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Make Payment Method Default
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<String>} Message
 */
async function makeDefault(id, paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/workspaces/${id}/payment-methods/${paymentID}/make-default`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Add a new payment method
 * @private Manager Endpoint only
 * @returns {Promise<String>} Client Secret
 */
async function add(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/workspaces/${id}/payment-methods`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete a payment method
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<String>} Message
 */
async function remove(id, paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/workspaces/${id}/payment-methods/` + paymentID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    list,
    get,
    makeDefault,
    add,
    remove
}