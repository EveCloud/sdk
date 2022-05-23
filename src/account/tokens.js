const { request, APIError } = require('../request');

async function getAccountTokens() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account/tokens`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


async function createAccountToken(label) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/account/tokens`, {
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
        await request.put(`/account/tokens`, {
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
        await request.post(`/account/tokens`, {
            id: id
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountTokens,
    createAccountToken,
    updateAccountToken,
    deleteAccountToken
}