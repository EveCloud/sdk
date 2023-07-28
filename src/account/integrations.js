const { request, APIError } = require('../request')

/**
 * @name getGitHubRepositories
 * @description Get GitHub repositories
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Integrations.GitHub.Repositories
 * @returns {Promise<Object>} GitHub repositories
 */
async function getGitHubRepositories() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/integrations/github/repositories`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * @name connectGitHub
 * @description Connect GitHub to your account
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Integrations.GitHub.Connect
 * @param {String} code The code returned from GitHub
 * @param {String} installationId The installation ID returned from GitHub
 * @returns {Promise<String>} Success message
 */
async function connectGitHub(code, installationId) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/integrations/github/connect`, {
            code: code,
            installationId: installationId
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getGitHubRepositories,
    connectGitHub
}