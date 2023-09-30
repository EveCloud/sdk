const { request, APIError } = require('../request')

/**
 * @name list
 * @description List deployment instances
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Instances.List
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Instances
 */
async function list (id, service, deployment, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments/${deployment}/instances`, {
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
 * @description Get deployment instance
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Instances.Get
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} instance Instance ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Instance
 */
async function get (id, service, deployment, instance, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments/${deployment}/instances/${instance}`, {
      params: {
        workspaceID,
        ...params
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
  get
}
