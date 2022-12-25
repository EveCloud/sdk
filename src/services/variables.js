const { request, APIError } = require('../request')

async function getVariables(id, service, environment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/variables`, {
            params: {
                environmentId: environment
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getVariable(id, service, environment, variable) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/variables/${variable}`, {
            params: {
                environmentId: environment
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createVariable(id, service, environment, name, value) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/variables`, {
            key: name,
            value: value,
            environmentId: environment
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateVariable(id, service, environment, variable, name, value) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/services/${service}/variables/${variable}`, {
            value: value,
            param: {
                environmentId: environment
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteVariable(id, service, environment, variable) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/services/${service}/variables/${variable}`, {
            params: {
                environmentId: environment
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getVariables,
    getVariable,
    createVariable,
    updateVariable,
    deleteVariable
}
