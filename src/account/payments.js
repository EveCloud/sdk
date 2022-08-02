const { request, APIError } = require('../request')

/**
 * Get the current user's account payment methods
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.PaymentMethods
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.PaymentMethodDetails
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.PaymentMethodMakeDefault
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
 * @link Not documented
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.PaymentMethodDelete
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

/**
 * Get Stripe Public Key
 * @link Not documented
 * @private Manager Endpoint only
 * @returns {Promise<String>} Stripe Public Key
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