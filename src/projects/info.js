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

/**
 * Get project logs
 * @param {String} id The ID of the project.
 * @param {String} since The time in seconds since the logs should be returned.
 * @param {String} until The time in seconds until the logs should be returned.
 * @param {String} timestamps Whether or not to include timestamps in the logs.
 * @param {String} tail The number of lines to return from the end of the log.
 * @returns {Promise<Object>} The project logs
 */
async function getLogs(id, since, until, timestamps, tail) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/logs`, {
            params: {
                since,
                until,
                timestamps,
                tail
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getResources,
    getWebSocket,
    getSftp,
    getLogs
}