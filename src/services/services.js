const { request, APIError } = require('../request')

async function list(id, workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services`, {
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

async function get(id, service, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}`, {
            params: {
                workspaceID: workspaceID
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function redeploy(id, service, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/redeploy`, {
            params: {
                workspaceID: workspaceID
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function create(id, workspaceID, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services`, {
            params: {
                workspaceID: workspaceID
            }
        },  data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function update(id, data, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/services`, {
            params: {
                workspaceID: workspaceID
            }
        }, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function remove(id, service, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/service/${service}`, {
            params: {
                workspaceID: workspaceID
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    list,
    get,
    create,
    update,
    redeploy,
    remove
}