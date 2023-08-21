/**
 * @name get
 * @description Get workspace subscription
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Subscription.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Subscription object
 */
export function get(id: string): Promise<any>;
/**
 * @name update
 * @description Update workspace subscription
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Subscription.Update
 * @param {String} id Workspace ID
 * @param {Boolean} confirm Confirm subscription
 * @returns {Promise<Object>} Success message
 */
export function update(id: string, confirm: boolean): Promise<any>;
