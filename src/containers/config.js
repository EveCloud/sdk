const { request, APIError } = require('../request');

async function getConfig(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/config`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateConfig(id, key, value) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/containers/${id}/config`, {
            key: key,
            value: value
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getConfig,
    updateConfig
}