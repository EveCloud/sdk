const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces members
 * @namespace Members
 * @link https://docs.evecloud.xyz/api/workspaces/members/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Members
 */
function list (workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/members`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace member
 * @namespace Members
 * @link https://docs.evecloud.xyz/api/workspaces/members/view
 * @param {String} workspaceID Workspace ID
 * @param {String} memberID Member ID
 * @returns {Promise<Object>} Member
 */
function get (workspaceID, memberID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/members/${memberID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name add
 * @description Add a member
 * @namespace Members
 * @link https://docs.evecloud.xyz/api/workspaces/members/add
 * @param {String} workspaceID Workspace ID
 * @param {String} email Member Email
 * @param {String} role Member Role
 * @returns {Promise<Object>} Success Message
 */
function add (workspaceID, email, role) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${workspaceID}/members`, {
      email,
      role
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
 * @namespace Members
 * @link https://docs.evecloud.xyz/api/workspaces/members/remove
 * @param {String} workspaceID Workspace ID
 * @param {String} memberID Member ID
 * @param {String} confirm Confirm
 * @returns {Promise<Object>} Success Message
 */
function remove (workspaceID, memberID, confirm) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${workspaceID}/members/${memberID}`, {
      confirm
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
