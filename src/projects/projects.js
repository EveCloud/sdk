const { request, APIError } = require('../request')

/**
 * Get account projects
 * @param {String} workspaceID Workspace ID
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Project List Object
 */
async function getProjects(workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects`, {
            params: {
                workspaceID: workspaceID,
                ...params
            }
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
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project object
 */
async function getProject(id, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}`, {
            params: {
                workspaceID: workspaceID
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create project
 * @param {String} id Workspace ID
 * @param {String} data Project Object
 * @returns {Promise<String>} Message
 */
async function createProject(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/`, data, {
            params: {
                workspaceID: id
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update project
 * @param {String} id Project ID
 * @param {String} data Project Object
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<String>} Message
 */
async function updateProject(id, data, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}`, data, {
            params: {
                workspaceID: workspaceID
            }
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
 * @returns {Promise<String>} Message
 */
async function deleteProject(id, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}`, {
            params: {
                workspaceID: workspaceID
            }
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
    updateProject,
    deleteProject
}