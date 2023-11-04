/**
 * @name list
 * @description List workpaces invoices
 * @namespace Invoices
 * @link https://docs.evecloud.xyz/api/workspaces/invoices/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Invoices
 */
export function list(id: any): Promise<any>;
/**
 * @name get
 * @description Get workpace invoice
 * @namespace Invoices
 * @link https://docs.evecloud.xyz/api/workspaces/invoices/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Invoice
 */
export function get(workspaceID: string, invoiceID: any): Promise<any>;
//# sourceMappingURL=invoices.d.ts.map