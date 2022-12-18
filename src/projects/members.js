const { request, APIError } = require('../request')

/**
 * Get project users
 * @param {String} id Project ID
 * @returns {Promise<Object>} Project User List Object
 */
async function getMembers(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/members`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project user
 * @param {String} id Project ID
 * @param {String} user User ID
 * @returns {Promise<Object>} Project User Object
 */
async function getMember(id, user) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/members/${user}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get scopes available for users
 * @param {String} id Project ID
 * @returns {Promise<Array>} Scopes
 */
async function getScopes(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/members/scopes`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create user
 * @param {String} id Project ID
 * @param {String} email User email
 * @param {Array} scopes User scopes
 * @returns {Promise<Object>} User Object
 */
async function createMember(id, email, scopes) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/` + id + '/members', {
            email: email,
            scopes: scopes
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update user
 * @param {String} id Project ID
 * @param {String} user User ID
 * @param {Array} scopes User scopes
 * @returns {Promise<Object>} User Object
 */
async function updateMember(id, user, scopes) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/members/${user}`, {
            scopes: scopes
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete user
 * @param {String} id Project ID
 * @param {String} user User ID
 * @returns {Promise<String>} Message
 */
async function deleteMember(id, user) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/members/${user}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getMembers,
    getMember,
    getScopes,
    createMember,
    updateMember,
    deleteMember
}