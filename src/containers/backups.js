const { request, APIError } = require('../request');

async function getBackups(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/${id}/backups`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/${id}/backups/${uuid}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createBackup(id, name) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/containers/${id}/backups`, {
            name: name
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


async function downloadBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/containers/${id}/backups/${uuid}/download`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteBackup(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/containers/${id}/backups/${uuid}`).then(response => {
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