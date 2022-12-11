const { request, APIError } = require('../request')

/**
 * Get project resources
 * @param {String} id The ID of the project. 
 * @param {String} service The service to get resources for.
 * @returns {Promise<Object>} The project Resource Usage.
 */
async function getResources(id, service, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/resources`, {
            params: {
                team: teamId || ''
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project websocket
 * @param {String} id The ID of the project.
 * @param {String} service The service to get websocket for.
 * @returns {Promise<Object>} The project websocket
 */
async function getWebSocket(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/websocket`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project sftp
 * @param {String} id The ID of the project.
 * @param {String} service The service to get sftp for.
 * @returns {Promise<Object>} The project sftp
 */
async function getSftp(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/sftp`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project logs
 * @param {String} id The ID of the project.
 * @param {String} service The service to get logs for.
 * @param {String} since The time in seconds since the logs should be returned.
 * @param {String} until The time in seconds until the logs should be returned.
 * @param {String} timestamps Whether or not to include timestamps in the logs.
 * @param {String} tail The number of lines to return from the end of the log.
 * @returns {Promise<Object>} The project logs
 */
async function getLogs(id, service, since, until, timestamps, tail) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/logs`, {
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