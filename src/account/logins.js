const { request, APIError } = require('../request');

async function getAccountLogins() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account/logins`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getLoginData(ID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/account/logins/` + ID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getAccountLogins,
    getLoginData
}