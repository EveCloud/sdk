const { request, APIError } = require('../request');

async function getContainers(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getContainer(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function createContainer(label, tags, image, plan, region, git) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/containers/`, {
            label: label,
            image: image,
            plan: plan,
            region: region,
            tags: tags || [],
            git: git || null
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function deleteContainer(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/containers/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getImages(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/containers/images`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getContainers,
    getContainer,
    createContainer,
    deleteContainer,
    getImages
}