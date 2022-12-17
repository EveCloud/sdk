const { request, APIError } = require('../request')

/**
 * Get Stripe Public Key
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
    getStripePublicKey
}