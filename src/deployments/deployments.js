const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get deployments
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.List
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Deployments
 */
async function list (id, service, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments`, {
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
 * @description Get deployment
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.Get
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Deployments
 */
async function get (id, service, deployment, workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments/${deployment}`, {
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
 * @name cancel
 * @description Cancel deployment
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.Cancel
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Deployments
 */
async function cancel (id, service, deployment, workspaceID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${id}/services/${service}/deployments/${deployment}`, {
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
  cancel
}
