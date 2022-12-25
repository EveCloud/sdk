const { request, APIError } = require('../request')


async function getDomains(id, service, environment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/domains`, {
            params: {
                environmentId: environment
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getDomain(id, service, domain, type, environment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}/domains/${domain}`, {
            params: {
                type: type,
                environmentId: environment
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function updateDomain(id, service, domain, type, environment, newDomain) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/services/${service}/domains/${domain}`, {
            type: type,
            domain: newDomain,
            environment: environment
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createDomain(id, service, type, environment, domain) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services/${service}/domains`, {
            type: type,
            domain: domain,
            environment: environment
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteDomain(id, service, domain, type, environment) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/services/${service}/domains/${domain}`, {
            params: {
                type: type,
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
    getDomains,
    getDomain,
    updateDomain,
    createDomain,
    deleteDomain
}