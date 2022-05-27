const { request, APIError } = require('../request');

async function start(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/boot`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function shutdown(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/shutdown`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function restart(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/restart`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function reinstall(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/reinstall`).then(response => {
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