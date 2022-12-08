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
 * Stop Project
 * @param {String} projectID Project ID
 * @returns {Promise<String>} Message
 */
async function stop(projectID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/~stop`).then(response => {
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

/**
 * Execute Command
 * @param {String} projectID Project ID
 * @param {String} command Command
 * @returns {Promise<String>} Message
 */
async function execute(projectID, command) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/execute`, {
            command
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    start,
    stop,
    restart,
    execute
}