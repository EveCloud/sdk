const { request, APIError } = require('../request')

/**
 * Get project backups
 * @param {String} id 
 * @param {Object} params 
 * @returns {Promise}
 */
async function getBackups(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/backups`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get backup
 * @param {String} id 
 * @param {String} uuid 
 * @returns {Promise}
 */
async function getBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/backups/${uuid}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create backup
 * @param {String} id 
 * @param {String} label
 * @returns {Promise}
 */
async function createBackup(id, name) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/backups`, {
            name: name
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Download backup
 * @param {String} id 
 * @param {String} uuid 
 * @returns {Promise}
 */
async function downloadBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/backups/${uuid}/download`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete backup
 * @param {String} id 
 * @param {String} uuid 
 * @returns {Promise}
 */
async function deleteBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/backups/${uuid}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getBackups,
    getBackup,
    createBackup,
    downloadBackup,
    deleteBackup
}