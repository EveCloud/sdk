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

/**
 * Get Workers
 * @returns {Promise<String>} Workers
 */
async function getWorkers() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/workers`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get Builders
 * @returns {Promise<String>} Builders
 */
async function getWorkers() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/builders`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get Stats
 * @returns {Promise<String>} Stats
 */
async function getStats() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/builds`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getStripePublicKey,
    getWorkers,
    getBuilders,
    getStats
}