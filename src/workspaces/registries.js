const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces registries
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Registries
 */
function list (workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/registries`).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/view
 * @param {String} workspaceID Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Registry
 */
function get (workspaceID, registryID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/registries/${registryID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name add
 * @description Add Registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/add
 * @param {String} workspaceID Workspace ID
 * @param {Object} data Registry Data
 * @returns {Promise<Object>} Success Message
 */
function add (workspaceID, data) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${workspaceID}/registries`, {
      data
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove Registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/remove
 * @param {String} workspaceID Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Success Message
 */
function remove (workspaceID, registryID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${workspaceID}/registries/${registryID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  list,
  get,
  add,
  remove
}
