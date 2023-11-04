const { request, APIError } = require('../request')

/**
 * @name create
 * @description Create two-factor authentication token
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/create
 * @returns {Promise<String>} Success message
 */
function create () {
  return new Promise((resolve, reject) => {
    request.post('/v1/account/two-factor').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name enable
 * @description Enable two-factor authentication
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/enable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<Array>} Recovery codes
 */
function enable (code) {
  return new Promise((resolve, reject) => {
    request.put('/v1/account/two-factor', {
      code
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name disable
 * @description Disable two-factor authentication
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/disable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<String>} Success message
 */
function disable (code) {
  return new Promise((resolve, reject) => {
    request.delete('/v1/account/two-factor', {
      code
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  create,
  enable,
  disable
}
