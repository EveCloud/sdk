const { request, APIError } = require('../request')

/**
 * Get the current user's account logins
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Login List object
 */
async function getLogins(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/logins`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account login
 * @param {String} ID Login ID
 * @returns {Promise<Object>} Login object
 */
async function getLoginData(ID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/logins/` + ID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getLogins,
    getLoginData
}