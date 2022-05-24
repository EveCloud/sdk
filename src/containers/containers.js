const { request, APIError } = require('../request');

async function getContainers(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getContainer(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getContainers,
    getContainer
}