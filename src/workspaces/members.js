const { request, APIError } = require('../request')

/**
 * Get the workspace members
 * @returns {Promise<Object>} Member List object
 */
async function list(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/members`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get member details
 * @param {String} memberID Member ID
 * @returns {Promise<Object>} Member object
 */
async function get(id, memberID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/members/${memberID}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Add a new member
 * @param {String} email Member Email
 * @param {String} role Member Role
 * @returns {Promise<String>} Message
 */
async function add(id, email, role) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/workspaces/${id}/members`, {
            email,
            role
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Remove a member
 * @param {String} memberID Member ID
 * @returns {Promise<String>} Message
 */
async function remove(id, memberID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/workspaces/${id}/members/${memberID}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    list,
    get,
    add,
    remove
}
