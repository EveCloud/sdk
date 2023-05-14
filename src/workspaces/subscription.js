const { request, APIError } = require('../request')

/**
 * Get the workspace subscription
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Subscription object
 */
async function getSubscription(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/subscription`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update the workspace subscription
 * @param {String} id Workspace ID
 * @param {Boolean} confirm Confirm the change
 * @returns {Promise<Object>} Subscription object
 */
async function updateSubscription(id, confirm) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/workspaces/${id}/subscription`, {
            confirm
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getSubscription,
    updateSubscription
}