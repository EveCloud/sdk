/**
 * @name list
 * @description List workpaces payment methods
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/PaymentMethods.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Payment Methods
 */
export function list(id: string): Promise<any>;
/**
 * @name get
 * @description Get workpace payment method
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/PaymentMethods.Get
 * @param {String} id Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Payment Method
 */
export function get(id: string, paymentID: string): Promise<any>;
/**
 * @name makeDefault
 * @description Make a payment method default
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/PaymentMethods.MakeDefault
 * @param {String} id Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
export function makeDefault(id: string, paymentID: string): Promise<any>;
/**
 * @name add
 * @description Add a payment method
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/PaymentMethods.Add
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Stripe Checkout URL
 */
export function add(id: string): Promise<any>;
/**
 * @name remove
 * @description Remove a payment method
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/PaymentMethods.Remove
 * @param {String} id Workspace ID
 * @param {String} paymentID Payment Method ID
 * @returns {Promise<Object>} Success Message
 */
export function remove(id: string, paymentID: string): Promise<any>;
