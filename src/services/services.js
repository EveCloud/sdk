const { request, APIError } = require('../request')

/**
 * Get project services
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Project List Object
 */
async function getServices(id, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services`, {
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

/**
 * Get project service
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<Object>} Project object
 */
async function getService(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create service
 * @param {String} id Project ID
 * @param {String} data Project Object
 * @returns {Promise<String>} Message
 */
async function createService(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update service
 * @param {String} id Project ID
 * @param {String} data Project Object
 * @returns {Promise<String>} Message
 */
async function updateService(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/services`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete service
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @returns {Promise<String>} Message
 */
async function deleteProject(id, service) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/service/${service}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteProject
}