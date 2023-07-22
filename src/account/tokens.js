const { request, APIError } = require('../request')

/**
 * Get the current user's account tokens  
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Token List object
 */
async function list(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/tokens`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account token
 * @param {String} id Token ID
 * @returns {Promise<Object>} Token object
 */
async function get(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/tokens/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


/**
 * Create account token
 * @param {String} label Token label
 * @returns {Promise<Object>} Token object
 */
async function create(label, expiration) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/tokens`, {
            label: label,
            expiration: expiration
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update account token
 * @param {String} id Token ID
 * @param {String} label New token label
 * @returns {Promise<String>} Message
 */
async function update(id, label) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account/tokens`, {
            id: id,
            label: label
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete account token
 * @param {String} id Token ID
 * @returns {Promise<String>} Message
 */
async function remove(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/tokens/` + id).then(response => {
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
    update,
    remove
}