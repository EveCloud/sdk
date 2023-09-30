const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces registries
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Registries
 */
async function list (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/registries`).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Get
 * @param {String} id Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Registry
 */
async function get (id, registryID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/registries/${registryID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name add
 * @description Add Registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Add
 * @param {String} id Workspace ID
 * @param {Object} data Registry Data
 * @returns {Promise<Object>} Success Message
 */
async function add (id, data) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${id}/registries`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove Registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Add
 * @param {String} id Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Success Message
 */
async function remove (id, registryID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${id}/registries/${registryID}`).then(response => {
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
