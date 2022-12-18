const { request, APIError } = require('../request')

/**
 * Start Project 
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<String>} Message
 */
async function start(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/boot`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Stop Project
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<String>} Message
 */
async function stop(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/stop`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Kill Project
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<String>} Message
 */
async function kill(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/kill`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Restart Project
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<String>} Message
 */
async function restart(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/restart`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Execute Command
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} command Command
 * @returns {Promise<String>} Message
 */
async function execute(id, service, command) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/exec`, {
            cmd: command
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
    execute,
    kill
}