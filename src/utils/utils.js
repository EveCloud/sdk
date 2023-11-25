const { request, APIError } = require('../request')

/**
 * @name plans
 * @description Get Plans
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/api/utils/plans
 * @returns {Promise<Object>} Plans
 */
function plans () {
  return new Promise((resolve, reject) => {
    request.get('/plans').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name instances
 * @description Get Instances
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/api/utils/instances
 * @param {String} params Parameters
 * @returns {Promise<Object>} Instances
 */
function instances (params) {
  return new Promise((resolve, reject) => {
    request.get('/instances', {
      params: params || {}
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name regions
 * @description Get Regions
 * @namespace Utils
 * @link https://docs.evecloud.xyz/reference/api/utils/regions
 * @returns {Promise<Object>} Regions
 */
function regions (params) {
  return new Promise((resolve, reject) => {
    request.get('/regions', {
      params: params || {}
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  plans,
  instances,
  regions
}
