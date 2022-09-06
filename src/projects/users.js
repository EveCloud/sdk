const { request, APIError } = require('../request')

/**
 * Get project users
 * @link Not available
 * @param {String} id Project ID
 * @returns {Promise<Object>} Project User List Object
 */
async function getUsers(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/users`).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project user
 * @link Not available
 * @param {String} id Project ID
 * @param {String} user User ID
 * @returns {Promise<Object>} Project User Object
 */
async function getUser(id, user) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/users/${user}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get scopes available for users
 * @link Not available
 * @param {String} id Project ID
 * @returns {Promise<Array>} Scopes
 */
async function getScopes(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/users/scopes`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create user
 * @link Not available
 * @param {String} id Project ID
 * @param {String} email User email
 * @param {Array} scopes User scopes
 * @returns {Promise<Object>} User Object
 */
async function createUser(id, email, scopes) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/` + id, {
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
 * @link Not available
 * @param {String} id Project ID
 * @param {String} user User ID
 * @param {Array} scopes User scopes
 * @returns {Promise<Object>} User Object
 */
async function updateUser(id, user, scopes) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/users/${user}`, {
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
 * @link Not available
 * @param {String} id Project ID
 * @param {String} user User ID
 * @returns {Promise<String>} Message
 */
async function deleteUser(id, user) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/users/${user}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getUsers,
    getUser,
    getScopes,
    createUser,
    updateUser,
    deleteUser
}