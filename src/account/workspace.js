const { request, APIError } = require('../request')

/**
 * Get the current workspace's
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
 * Update the current workspace's
 * @private For dashboard use only
 * @param {String} id Workspace ID
 * @returns {Promise<String>} Message.
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
 * Get all workspaces
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspace object
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
