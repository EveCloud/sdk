const { request, APIError } = require('../request')

/**
 * Get support tickets
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Ticket List object
 */
async function getTickets(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/support/tickets`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get support ticket
 * @param {String} id Ticket ID
 * @returns {Promise<Object>} Ticket object
 */
async function getTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/support/tickets/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create a support ticket
 * @param {Object} summary Ticket summary
 * @param {Object} message Ticket message
 * @returns {Promise<Object>} Ticket object
 */
async function createTicket(summary, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets`, {
            summary,
            message
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get replies of a support ticket
 * @param {String} id Ticket ID
 * @param {Object} params Pagination parameters
 * @returns {Promise<Object>} Reply List object
 */
async function getReplies(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/support/tickets/${id}/replies`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create a reply to a support ticket
 * @param {String} id Ticket ID
 * @param {Object} message Reply message
 * @returns {Promise<Object>} Reply object
 */
async function createReply(id, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets/${id}/replies`, {
            message
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Close a support ticket
 * @param {String} id Ticket ID
 * @returns {Promise<Object>} Ticket object
 */
async function closeTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets/${id}/close`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTickets,
    getTicket,
    createTicket,
    getReplies,
    createReply,
    closeTicket
}