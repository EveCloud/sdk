const { request, APIError } = require('../request')

async function getDeployments(project, service, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${project}/services/${service}/deployments`, {
            params: {
                ...params
            },
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getDeployment(project, service, deployment, environment) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${project}/services/${service}/deployments/${deployment}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createDeployment(project, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${project}/services/${service}/deploy`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}


module.exports = {
    getDeployments,
    getDeployment,
    createDeployment
}