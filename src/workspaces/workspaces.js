const { request, APIError } = require('../request')

/**
 * List the workspaces
 * @returns {Promise<Object>} Workspace object
 */
async function list() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get the workspace
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace object
 */
async function get(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}`).then(response => {
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
async function create(data) {
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
async function update(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/workspaces/${id}`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    list,
    get,
    create,
    update
}