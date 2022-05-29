const { request, APIError } = require('../request');

async function getImages(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}images`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function changeImage(id, image) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/containers/${id}images`, {
            image: image
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getImages,
    changeImage
}