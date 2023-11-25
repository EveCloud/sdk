const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get account tokens
 * @namespace Tokens
 * @link https://docs.evecloud.xyz/reference/api/account/tokens/list
 * @param {String} params Parameters
 * @returns {Promise<Object>} Tokens
 */
function list (params) {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/tokens', {
      params: params || {}
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get account token
 * @namespace Tokens
 * @link https://docs.evecloud.xyz/reference/api/account/tokens/view
 * @param {String} tokenID Token ID
 * @returns {Promise<Object>} Token
 */
function get (tokenID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/account/tokens/${tokenID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name create
 * @description Create account token
 * @namespace Token
 * @link https://docs.evecloud.xyz/reference/api/account/tokens/create
 * @param {String} label Token label
 * @param {String} expiration Token expiration
 * @returns {Promise<String>} Success message
 */
function create (label, expiration) {
  return new Promise((resolve, reject) => {
    request.post('/v1/account/tokens', {
      label,
      expiration
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove account token
 * @namespace Token
 * @link https://docs.evecloud.xyz/reference/api/account/tokens/delete
 * @param {String} tokenID Token ID
 * @returns {Promise<String>} Success message
 */
function remove (tokenID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/account/tokens/${tokenID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  list,
  get,
  create,
  remove
}
