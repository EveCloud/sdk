const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get your authentication events from the last 30 days.
 * @namespace Security
 * @link https://docs.evecloud.xyz/api/account/security/events
 * @param {String} params Parameters
 * @returns {Promise<Object>} Authentication events
 */
function listEvents (params) {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/security/events', {
      params: params || {}
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  events: {
    list: listEvents
  }
}
