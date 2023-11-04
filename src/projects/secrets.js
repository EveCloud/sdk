const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get project secrets
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/api/projects/secrets/list
 * @param {String} projectID Project ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Secrets
 */
function list (projectID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/secrets`, {
      params: {
        ...params
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/api/projects/secrets/view
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Secret
 */
function get (projectID, secretID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/secrets/${secretID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name create
 * @description Create project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/api/projects/secrets/create
 * @param {String} projectID Project ID
 * @param {String} key Secret key
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
function create (projectID, key, value) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/secrets`, {
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
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/api/projects/secrets/update
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
function update (projectID, secretID, value) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/secrets/${secretID}`, {
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
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/api/projects/secrets/delete
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Success message
 */
function remove (projectID, workspaceID, secretID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${projectID}/secrets/${secretID}`).then(response => {
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
