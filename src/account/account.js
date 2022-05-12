const { request, APIError } = require('../request');

async function getAccountInfo() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateAccountInfo(data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/account`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountInfo,
    updateAccountInfo
}