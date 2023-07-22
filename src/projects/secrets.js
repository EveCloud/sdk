const { request, APIError } = require('../request')

async function list(projectID, workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/secrets`, {
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

async function get(projectID, workspaceID, secretID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/secrets/${secretID}`, {
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

async function create(projectID, workspaceID, key, value) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/secrets`, {
            params: {
                workspaceID: workspaceID
            }
        }, {
            key: key,
            value: value
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function update(projectID, workspaceID, secretID, value) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${projectID}/secrets/${secretID}`, {
            params: {
                workspaceID: workspaceID
            }
        }, {
            value: value
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


async function remove(projectID, workspaceID, secretID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${projectID}/secrets/${secretID}`, {
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
    remove
}

