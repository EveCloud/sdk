const { request, APIError } = require('../request');

async function getAccountPaymentMethods() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/payment-methods`).then(response => {
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

module.exports = {
    getAccountPaymentMethods,
    addPaymentMethod,
}