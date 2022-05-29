const { request, APIError } = require('../request');

async function getAccountInfo() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateAccountInfo(data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getAccountPreferences() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/preferences`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateAccountPreferences(data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account/preferences`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountInfo,
    updateAccountInfo,
    getAccountPreferences,
    updateAccountPreferences
}