const { request, APIError } = require('../request')

/**
 * @name create
 * @description Create two-factor authentication token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/TwoFactor.Create
 * @returns {Promise<String>} Success message
 */
async function create () {
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
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/TwoFactor.Enable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<String>} Success message
 */
async function enable (code) {
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
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/TwoFactor.Disable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<String>} Success message
 */
async function disable (code) {
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
