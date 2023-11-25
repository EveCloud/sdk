const { request, APIError } = require('../request')

/**
 * @name list
 * @description List project services
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/list
 * @param {String} projectID Project ID
 * @param {String} params Query parameters
 * @returns {Promise<Object>} Services
 */
function list (projectID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/services`, {
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
 * @name create
 * @description Create project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/create
 * @param {String} projectID Project ID
 * @param {Object} data Service data
 * @returns {Promise<Object>} Success Message
 */
function create (projectID, data) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/services`, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/view
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Service
 */
function get (projectID, serviceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/services/${serviceID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/update
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {Object} data Service data
 * @returns {Promise<Object>} Success Message
 */
function update (projectID, serviceID, data) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/services/${serviceID}`, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name pause
 * @description Pause project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/pause
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success Message
 */
function pause (projectID, serviceID) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/services/${serviceID}/pause`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name resume
 * @description Resume project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/resume
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success Message
 */
function resume (projectID, serviceID) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/services/${serviceID}/resume`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name redeploy
 * @description Redeploy project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Redeploy
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
function redeploy (projectID, serviceID, workspaceID) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/services/${serviceID}/redeploy`, {
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
 * @description Remove project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Delete
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
function remove (projectID, serviceID, confirm, workspaceID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${projectID}/services/${serviceID}`, {
      params: {
        workspaceID
      }
    }, {
      data: {
        confirm
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
  redeploy,
  remove,
  pause,
  resume
}
