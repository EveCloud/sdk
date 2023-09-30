const { request, APIError } = require('../request')

/**
 * @name list
 * @description Get domains
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Domains
 */
async function list (projectID, workspaceID, params) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/domains`, {
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
 * @description Get domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.Get
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Domain
 */
async function get (projectID, workspaceID, domainID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/domains/${domainID}`, {
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
 * @name refresh
 * @description Verify domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.Refresh
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Success message
 */
async function refresh (projectID, workspaceID, domainID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/projects/${projectID}/domains/${domainID}/refresh`, {
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
 * @description Create domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.Create
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domain Domain
 * @param {String} service Service ID
 * @returns {Promise<Object>} Success message
 */
async function create (projectID, workspaceID, domain, service) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/projects/${projectID}/domains`, {
      params: {
        workspaceID
      }
    }, {
      domain,
      service
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name update
 * @description Update domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.Update
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success message
 */
async function update (projectID, workspaceID, domainID, serviceID) {
  return new Promise((resolve, reject) => {
    request.put(`/v1/projects/${projectID}/domains/${domainID}`, {
      params: {
        workspaceID
      }
    }, {
      service: serviceID
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Domains.Remove
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Success message
 */
async function remove (projectID, workspaceID, domainID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/projects/${projectID}/domains/${domainID}`, {
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
  refresh,
  create,
  update,
  remove
}
