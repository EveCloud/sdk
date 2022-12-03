const { request, APIError } = require('../request')

/**
 * Start Project 
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

module.exports = {
    start,
    shutdown,
    restart
}