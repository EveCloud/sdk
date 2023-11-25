const { request, APIError } = require('../../request')

/**
 * @name list
 * @description Get GitHub repositories
 * @namespace Integrations
 * @link https://docs.evecloud.xyz/reference/api/account/integrations/github/repositories
 * @returns {Promise<Object>} GitHub repositories
 */
function listRepositories () {
  return new Promise((resolve, reject) => {
    request.get('/v1/account/integrations/github/repositories').then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name connect
 * @description Connect GitHub to your account
 * @namespace Integrations
 * @link https://docs.evecloud.xyz/reference/api/account/integrations/github/connect
 * @param {String} code The code returned from GitHub
 * @param {String} installationId The installation ID returned from GitHub
 * @returns {Promise<String>} Success message
 */
function connect (code, installationId) {
  return new Promise((resolve, reject) => {
    request.post('/v1/account/integrations/github/connect', {
      code,
      installationId
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  repositories: {
    list: listRepositories
  },
  connect
}
