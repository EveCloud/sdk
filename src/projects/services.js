const { request, APIError } = require('../request')

/**
 * @name list
 * @description List project services
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Query parameters
 * @returns {Promise<Object>} Services
 */
async function list (projectID, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/services`, {
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
 * @description Get project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Get
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Service
 */
async function get (projectID, serviceID, workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/services/${serviceID}`, {
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
 * @name redeploy
 * @description Redeploy project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Redeploy
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function redeploy (projectID, serviceID, workspaceID) {
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
 * @name create
 * @description Create project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Create
 * @param {String} projectID Project ID
 * @param {Object} data Service data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function create (projectID, data, workspaceID) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/services`, {
      params: {
        workspaceID
      }
    }, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Update
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {Object} data Service data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function update (projectID, serviceID, data, workspaceID) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/services/${serviceID}`, {
      params: {
        workspaceID
      }
    }, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name pause
 * @description Pause project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Pause
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function pause (projectID, serviceID, workspaceID) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/services/${serviceID}/pause`, {
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
 * @name resume
 * @description Resume project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Resume
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function resume (projectID, serviceID, workspaceID) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/services/${serviceID}/resume`, {
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
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Services.Delete
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
async function remove (projectID, serviceID, confirm, workspaceID) {
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
