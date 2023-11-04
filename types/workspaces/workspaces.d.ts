/**
 * @name list
 * @description List workpaces
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/list
 * @returns {Promise<Object>} Workspaces
 */
export function list(): Promise<any>;
/**
 * @name get
 * @description Get workpace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/view
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace
 */
export function get(id: string): Promise<any>;
/**
 * @name create
 * @description Create a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/create
 * @param {String} name Workspace name
 * @returns {Promise<Object>} Success Message
 */
export function create(name: string): Promise<any>;
/**
 * @name update
 * @description Update a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/update
 * @param {String} id Workspace ID
 * @param {String} data Workspace data
 * @returns {Promise<String>} Success Message
 */
export function update(id: string, data: string): Promise<string>;
/**
 * @name remove
 * @description Remove a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/remove
 * @param {String} id Workspace ID
 * @param {Boolean} confirm Confirm removal
 * @returns {Promise<String>} Success Message
 */
export function remove(id: string, confirm: boolean): Promise<string>;
/**
 * @name leave
 * @description Leave a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/api/workspaces/leave
 * @param {String} id Workspace ID
 * @param {Boolean} confirm Confirm removal
 * @returns {Promise<String>} Success Message
 */
export function leave(id: string, confirm: boolean): Promise<string>;
//# sourceMappingURL=workspaces.d.ts.map