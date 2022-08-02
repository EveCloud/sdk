const { request, APIError } = require('../request')

/**
 * Get Project Envoirment Variables
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.ConfigGet
 * @param {String} projectID Project ID
 * @returns {Promise<Object>} Config object
 */
async function getConfig(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/config`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update Project Envoirment Variables
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.ConfigUpdate
 * @param {String} projectID Project ID
 * @param {String} key Environment variable key
 * @param {String} value Environment variable value
 * @returns {Promise<String>} Message
 */
async function updateConfig(projectID, key, value) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/config`, {
            key: key,
            value: value
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getConfig,
    updateConfig
}