const { request, APIError } = require('../request')

/**
 * Get the current user's account information
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_View
 * @returns {Promise<Object>} User object
 */
async function getInfo() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Update the current user's account information
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User object
 */
async function updateInfo(data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * get the current user's account preferences
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Preferences_Get
 * @returns {Promise<Object>} User preferences object
 */
async function getPreferences() {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/account/preferences`).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * update the current user's account preferences
 * @link https://docs.evecloud.xyz/api/#tag/Account/operation/Account.Account_Preferences_Update
 * @param {Object} data Information to update
 * @returns {Promise<String>} Message.
 */
async function updatePreferences(data) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/account/preferences`, data).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getInfo,
    updateInfo,
    getPreferences,
    updatePreferences
}