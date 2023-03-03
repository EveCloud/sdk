const { request, APIError } = require('../request')

/**
 * Get the current user's account payment methods
 * @returns {Promise<Object>} Payment Method List object
 */
async function getPaymentMethods() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods`).then(response => {
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
async function getPaymentMethod(paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods/${paymentID}`).then(response => {
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
async function makePaymentMethodDefault(paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/payment-methods/${paymentID}/make-default`).then(response => {
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
async function addPaymentMethod() {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/payment-methods`).then(response => {
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
async function deletePaymentMethod(paymentID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/payment-methods/` + paymentID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getPaymentMethods,
    getPaymentMethod,
    addPaymentMethod,
    deletePaymentMethod,
    makePaymentMethodDefault
}