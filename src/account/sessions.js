const { request, APIError } = require('../request')

async function getSessions(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/sessions`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteSession(ID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/account/sessions/` + ID).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getSessions,
    deleteSession
}