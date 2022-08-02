const { request, APIError } = require('../request')

/**
 * Get the current user's account tokens  
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Tokens  
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Token List object
 */
async function getTokens(params) {
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Token
 * @param {String} id Token ID
 * @returns {Promise<Object>} Token object
 */
async function getToken(id) {
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Token_Create
 * @param {String} label Token label
 * @returns {Promise<Object>} Token object
 */
async function createToken(label) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/tokens`, {
            label: label
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update account token
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Token_Update
 * @param {String} id Token ID
 * @param {String} label New token label
 * @returns {Promise<String>} Message
 */
async function updateToken(id, label) {
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
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Token_Delete
 * @param {String} id Token ID
 * @returns {Promise<String>} Message
 */
async function deleteToken(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/tokens/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTokens,
    getToken,
    createToken,
    updateToken,
    deleteToken
}