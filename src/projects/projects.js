const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get projects
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Projects.List
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Projects
 */
async function list (workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get('/v1/projects', {
      params: {
        workspaceID,
        ...params
      }
    }).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Projects.Get
 * @param {String} id Project ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project
 */
async function get (id, workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}`, {
      params: {
        workspaceID
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name create
 * @description Create project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Projects.Create
 * @param {String} workspaceID Workspace ID
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
async function create (workspaceID, data) {
  return new Promise((resolve, reject) => {
    request.post('/v1/projects/', data, {
      params: {
        workspaceID
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Projects.Update
 * @param {String} id Project ID
 * @param {Object} data Project data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project
 */
async function update (id, data, workspaceID) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${id}`, data, {
      params: {
        workspaceID
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Projects.Delete
 * @param {String} id Project ID
 * @param {Boolean} confirm Confirm removal
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success message
 */
async function remove (id, confirm, workspaceID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${id}`, {
      confirm
    }, {
      params: {
        workspaceID
      }
    }).then(response => {
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
  remove
}
