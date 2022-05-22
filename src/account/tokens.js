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


    async function createAccountToken(data) {
        return new Promise(async (resolve, reject) => {
            await request.post(`/account/tokens`, data).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(APIError(error))
            })
        })
}

module.exports = {
    getAccountTokens,
    createAccountToken
}