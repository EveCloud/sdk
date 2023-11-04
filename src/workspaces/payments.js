const { request, APIError } = require('../request')

/**
 * @name list
 * @description List workpaces payment methods
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/api/workspaces/payment-methods/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Payment Methods
 */
function list (workspaceID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${workspaceID}/payment-methods`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name get
 * @description Get workpace payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/api/workspaces/payment-methods/view
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Payment Method
 */
function get (id, paymentID) {
  return new Promise((resolve, reject) => {
    request.get(`/v1/workspaces/${id}/payment-methods/${paymentID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name makeDefault
 * @description Make a payment method default
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/api/workspaces/payment-methods/make-default
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
function makeDefault (id, paymentID) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${id}/payment-methods/${paymentID}/make-default`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name add
 * @description Add a payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/api/workspaces/payment-methods/add
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Stripe Checkout URL
 */
function add (id) {
  return new Promise((resolve, reject) => {
    request.post(`/v1/workspaces/${id}/payment-methods`).then(response => {
      resolve(response.data.url)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

/**
 * @name remove
 * @description Remove a payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/api/workspaces/payment-methods/delete
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
function remove (id, paymentID) {
  return new Promise((resolve, reject) => {
    request.delete(`/v1/workspaces/${id}/payment-methods/${paymentID}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(APIError(error))
    })
  })
}

module.exports = {
  list,
  get,
  makeDefault,
  add,
  remove
}
