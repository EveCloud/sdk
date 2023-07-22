const { request, APIError } = require('../request')

async function list(workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects`, {
            params: {
                workspaceID: workspaceID,
                ...params
            }
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function get(id, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}`, {
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

async function create(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/`, data, {
            params: {
                workspaceID: id
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function update(id, data, workspaceID) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}`, data, {
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
    update
}