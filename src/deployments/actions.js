const { request, APIError } = require('../request')

async function restart(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${project}/services/${service}/deployments/${deployment}/restart`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function rollback(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${project}/services/${service}/deployments/${deployment}/rollback`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function redeploy(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${project}/services/${service}/deployments/${deployment}/redeploy`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function remove(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${project}/services/${service}/deployments/${deployment}/remove`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    restart,
    rollback,
    redeploy,
    remove
}