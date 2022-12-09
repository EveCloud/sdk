const { request, APIError } = require('../request')

/**
 * Get the current user's account events
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Event List object
 */
async function getEvents(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/events`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account event 
 * @param {String} id Event ID
 * @param {String} uuid Event UUID
 * @returns {Promise<Object>} Event object
 */
async function getEventData(id, uuid) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/events/${uuid}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getEvents,
    getEventData
}