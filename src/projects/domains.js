const { request, APIError } = require('../request')

async function list(projectID, workspaceID, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/domains`, {
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

async function get(projectID, workspaceID, domainID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/domains/${domainID}`, {
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

async function refresh(projectID, workspaceID, domainID) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${projectID}/domains/${domainID}/refresh`, {
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


async function create(projectID, workspaceID, domain, service) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${projectID}/domains`, {
            params: {
                workspaceID: workspaceID
            }
        }, {
            domain: domain,
            service: service
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function update(projectID, workspaceID, domainID, serviceID) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${projectID}/domains/${domainID}`, {
            params: {
                workspaceID: workspaceID
            }
        }, {
            service: serviceID
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


async function remove(projectID, workspaceID, domainID) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${projectID}/domains/${domainID}`, {
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
    refresh,
    create,
    update,
    remove,
}

