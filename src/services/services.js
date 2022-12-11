const { request, APIError } = require('../request')

/**
 * Get project services
 * @param {Object} params Pagination params
 * @param {String} teamId Team ID
 * @returns {Promise<Object>} Project List Object
 */
async function getServices(id, teamId, params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services`, {
            params: {
                team: teamId || '',
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
 * @param {String} teamId Team ID
 * @returns {Promise<Object>} Project object
 */
async function getService(id, service, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/services/${service}`, {
            params: {
                team: teamId || ''
            }
        }).then(response => {
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
 * @param {String} teamId Team ID
 * @returns {Promise<String>} Message
 */
async function createService(id, data, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/services`, data, {
            params: {
                team: teamId || ''
            }
        }).then(response => {
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
 * @param {String} teamId Team ID
 * @returns {Promise<String>} Message
 */
async function deleteProject(id, service, teamId) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/projects/${id}/service/${service}`, {
            params: {
                team: teamId || ''
            }
        }).then(response => {
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
    deleteProject
}