const { request, APIError } = require('../request');

async function getAccountPayments(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/payments`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function makePayPalPayment(data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/payments/paypal`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function redeemGiftCode(code) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/payments/gift-code`, {
            code: code
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    makePayPalPayment,
    getAccountPayments,
    redeemGiftCode
}