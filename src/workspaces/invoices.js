const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces invoices
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Invoices.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoices
 */
function list (id) {
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
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Invoices.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoice
 */
function get (id, invoiceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/invoices/${invoiceID}`).then(response => {
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
