const { request, APIError } = require('../request')

/**
 * Get avaliable images version for project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.ImagesList
 * @param {String} id The ID of the project.
 * @returns {Promise<String>} Message.
 */
async function getImages(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/images`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update project image
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.ImagesUpdate
 * @param {String} id The ID of the project.
 * @param {Number} image The ID of the image.
 * @returns {Promise<String>} Message.
 */
async function changeImage(id, image) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/images`, {
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