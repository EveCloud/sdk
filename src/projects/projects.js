const { request, APIError } = require('../request')

/**
 * Get account projects
 * @param {Object} params Pagination params
 * @param {String} teamId Team ID
 * @returns {Promise<Object>} Project List Object
 */
async function getProjects(params, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects`, {
            params: params || {},
            team: teamId || ''
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
 * @param {String} teamId Team ID
 * @returns {Promise<Object>} Project object
 */
async function getProject(id, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/` + id, {
            team: teamId || ''
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create project
 * @param {String} data Project Object
 * @returns {Promise<String>} Message
 */
async function createProject(data, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/`, data, {
            team: teamId || ''
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete project
 * @param {String} id Project ID
 * @param {String} teamId Team ID
 * @returns {Promise<String>} Message
 */
async function deleteProject(id, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/` + id, {
            team: teamId || ''
        }).then(response => {
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