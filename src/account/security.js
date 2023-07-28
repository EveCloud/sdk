const { request, APIError } = require('../request')

/**
 * @name getEvents
 * @description Get your authentication events
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Security.GetEvents
 * @param {String} code The code returned from GitHub
 * @param {String} installationId The installation ID returned from GitHub
 * @returns {Promise<Object>} Authentication events
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