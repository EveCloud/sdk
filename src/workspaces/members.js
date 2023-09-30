const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces members
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Members.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Members
 */
async function list (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/members`).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Members.Get
 * @param {String} id Workspace ID
 * @param {String} memberID Member ID
 * @returns {Promise<Object>} Member
 */
async function get (id, memberID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/members/${memberID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name add
 * @description Add a member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Members.Add
 * @param {String} id Workspace ID
 * @param {String} email Member Email
 * @param {String} role Member Role
 * @returns {Promise<Object>} Success Message
 */
async function add (id, email, role) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${id}/members`, {
      data: {
        email,
        role
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove a member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Members.Remove
 * @param {String} id Workspace ID
 * @param {String} memberID Member ID
 * @param {String} confirm Confirm
 * @returns {Promise<Object>} Success Message
 */
async function remove (id, memberID, confirm) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${id}/members/${memberID}`, {
      data: {
        confirm
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  list,
  get,
  add,
  remove
}
