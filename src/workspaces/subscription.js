const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get workspace subscription
 * @namespace Subscription
 * @link https://docs.evecloud.xyz/api/workspaces/subscription/view
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Subscription object
 */
function get (workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/subscription`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update workspace subscription
 * @namespace Subscription
 * @link https://docs.evecloud.xyz/api/workspaces/subscription/update
 * @param {String} workspaceID Workspace ID
 * @param {Boolean} confirm Confirm subscription
 * @returns {Promise<Object>} Success message
 */
function update (workspaceID, confirm) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/workspaces/${workspaceID}/subscription`, {
      confirm
    }).then(response => {
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
