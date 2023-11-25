const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/view
 * @returns {Promise<Object>} User object
 */
function get () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name findOneAndUpdate
 * @description Update the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User object
 */
function update (data) {
  return new Promise((resolve, reject) => {
    request.put('/v1/account', data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Delete the current user's account
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/delete
 * @returns {Promise<String>} Success message
 */
function remove () {
  return new Promise((resolve, reject) => {
    request.delete('/v1/account').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  get,
  update,
  remove
}
