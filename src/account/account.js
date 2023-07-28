const { request, APIError } = require('../request')

/**
 * @name getInfo
 * @description Get the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Account.Get
 * @namespace Account
 * @returns {Promise<Object>} User object
 */
async function getInfo () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name updateInfo
 * @description Update the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Account.Update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User object
 */
async function updateInfo (data) {
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
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Account.Delete
 * @namespace Account
 * @param {String} confirm Confirm account deletion
 * @returns {Promise<Object>} Success message
 */
async function remove (confirm) {
  return new Promise((resolve, reject) => {
    request.get('/v1/account', {
      data: {
        confirm
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name getPreferences
 * @description Get the current user's account preferences
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Preferences.Get
 * @returns {Promise<Object>} User preferences object
 */
async function getPreferences () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/preferences').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name updatePreferences
 * @description Update the current user's account preferences
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Preferences.Update
 * @param {Object} data Information to update
 * @returns {Promise<String>} Message.
 */
async function updatePreferences (data) {
  return new Promise((resolve, reject) => {
    request.put('/v1/account/preferences', data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  getInfo,
  updateInfo,
  remove,
  getPreferences,
  updatePreferences
}
