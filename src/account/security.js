const { request, APIError } = require('../request')

/**
 * Get the user security events
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} The user security events
 */
async function getEvents(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/security/events`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getEvents
}