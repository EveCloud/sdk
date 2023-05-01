const { request, APIError } = require('../request')

/**
 * Get project builds
 * @param {String} workspaceID Workspace ID
 * @param {String} projectID Project ID
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Build List Object
 */
async function getBuilds(workspaceID, projectID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/builds`, {
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
 * Get project build
 * @param {String} id Project ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project object
 */
async function getBuild(id, projectID, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/builds/${id}`, {
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
 * Create build
 * @param {String} workspaceID Workspace ID
 * @param {String} projectID Project ID
 * @param {String} data Build Object
 * @returns {Promise<String>} Builder Object
 */
async function createBuild(workspaceID, projectID, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/builds`, data, {
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
    getBuilds,
    getBuild,
    createBuild
}