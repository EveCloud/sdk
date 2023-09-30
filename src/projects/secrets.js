const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get project secrets
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Secrets
 */
async function list (projectID, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/secrets`, {
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
 * @description Get project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Get
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Secret
 */
async function get (projectID, workspaceID, secretID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/secrets/${secretID}`, {
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
 * @description Create project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Create
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} key Secret key
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
async function create (projectID, workspaceID, key, value) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/secrets`, {
      params: {
        workspaceID
      }
    }, {
      key,
      value
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Update
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
async function update (projectID, workspaceID, secretID, value) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/secrets/${secretID}`, {
      params: {
        workspaceID
      }
    }, {
      value
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Delete project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Delete
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Success message
 */
async function remove (projectID, workspaceID, secretID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${projectID}/secrets/${secretID}`, {
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
