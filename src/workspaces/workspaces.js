const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/list
 * @returns {Promise<Object>} Workspaces
 */
function list () {
  return new Promise((resolve, reject) => {
    request.get('/v1/workspaces').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/view
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace
 */
function get (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name create
 * @description Create a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/create
 * @param {String} name Workspace name
 * @returns {Promise<Object>} Success Message
 */
function create (name) {
  return new Promise((resolve, reject) => {
    request.post('/v1/workspaces', {
      name
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/update
 * @param {String} id Workspace ID
 * @param {String} data Workspace data
 * @returns {Promise<String>} Success Message
 */
function update (id, data) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/workspaces/${id}`, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/remove
 * @param {String} id Workspace ID
 * @returns {Promise<String>} Success Message
 */
function remove (id) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${id}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name leave
 * @description Leave a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api/workspaces/leave
 * @param {String} id Workspace ID
 * @returns {Promise<String>} Success Message
 */
function leave (id) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/workspaces/${id}/leave`).then(response => {
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
  remove,
  leave
}
