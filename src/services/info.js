const { request, APIError } = require('../request')


async function getResources(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/resources`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getResources
}