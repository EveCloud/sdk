const { request, APIError } = require('../request')

async function getBuildLogs(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${project}/services/${service}/deployments/${deployment}/logs/build`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getDeployLogs(project, service, deployment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${project}/services/${service}/deployments/${deployment}/logs/deploy`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getBuildLogs,
    getDeployLogs
}