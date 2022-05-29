const { request, APIError } = require('../request');

async function getAccountEvents(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/events`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getEventData(ID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/events/` + ID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function markEventSeen(ID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/events/` + ID + '/seen').then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function markEventRead(ID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/events/` + ID + '/read').then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountEvents,
    getEventData,
    markEventSeen,
    markEventRead
}