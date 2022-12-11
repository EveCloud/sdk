const { request, APIError } = require('../request')

/**
 * Get account teams
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Team List Object
 */
async function getTeams(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/teams`, {
            params: params || {}
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account team
 * @param {String} id Project ID
 * @returns {Promise<Object>} Team object
 */
async function getTeam(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/teams/` + id).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create team
 * @param {String} data Team Object
 * @returns {Promise<String>} Message
 */
async function createTeam(data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/teams/`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTeams,
    getTeam,
    createTeam
}