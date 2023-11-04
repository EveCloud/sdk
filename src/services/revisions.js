const { request, APIError } = require('../request')

/**
 * @name list
 * @description List service revisions
 * @namespace Services
 * @link https://docs.evecloud.xyz/api/services/revisions/list
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} params Query parameters
 * @returns {Promise<Object>} Revisions
 */
function list (projectID, serviceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/services/${serviceID}/revisions`, {
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

module.exports = {
  list
}
