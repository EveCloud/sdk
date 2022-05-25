const { request, APIError } = require('../request');

async function getSupportTickets(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/support/tickets`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getSupportTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/support/tickets/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createSupportTicket(summary, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/support/tickets`, {
            summary: summary,
            message: message
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getSupportTicketReplies(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/support/tickets/` + id + `/replies`, {
            params: params || {}
        }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(APIError(error))
            })
    })
}

async function createSupportTicketReply(id, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/support/tickets/` + id + `/replies`, {
            message: message
        }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(APIError(error))
            })
    })
}

async function closeSupportTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/support/tickets/` + id + `/close`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getSupportTickets,
    getSupportTicket,
    createSupportTicket,
    getSupportTicketReplies,
    createSupportTicketReply,
    closeSupportTicket
}