/**
 * @name get
 * @description Get workspace subscription
 * @namespace Subscription
 * @link https://docs.evecloud.xyz/reference/api/workspaces/subscription/view
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Subscription object
 */
export function get(workspaceID: string): Promise<any>;
/**
 * @name update
 * @description Update workspace subscription
 * @namespace Subscription
 * @link https://docs.evecloud.xyz/reference/api/workspaces/subscription/update
 * @param {String} workspaceID Workspace ID
 * @param {Boolean} confirm Confirm subscription
 * @returns {Promise<Object>} Success message
 */
export function update(workspaceID: string, confirm: boolean): Promise<any>;
//# sourceMappingURL=subscription.d.ts.map