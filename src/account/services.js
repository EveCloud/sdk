const { request, APIError } = require('../request');

async function getAccountServices() {
        return new Promise(async (resolve, reject) => {
            await request.get(`/account/services`).then(response => {
                resolve(response.data)
            }).catch(error => {
                APIError(error)
            })
        })
}

module.exports = {
    getAccountServices
}