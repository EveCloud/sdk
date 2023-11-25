const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get the current user's account preferences
 * @namespace Preferences
 * @link https://docs.evecloud.xyz/reference/api/account/preferences/view
 * @returns {Promise<Object>} User preferences object
 */
function get () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/preferences').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update the current user's account preferences
 * @namespace Preferences
 * @link https://docs.evecloud.xyz/reference/api/account/preferences/update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User preferences object
 */
function update (data) {
  return new Promise((resolve, reject) => {
    request.put('/v1/account/preferences', data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  get,
  update
}
