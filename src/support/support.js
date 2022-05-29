const { request, APIError } = require('../request');

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

async function getTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/support/tickets/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createTicket(summary, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets`, {
            summary: summary,
            message: message
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getTicketReplies(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/support/tickets/` + id + `/replies`, {
            params: params || {}
        }).then(response => {
                resolve(response.data.data)
            }).catch(error => {
                reject(APIError(error))
            })
    })
}

async function createTicketReply(id, message) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets/` + id + `/replies`, {
            message: message
        }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(APIError(error))
            })
    })
}

async function closeTicket(id) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/support/tickets/` + id + `/close`).then(response => {
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
    getTicketReplies,
    createTicketReply,
    closeTicket
}