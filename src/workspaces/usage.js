const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get workpace usage
 * @namespace Usage
 * @link https://docs.evecloud.xyz/reference/api/workspaces/usage/view
 * @param {String} workspaceID Workspace ID
 * @param {String} month Month
 * @param {String} year Year
 * @returns {Promise<Object>} Usage
 */
function get (workspaceID, month, year) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/usage`, {
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
