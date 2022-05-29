const { request, APIError } = require('../request');

async function getAccountServices(params) {
        return new Promise(async (resolve, reject) => {
            await request.get(`/v1/account/services`, {
                params: params || {}
            }).then(response => {
                resolve(response.data.data)
            }).catch(error => {
                reject(APIError(error))
            })
        })
}

module.exports = {
    getAccountServices
}