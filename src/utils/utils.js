const { request, APIError } = require('../request')

/**
 * @name getStripePublicKey
 * @description Get Stripe Public Key
 * @namespace Utils
 * @returns {Promise<Object>} Stripe Public Key
 */
async function getStripePublicKey () {
  return new Promise((resolve, reject) => {
    request.get('/v1/payments/stripe/public-key').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name getPlans
 * @description Get Plans
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Utils/operation/Utils.Plans
 * @returns {Promise<Object>} Plans
 */
async function getPlans () {
  return new Promise((resolve, reject) => {
    request.get('/plans').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name getInstances
 * @description Get Instances
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Utils/operation/Utils.Instances
 * @returns {Promise<Object>} Instances
 */
async function getInstances () {
  return new Promise((resolve, reject) => {
    request.get('/instances').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name getRegions
 * @description Get Regions
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Utils/operation/Utils.Regions
 * @returns {Promise<Object>} Regions
 */
async function getRegions () {
  return new Promise((resolve, reject) => {
    request.get('/regions').then(response => {
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
