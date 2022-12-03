const { request, APIError } = require('../request')

/**
 * Get account projects
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
 * @param {String} manifest Manifest Object
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

module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject
}