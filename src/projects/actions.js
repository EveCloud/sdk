const { request, APIError } = require('../request')

/**
 * Start Project
 * @param {String} id 
 * @returns {Promise}
 */
async function start(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/boot`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Shutdown Project
 * @param {String} id 
 * @returns {Promise}
 */
async function shutdown(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/shutdown`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Restart Project
 * @param {String} id 
 * @returns {Promise}
 */
async function restart(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/restart`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Reinstall Project
 * @param {String} id 
 * @returns {Promise}
 */
async function reinstall(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/reinstall`).then(response => {
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