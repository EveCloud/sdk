const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get projects
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/list
 * @returns {Promise<Object>} Projects
 */
function list (params) {
  return new Promise((resolve, reject) => {
    request.get('/v1/projects', {
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
 * @description Get project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/view
 * @param {String} projectID Project ID
 * @returns {Promise<Object>} Project
 */
function get (projectID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}`).then(response => {
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
 * @link https://docs.evecloud.xyz/reference/api/projects/create
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
function create (data) {
  return new Promise((resolve, reject) => {
    request.post('/v1/projects/', data).then(response => {
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
 * @link https://docs.evecloud.xyz/reference/api/projects/update
 * @param {String} projectID Project ID
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
function update (projectID, data) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}`, data).then(response => {
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
 * @link https://docs.evecloud.xyz/reference/api/projects/delete
 * @param {String} projectID Project ID
 * @returns {Promise<Object>} Success message
 */
function remove (projectID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${projectID}`, {
      confirm
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
