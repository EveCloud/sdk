const { request, APIError } = require('../request');

async function getRegions() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/regions`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getRegions
}