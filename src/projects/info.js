const { request, APIError } = require('../request')

/**
 * Get project resources
 * @link https://docs.evecloud.xyz/api/#tag/Projects/operation/Projects.Resources
 * @param {String} id The ID of the project. 
 * @returns {Promise<Object>} The project Resource Usage.
 */
async function getResources(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/resources`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get project websocket
 * @link https://docs.evecloud.xyz/api/#tag/Projects/operation/Projects.Websocket
 * @param {String} id The ID of the project.
 * @returns {Promise<Object>} The project websocket
 * @summary
 * Connect to the websocket address (in this example "wss://vma02.evecloud.xyz:8443/api/servers/1a7ce997-269b-452e-8b4e-cecc464142ca/ws")
 * Send the token to the websocket like this: {"event":"auth","args":["eyJ0eXAiOiJKV1reghrthrLCJhbGciOiJIUzI1NiIsImp0aSI6Ij..."]}
 * Tokens last about 10-15 minutes, and the websocket will notify you once you need to send a new token with {"event":"token expiring"} and {"event":"token expired"}
 */
async function getWebSocket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/websocket`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getResources,
    getWebSocket
}