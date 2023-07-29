const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get workpace usage
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Usage.Get
 * @param {String} id Workspace ID
 * @param {String} month Month
 * @param {String} year Year
 * @returns {Promise<Object>} Usage
 */
async function get (id, month, year) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/usage`, {
      params: {
        month,
        year
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  get
}
