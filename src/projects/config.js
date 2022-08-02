const { request, APIError } = require('../request')

/**
 * Get Project Envoirment Variables
 * @param {String} id 
 * @returns {Promise}
 */
async function getConfig(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/config`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update Project Envoirment Variables
 * @param {String} id 
 * @param {String} key 
 * @param {String} value 
 * @returns 
 */
async function updateConfig(id, key, value) {
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