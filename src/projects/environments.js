const { request, APIError } = require('../request')

async function getEnvironments(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/environments`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getEnvironment(id, environment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/environments/${environment}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createEnvironment(id, name) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/environments`, {
            name: name
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteEnvironment(id, environment) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/environments/${environment}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getEnvironments,
    getEnvironment,
    createEnvironment,
    deleteEnvironment
}