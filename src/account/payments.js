const { request, APIError } = require('../request');

async function makePayPalPayment(data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/payments/paypal`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    makePayPalPayment
}