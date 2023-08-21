/**
 * @name list
 * @description List workpaces invoices
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Invoices.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoices
 */
export function list(id: string): Promise<any>;
/**
 * @name get
 * @description Get workpace invoice
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Invoices.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Invoice
 */
export function get(id: string, invoiceID: any): Promise<any>;
