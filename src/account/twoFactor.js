const { request, APIError } = require('../request')


async function getTFA() {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/two-factor`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function verifyTFA(code) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account/two-factor`, {
            code: code
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function disableTFA(code) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/account/two-factor/disable`, {
            code: code
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTFA,
    verifyTFA,
    disableTFA
}