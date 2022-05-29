const { request, APIError } = require('../request');

async function getResources(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/${id}/resources`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getWebSocket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/${id}/websocket`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getResources,
    getWebSocket
}