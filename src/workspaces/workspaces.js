const { request, APIError } = require('../request')

/**
 * Get the workspace
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace object
 */
async function getWorkspace(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * List the workspaces
 * @returns {Promise<Object>} Workspace object
 */
async function listWorkspaces() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create a workspace
 * @private For dashboard use only
 * @param {Object} data Workspace data
 * @returns {Promise<Object>} Workspace object
 */
async function createWorkspace(data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/workspaces`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update a workspace
 * @param {String} id Workspace ID
 * @param {Object} data Workspace data
 * @returns {Promise<Object>} Workspace object
 */
async function updateWorkspace(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/workspaces/${id}`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete a workspace
 * @param {String} id Workspace ID
 * @returns {Promise<String>} Message
 */
async function deleteWorkspace(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/workspaces/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getWorkspace,
    listWorkspaces,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace
}