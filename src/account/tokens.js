const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get account tokens
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Tokens.List
 * @param {String} params Parameters
 * @returns {Promise<Object>} Tokens
 */
async function list (params) {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/tokens', {
      params: params || {}
    }).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Tokens.Get
 * @param {String} id Token ID
 * @returns {Promise<Object>} Token
 */
async function get (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/account/tokens/${id}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name create
 * @description Create account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Tokens.Create
 * @param {String} label Token label
 * @param {String} expiration Token expiration
 * @returns {Promise<String>} Success message
 */
async function create (label, expiration) {
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
 * @name update
 * @description Update account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Tokens.Update
 * @param {String} id Token ID
 * @param {String} label Token label
 * @returns {Promise<String>} Success message
 */
async function update (id, label) {
  return new Promise((resolve, reject) => {
    request.put('/v1/account/tokens', {
      id,
      label
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
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Tokens.Delete
 * @param {String} id Token ID
 * @returns {Promise<String>} Success message
 */
async function remove (id) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/account/tokens/${id}`).then(response => {
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
  update,
  remove
}
