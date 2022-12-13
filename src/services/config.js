const { request, APIError } = require('../request')

/**
 * Get Config
 * @param {String} id Project ID
 * @returns {String} service Service ID
 * @returns {Promise<Object>} Manifest Object
 */
async function getConfig(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/config`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update Config
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {Object} config Config Object
 * @returns {Promise<Object>} Manifest Object
 */
async function updateConfig(id, service, config) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/services/${service}/config`, config).then(response => {
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