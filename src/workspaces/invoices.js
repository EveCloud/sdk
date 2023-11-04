const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces invoices
 * @namespace Invoices
 * @link https://docs.evecloud.xyz/api/workspaces/invoices/list
 * @param {String} workspaceID Workspace ID
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
 * @namespace Invoices
 * @link https://docs.evecloud.xyz/api/workspaces/invoices/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Invoice
 */
function get (workspaceID, invoiceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/invoices/${invoiceID}`).then(response => {
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
