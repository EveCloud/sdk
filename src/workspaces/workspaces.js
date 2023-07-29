const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.List
 * @returns {Promise<Object>} Workspaces
 */
async function list () {
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
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace
 */
async function get (id) {
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
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Create
 * @param {String} data Workspace data
 * @returns {Promise<Object>} Success Message
 */
async function create (data) {
  return new Promise((resolve, reject) => {
    request.post('/v1/workspaces', data).then(response => {
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
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Update
 * @param {String} id Workspace ID
 * @param {String} data Workspace data
 * @returns {Promise<Object>} Success Message
 */
async function update (id, data) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/workspaces/${id}`, data).then(response => {
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
  update
}
