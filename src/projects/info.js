const { request, APIError } = require('../request')

/**
 * Get project resources
 * @param {String} id The ID of the project. 
 * @returns {Promise<Object>} The project Resource Usage.
 */
async function getResources(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/resources`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project websocket
 * @param {String} id The ID of the project.
 * @returns {Promise<Object>} The project websocket
 */
async function getWebSocket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/websocket`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project sftp
 * @param {String} id The ID of the project.
 * @returns {Promise<Object>} The project sftp
 */
async function getSftp(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/sftp`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getResources,
    getWebSocket,
    getSftp
}