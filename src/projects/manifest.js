const { request, APIError } = require('../request')

/**
 * Get Manifest
 * @param {String} projectID Project ID
 * @returns {Promise<Object>} Manifest Object
 */
async function getManifest(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/manifest`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update Manifest
 * @param {String} projectID Project ID
 * @param {Object} manifest Manifest Object
 * @returns {Promise<Object>} Manifest Object
 */
async function updateManifest(projectID, manifest) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${projectID}/manifest`, manifest).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getManifest,
    updateManifest
}