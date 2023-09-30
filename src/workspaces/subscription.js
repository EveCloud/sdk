const { request, APIError } = require('../request')

/**
 * @name get
 * @description Get workspace subscription
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Subscription.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Subscription object
 */
async function get (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/subscription`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update workspace subscription
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Subscription.Update
 * @param {String} id Workspace ID
 * @param {Boolean} confirm Confirm subscription
 * @returns {Promise<Object>} Success message
 */
async function update (id, confirm) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/workspaces/${id}/subscription`, {
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
