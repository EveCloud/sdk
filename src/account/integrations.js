const { request, APIError } = require('../request')

/**
 * Get github repositories
 * @returns {Promise<Object>} The github repositories
 */
async function getGitHubRepos() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/integrations/github/repos`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getGitHubRepos
}