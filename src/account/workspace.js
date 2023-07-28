const { request, APIError } = require('../request')

/**
 * @name getCurrent
 * @description Get current workspace
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspace object
 */
async function getCurrent () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/workspace').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name updateCurrent
 * @description Update current workspace
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspace object
 */
async function updateCurrent (id) {
  return new Promise((resolve, reject) => {
    request.post('/v1/account/workspace', { id }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name getAll
 * @description Get all workspaces
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspaces
 */
async function getAll () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/workspaces').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  getCurrent,
  updateCurrent,
  getAll
}
