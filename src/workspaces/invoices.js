const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces invoices
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Invocies.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoices
 */
async function list (id) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/invoices`).then(response => {
      resolve(response.data.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace invoice
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Invocies.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoice
 */
async function get (id, invoiceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/invoices/` + invoiceID).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  list,
  get
}
