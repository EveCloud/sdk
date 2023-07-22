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
 * Get Plans
 * @returns {Promise<String>} Plans
 */
async function getPlans() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/plans`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


/**
 * Get Instances
 * @returns {Promise<String>} Instances
 */
async function getInstances() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/instances`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get Regions
 * @returns {Promise<String>} Regions
 */
async function getRegions() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/regions`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getStripePublicKey,
    getRegions,
    getPlans,
    getInstances
}