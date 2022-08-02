const { request, APIError } = require('../request')

/**
 * Get the current user's account payment methods
 * @returns {Promise}
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
 * @param {String} id 
 * @returns {Promise}
 */
async function getPaymentMethod(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Make Payment Method Default
 * @param {String} paymentId 
 * @returns {Promise}
 */
async function makePaymentMethodDefault(paymentId) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/payment-methods/${paymentId}/make-default`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Add a new payment method
 * @private Manager Endpoint only
 * @returns {Promise}
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
 * @param {String} paymentId 
 * @returns {Promise}
 */
async function deletePaymentMethod(paymentId) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/payment-methods/` + paymentId).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get Stripe Public Key
 * @private Manager Endpoint only
 * @returns {Promise}
 */
async function getStripePublicKey() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/payments/stripe/public-key`).then(response => {
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
    getStripePublicKey,
    deletePaymentMethod,
    makePaymentMethodDefault
}