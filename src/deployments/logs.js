const { request, APIError } = require('../request')

/**
 * @name build
 * @description Get deployment build logs
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Deployments/operation/Logs.Build
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Logs
 */
async function build (id, service, deployment, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments/${deployment}/logs/build`, {
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
 * @name runtime
 * @description Get deployment runtime logs
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Deployments/operation/Logs.Runtime
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} instanceID Instance ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Logs
 */
async function runtime (id, service, deployment, instanceID, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${id}/services/${service}/deployments/${deployment}/logs/runtime`, {
      params: {
        workspaceID,
        instanceID,
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
  build,
  runtime
}
