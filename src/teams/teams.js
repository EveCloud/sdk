const { request, APIError } = require('../request')

/**
 * Get account teams
 * @param {Object} params Pagination params
 * @returns {Promise<Object>} Team List Object
 */
async function getTeams(params) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/teams`, {
            params: {
                ...params,
                teamId: null
            }
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get account team
 * @returns {Promise<Object>} Team object
 */
async function getTeam() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/teams/`).then(response => {
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

/**
 * Update team
 * @param {String} id Team ID
 * @param {String} data Team Object
 * @returns {Promise<String>} Message
 */
async function updateTeam(id, data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/teams/${id}`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete team
 * @param {String} id Team ID
 * @returns {Promise<String>} Message
 */
async function deleteTeam(id) {
    return new Promise(async (resolve, reject) => {
        await request.delete(`/v1/teams/${id}`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
}