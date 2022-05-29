const { request, APIError } = require('../request');

async function getAccountTokens(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/tokens`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getAccountToken(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/tokens/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


async function createAccountToken(label) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/tokens`, {
            label: label
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateAccountToken(id, label) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account/tokens`, {
            id: id,
            label: label
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteAccountToken(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/tokens/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountTokens,
    getAccountToken,
    createAccountToken,
    updateAccountToken,
    deleteAccountToken
}