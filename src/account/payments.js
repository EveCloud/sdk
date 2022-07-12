const { request, APIError } = require('../request');

async function getPaymentMethods() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getPaymentMethod(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function makePaymentMethodDefault(paymentId) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/payment-methods/${paymentId}/make-default`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function addPaymentMethod() {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/payment-methods`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deletePaymentMethod(paymentId) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/payment-methods/` + paymentId).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

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