const { request, APIError } = require('../request')

/**
 * Get account projects
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Projects_Get
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Project List Object
 */
async function getProjects(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Projects_View
 * @param {String} id Project ID
 * @returns {Promise<Object>} Project object
 */
async function getProject(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Projects_Create
 * @param {String} manifest Manifest JSON
 * @returns {Promise<String>} Message
 */
async function createProject(manifest) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/`, manifest).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Projects_Delete
 * @param {String} id Project ID
 * @returns {Promise<String>} Message
 */
async function deleteProject(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update project
 * @link https://docs.evecloud.xyz/api/#tag/Project/operation/Projects.Projects_Update
 * @param {String} id Project ID
 * @param {Object} data Project data to update
 * @returns {Promise<String>} Message
 */
async function updateProject(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/` + id, {
            ...data
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get avaliable images for projects
 * @link https://docs.evecloud.xyz/api/#tag/Images/operation/Images
 * @param {String} params Pagination params
 * @returns {Promise<Object>} Image List Object
 */
async function getImages(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/images`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get details of an image
 * @link https://docs.evecloud.xyz/api/#tag/Images/operation/Image
 * @param {String} id Image ID
 * @returns {Promise<Object>} Image Object
 */
 async function getImage(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/images/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
    getImages,
    getImage
}