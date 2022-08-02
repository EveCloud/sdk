const { request, APIError } = require('../request')

/**
 * Start Project 
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Reinstall
 * @param {String} projectID Project ID
 * @returns {Promise<String>} Message
 */
async function start(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/boot`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Shutdown Project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Shutdown
 * @param {String} projectID Project ID
 * @returns {Promise<String>} Message
 */
async function shutdown(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/shutdown`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Restart Project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Restart
 * @param {String} projectID Project ID
 * @returns {Promise<String>} Message
 */
async function restart(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/restart`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Reinstall Project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Reinstall
 * @param {String} projectID Project ID
 * @returns {Promise<String>} Message
 */
async function reinstall(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/reinstall`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    start,
    shutdown,
    restart,
    reinstall
}