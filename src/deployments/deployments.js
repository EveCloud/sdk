const { request, APIError } = require('../request')

async function list(id, service, workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/deployments`, {
            params: {
                workspaceID: workspaceID,
                ...params
            },
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    list
}