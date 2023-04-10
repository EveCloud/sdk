const { request, APIError } = require('../request')

/**
 * Get usage
 * @returns {Promise<Object>} Usage object
 */
async function get(id, month, year) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/workspaces/${id}/usage`, {
            params: {
                month,
                year
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    get
}