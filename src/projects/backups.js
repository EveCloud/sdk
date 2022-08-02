const { request, APIError } = require('../request')

/**
 * Get project backups
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Projects.Backups
 * @param {String} projectID Project ID
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Backup List object
 */
async function getBackups(projectID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/backups`, {
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Projects.BackupView
 * @param {String} projectID Project ID
 * @param {String} uuid Backup UUID
 * @returns {Promise<Object>} Backup object
 */
async function getBackup(projectID, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/backups/${uuid}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create backup
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Projects.BackupCreate
 * @param {String} projectID Project ID
 * @param {String} label Backup label
 * @returns {Promise<String>} Message
 */
async function createBackup(projectID, name) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/backups`, {
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Projects.BackupDownload
 * @param {String} projectID Project ID
 * @param {String} uuid Backup UUID
 * @returns {Promise<String>} Download URL
 */
async function downloadBackup(projectID, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/backups/${uuid}/download`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete backup
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Projects.BackupDelete
 * @param {String} projectID Project ID
 * @param {String} uuid Backup UUID
 * @returns {Promise<String>} Message
 */
async function deleteBackup(projectID, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${projectID}/backups/${uuid}`).then(response => {
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