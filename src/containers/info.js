const { request, APIError } = require('../request');

async function getContainerResources(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/resources`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getContainerResources
}