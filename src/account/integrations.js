const { request, APIError } = require('../request')

/**
 * Get github repositories
 * @returns {Promise<Object>} The github repositories
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

module.exports = {
    getGitHubRepos
}