const { request, APIError } = require('../request');

async function getPlans(type, id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/plans`, {
            query: {
                ...(id ? { id } : {}),
                ...(type ? { type } : {})
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getPlans
}