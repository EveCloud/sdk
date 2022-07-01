const { request, APIError } = require('../request');

async function getTags(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/${id}/tags`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateTags(id, tags) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/containers/${id}/tags`, {
            tags: tags
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTags,
    updateTags
}