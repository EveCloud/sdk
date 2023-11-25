/**
 * @name list
 * @description List workpaces payment methods
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/reference/api/workspaces/payment-methods/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Payment Methods
 */
export function list(workspaceID: string): Promise<any>;
/**
 * @name get
 * @description Get workpace payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/reference/api/workspaces/payment-methods/view
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Payment Method
 */
export function get(id: any, paymentID: string): Promise<any>;
/**
 * @name makeDefault
 * @description Make a payment method default
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/reference/api/workspaces/payment-methods/make-default
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
export function makeDefault(id: any, paymentID: string): Promise<any>;
/**
 * @name add
 * @description Add a payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/reference/api/workspaces/payment-methods/add
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Stripe Checkout URL
 */
export function add(id: any): Promise<any>;
/**
 * @name remove
 * @description Remove a payment method
 * @namespace PaymentMethods
 * @link https://docs.evecloud.xyz/reference/api/workspaces/payment-methods/delete
 * @param {String} workspaceID Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
export function remove(id: any, paymentID: string): Promise<any>;
//# sourceMappingURL=payments.d.ts.map