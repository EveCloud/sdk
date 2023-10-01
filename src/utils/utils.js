const { request, APIError } = require('../request')

/**
 * @name getPlans
 * @description Get Plans
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/api#tag/Utils/operation/Utils.Plans
 * @returns {Promise<Object>} Plans
 */
function getPlans () {
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
 * @link https://docs.evecloud.xyz/reference/api#tag/Utils/operation/Utils.Instances
 * @returns {Promise<Object>} Instances
 */
function getInstances () {
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
 * @link https://docs.evecloud.xyz/reference/api#tag/Utils/operation/Utils.Regions
 * @returns {Promise<Object>} Regions
 */
function getRegions () {
  return new Promise((resolve, reject) => {
    request.get('/regions').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  getRegions,
  getPlans,
  getInstances
}
