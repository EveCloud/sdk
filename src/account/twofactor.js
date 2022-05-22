const { request, APIError } = require('../request');

async function getTFAToken() {
    return new Promise(async (resolve, reject) => {
        await request.post(`/account/two-factor`).then(response => {
            resolve(response.data)
        }).catch(error => {
            APIError(error)
        })
    })
}

async function confirmTwoFactor(code) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/account/two-factor`, {
            tfa_code: code
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            APIError(error)
        })
    })
}

async function disableTwoFactor() {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/account/two-factor`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTFAToken,
    confirmTwoFactor,
    disableTwoFactor
}